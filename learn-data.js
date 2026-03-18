// learn-data.js — Editable library of indicator detail pages.
//
// Each key matches an item.id from data.js.
// Set a key to null (or omit it) to show the "content coming soon" placeholder.
//
// Structure for a fully-populated entry:
// {
//   purpose:        string   — one or two sentences describing the assessment goal
//   frameworkIntro: string   — intro sentence before the bullet list (optional)
//   frameworkItems: string[] — bullet items (may contain inline HTML such as <b>)
//   dataSources:    string[] — bullet items
//   scoringProcess: { label: string, desc: string }[]
//   weightingTable: { dimension: string, weight: number, scores: string[5] }[]
//   scoringDescriptions: { score: number, label: string, characteristics: string[] }[]
// }

const LEARN_DATA = {

  // ─── Pillar 1: Enabling Infrastructure ───────────────────────────────────────

  "renewable-energy-generation": null,
  "transmission-network": null,
  "distribution-network": null,
  "energy-storage": null,
  "hydrogen-network": null,
  "energy-system-orchestration": null,

  "port": null,
  "rail": null,
  "road": null,
  "transport-networks": null,

  "water-supply": null,
  "wastewater-management": null,
  "solid-waste-resource-recovery": null,

  "housing": null,
  "health": null,
  "education": null,

  "digital-infrastructure": null,

  // ─── Pillar 2: Industry Capability & Capacity ─────────────────────────────────

  "industry-decarbonisation-plans": null,

  "existing-workforce-capacity": null,
  "reskilling-upskilling": null,

  "innovation": null,
  "commercialisation": null,
  "knowledge-generation-sharing": null,

  "industrial-symbiosis": null,
  "coordinated-infrastructure-plan": null,
  "supply-chain-resilience": null,
  "international-linkages": null,

  // ─── Pillar 3: Policy & Governance ───────────────────────────────────────────

  "federal-emissions-commitment": null,
  "federal-skills-training": null,
  "federal-approvals": null,
  "federal-investment-framework": null,
  "federal-rd": null,
  "federal-procurement": null,

  "state-emissions-commitment": null,
  "state-skills-training": null,
  "state-approvals": null,
  "state-investment-framework": null,
  "state-rd": null,
  "state-procurement": null,

  "lga-decarbonisation-plans": null,
  "regional-adaptation-resilience": null,

  "regional-coordination": null,
  "agency-representation": null,
  "policy-alignment": null,

  // ─── Pillar 4: Social Acceptance ─────────────────────────────────────────────

  "strategic-nature-positive-planning": null,
  "first-nations-benefit-sharing": null,

  "wider-community-benefit-sharing": {
    purpose: "To measure the level to which the rewards of renewable energy developments are shared with the communities that host them. This assessment asks how well renewable energy projects are integrated into the local community and how they contribute to the future vitality and success of the region.",

    frameworkIntro: "Community Benefits are assessed against four dimensions that aim to provide a holistic view of whether REIP or renewables projects are effectively supporting their host communities through economic and social benefits:",
    frameworkItems: [
      "<b>Employment:</b> Evidence of local jobs, local being defined as within 100km.",
      "<b>Economic benefits:</b> How much of the economic benefit stays in the region versus economic benefit flowing offshore or interstate. Evidence of local training, local content and supply chain opportunities, ownership share in infrastructure, lease payments for land, or transmission easements, other payments such as to neighbours.",
      "<b>Specific Community Benefit Fund:</b> What payments are made to the community and how are they allocated.",
      "<b>Community Subsidiarity:</b> To what level can the local community have a say in what benefits they want to receive and how the benefits of the renewable energy infrastructure flow to the community.",
    ],

    dataSources: [
      "Annual reports of proponents and investors.",
      "Council minutes, regional reports and datasets.",
      "Stakeholder feedback documented through interviews, emails and meeting notes.",
      "Evidence of a community benefit fund and beneficiaries.",
      "Evidence of coordination and collaboration, eg MOUs, press releases, agreements.",
      "State or local benefits sharing plans and guidelines.",
    ],

    scoringProcess: [
      { label: "Preliminary Analysis",  desc: "Review data and evidence sources listed above for this indicator." },
      { label: "Indicator Evaluation",  desc: "Assess the evidence of consultation processes and the quality of messaging and leadership." },
      { label: "Scoring Aggregation",   desc: "Calculate the overall assessment score based on weighted indicators." },
      { label: "Stakeholder Insights",  desc: "Gather input from academia, environmental NGOs, government, and community groups." },
      { label: "Review",                desc: "Conduct expert validation to finalise the assigned score." },
    ],

    weightingTable: [
      {
        dimension: "Employment",
        weight: 0.25,
        scores: [
          "No local jobs, FIFO or DIDO workforces.",
          "Minimal local construction only, no ongoing jobs.",
          "Mandated local construction and O&M jobs in merit criteria.",
          "Construction jobs and some ongoing jobs beyond mandates.",
          "Local workforce is trained and upskilled and the RE has brought ongoing jobs to town/region.",
        ],
      },
      {
        dimension: "Economic benefits",
        weight: 0.25,
        scores: [
          "No apprenticeships, training or local content.",
          "Minimal local content and supply chain opportunities.",
          "Mandated training apprenticeships and supply chain opportunities in merit criteria. Lease payments for project life cycle.",
          "Local share offers and financial compensations of amenity for neighbours, jobs, training and local content, lease payments.",
          "Mandated local ownership share in RE infrastructure, financial compensations for neighbours, training and supply chain, lease payments. Long term economic benefits creating prosperity for the region.",
        ],
      },
      {
        dimension: "Specific Community Benefit funding arrangements",
        weight: 0.25,
        scores: [
          "Do not exist.",
          "Limited ad hoc payments, footy jersey.",
          "Project community benefit fund included in merit criteria. Initial benefit funds run by proponents for life cycle with small grants.",
          "Coordinated benefit funding distributed across affected regions and benefit funds supported by proponents.",
          "Partnership and regional coordination between developers, government and community to dedicated benefit fund co-designed and managed by the local community. Legacy outcomes are achieved.",
        ],
      },
      {
        dimension: "Subsidiarity – community empowerment and strong local, state and industry alignment",
        weight: 0.25,
        scores: [
          "Local community has no plan about what they want or need and the state assumes the community has no additional needs to host RE infrastructure.",
          "The community has some plans about what is needed and how to capture benefits but no coordination with state and/or developers.",
          "The community has a plan through shire or council and there is communication with the state and coordination with developers.",
          "The community has a plan and an SPV structure (community benefit fund) and coordination to capture benefits. There is a level of collaboration between community, state and industry to deliver aspects of the plan and contribute to fund.",
          "The community has a clear plan and a structure (community benefit fund (CBF)). State and industry agree to deliver aspects of the plan. Industry contributes to CBF at an agreed rate. State provides infrastructure upgrades that address community needs, e.g. water supply, rubbish dumps. Community needs are not displaced for RE and the community is better off from development.",
        ],
      },
    ],

    scoringDescriptions: [
      {
        score: 1,
        label: "Minimal level of community benefit (Severe Deficiency)",
        characteristics: [
          "Minimal or no framework for benefits to the community.",
          "Lack of local jobs.",
          "Lack of local training and apprenticeship opportunities.",
          "Lack of local content supply chain opportunities.",
        ],
      },
      {
        score: 2,
        label: "Basic level of community benefit (Moderate Deficiency)",
        characteristics: [
          "Some fragmented ad hoc community benefits are offered, such as footy jersey benefits.",
          "Limited local employment opportunities.",
          "Limited training, apprenticeship and supply chain opportunities.",
        ],
      },
      {
        score: 3,
        label: "Moderate level of community benefit (Developing)",
        characteristics: [
          "Mandated local construction and operational jobs.",
          "Mandated merit criteria provide training apprenticeships and supply chain opportunities.",
          "The community has been supported to generate a benefits plan as required by merit criteria.",
          "Economic and social benefits of projects meet some community needs over project timelines.",
        ],
      },
      {
        score: 4,
        label: "Strong level of community benefit (Effective)",
        characteristics: [
          "Relatively high proportion of jobs are local, beyond merit criteria mandate.",
          "High level of community involvement in opportunities to participate and coordinate, e.g. stagger development to ensure maximum local opportunity and minimise disruptions.",
          "Strategic place-based planning with high community input and many community needs met.",
          "SPV or community benefit fund with strategic and regional focus.",
          "Share options, neighbour payments.",
        ],
      },
      {
        score: 5,
        label: "Exemplary level of community benefit planning (Leading Practice)",
        characteristics: [
          "Very high relative proportion of jobs are local, beyond merit criteria mandate.",
          "Community benefits (supply chain, training, payments etc.) are coordinated, collaborative, strategic, place-based, participatory, and grounded in community needs.",
          "Mandated ownership and benefits for all of the community are exceeded.",
          "Proponents are respected and valued partners in the community.",
        ],
      },
    ],
  },

  "effective-first-nations-engagement": null,
  "effective-community-engagement": null,

  // ─── Pillar 5: Financing the Transition ──────────────────────────────────────

  "public-finance-commitment": null,
  "attracting-private-investment": null,
  "risk-and-resilience": null,
};
