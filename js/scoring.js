const SCORE_CATEGORIES = {
    problem: {
        label: "Problem clarity",
        maxPoints: 15
    },
    context: {
        label: "User/system context",
        maxPoints: 15
    },
    evidence: {
        label: "Symptoms / evidence",
        maxPoints: 15
    },
    scopeImpact: {
        label: "Scope / impact",
        maxPoints: 15
    },
    actions: {
        label: "Actions tried",
        maxPoints: 15
    },
    results: {
        label: "Results / current status",
        maxPoints: 15
    },
    handoff: {
        label: "Handoff / next step",
        maxPoints: 10
    }
};


function calculateTicketScore(scenario, selectedNoteIds) {
    const categoryScores = {};

    // Start every category at zero.
    Object.keys(SCORE_CATEGORIES).forEach(function (categoryKey) {
        categoryScores[categoryKey] = 0;
    });

    // Find the selected notes.
    const selectedNotes = scenario.notes.filter(function (note) {
        return selectedNoteIds.includes(note.id);
    });

    // For each category, keep only the highest-value selected note.
    selectedNotes.forEach(function (note) {
        if (note.category === null) {
            return;
        }

        const currentScore = categoryScores[note.category];

        if (note.points > currentScore) {
            categoryScores[note.category] = note.points;
        }
    });

    // Add all category scores together.
    const totalScore = Object.values(categoryScores).reduce(
        function (total, score) {
            return total + score;
        },
        0
    );

    const breakdown = Object.keys(SCORE_CATEGORIES).map(
        function (categoryKey) {
            const category = SCORE_CATEGORIES[categoryKey];
            const earnedPoints = categoryScores[categoryKey];

            let status = "Missing";

            if (earnedPoints === category.maxPoints) {
                status = "Full";
            } else if (earnedPoints > 0) {
                status = "Partial";
            }

            return {
                key: categoryKey,
                label: category.label,
                earnedPoints: earnedPoints,
                maxPoints: category.maxPoints,
                status: status
            };
        }
    );

    return {
        totalScore: totalScore,
        breakdown: breakdown,
        band: getScoreBand(totalScore)
    };
}


function getScoreBand(score) {
    if (score >= 85) {
        return {
            verdict: "TicketReady",
            message:
                "Strong practice handoff. The next technician has most of what they need."
        };
    }

    if (score >= 70) {
        return {
            verdict: "Nearly ready",
            message:
                "A workable handoff, but one or two gaps weaken it."
        };
    }

    if (score >= 50) {
        return {
            verdict: "Incomplete",
            message:
                "You captured useful information, but important gaps remain."
        };
    }

    return {
        verdict: "Needs more context",
        message:
            "This handoff would probably trigger several follow-up questions."
    };
}