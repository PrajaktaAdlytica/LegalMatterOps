export const modules = [
  {
    slug: "matter-desk",
    name: "Matter Desk",
    short: "Intake completeness",
    title: "Bring the missing pieces into view.",
    desc: "Trace the administrative steps between first intake and a matter ready for review.",
    image: "module-desk.webp",
    color: "sage",
    items: [
      "Required intake fields",
      "Engagement signature evidence",
      "Missing setup steps",
      "Assigned next actions",
    ],
    output:
      "A source-linked completeness worksheet and a supervised findings review.",
    boundary:
      "The first proposed pilot is a retrospective administrative audit, not a live intake system.",
    visual: ["Intake details", "Engagement signature", "Billing code"],
    states: ["Verified", "Missing", "Missing"],
  },
  {
    slug: "matter-review",
    name: "Matter Review",
    short: "Conflict evidence & review",
    title: "A clear trail to the person who decides.",
    desc: "Organize conflict-check evidence, unresolved questions and the responsible lawyer’s review.",
    image: "evidence-layers.webp",
    color: "coral",
    items: [
      "Search-report provenance",
      "Unresolved review queue",
      "Named counsel responsibility",
      "Permission-aware evidence packet",
    ],
    output: "An evidence packet with a visible attorney review gate.",
    boundary:
      "Conflict search and report retention already exist in incumbent tools. This concept does not clear conflicts or run a conflict algorithm.",
    visual: ["Source report", "Counsel assigned", "Conflict review"],
    states: ["Available", "J. Reed", "Unresolved"],
  },
  {
    slug: "matter-proof",
    name: "Matter Proof",
    short: "Engagement & billing setup",
    title: "Make the setup agree with its sources.",
    desc: "Bring engagement, scope and billing metadata together so the right person can review discrepancies.",
    image: "module-proof.webp",
    color: "ochre",
    items: [
      "Engagement signature status",
      "Source-version comparison",
      "Billing-code reconciliation",
      "Reviewer rejection reasons",
    ],
    output:
      "A mismatch register, linked to source evidence and a responsible reviewer.",
    boundary:
      "Counsel owns legal scope and engagement interpretation. Billing staff validates administrative setup.",
    visual: ["Engagement version", "Billing source", "Signature evidence"],
    states: ["v1", "v2", "Not found"],
  },
  {
    slug: "matter-signal",
    name: "Matter Signal",
    short: "Deadline-source handoff",
    title: "A source and an owner for every date.",
    desc: "Follow the original source, the recorded date and the docketing handoff without losing context.",
    image: "module-signal.webp",
    color: "sage",
    items: [
      "Original source references",
      "Date and timezone context",
      "Docketing validation status",
      "Contradictory-source holds",
    ],
    output: "A deadline-source handoff checklist with an accountable owner.",
    boundary:
      "No deadline computation or guarantee of correctness. Contradictory sources remain on hold for human review.",
    visual: ["Original source", "Recorded date", "Docket validation"],
    states: ["Linked", "Source mismatch", "Pending"],
  },
  {
    slug: "matter-report",
    name: "Matter Report",
    short: "Dormant-matter reporting",
    title: "See where the work stopped moving.",
    desc: "Review unfinished setup and dormant administrative work in one considered exception ledger.",
    image: "permission-map.webp",
    color: "coral",
    items: [
      "Inactivity review queue",
      "Unfinished administrative steps",
      "Assigned follow-up owner",
      "Illustrative cohort reporting",
    ],
    output: "A scoped exception report and a human-owned follow-up checklist.",
    boundary:
      "No autonomous client outreach, invented recovery figures or measured savings claims.",
    visual: ["Inactive example", "Follow-up owner", "External outreach"],
    states: ["LM-059", "M. Chen", "Not sent"],
  },
];
export const roles = [
  {
    slug: "practice-administrators",
    name: "Practice administrators",
    title: "A clearer operational picture.",
    desc: "Assess the missing administrative steps, the cost of another tool and the evidence for a limited pilot.",
    task: "Evaluate the gap",
    detail:
      "Review a scoped audit worksheet, incumbent overlap and observed setup time before committing firm budget.",
    icon: "ChartBar",
    module: "matter-desk",
  },
  {
    slug: "intake-teams",
    name: "Intake teams",
    title: "Know what is missing. Know who is next.",
    desc: "See required evidence, incomplete setup and the person responsible for the next handoff.",
    task: "Prepare the handoff",
    detail:
      "Review the intake checklist and flag the missing engagement signature and billing code. Legal gates remain with counsel.",
    icon: "Files",
    module: "matter-desk",
  },
  {
    slug: "counsel",
    name: "Responsible counsel",
    title: "Keep judgment at the legal gate.",
    desc: "Inspect the conflict evidence and engagement questions with an explicit, accountable review boundary.",
    task: "Own the legal decision",
    detail:
      "Review source evidence, record concerns and preserve the unresolved gate. Only the responsible lawyer owns legal decisions.",
    icon: "UserCircle",
    module: "matter-review",
  },
  {
    slug: "it-security",
    name: "IT & security",
    title: "Define the boundary before the data.",
    desc: "Review access, report exposure and vendor terms before any real retrospective audit.",
    task: "Scope authorized access",
    detail:
      "Determine which records, roles and exports are appropriate. Technical administration does not confer legal decision authority.",
    icon: "LockKey",
    module: "matter-signal",
  },
];
export const matters = [
  [
    "LM-051",
    "Cedar Quill Studio",
    "Pending",
    "Intake field missing",
    "Mira Chen",
  ],
  [
    "LM-052",
    "Emberline Works",
    "Blocked",
    "Conflict evidence incomplete",
    "Jonah Reed",
  ],
  [
    "LM-053",
    "Larch Atelier",
    "Completed",
    "Administrative example complete",
    "Mira Chen",
  ],
  [
    "LM-054",
    "Copper Vale Design",
    "Rejected",
    "Source-version mismatch",
    "Leena Shah",
  ],
  [
    "LM-055",
    "Alder Lantern Studio",
    "Blocked",
    "3 open setup items",
    "Mira Chen",
  ],
  [
    "LM-056",
    "North Fern Works",
    "Pending",
    "Signature verification pending",
    "Mira Chen",
  ],
  [
    "LM-057",
    "Slate Orchard Design",
    "Completed",
    "Administrative example complete",
    "Leena Shah",
  ],
  [
    "LM-058",
    "Willow Circuit Studio",
    "Blocked",
    "Contradictory date sources",
    "Owen Park",
  ],
  [
    "LM-059",
    "Birch Loom Works",
    "Pending",
    "Dormant follow-up review",
    "Mira Chen",
  ],
  [
    "LM-060",
    "Moss Harbor Studio",
    "Pending",
    "Billing mapping pending",
    "Leena Shah",
  ],
].map(([id, client, status, issue, owner]) => ({
  id,
  client,
  status,
  issue,
  owner,
}));
export const sourceItems = [
  {
    title: "Intake completeness",
    status: "Verified",
    source: "SRC-055-INT · v1",
    actor: "Mira Chen · Intake coordinator",
    time: "20 Oct 2026 · 09:00",
    body: "Required fields in this fictional intake worksheet have been reviewed. This is administrative verification only.",
    icon: "CheckCircle",
  },
  {
    title: "Conflict review",
    status: "Unresolved",
    source: "SRC-055-CHK · v1",
    actor: "Jonah Reed · Conflicts partner",
    time: "20 Oct 2026 · 09:10",
    body: "A fictional search-report placeholder is available. Attorney review is required. No real conflict search or clearance has occurred.",
    icon: "WarningCircle",
  },
  {
    title: "Engagement signature",
    status: "Missing",
    source: "SRC-055-ENG · v1",
    actor: "Mira Chen · Intake coordinator",
    time: "20 Oct 2026 · 09:20",
    body: "Signature evidence is absent in the synthetic record. Ask the assigned coordinator to verify the original source.",
    icon: "Signature",
  },
  {
    title: "Billing code",
    status: "Missing",
    source: "SRC-055-BIL · v1",
    actor: "Leena Shah · Billing admin",
    time: "20 Oct 2026 · 09:30",
    body: "The sample billing-code field is empty. The proposed next step is billing-admin review. No external system is updated.",
    icon: "Receipt",
  },
];
export const sources = {
  clio: "https://help.clio.com/hc/en-us/articles/9290347515291-Global-Search",
  conflict: "https://www.clio.com/blog/conflict-check-how-to/",
  permissions:
    "https://help.clio.com/hc/en-us/articles/40062980685467-Overview-of-Custom-Role-Permissions",
  litify: "https://www.litify.com/platform",
  aba: "https://www.americanbar.org/content/dam/aba/administrative/professional_responsibility/ethics-opinions/aba-formal-opinion-512.pdf",
};
export const faqs = [
  [
    "Is LegalMatterOps an operating product?",
    "This is a research-stage website and isolated synthetic prototype. The five modules are proposed directions. No live integrations, accepted pricing or customer results have been demonstrated.",
  ],
  [
    "Does it clear conflicts or calculate deadlines?",
    "No. Conflicts remain unresolved until the responsible lawyer makes the decision. Deadline examples show source provenance and docketing validation; they do not compute legal deadlines.",
  ],
  [
    "How does this fit with Clio or Litify?",
    "Both already provide substantial practice-management functionality. The audit tests whether administrative gaps between systems and people remain after existing workflows are configured.",
  ],
  [
    "What would the first audit cover?",
    "The proposed Matter Desk audit covers 30 authorized, anonymized past matters of one repeat matter type, with a 30-minute findings review. $1,200 is a test-price hypothesis, not an active checkout or firm quote.",
  ],
  [
    "Can I upload a client file?",
    "No. The public site and demo do not accept client files, names, opposing parties or matter facts. Real audit scoping would require counsel and security approval before any safe-data transfer.",
  ],
];
export const questions = [
  "Which jurisdiction, professional rules and firm policies govern the practice?",
  "Who has authority for budget, legal decisions and technical access?",
  "What conflict logic and evidence coverage does counsel consider adequate?",
  "Can retrospective records be safely anonymized, and who verifies that?",
  "Which vendor, model-use, training, retention and deletion terms would apply?",
  "Could a report expose details hidden in the underlying matter?",
  "Which integration permissions and source systems are actually authorized?",
  "What is the original date source and the docketing validation protocol?",
  "What malpractice, contractual and engagement questions need counsel review?",
  "What confidentiality objection or unsafe-data condition stops the work?",
];
export const articles = {
  "matter-readiness-brief": {
    title: "A brief for a better beginning.",
    intro:
      "A supervised matter-readiness checklist across intake, conflicts and engagement.",
    sections: [
      [
        "The operational problem",
        "Intake, conflict evidence, engagement, billing and deadline handoff span people and systems. An administrative gap can leave the next owner without the information needed to proceed.",
      ],
      [
        "The proposed approach",
        "LegalMatterOps tests supervised cross-system readiness for one repeat matter type. Matter Desk is the first proposed pilot; Matter Review, Matter Proof, Matter Signal and Matter Report remain separate offers.",
      ],
      [
        "The responsibility boundary",
        "The COO owns the commercial decision; intake staff prepare the handoff; counsel owns conflicts, engagement and representation decisions; IT/security owns authorized access.",
      ],
      [
        "Evidence before expansion",
        "There is strong evidence for incumbent functionality and professional obligations, but limited evidence for willingness to replace a workflow. The audit must establish an unmet administrative job.",
      ],
    ],
  },
  "audit-worksheet": {
    title: "The matter-readiness worksheet.",
    intro:
      "A practical structure for a supervised retrospective review. Do not enter real client information here.",
    sections: [
      [
        "Cohort and authority",
        "Anonymous record ID; practice type; repeat matter type; jurisdiction; firm software; security reviewer; lawyer approver; authorization and protocol version.",
      ],
      [
        "Checklist and sources",
        "Record the required step, present/missing/unverified/not-applicable state, exact source ID and version, permission, verifier and timestamp.",
      ],
      [
        "Time and findings",
        "Record missing steps, setup minutes and the measurement method. Distinguish logged time from estimates. Assign a proposed next action and owner.",
      ],
      [
        "Review and overlap",
        "Record reviewer acceptance or rejection, reasons, corrections and whether the configured incumbent already covers the finding.",
      ],
      [
        "Decision",
        "Record privilege-control concerns, proposed pilot fee, decision date and proceed/pivot/stop. No real matters are collected through this worksheet preview.",
      ],
    ],
  },
  "counsel-security-questions": {
    title: "Questions before any data is shared.",
    intro:
      "A conversation for the responsible partner, operations buyer and security owner.",
    sections: questions.map((q, i) => [String(i + 1).padStart(2, "0"), q]),
  },
  "incumbent-comparison": {
    title: "Start with the tools already in place.",
    intro:
      "A fair comparison starts with the configured workflow, not a feature checklist.",
    sections: [
      [
        "Clio",
        "Clio documents contact/matter searches, conflict-check workflows and stored reports. Test whether a source-linked administrative audit adds value beyond those configured functions.",
      ],
      [
        "Litify",
        "Litify publishes intake, matter plans and workflow/reporting capabilities. Ask which existing fields, task plans and reports already solve the proposed gap.",
      ],
      [
        "People and document automation",
        "Intake staff, paralegals and firm-approved document automation may already provide the coordination needed. A second queue is not inherently an improvement.",
      ],
      [
        "The LegalMatterOps hypothesis",
        "Supervised cross-system evidence and accountable handoffs may help in a narrow workflow. This is unvalidated. Pivot or stop if incumbent configuration already solves the problem.",
      ],
    ],
  },
  "pilot-methodology": {
    title: "Measure first. Expand with evidence.",
    intro: "A small, supervised test designed to answer a commercial question.",
    sections: [
      [
        "Interview",
        "Target 8 COOs/intake leads and 3 lawyers/IT reviewers. Ask which fields already solve the issue, who authorizes an audit and where handoff evidence is lost.",
      ],
      [
        "Audit",
        "Review 30 authorized anonymized past matters within one repeat matter type. Measure missing administrative steps, setup minutes, reviewer overrides and incumbent overlap.",
      ],
      [
        "Commitment",
        "Seek one paid limited pilot signed by the managing partner/COO, with security review and a lawyer sign-off protocol. These are targets, not results.",
      ],
      [
        "Proceed / pivot / stop",
        "Proceed only with partner sign-off, security approval and measured gap beyond current tools. Pivot to operational reporting if intake is already covered. Stop when safe retrospective data is unavailable or confidentiality is challenged.",
      ],
      [
        "Expansion",
        "Additional matter types, offices and modules depend on retained budgets, measured administrative value and integration cost. Million-dollar revenue is an unproven hypothesis.",
      ],
    ],
  },
  "research-and-build-notes": {
    title: "Research notes & concept boundaries.",
    intro:
      "Concept 45. A transparent record of what is known, proposed and still to validate.",
    sections: [
      [
        "Naming history",
        "The supplied brief used Matter Deadline and matterdeadline.com. Its historical RDAP 404 observation is not current domain availability; it was unpurchased and not trademark-cleared. LegalMatterOps is the user-selected name, with domain and trademark status unverified.",
      ],
      [
        "Commercial status",
        "No real customers, demand, live integrations, published customer results or accepted pricing have been demonstrated. The $1,200 audit is a price hypothesis. The $100k ambition is not a public product price.",
      ],
      [
        "Acquisition plan",
        "Explore bar/practice-administrator associations, legal-ops consultants, implementation partners and specialist communities. Proposed LinkedIn content discusses handoff failures with ABA 512 context, without legal advice. No outreach has been sent.",
      ],
      [
        "Traffic experiment",
        "Compare missing engagement handoff and matter setup audit messaging with a separately approved capped budget. Measure qualified security-review and paid-audit conversations; clicks are not buyer commitments.",
      ],
      [
        "Future tracking",
        "Practice type; jurisdiction; firm software; security reviewer; lawyer approver; matter count; missing steps; setup minutes; conflict unresolved count; privilege controls; pilot fee; decision date.",
      ],
      [
        "Screenshot provenance",
        "The historical screenshot and video mentioned in the brief were not supplied. This website uses new painted-paper assets and actual interactive synthetic records. Nothing is an operating legal workflow.",
      ],
    ],
  },
};
articles["fictional-matter-schema"] = {
  title: "A record with its context intact.",
  intro: "Synthetic matter schema / public demonstration only.",
  sections: [
    [
      "Matter identity",
      "Fictional matter ID, fabricated firm and client label, repeat matter type, administrative status, current owner and dated proposed next action. The public demo contains ten invented records, LM-051 through LM-060.",
    ],
    [
      "Source evidence",
      "Each checklist item carries a source system, document ID, version, observed state, role permission, verifying actor and timestamp. No real document content is included.",
    ],
    [
      "Review gate",
      "Legal review state remains unresolved. Responsible counsel is named, override/rejection reasons remain visible, and technical access does not grant legal decision authority.",
    ],
    [
      "Exception and chronology",
      "LM-054 demonstrates a rejected source-version recommendation. LM-058 demonstrates contradictory date references that remain on hold. Intake verification precedes conflict-review assignment and billing follow-up.",
    ],
    [
      "Export",
      "The JSON export contains only the seeded synthetic records, evidence metadata and a persistent illustrative notice. It cannot transfer privileged files or certify legal clearance.",
    ],
  ],
};
articles["role-permission-matrix"] = {
  title: "Responsibility is not interchangeable.",
  intro:
    "Proposed role-permission matrix. These are front-end illustrations, not enforced production authorization.",
  sections: [
    [
      "COO / practice administrator",
      "Can assess aggregate administrative findings and pilot economics. Cannot decide conflict clearance, interpret legal scope or grant technical access. Owns budget and participates in the proceed/pivot/stop decision.",
    ],
    [
      "Intake coordinator",
      "Can prepare intake completeness and view assigned setup statuses. Cannot make legal decisions or bypass the counsel gate.",
    ],
    [
      "Conflicts partner / responsible lawyer",
      "Can review conflict evidence and owns conflicts, engagement and representation decisions. In this synthetic demo the action is only a placeholder and never records actual clearance.",
    ],
    [
      "Billing administrator",
      "Can inspect billing setup and flag missing codes. Conflict source details are restricted in the billing preview. Cannot approve engagement scope or conflicts.",
    ],
    [
      "IT / security owner",
      "Defines permitted source access, retention and export boundaries. Technical administration does not confer attorney authority. Actual permission enforcement must be reviewed before any production workflow.",
    ],
  ],
};
articles["sample-storyboard"] = {
  title: "One matter. Six visible moments.",
  intro:
    "Storyboard / LM-055, Alder Lantern Studio. Every record and person is fictional.",
  sections: [
    [
      "01 / Input artifact",
      "A fictional intake worksheet is marked complete. A source reference and verification time identify the administrative evidence.",
    ],
    [
      "02 / Exception",
      "Conflict screening is unresolved, engagement is unsigned and the billing code is missing. Three open setup items are counted.",
    ],
    [
      "03 / Evidence",
      "The viewer selects a checklist row and reads the linked source ID, version, actor, permission and timestamp. Billing-role conflict evidence remains restricted.",
    ],
    [
      "04 / Proposed next step",
      "The intake coordinator verifies signature evidence; the billing administrator reviews the missing code. No external message or system update occurs.",
    ],
    [
      "05 / Reviewer",
      "Jonah Reed, fictional conflicts partner, owns the legal gate. The review-action preview explains the boundary and leaves conflicts unresolved.",
    ],
    [
      "06 / Export",
      "An explicitly synthetic JSON audit packet collects record states and source metadata. The illustrative report counts 4 pending, 3 blocked, 2 completed administrative examples and 1 rejected recommendation.",
    ],
  ],
};
