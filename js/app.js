const MAX_SELECTIONS = 7;

const landingView = document.getElementById("landing-view");
const challengeView = document.getElementById("challenge-view");
const resultsView = document.getElementById("results-view");
const browserView = document.getElementById("browser-view");

const startButton = document.getElementById("start-ticket");
const browseButton = document.getElementById("browse-challenges");
const backToHomeButton = document.getElementById("back-to-home");
const backToChallengesButton = document.getElementById("back-to-challenges");
const challengeList = document.getElementById("challenge-list");

const challengeProgress = document.getElementById("challenge-progress");
const challengeTitle = document.getElementById("challenge-title");
const challengeDifficulty = document.getElementById("challenge-difficulty");
const challengeTicket = document.getElementById("challenge-ticket");
const challengeBackground = document.getElementById("challenge-background");

const notesContainer = document.getElementById("notes-container");

const selectionCount = document.getElementById("selection-count");
const selectionHelp = document.getElementById("selection-help");

const resetButton = document.getElementById("reset-selection");
const scoreButton = document.getElementById("score-ticket");

const resultScore = document.getElementById("result-score");
const resultVerdict = document.getElementById("result-verdict");
const resultMessage = document.getElementById("result-message");
const completionState = document.getElementById("completion-state");
const browseAfterCompletionButton = document.getElementById("browse-after-completion");

const breakdownList = document.getElementById("breakdown-list");
const biggestGapText = document.getElementById("biggest-gap-text");
const modelHandoffText = document.getElementById("model-handoff-text");

const nextButton = document.getElementById("next-ticket");
const retryButton = document.getElementById("retry-ticket");

let currentScenarioIndex = 0;
let selectedNoteIds = new Set();


function showChallenge(index) {
    currentScenarioIndex = index;

    const scenario = scenarios[currentScenarioIndex];

    selectedNoteIds.clear();

    landingView.hidden = true;
    browserView.hidden = true;
    resultsView.hidden = true;
    completionState.hidden = true;
    challengeView.hidden = false;

    challengeProgress.textContent =
        `Ticket ${currentScenarioIndex + 1} of ${scenarios.length}`;

    challengeTitle.textContent = scenario.title;

    challengeDifficulty.textContent =
        `${scenario.difficulty} · ${scenario.estimatedTime}`;

    challengeTicket.textContent = `“${scenario.rawTicket}”`;
    challengeBackground.textContent = scenario.background;

    renderNotes(scenario);
    updateSelectionStatus();

    window.scrollTo(0, 0);
}


function renderNotes(scenario) {
    notesContainer.innerHTML = "";

    scenario.notes.forEach(function (note) {
        const button = document.createElement("button");

        button.type = "button";
        button.className = "note-card";
        button.dataset.noteId = note.id;
        button.setAttribute("aria-pressed", "false");

        button.textContent = note.text;

        button.addEventListener("click", function () {
            toggleNote(note, button);
        });

        notesContainer.appendChild(button);
    });
}


function toggleNote(note, button) {
    const isSelected = selectedNoteIds.has(note.id);

    if (isSelected) {
        selectedNoteIds.delete(note.id);

        button.classList.remove("selected");
        button.setAttribute("aria-pressed", "false");
        button.textContent = note.text;
    } else {
        if (selectedNoteIds.size >= MAX_SELECTIONS) {
            return;
        }

        selectedNoteIds.add(note.id);

        button.classList.add("selected");
        button.setAttribute("aria-pressed", "true");
        button.textContent = `✓ Selected — ${note.text}`;
    }

    updateSelectionStatus();
}


function updateSelectionStatus() {
    const selected = selectedNoteIds.size;
    const remaining = MAX_SELECTIONS - selected;

    selectionCount.textContent =
        `${selected} / ${MAX_SELECTIONS} selected`;

    if (remaining > 0) {
        selectionHelp.textContent =
            `Select ${remaining} more ${remaining === 1 ? "note" : "notes"} to score`;

        scoreButton.disabled = true;
    } else {
        selectionHelp.textContent = "Ready to score";
        scoreButton.disabled = false;
    }
}


function resetSelection() {
    selectedNoteIds.clear();

    const scenario = scenarios[currentScenarioIndex];

    document.querySelectorAll(".note-card").forEach(function (button) {
        const noteId = button.dataset.noteId;

        const note = scenario.notes.find(function (item) {
            return item.id === noteId;
        });

        button.classList.remove("selected");
        button.setAttribute("aria-pressed", "false");
        button.textContent = note.text;
    });

    updateSelectionStatus();
}


