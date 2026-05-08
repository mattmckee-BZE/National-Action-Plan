// scores.js — Current scores per city and indicator.
//
// Keys are city slugs (matching city.html URL params) and item IDs (matching data.js).
// Values are integers 1–5. Omit an indicator to leave its box unscored (white).
//
// To update after a new assessment round:
//   1. Change the number here.
//   2. Add a new entry to the matching evidence-{citykey}.js file.

const SCORES = {

  "hunter-valley": {
    "renewable-energy-generation":    3,
    "transmission-network":           2,
    "distribution-network":           2,
    "energy-storage":                 2,
    "hydrogen-network":               1,
    "industry-decarbonisation-plans": 2,
    "federal-emissions-commitment":   3,
    "federal-skills-training":        3,
    "federal-approvals":              3,
    "federal-investment-framework":   3,
    "federal-rd":                     4,
    "federal-procurement":            3,
    "state-emissions-commitment":     3,
    "state-skills-training":          4,
    "state-approvals":                3,
    "state-investment-framework":     3,
    "state-rd":                       3,
    "state-procurement":              3,
    "lga-decarbonisation-plans":      2,
  },

  "gladstone": {
    "renewable-energy-generation":    3,
    "transmission-network":           2,
    "distribution-network":           2,
    "energy-storage":                 3,
    "hydrogen-network":               2,
    "industry-decarbonisation-plans": 3,
    "federal-emissions-commitment":   2,
    "federal-skills-training":        3,
    "federal-approvals":              3,
    "federal-investment-framework":   3,
    "federal-rd":                     4,
    "federal-procurement":            3,
    "state-emissions-commitment":     3,
    "state-skills-training":          3,
    "state-approvals":                2,
    "state-investment-framework":     3,
    "state-rd":                       2,
    "state-procurement":              3,
    "lga-decarbonisation-plans":      4,
    "strategic-nature-positive-planning": 3,
  },

};
