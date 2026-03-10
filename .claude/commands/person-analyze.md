---
name: person-analyze
description: Execute a complete person intelligence assessment with ethical consent validation. Runs 7 phases including mandatory consent gate, and produces a professional DOCX report.
---

# Person Intelligence Assessment - Full Analysis

Execute a complete professional intelligence assessment on an individual using adapted CIA Intelligence Cycle methodology.

## Arguments
- `$PERSON` - The name of the person to analyze (required)

## Input Validation
Before starting, validate that `$PERSON`:
- Is not empty
- Does not contain shell metacharacters or path traversal
- Is trimmed and under 200 characters

If invalid, inform the user and do not proceed.

## Execution Flow

You will orchestrate 7 phases. **Phase 0 is mandatory and blocking.**

### Phase 0: Consent Validation (MANDATORY)
```
Use the consent-validator subagent to evaluate the request for $PERSON

The agent will:
- Evaluate whether the request has professional justification
- Check for red flags (personal motivation, invasive intent)
- Issue APPROVED or REJECTED determination

IF REJECTED: Stop immediately. Do not proceed to Phase 1.
IF APPROVED: Continue with the approved scope boundaries.
```

### Phase 1: Planning
```
Use the person-planner subagent for $PERSON

The agent will:
- Define 6 professional KITs
- Create a collection plan with ethical sources
- Formulate 3 testable hypotheses
```

### Phase 2: Collection (Ethical OSINT)
```
Use the person-osint subagent with KITs from Phase 1

The agent will:
- Search across 7 tiers of public professional sources
- Document all sources with reliability ratings
- Flag information gaps
- Maintain strict privacy boundaries
```

### Phase 3: Processing
```
Use the person-processor subagent with collected data

The agent will:
- Structure data across 6 professional dimensions
- Build career timeline
- Map professional network
- Aggregate public reputation sentiment
```

### Phase 4: Analysis
```
Use the person-analyst subagent with processed data

The agent will:
- Generate Professional SWOT
- Score Leadership Assessment (8 dimensions)
- Map Influence Network
- Assess Reputation Risk
- Develop 3 trajectory scenarios (Ascent/Stability/Decline)
- Produce Key Judgments with confidence levels
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
- Verify all sources are public
- Check logical consistency
- Detect biases
- Confirm ethical compliance
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
`./reports/$PERSON_Professional_Assessment_[DATE].docx`

## Example Usage

```
/person-analyze "Jensen Huang"
/person-analyze "Satya Nadella"
/person-analyze "Lisa Su"
```

---

Begin the analysis now. Start with Phase 0: Consent Validation.
