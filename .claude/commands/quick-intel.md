---
name: quick-intel
description: Execute a quick intelligence assessment with SWOT, Porter's Five Forces, and 3 scenarios. Faster than full analysis but less comprehensive.
---

# Quick Intelligence Assessment

Perform a rapid intelligence assessment focusing on key strategic frameworks.

## Arguments
- `$COMPANY` - The name of the company to analyze (required)

## Scope

This is a streamlined analysis that skips the full 6-phase cycle and focuses on:
1. Rapid data collection (key sources only)
2. SWOT Analysis
3. Porter's Five Forces
4. Three scenarios (Best/Most Likely/Worst)
5. Top 5 recommendations

## Execution

### Step 1: Quick Data Collection
Search for essential information:
```
"$COMPANY" company overview revenue market share
"$COMPANY" competitors industry analysis
"$COMPANY" strategy CEO vision 2024
"$COMPANY" risks challenges news
"$COMPANY" Glassdoor employee reviews rating
```

### Step 2: SWOT Analysis
Generate a SWOT matrix:
- 3 key Strengths with evidence
- 3 key Weaknesses with evidence
- 3 key Opportunities with evidence
- 3 key Threats with evidence

### Step 3: Porter's Five Forces
Score each force (1-5):
- Competitive Rivalry
- Threat of New Entrants
- Bargaining Power of Suppliers
- Bargaining Power of Buyers
- Threat of Substitutes

### Step 4: Scenario Planning
Develop three scenarios:
- **Best Case** (probability, conditions, outcome)
- **Most Likely** (probability, conditions, outcome)
- **Worst Case** (probability, conditions, outcome)

### Step 5: Key Recommendations
Provide 5 actionable recommendations based on findings.

## Output Format

Generate a Markdown report with:

```markdown
# Quick Intelligence Assessment: $COMPANY

**Date:** [DATE]
**Analysis Type:** Quick Assessment
**Confidence:** [MEDIUM - based on limited data collection]

## Executive Summary
[2-3 sentence BLUF]

## SWOT Analysis
[SWOT matrix with evidence]

## Industry Analysis (Porter's Five Forces)
[Five forces with scores and brief analysis]

## Scenario Analysis
[Three scenarios with probabilities]

## Key Recommendations
1. [Recommendation 1]
2. [Recommendation 2]
3. [Recommendation 3]
4. [Recommendation 4]
5. [Recommendation 5]

## Limitations
- This is a quick assessment based on limited data collection
- For comprehensive analysis, use /cia-analyze
- Key areas not deeply explored: [list]

## Sources
[List of sources consulted]
```

## Estimated Time
15-20 minutes (vs 60+ minutes for full analysis)

## Example Usage

```
/quick-intel Notion
/quick-intel "Figma"
/quick-intel Canva
```

---

Begin the quick assessment now.
