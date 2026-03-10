# Competitive Intelligence Skill

## Overview

This skill provides automated behaviors for competitive intelligence analysis. When activated, it enhances Claude's ability to:

1. Structure company research systematically
2. Apply CIA analytical tradecraft
3. Generate professional intelligence reports
4. Maintain analytical rigor and source verification

## Activation Triggers

This skill activates when Claude detects:
- Requests to analyze a company
- Competitive intelligence queries
- Due diligence requests
- Market research tasks
- Company comparison requests

### Trigger Phrases
- "analyze [company]"
- "research [company]"
- "competitive intelligence on [company]"
- "due diligence for [company]"
- "compare [company A] vs [company B]"
- "SWOT analysis for [company]"
- "what do you know about [company]"

## Automatic Behaviors

### 1. Structured Data Collection
When researching a company, automatically search for:
- Official sources (website, SEC filings, press releases)
- Financial data (revenue, growth, profitability)
- Market position (market share, competitors)
- Strategic signals (M&A, partnerships, hiring)
- Risk indicators (news, legal, regulatory)

### 2. Source Verification
Always:
- Note the source for each data point
- Rate source reliability (A-F scale)
- Flag single-source dependencies
- Identify conflicting information

### 3. Analytical Frameworks
Apply appropriate frameworks based on query:
- **General analysis:** SWOT + Key metrics
- **Competitive analysis:** Porter's Five Forces + Comparison matrix
- **Strategic analysis:** Scenario planning + Red Team
- **Investment analysis:** Financial deep-dive + Risk assessment

### 4. Output Formatting
Structure outputs with:
- Executive summary first (BLUF)
- Key findings with confidence levels
- Supporting evidence with sources
- Actionable recommendations

## Configuration

```yaml
skill:
  name: competitive-intel
  auto_activate: true
  
  triggers:
    - pattern: "analyze|research|investigate"
      context: "company|business|competitor"
    - pattern: "due diligence|competitive intelligence|market research"
    - pattern: "SWOT|Porter|Five Forces"
  
  behaviors:
    structured_search: true
    source_verification: true
    framework_application: true
    confidence_ratings: true
  
  defaults:
    min_sources: 3
    source_reliability_threshold: C
    include_limitations: true
```

## Templates

### Quick Company Brief
```markdown
# Company Brief: {{COMPANY}}

## Overview
[1 paragraph description]

## Key Metrics
| Metric | Value | Source |
|--------|-------|--------|
| Revenue | | |
| Employees | | |
| Market Cap | | |

## Quick SWOT
**Strengths:** [Top 3]
**Weaknesses:** [Top 3]
**Opportunities:** [Top 3]
**Threats:** [Top 3]

## Key Takeaway
[1-2 sentences]
```

### Full Analysis Structure
```markdown
# Intelligence Assessment: {{COMPANY}}

## Executive Summary
[BLUF + Key Judgments]

## Company Overview
[Detailed profile]

## Financial Analysis
[Metrics and trends]

## Competitive Position
[Market analysis]

## Strategic Assessment
[Direction and execution]

## Risk Analysis
[Risk matrix and details]

## Scenarios
[Best/Most Likely/Worst]

## Recommendations
[Actionable items]

## Sources
[Full source list]
```

## Integration with Subagents

This skill is designed to work with the CIA Intelligence Cycle subagents:

1. **planning-director** - Defines scope and KITs
2. **osint-collector** - Gathers data
3. **data-processor** - Structures information
4. **strategic-analyst** - Applies frameworks
5. **report-producer** - Creates deliverables
6. **qa-validator** - Ensures quality

When the skill detects a complex analysis request, it will suggest using the appropriate subagent or the full `/cia-analyze` workflow.

## Best Practices

### Do
- Always cite sources
- Indicate confidence levels
- Acknowledge limitations
- Separate facts from inferences
- Update analysis with new information

### Don't
- Present speculation as fact
- Ignore contradictory evidence
- Over-rely on single sources
- Skip source verification
- Forget to note data recency

## Files in This Skill

```
competitive-intel/
├── SKILL.md          # This file
├── templates/        # Report templates
│   ├── brief.md
│   ├── full-report.md
│   └── comparison.md
└── prompts/          # Analytical prompts
    ├── swot.md
    ├── porter.md
    └── scenarios.md
```
