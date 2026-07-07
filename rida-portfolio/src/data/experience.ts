export type Role = {
  company: string;
  title: string;
  period: string;
  location?: string;
  summary: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  skills: string[];
  impact: string;
};

export const experience: Role[] = [
  {
    company: "PureHealth",
    title: "Governance, Risk & Compliance Officer — Information Security",
    period: "Mar 2025 — Present",
    location: "UAE",
    summary: "Own GRC as an internal product for one of the region's largest healthcare groups.",
    responsibilities: [
      "Lead implementation and org-wide rollout of an enterprise GRC platform (policy management, asset risk register, ETRM, change & product risk).",
      "Run Business Continuity Management end to end: BIA, plan development, periodic testing.",
      "Manage the full lifecycle of change and product risk assessments — initiation, evaluation, mitigation tracking, formal closure.",
      "Design end-to-end processes from mapping and stakeholder alignment to governance structures."
    ],
    achievements: [
      "Delivered organization-wide GRC tool rollout across multiple modules.",
      "Facilitated external audits with zero-surprise readiness via gap assessments and CAPA.",
      "Built and governed KPI frameworks across all departments with monthly reporting to group leadership."
    ],
    technologies: ["Enterprise GRC platform", "Power BI", "SQL"],
    skills: ["Program rollout", "BCM / BIA", "Risk management", "Audit readiness", "Executive reporting"],
    impact: "Compliance with HIPAA, ADHICS and NCEMA 7000 maintained across the group; leadership gets a single monthly view of risk and performance."
  },
  {
    company: "InvoiceMate",
    title: "Compliance & Product Senior Manager",
    period: "Jan 2024 — Feb 2025",
    summary: "Led product from concept to launch in a regulated fintech.",
    responsibilities: [
      "Owned development, design and launch of a digital supply chain financing product with partner banks.",
      "Collaborated with product teams to launch three additional products in full regulatory compliance.",
      "Ran advanced credit scoring analyses to optimize risk mitigation strategy."
    ],
    achievements: [
      "Shipped 4 products with banking partners — all compliant from day one.",
      "Drove a 30% increase in operational efficiency through process improvements.",
      "Executed 100+ credit scoring analyses; proposals lifted client acceptance rate by 50%."
    ],
    technologies: ["Credit scoring models", "CRM", "SQL"],
    skills: ["Product management", "Partner management", "Regulatory compliance", "Risk analytics"],
    impact: "New revenue lines launched with partner banks while keeping the regulator onside — compliance as an accelerant, not a blocker."
  },
  {
    company: "InvoiceMate",
    title: "Sales & Operations Manager",
    period: "Jun 2023 — Dec 2023",
    summary: "Built the commercial engine behind the products.",
    responsibilities: [
      "Implemented sales forecasting and territory planning systems.",
      "Analyzed performance metrics to find and fix operational bottlenecks."
    ],
    achievements: [
      "Increased sales forecast accuracy by 10%.",
      "Contributed to a 60% revenue increase; closed 11+ new partnerships."
    ],
    technologies: ["CRM", "Dashboards"],
    skills: ["Forecasting", "Partnerships", "Operations"],
    impact: "Revenue growth of 60% with a partnership pipeline that outlasted the quarter."
  },
  {
    company: "Truck It In",
    title: "Quality & Fraud Lead",
    period: "Dec 2022 — May 2023",
    summary: "Protected growth with quality controls and fraud prevention.",
    responsibilities: [
      "Designed companywide quality processes and controls.",
      "Partnered with external counsel to draft customer contracts used companywide."
    ],
    achievements: [
      "Cut lead leakage by 20%; cut response time to customer inquiries by 15%.",
      "Lifted customer retention by 20% through enforced standards."
    ],
    technologies: ["CRM", "Process dashboards"],
    skills: ["Quality management", "Fraud prevention", "Contracts"],
    impact: "Growth that stuck: less leakage, faster responses, higher retention."
  },
  {
    company: "Truck It In",
    title: "Commercial Lead → Commercial Executive / Associate",
    period: "Aug 2021 — Nov 2022",
    summary: "Led regional commercial teams in a high-growth logistics startup.",
    responsibilities: [
      "Led four regional teams and a team of account managers, customer success and compliance executives.",
      "Regulated the lending model for 12 key clients while ensuring compliance."
    ],
    achievements: [
      "Raised customer retention for the commercial cash vertical from 38% to 80%.",
      "Grew active user portfolio from 3 to 24 accounts per month; +18% regional sales growth.",
      "Boosted team productivity by 30% with consistent KPI attainment."
    ],
    technologies: ["Centralized sales dashboards", "CRM"],
    skills: ["Team leadership", "Customer success", "KPI management"],
    impact: "A retention turnaround (38% → 80%) that changed the unit economics of the vertical."
  },
  {
    company: "AIESEC",
    title: "Regional Head — Organizational Development (Tunisia) / Sales, Finance & Legal (Pakistan)",
    period: "Aug 2019 — Nov 2020",
    summary: "Early leadership across two countries in the world's largest youth-led organization.",
    responsibilities: [
      "Performed needs and cultural evaluations; built development and training programs.",
      "Led nationwide sales teams; owned accounting, budgeting, reporting and audit."
    ],
    achievements: [
      "Secured 5 international partnerships.",
      "Revamped the OD dashboard with a new measurement index for the post-Covid market."
    ],
    technologies: ["Dashboards", "Financial models"],
    skills: ["Organizational development", "Sales strategy", "Finance"],
    impact: "Sustainable operating models for two national organizations during a global crisis."
  }
];
