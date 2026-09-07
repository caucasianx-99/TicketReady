const scenarios = [
    {
        id: "wifi-timeout",
        title: "Wi-Fi Timeout",
        difficulty: "Easy",
        estimatedTime: "2 min",

        rawTicket: "Internet isn't working.",

        background:
            "Avery from Sales has contacted the fictional service desk shortly before a customer presentation.",

        notes: [
            {
                id: "wifi-problem-strong",
                text: "Windows laptop cannot load websites over office Wi-Fi.",
                category: "problem",
                quality: "strong",
                points: 15
            },
            {
                id: "wifi-context-strong",
                text: "Avery, Sales, Windows 11 company laptop connected to office Wi-Fi.",
                category: "context",
                quality: "strong",
                points: 15
            },
            {
                id: "wifi-evidence-strong",
                text: "Since 09:10, both Chrome and Edge time out even though Wi-Fi still shows connected.",
                category: "evidence",
                quality: "strong",
                points: 15
            },
            {
                id: "wifi-scope-strong",
                text: "Only Avery's laptop appears affected; Avery's phone works on the same Wi-Fi; customer demo begins in 30 minutes.",
                category: "scopeImpact",
                quality: "strong",
                points: 15
            },
            {
                id: "wifi-actions-strong",
                text: "Avery disconnected and reconnected to the office Wi-Fi.",
                category: "actions",
                quality: "strong",
                points: 15
            },
            {
                id: "wifi-results-strong",
                text: "Reconnecting made no difference; websites still time out.",
                category: "results",
                quality: "strong",
                points: 15
            },
            {
                id: "wifi-handoff-strong",
                text: "Basic connectivity step did not resolve the issue; further endpoint/network review is needed before the demo.",
                category: "handoff",
                quality: "strong",
                points: 10
            },

            {
                id: "wifi-problem-partial",
                text: "Internet problem on Avery's computer.",
                category: "problem",
                quality: "partial",
                points: 8
            },
            {
                id: "wifi-scope-partial",
                text: "Sales needs this fixed soon.",
                category: "scopeImpact",
                quality: "partial",
                points: 8
            },
            {
                id: "wifi-actions-partial",
                text: "Avery already tried reconnecting.",
                category: "actions",
                quality: "partial",
                points: 8
            },

            {
                id: "wifi-noise-battery",
                text: "Laptop battery is currently 68%.",
                category: null,
                quality: "noise",
                points: 0
            },
            {
                id: "wifi-noise-browser",
                text: "Chrome is Avery's normal default browser.",
                category: null,
                quality: "noise",
                points: 0
            }
        ],

        modelHandoff:
            "Avery in Sales cannot load websites on a Windows 11 laptop over office Wi-Fi since 09:10. Chrome and Edge both time out although Wi-Fi still shows connected. Only Avery's laptop appears affected; a phone on the same Wi-Fi works. Avery disconnected and reconnected to Wi-Fi, but the issue persists. A customer demo begins in 30 minutes. Further endpoint/network review is needed."
    },
    {
    id: "email-outbox",
    title: "Email Stuck in Outbox",
    difficulty: "Easy–medium",
    estimatedTime: "2–3 min",

    rawTicket: "Email won't send.",

    background:
        "Maya from HR is working on same-day onboarding documents.",

    notes: [
        {
            id: "email-problem-strong",
            text: "Outlook desktop cannot send mail; outgoing messages remain in the Outbox.",
            category: "problem",
            quality: "strong",
            points: 15
        },
        {
            id: "email-context-strong",
            text: "Maya, HR, Windows company laptop, Outlook desktop; webmail is also available.",
            category: "context",
            quality: "strong",
            points: 15
        },
        {
            id: "email-evidence-strong",
            text: "Since 10:20, Send/Receive displays a connection error while sending.",
            category: "evidence",
            quality: "strong",
            points: 15
        },
        {
            id: "email-scope-strong",
            text: "One user is affected; onboarding messages must go out today, while webmail remains a working alternative.",
            category: "scopeImpact",
            quality: "strong",
            points: 15
        },
        {
            id: "email-actions-strong",
            text: "Maya closed Outlook and opened it again.",
            category: "actions",
            quality: "strong",
            points: 15
        },
        {
            id: "email-results-strong",
            text: "Desktop Outlook still fails, but a test message sent successfully through webmail.",
            category: "results",
            quality: "strong",
            points: 15
        },
        {
            id: "email-handoff-strong",
            text: "Desktop-only sending issue persists after application restart; hand off with the error and webmail comparison for further Outlook review.",
            category: "handoff",
            quality: "strong",
            points: 10
        },

        {
            id: "email-problem-partial",
            text: "Email isn't working.",
            category: "problem",
            quality: "partial",
            points: 8
        },
        {
            id: "email-scope-partial",
            text: "HR has important work today.",
            category: "scopeImpact",
            quality: "partial",
            points: 8
        },
        {
            id: "email-actions-partial",
            text: "Maya restarted Outlook.",
            category: "actions",
            quality: "partial",
            points: 8
        },

        {
            id: "email-noise-unread",
            text: "Maya currently has 34 unread messages.",
            category: null,
            quality: "noise",
            points: 0
        },
        {
            id: "email-noise-signature",
            text: "Her email signature was edited last month.",
            category: null,
            quality: "noise",
            points: 0
        }
    ],

    modelHandoff:
        "Maya in HR cannot send mail from Outlook desktop on the company Windows laptop; messages remain in Outbox and Send/Receive shows a connection error. The issue began around 10:20 and only one user is currently affected. Maya reopened Outlook with no improvement. A test message sends successfully from webmail, so a workaround exists. Onboarding messages are due today. Further review should focus on the desktop Outlook issue."
},
{
    id: "finance-printer-jam",
    title: "Finance Printer Jam",
    difficulty: "Easy",
    estimatedTime: "2 min",

    rawTicket: "Printer broken.",

    background:
        "A shared fictional Finance printer is needed for time-sensitive paperwork.",

    notes: [
        {
            id: "printer-problem-strong",
            text: "Shared Finance printer FIN-02 will not complete print jobs.",
            category: "problem",
            quality: "strong",
            points: 15
        },
        {
            id: "printer-context-strong",
            text: "FIN-02 is the shared network printer on the Finance floor.",
            category: "context",
            quality: "strong",
            points: 15
        },
        {
            id: "printer-evidence-strong",
            text: "The display reports “Paper jam — Tray 2” and submitted jobs remain queued.",
            category: "evidence",
            quality: "strong",
            points: 15
        },
        {
            id: "printer-scope-strong",
            text: "Three Finance users are affected; payroll forms must be printed before 14:00.",
            category: "scopeImpact",
            quality: "strong",
            points: 15
        },
        {
            id: "printer-actions-strong",
            text: "Visible paper was removed from Tray 2 and a new test page was submitted.",
            category: "actions",
            quality: "strong",
            points: 15
        },
        {
            id: "printer-results-strong",
            text: "The jam message remains and the test page still does not print.",
            category: "results",
            quality: "strong",
            points: 15
        },
        {
            id: "printer-handoff-strong",
            text: "Shared multi-user printer problem persists after the basic paper check; hand off with FIN-02 and the displayed error.",
            category: "handoff",
            quality: "strong",
            points: 10
        },

        {
            id: "printer-problem-partial",
            text: "Finance printer broken.",
            category: "problem",
            quality: "partial",
            points: 8
        },
        {
            id: "printer-scope-partial",
            text: "Finance needs it today.",
            category: "scopeImpact",
            quality: "partial",
            points: 8
        },
        {
            id: "printer-actions-partial",
            text: "They checked the paper.",
            category: "actions",
            quality: "partial",
            points: 8
        },

        {
            id: "printer-noise-toner",
            text: "Toner was replaced two months ago.",
            category: null,
            quality: "noise",
            points: 0
        },
        {
            id: "printer-noise-monitors",
            text: "The nearest employee has two computer monitors.",
            category: null,
            quality: "noise",
            points: 0
        }
    ],

    modelHandoff:
        "Shared Finance printer FIN-02 is not completing print jobs for three users. Its display shows “Paper jam — Tray 2,” and jobs remain queued. Visible paper was removed and a test page was submitted, but the message and failure remain. Payroll forms need printing before 14:00. Escalate with printer ID, affected-user count, displayed error, actions taken and current state."
},
{
    id: "crm-account-locked",
    title: "CRM Account Locked",
    difficulty: "Medium",
    estimatedTime: "2–3 min",

    rawTicket: "Can't log in.",

    background:
        "Jordan in Marketing needs access to a fictional internal CRM.",

    notes: [
        {
            id: "crm-lock-problem-strong",
            text: "Jordan cannot sign in to the CRM because the account is reported locked.",
            category: "problem",
            quality: "strong",
            points: 15
        },
        {
            id: "crm-lock-context-strong",
            text: "Jordan, Marketing, CRM web portal in Chrome on a company laptop.",
            category: "context",
            quality: "strong",
            points: 15
        },
        {
            id: "crm-lock-evidence-strong",
            text: "The exact message says: “Account locked. Contact your administrator.”",
            category: "evidence",
            quality: "strong",
            points: 15
        },
        {
            id: "crm-lock-scope-strong",
            text: "Only Jordan is known to be affected; active leads cannot be updated before noon.",
            category: "scopeImpact",
            quality: "strong",
            points: 15
        },
        {
            id: "crm-lock-actions-strong",
            text: "Jordan completed the organization's approved self-service password-reset process once.",
            category: "actions",
            quality: "strong",
            points: 15
        },
        {
            id: "crm-lock-results-strong",
            text: "The reset completed, but the CRM still displays the account-locked message.",
            category: "results",
            quality: "strong",
            points: 15
        },
        {
            id: "crm-lock-handoff-strong",
            text: "Access remains blocked after the approved self-service step; hand off for account-status review with the exact lock message.",
            category: "handoff",
            quality: "strong",
            points: 10
        },

        {
            id: "crm-lock-problem-partial",
            text: "Jordan can't log in.",
            category: "problem",
            quality: "partial",
            points: 8
        },
        {
            id: "crm-lock-scope-partial",
            text: "Marketing needs CRM access.",
            category: "scopeImpact",
            quality: "partial",
            points: 8
        },
        {
            id: "crm-lock-actions-partial",
            text: "Jordan changed the password.",
            category: "actions",
            quality: "partial",
            points: 8
        },

        {
            id: "crm-lock-noise-tabs",
            text: "Jordan currently has 12 browser tabs open.",
            category: null,
            quality: "noise",
            points: 0
        },
        {
            id: "crm-lock-noise-laptop-age",
            text: "The laptop was issued six months ago.",
            category: null,
            quality: "noise",
            points: 0
        }
    ],

    modelHandoff:
        "Jordan in Marketing cannot sign in to the CRM web portal on a company laptop. The portal reports “Account locked. Contact your administrator.” Only Jordan is known to be affected, and active leads need updating before noon. Jordan completed the approved self-service password-reset process, but the account remains locked. Hand off for account-status review with the exact message and completed step."
},
{
    id: "finance-folder-denied",
    title: "Finance Folder Denied",
    difficulty: "Medium",
    estimatedTime: "2–3 min",

    rawTicket: "Drive doesn't work.",

    background:
        "Lina in Finance needs a month-end workbook stored on a fictional shared folder.",

    notes: [
        {
            id: "folder-problem-strong",
            text: "Lina receives “Access Denied” when opening the Finance shared folder.",
            category: "problem",
            quality: "strong",
            points: 15
        },
        {
            id: "folder-context-strong",
            text: "Lina, Finance, company laptop, Finance shared folder.",
            category: "context",
            quality: "strong",
            points: 15
        },
        {
            id: "folder-evidence-strong",
            text: "The folder worked yesterday; today it returns “Access Denied.”",
            category: "evidence",
            quality: "strong",
            points: 15
        },
        {
            id: "folder-scope-strong",
            text: "Only Lina is affected; teammates can open the folder; the month-end workbook is needed today.",
            category: "scopeImpact",
            quality: "strong",
            points: 15
        },
        {
            id: "folder-actions-strong",
            text: "Lina signed out of the workstation and back in once.",
            category: "actions",
            quality: "strong",
            points: 15
        },
        {
            id: "folder-results-strong",
            text: "The same Access Denied message remains afterward.",
            category: "results",
            quality: "strong",
            points: 15
        },
        {
            id: "folder-handoff-strong",
            text: "Single-user access issue persists; hand off for access review with the folder, timing and peer comparison documented.",
            category: "handoff",
            quality: "strong",
            points: 10
        },

        {
            id: "folder-problem-partial",
            text: "Finance drive doesn't work.",
            category: "problem",
            quality: "partial",
            points: 8
        },
        {
            id: "folder-scope-partial",
            text: "Lina needs a file today.",
            category: "scopeImpact",
            quality: "partial",
            points: 8
        },
        {
            id: "folder-actions-partial",
            text: "Lina logged in again.",
            category: "actions",
            quality: "partial",
            points: 8
        },

        {
            id: "folder-noise-file-count",
            text: "The shared folder contains roughly 200 files.",
            category: null,
            quality: "noise",
            points: 0
        },
        {
            id: "folder-noise-background",
            text: "Lina changed the desktop background this week.",
            category: null,
            quality: "noise",
            points: 0
        }
    ],

    modelHandoff:
        "Lina in Finance receives “Access Denied” when opening the Finance shared folder from her company laptop. Access worked yesterday. Teammates can currently open the folder, so only Lina is known to be affected. Lina signed out and back in, but the error remains. The blocked folder contains a month-end workbook needed today. Hand off for access review with the affected user, folder, timing, peer comparison and attempted step."
},
{
    id: "crm-crashes-update",
    title: "CRM Crashes After Update",
    difficulty: "Medium–high",
    estimatedTime: "3 min",

    rawTicket: "CRM keeps closing.",

    background:
        "Several Sales users are experiencing the same issue after a scheduled fictional application update.",

    notes: [
        {
            id: "crm-crash-problem-strong",
            text: "CRM desktop closes immediately after launch for several Sales users.",
            category: "problem",
            quality: "strong",
            points: 15
        },
        {
            id: "crm-crash-context-strong",
            text: "Sales team, company Windows laptops, CRM desktop version 5.4.",
            category: "context",
            quality: "strong",
            points: 15
        },
        {
            id: "crm-crash-evidence-strong",
            text: "The problem began after this morning's scheduled 5.4 update; the application closes before the sign-in screen.",
            category: "evidence",
            quality: "strong",
            points: 15
        },
        {
            id: "crm-crash-scope-strong",
            text: "Four users are affected; quotes are delayed, but the web CRM remains available as a workaround.",
            category: "scopeImpact",
            quality: "strong",
            points: 15
        },
        {
            id: "crm-crash-actions-strong",
            text: "One affected user restarted the laptop and relaunched the CRM.",
            category: "actions",
            quality: "strong",
            points: 15
        },
        {
            id: "crm-crash-results-strong",
            text: "The desktop application still closes; web CRM continues to function.",
            category: "results",
            quality: "strong",
            points: 15
        },
        {
            id: "crm-crash-handoff-strong",
            text: "Multi-user post-update desktop issue persists with a web workaround; hand off with version, timing and affected-user count.",
            category: "handoff",
            quality: "strong",
            points: 10
        },

        {
            id: "crm-crash-problem-partial",
            text: "CRM is crashing.",
            category: "problem",
            quality: "partial",
            points: 8
        },
        {
            id: "crm-crash-scope-partial",
            text: "Several Sales users have a problem.",
            category: "scopeImpact",
            quality: "partial",
            points: 8
        },
        {
            id: "crm-crash-actions-partial",
            text: "One laptop was restarted.",
            category: "actions",
            quality: "partial",
            points: 8
        },

        {
            id: "crm-crash-noise-monitor",
            text: "One affected employee uses a second monitor.",
            category: null,
            quality: "noise",
            points: 0
        },
        {
            id: "crm-crash-noise-desks",
            text: "The Sales team moved desks last week.",
            category: null,
            quality: "noise",
            points: 0
        }
    ],

    modelHandoff:
        "CRM desktop 5.4 closes before sign-in on four Sales users' Windows laptops. The problem began after this morning's scheduled update. One affected laptop was restarted and the application reopened, but the failure persists. The web CRM remains usable, so there is a workaround, although quote processing is slower. Hand off with version, start time, affected-user count, action/result and workaround."
}
];