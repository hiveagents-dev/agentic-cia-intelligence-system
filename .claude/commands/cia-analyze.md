---
name: cia-analyze
description: Execute a complete CIA Intelligence Cycle analysis on a company. Runs all 6 phases sequentially and produces a professional DOCX report.
---

# CIA Intelligence Cycle - Full Analysis

Execute a complete corporate intelligence analysis using the CIA Intelligence Cycle methodology.

## Arguments
- `$COMPANY` - The name of the company to analyze (required)

## Input Validation
Before starting, validate that `$COMPANY`:
- Is not empty
- Does not contain shell metacharacters (`;&|$(){}[]<>!\`) or path traversal (`../`)
- Is trimmed and under 200 characters

If invalid, inform the user and do not proceed.

## Execution Flow

You will orchestrate 6 specialized subagents in sequence:

### Phase 1: Planning & Direction
```
Use the planning-director subagent to analyze $COMPANY

The agent will:
- Define 7 Key Intelligence Topics (KITs)
- Establish Priority Intelligence Requirements
- Create a Collection Plan
- Formulate 5 testable hypotheses
```

### Phase 2: Collection (OSINT)
```
Use the osint-collector subagent with the KITs from Phase 1

The agent will:
- Execute systematic web searches across 6 tiers
- Gather data from official, financial, market, strategic sources
- Document sources with reliability ratings
- Identify information gaps
```

### Phase 3: Processing
```
Use the data-processor subagent with the collected data

The agent will:
- Normalize and standardize all data
- Categorize into Financial/Operational/Strategic/Organizational/Risk
- Create event timeline
- Map entity relationships
- Cross-verify critical data points
```

### Phase 4: Analysis
```
Use the strategic-analyst subagent with the processed data

The agent will:
- Evaluate hypotheses using ACH matrix
- Generate SWOT analysis
- Apply Porter's Five Forces
- Conduct Red Team analysis
- Develop 3 scenarios (Best/Most Likely/Worst)
- Identify Linchpin assumptions
- Create Early Warning Indicators
```

### Phase 5: Report Production
```
Use the report-producer subagent with the analysis

The agent will:
- Generate professional DOCX report
- Include Executive Summary with BLUF
- Document all findings with sources
- Provide actionable recommendations
- Save to ./reports/
```

### Phase 6: Quality Assurance
```
Use the qa-validator subagent on the final report

The agent will:
- Verify all sources
- Check logical consistency
- Detect biases
- Assess information gaps
- Validate actionability
- Provide final quality score
```

## Progress Tracking

After each phase, report:
```
📍 PHASE [N] COMPLETE: [Phase Name]
   └── Output: [Brief summary]
   └── Next: [What happens next]
```

## Final Deliverable

The final output will be saved to:
`./reports/$COMPANY_Intelligence_Assessment_[DATE].docx`

## Example Usage

```
/cia-analyze Stripe
/cia-analyze "OpenAI"
/cia-analyze Tesla
```

---

Begin the analysis now. Start with Phase 1: Planning & Direction.
