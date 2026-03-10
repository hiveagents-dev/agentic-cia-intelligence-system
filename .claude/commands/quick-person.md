---
name: quick-person
description: Execute a quick professional assessment of an individual. Includes abbreviated consent check, rapid OSINT, Professional SWOT, and key recommendations. Faster than full person analysis.
---

# Quick Person Assessment

Perform a rapid professional intelligence assessment of an individual.

## Arguments
- `$PERSON` - The name of the person to assess (required)

## Scope

This is a streamlined assessment that:
1. Performs abbreviated consent validation
2. Collects key professional data from top sources
3. Generates a Professional SWOT
4. Provides top 5 recommendations

## Execution

### Step 0: Quick Consent Check
Before proceeding, verify this request is for legitimate professional purposes:
- Is there a professional justification? (due diligence, hiring, investment, research)
- Is the request free of personal/invasive intent?
- Will only public professional information be used?

If any answer is NO, stop and explain why.

### Step 1: Rapid Professional Data Collection
Search for essential professional information:
```
"$PERSON" LinkedIn biography career
"$PERSON" CEO OR founder OR executive interview
"$PERSON" conference speaker keynote
"$PERSON" news profile Forbes OR Bloomberg
"$PERSON" board member advisor
```

### Step 2: Professional SWOT
Generate a professional SWOT:
- 3 key Strengths with evidence
- 3 key Weaknesses with evidence
- 3 key Opportunities
- 3 key Threats to their position

### Step 3: Leadership Quick Score
Score on a 1-5 scale:
- Strategic Vision
- Execution Track Record
- Industry Credibility
- Communication & Influence
- Innovation Orientation

### Step 4: Key Recommendations
Provide 5 actionable insights based on findings.

## Output Format

```markdown
# Quick Professional Assessment: $PERSON

**Date:** [DATE]
**Analysis Type:** Quick Assessment
**Confidence:** MEDIUM (limited data collection)
**Ethical Compliance:** Public professional sources only

## Executive Summary
[2-3 sentence BLUF about this person's professional standing]

## Professional Profile
| Attribute | Value |
|-----------|-------|
| Current Role | [Title at Company] |
| Career Stage | [Early/Mid/Senior/C-Suite/Board] |
| Industry | [Primary industry] |
| Known For | [1-2 sentence] |

## Professional SWOT
[SWOT matrix with evidence]

## Leadership Quick Score
| Dimension | Score | Notes |
|-----------|:-----:|-------|
| Strategic Vision | X/5 | [Brief] |
| Execution | X/5 | [Brief] |
| Credibility | X/5 | [Brief] |
| Communication | X/5 | [Brief] |
| Innovation | X/5 | [Brief] |
| **Overall** | **X/25** | |

## Key Recommendations
1. [Recommendation 1]
2. [Recommendation 2]
3. [Recommendation 3]
4. [Recommendation 4]
5. [Recommendation 5]

## Limitations
- Quick assessment based on limited data collection
- For comprehensive analysis, use /person-analyze
- Only public professional information was consulted

## Sources
[List of sources consulted]
```

## Estimated Time
10-15 minutes (vs 60+ minutes for full person analysis)

## Example Usage

```
/quick-person "Jensen Huang"
/quick-person "Brian Chesky"
/quick-person "Whitney Wolfe Herd"
```

---

Begin the quick assessment now.
