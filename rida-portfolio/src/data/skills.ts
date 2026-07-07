export type SkillGroup = { category: string; skills: { name: string; level: number }[] };

// level is 0-100 and drives the visual progress indicators
export const skillGroups: SkillGroup[] = [
  { category: "Product Management", skills: [
    { name: "Product lifecycle (discovery → launch)", level: 92 },
    { name: "Regulated product launches", level: 95 },
    { name: "Partner & bank integrations", level: 88 },
    { name: "Product risk management", level: 93 }
  ]},
  { category: "Governance & Compliance", skills: [
    { name: "IT / Information Security Governance", level: 94 },
    { name: "HIPAA · ADHICS · NCEMA 7000", level: 92 },
    { name: "Policy & document management", level: 90 },
    { name: "Audit readiness, gap assessment & CAPA", level: 93 }
  ]},
  { category: "Risk Management", skills: [
    { name: "Enterprise & technology risk (ETRM)", level: 90 },
    { name: "Change & product risk lifecycle", level: 93 },
    { name: "Credit & fraud risk analytics", level: 87 }
  ]},
  { category: "BCM & Disaster Recovery", skills: [
    { name: "Business impact analysis (BIA)", level: 91 },
    { name: "Continuity plan development & testing", level: 90 }
  ]},
  { category: "Data & Reporting", skills: [
    { name: "KPI framework design", level: 94 },
    { name: "Power BI", level: 85 },
    { name: "SQL", level: 80 },
    { name: "Executive reporting", level: 93 }
  ]},
  { category: "Leadership & Delivery", skills: [
    { name: "Stakeholder management", level: 95 },
    { name: "Cross-functional team leadership", level: 92 },
    { name: "Process design & improvement", level: 93 },
    { name: "Change management & training", level: 89 }
  ]}
];