function scoreCurrentTicket() {
    const scenario = scenarios[currentScenarioIndex];

    const result = calculateTicketScore(
        scenario,
        Array.from(selectedNoteIds)
    );

    challengeView.hidden = true;
    resultsView.hidden = false;

    resultScore.textContent = result.totalScore;
    resultVerdict.textContent = result.band.verdict;
    resultMessage.textContent = result.band.message;

    renderBreakdown(result.breakdown);
    renderBiggestGap(result.breakdown);

    modelHandoffText.textContent = scenario.modelHandoff;

    // Ticket 6 currently has no next ticket.
    if (currentScenarioIndex === scenarios.length - 1) {
    nextButton.hidden = true;
    completionState.hidden = false;
} else {
    nextButton.hidden = false;
    completionState.hidden = true;
}

    window.scrollTo(0, 0);
}


function renderBreakdown(breakdown) {
    breakdownList.innerHTML = "";

    breakdown.forEach(function (item) {
        const row = document.createElement("div");

        row.className =
            "breakdown-row " + item.status.toLowerCase();

        let symbol = "✕";

        if (item.status === "Full") {
            symbol = "✓";
        } else if (item.status === "Partial") {
            symbol = "!";
        }

        row.innerHTML = `
            <span class="breakdown-name">
                <span class="status-symbol">${symbol}</span>
                ${item.label}
            </span>

            <span class="breakdown-status">
                ${item.status}
            </span>
        `;

        breakdownList.appendChild(row);
    });
}


function renderBiggestGap(breakdown) {
    let weakest = breakdown.find(function (item) {
        return item.status === "Missing";
    });

    if (!weakest) {
        weakest = breakdown.find(function (item) {
            return item.status === "Partial";
        });
    }

    if (!weakest) {
        biggestGapText.textContent =
            "No major gaps. You captured strong information across all seven areas.";

        return;
    }

    biggestGapText.textContent =
        getGapMessage(weakest.key);
}


function getGapMessage(categoryKey) {
    const messages = {
        problem:
            "The problem is still too vague. The next technician needs a clearer description of what is actually failing.",

        context:
            "Useful user, device, application, or environment context is missing.",

        evidence:
            "The handoff needs stronger observable symptoms, errors, timing, or other evidence.",

        scopeImpact:
            "The handoff does not clearly show who is affected or what practical impact the issue is causing.",

        actions:
            "The next technician cannot clearly see what troubleshooting action has already been attempted.",

        results:
            "You recorded activity, but not clearly what happened afterward or the current status.",

        handoff:
            "The handoff does not clearly explain why further review is needed or what the next technician should know."
    };

    return messages[categoryKey];
}


function retryTicket() {
    showChallenge(currentScenarioIndex);
}


function nextTicket() {
    if (currentScenarioIndex >= scenarios.length - 1) {
        return;
    }

    showChallenge(currentScenarioIndex + 1);
}


startButton.addEventListener("click", function () {
    showChallenge(0);
});

function showChallengeBrowser() {
    landingView.hidden = true;
    challengeView.hidden = true;
    resultsView.hidden = true;
    browserView.hidden = false;

    renderChallengeList();

    window.scrollTo(0, 0);
}


function renderChallengeList() {
    challengeList.innerHTML = "";

    scenarios.forEach(function (scenario, index) {
        const button = document.createElement("button");

        button.type = "button";
        button.className = "challenge-list-item";

        button.innerHTML = `
            <span class="challenge-list-number">
                Ticket ${index + 1}
            </span>

            <span class="challenge-list-title">
                ${scenario.title}
            </span>

            <span class="challenge-list-meta">
                ${scenario.difficulty} · ${scenario.estimatedTime}
            </span>
        `;

        button.addEventListener("click", function () {
            showChallenge(index);
        });

        challengeList.appendChild(button);
    });
}


function backToHome() {
    browserView.hidden = true;
    challengeView.hidden = true;
    resultsView.hidden = true;
    landingView.hidden = false;

    window.scrollTo(0, 0);
}

browseButton.addEventListener("click", showChallengeBrowser);
backToHomeButton.addEventListener("click", backToHome);
backToChallengesButton.addEventListener("click", showChallengeBrowser);
browseAfterCompletionButton.addEventListener("click", showChallengeBrowser);

resetButton.addEventListener("click", resetSelection);
scoreButton.addEventListener("click", scoreCurrentTicket);
retryButton.addEventListener("click", retryTicket);
nextButton.addEventListener("click", nextTicket);