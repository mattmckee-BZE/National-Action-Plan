// data.js
const CSC = [
  {
    pillarId: "enabling-infrastructure",
    pillarTitle: "Enabling Infrastructure",
    groups: [
      {
        groupId: "energy-system",
        groupTitle: "Energy System",
        items: [
          {
  id: "renewable-energy-generation",
  title: "Renewable energy generation",
  content: {
    purpose: `
      Placeholder: This assessment evaluates the readiness, scale, and feasibility
      of renewable energy generation within the selected region.
      It supports strategic infrastructure planning and investment decisions.
    `,
    framework: `
      Placeholder: The assessment framework considers capacity potential,
      grid integration readiness, policy alignment, and environmental constraints.
      Each dimension is scored independently and aggregated.
    `,
    dataSources: [
      "Placeholder: AEMO ISP data",
      "Placeholder: State renewable energy zones",
      "Placeholder: Project pipeline databases",
      "Placeholder: Local planning instruments"
    ],
    scoringProcess: [
      "Define system boundary and timeframe.",
      "Collect and validate energy generation capacity data.",
      "Assess constraints and integration risks.",
      "Assign sub-scores across framework dimensions.",
      "Aggregate weighted score and document rationale."
    ],
    weightingTable: [
      ["Generation potential", "20%", "—", "—", "—", "—", "Core capacity"],
      ["Grid readiness", "20%", "—", "—", "—", "—", "Transmission alignment"],
      ["Planning status", "15%", "—", "—", "—", "—", "Approvals progress"],
      ["Environmental risk", "15%", "—", "—", "—", "—", "Impact assessment"],
      ["Community support", "10%", "—", "—", "—", "—", "Consultation outcomes"],
      ["Financing maturity", "10%", "—", "—", "—", "—", "Capital secured"],
      ["Workforce readiness", "10%", "—", "—", "—", "—", "Skills availability"]
    ],
    scoringDescription: [
      ["0", "No evidence of development", "No projects identified"],
      ["1", "Early concept stage", "Feasibility under consideration"],
      ["2", "Planning stage", "Preliminary approvals lodged"],
      ["3", "Approved projects", "Development approvals granted"],
      ["4", "Construction underway", "Financial close achieved"],
      ["5", "Operational and scalable", "Multiple operational assets"]
    ]
  }
}
          { id: "transmission-network", title: "Transmission network" },
          { id: "distribution-network", title: "Distribution network" },
          { id: "energy-storage", title: "Energy storage" },
          { id: "hydrogen-network", title: "Hydrogen network" },
          { id: "energy-system-orchestration", title: "Energy system orchestration" },
        ],
      },
      {
        groupId: "transport-system",
        groupTitle: "Transport System",
        items: [
          { id: "port", title: "Port" },
          { id: "rail", title: "Rail" },
          { id: "road", title: "Road" },
          { id: "transport-networks", title: "Transport networks" },
        ],
      },
      {
        groupId: "water-waste",
        groupTitle: "Water System & Waste Management",
        items: [
          { id: "water-supply", title: "Water supply" },
          { id: "wastewater-management", title: "Wastewater management" },
          { id: "solid-waste-resource-recovery", title: "Solid waste & resource recovery" },
        ],
      },
      {
        groupId: "social-infrastructure",
        groupTitle: "Social Infrastructure",
        items: [
          { id: "housing", title: "Housing" },
          { id: "health", title: "Health" },
          { id: "education", title: "Education" },
        ],
      },
      {
        groupId: "communications-infrastructure",
        groupTitle: "Communications Infrastructure",
        items: [{ id: "digital-infrastructure", title: "Digital infrastructure" }],
      },
    ],
  },

  {
    pillarId: "industry-capability-capacity",
    pillarTitle: "Industry Capability & Capacity",
    groups: [
      {
        groupId: "industry-decarbonisation",
        groupTitle: "Industry Decarbonisation",
        items: [{ id: "industry-decarbonisation-plans", title: "Industry decarbonisation plans" }],
      },
      {
        groupId: "workforce-capacity",
        groupTitle: "Workforce Capacity to Deliver",
        items: [
          { id: "existing-workforce-capacity", title: "Existing workforce capacity" },
          { id: "reskilling-upskilling", title: "Reskilling and upskilling programs" },
        ],
      },
      {
        groupId: "innovation-knowledge",
        groupTitle: "Innovation & Knowledge Development",
        items: [
          { id: "innovation", title: "Innovation" },
          { id: "commercialisation", title: "Commercialisation" },
          { id: "knowledge-generation-sharing", title: "Knowledge generation and sharing" },
        ],
      },
      {
        groupId: "collaboration-ecosystems",
        groupTitle: "Collaboration & Industrial Ecosystems",
        items: [
          { id: "industrial-symbiosis", title: "Industrial symbiosis & material exchange" },
          { id: "coordinated-infrastructure-plan", title: "Coordinated infrastructure plan for common user infrastructure" },
          { id: "supply-chain-resilience", title: "Contribution to Australian supply chain resilience" },
          { id: "international-linkages", title: "International linkages / international coordination" },
        ],
      },
    ],
  },

  {
    pillarId: "policy-governance",
    pillarTitle: "Policy & Governance",
    groups: [
      {
        groupId: "federal-policy",
        groupTitle: "Federal Policy",
        items: [
          { id: "federal-emissions-commitment", title: "Emissions reduction commitment" },
          { id: "federal-skills-training", title: "Skills and training" },
          { id: "federal-approvals", title: "Approvals processes" },
          { id: "federal-investment-framework", title: "Investment framework" },
          { id: "federal-rd", title: "Research and development" },
          { id: "federal-procurement", title: "Government procurement support" },
        ],
      },
      {
        groupId: "state-policy",
        groupTitle: "State Policy",
        items: [
          { id: "state-emissions-commitment", title: "Emissions reduction commitment" },
          { id: "state-skills-training", title: "Skills and training" },
          { id: "state-approvals", title: "Approvals processes" },
          { id: "state-investment-framework", title: "Investment framework" },
          { id: "state-rd", title: "Research and development" },
          { id: "state-procurement", title: "Government procurement support" },
        ],
      },
      {
        groupId: "local-government-policy",
        groupTitle: "Local Government Policy",
        items: [
          { id: "lga-decarbonisation-plans", title: "LGA decarbonisation plans" },
          { id: "regional-adaptation-resilience", title: "Regional climate adaptation/resilience plan" },
        ],
      },
      {
        groupId: "governance",
        groupTitle: "Governance",
        items: [
          { id: "regional-coordination", title: "Regional coordination" },
          { id: "agency-representation", title: "Regional representation of key agencies" },
          { id: "policy-alignment", title: "Policy alignment and coordination" },
        ],
      },
    ],
  },

  {
    pillarId: "social-acceptance",
    pillarTitle: "Social Acceptance",
    groups: [
      {
        groupId: "community-benefits-impacts",
        groupTitle: "Community Benefits & Impacts",
        items: [
          { id: "strategic-nature-positive-planning", title: "Strategic & nature-positive land-use planning" },
          { id: "first-nations-benefit-sharing", title: "First Nations community benefit sharing" },
          { id: "wider-community-benefit-sharing", title: "Wider community benefit sharing" },
        ],
      },
      {
        groupId: "engagement-participation",
        groupTitle: "Engagement & Participation of Communities",
        items: [
          { id: "effective-first-nations-engagement", title: "Effective First Nations engagement" },
          { id: "effective-community-engagement", title: "Effective community engagement" },
        ],
      },
    ],
  },

  {
    pillarId: "financing-transition",
    pillarTitle: "Financing the Transition",
    groups: [
      {
        groupId: "investment",
        groupTitle: "Investment",
        items: [
          { id: "public-finance-commitment", title: "Public finance commitment" },
          { id: "attracting-private-investment", title: "Attracting private investment" },
        ],
      },
      {
        groupId: "risk-resilience",
        groupTitle: "Risk & Resilience",
        items: [{ id: "risk-and-resilience", title: "Risk and resilience" }],
      },
    ],
  },
];

// Helper: find by item id
function findItemById(id) {
  for (const pillar of CSC) {
    for (const group of pillar.groups) {
      for (const item of group.items) {
        if (item.id === id) return { pillar, group, item };
      }
    }
  }
  return null;
}
