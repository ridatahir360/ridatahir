export type Project = {
  slug: string;
  title: string;
  category: "Product" | "Governance" | "Transformation" | "Growth";
  cover: string; // [REPLACE] add images to /public/projects/ and update paths
  description: string;
  problem: string;
  solution: string;
  role: string;
  technologies: string[];
  outcomes: string[];
  lessons: string;
};

export const projectCategories = ["All", "Product", "Governance", "Transformation", "Growth"] as const;

export const projects: Project[] = [
  {
    slug: "supply-chain-financing",
    title: "Digital Supply Chain Financing Product",
    category: "Product",
    cover: "/projects/placeholder-1.svg",
    description: "A digital financing product launched with partner banks, enabling SMEs to access working capital against invoices.",
    problem: "SMEs in the supply chain struggled to access financing; banks lacked the risk data and digital rails to lend confidently.",
    solution: "Designed and launched an end-to-end digital financing product connecting SMEs to partner banks, with embedded credit scoring and a compliance framework the banks could sign off on.",
    role: "Product lead — owned discovery, design, bank partnerships, regulatory compliance, and launch.",
    technologies: ["Credit scoring models", "Partner bank APIs", "CRM"],
    outcomes: ["Launched with partner banks, fully compliant from day one", "100+ credit scoring analyses executed to tune risk models", "50% improvement in client proposal acceptance rate"],
    lessons: "Bank partners buy confidence, not features. Leading with the compliance and risk story shortened every conversation."
  },
  {
    slug: "grc-platform-rollout",
    title: "Enterprise GRC Platform Rollout",
    category: "Transformation",
    cover: "/projects/placeholder-2.svg",
    description: "Organization-wide implementation of a GRC platform across a national healthcare group.",
    problem: "Policies, risk registers and change assessments lived in scattered documents — no single source of truth for a heavily regulated healthcare group.",
    solution: "Led the implementation and rollout of an enterprise GRC tool covering policy/document management, asset risk register, ETRM, and change & product risk management — treating internal teams as users and the rollout as a product launch.",
    role: "Implementation lead — requirements, configuration, stakeholder alignment, training, go-live.",
    technologies: ["Enterprise GRC platform", "Power BI", "SQL"],
    outcomes: ["Org-wide adoption across all modules", "Single source of truth for policies and risk", "Sustainable governance structures owned by each department"],
    lessons: "Adoption is the metric. A perfectly configured platform nobody uses is a failed launch."
  },
  {
    slug: "business-continuity-program",
    title: "Business Continuity Management Program",
    category: "Governance",
    cover: "/projects/placeholder-3.svg",
    description: "End-to-end BCM: business impact analysis, continuity plans, and periodic testing.",
    problem: "A healthcare group cannot afford downtime — but resilience existed as intent, not as a tested program.",
    solution: "Spearheaded the BCM program: ran business impact analyses, developed continuity plans, and instituted periodic testing aligned to NCEMA 7000.",
    role: "Program owner — BIA, plan development, testing cadence, executive reporting.",
    technologies: ["BIA tooling", "NCEMA 7000 framework"],
    outcomes: ["Tested continuity plans across critical functions", "Audit-ready resilience documentation", "Clear recovery ownership across departments"],
    lessons: "A continuity plan that hasn't been tested is a hypothesis. Testing turns paper into capability."
  },
  {
    slug: "kpi-governance",
    title: "Group-wide KPI Framework & Executive Reporting",
    category: "Governance",
    cover: "/projects/placeholder-4.svg",
    description: "KPI frameworks across all departments with a monthly reporting cadence to group leadership.",
    problem: "Leadership lacked a consistent, comparable monthly view of performance and risk across departments.",
    solution: "Designed KPI frameworks per department, built the reporting cadence, and governed data quality so leadership decisions rest on numbers everyone trusts.",
    role: "Framework designer and reporting owner.",
    technologies: ["Power BI", "SQL"],
    outcomes: ["Monthly leadership reporting across all departments", "Comparable metrics enabling cross-department decisions"],
    lessons: "The hardest part of KPIs isn't choosing them — it's governing definitions so the same number means the same thing everywhere."
  },
  {
    slug: "retention-turnaround",
    title: "Customer Retention Turnaround: 38% → 80%",
    category: "Growth",
    cover: "/projects/placeholder-5.svg",
    description: "A strategic overhaul of customer experience for a commercial cash vertical.",
    problem: "Retention in the commercial cash vertical sat at 38% — growth was leaking out the back door.",
    solution: "Rebuilt processes around the customer: cross-functional collaboration, quality standards, faster response loops, and a portfolio model that scaled accounts per customer.",
    role: "Commercial lead — owned the vertical's teams, processes and KPIs.",
    technologies: ["CRM", "Centralized dashboards"],
    outcomes: ["Retention up from 38% to 80%", "Active portfolio grown from 3 to 24 accounts/month", "+18% regional sales growth"],
    lessons: "Retention is a product problem wearing an ops costume. Fix the experience and the numbers follow."
  },
  {
    slug: "quality-fraud-controls",
    title: "Quality & Fraud Control System",
    category: "Transformation",
    cover: "/projects/placeholder-6.svg",
    description: "Companywide quality processes and fraud controls for a logistics marketplace.",
    problem: "Lead leakage and inconsistent quality were eroding both revenue and trust.",
    solution: "Implemented quality lead processes and controls companywide, and partnered with external counsel to standardize customer contracts.",
    role: "Quality & Fraud Lead — process design, controls, legal collaboration.",
    technologies: ["CRM", "Process dashboards"],
    outcomes: ["20% reduction in lead leakage", "15% faster response to customer inquiries", "20% increase in customer retention"],
    lessons: "Controls people understand get followed; controls imposed without context get bypassed."
  }
];
