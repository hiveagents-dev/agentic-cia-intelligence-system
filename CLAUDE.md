# CIA Intelligence Cycle - Corporate Analysis System

## Project Overview

Sistema multi-agente para análisis de inteligencia competitiva siguiendo la metodología del CIA Intelligence Cycle. Diseñado para generar reportes ejecutivos completos sobre cualquier empresa usando OSINT (Open Source Intelligence).

## Architecture

Este proyecto implementa un pipeline de 6 agentes especializados que operan en secuencia:

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│  PLANNING   │───▶│ COLLECTION  │───▶│ PROCESSING  │
│   Agent     │    │   Agent     │    │   Agent     │
└─────────────┘    └─────────────┘    └─────────────┘
                                             │
┌─────────────┐    ┌─────────────┐    ┌──────▼──────┐
│  FEEDBACK   │◀───│DISSEMINATION│◀───│  ANALYSIS   │
│   Agent     │    │   Agent     │    │   Agent     │
└─────────────┘    └─────────────┘    └─────────────┘
```

## Directory Structure

```
.claude/
├── agents/                    # Subagentes especializados
│   ├── planning-director.md   # Define KITs e hipótesis
│   ├── osint-collector.md     # Recolección de información
│   ├── data-processor.md      # Procesamiento y estructuración
│   ├── strategic-analyst.md   # Análisis con técnicas CIA
│   ├── report-producer.md     # Generación de reportes
│   └── qa-validator.md        # Validación y quality check
├── commands/                  # Slash commands
│   ├── cia-analyze.md         # Comando principal de análisis
│   ├── quick-intel.md         # Análisis rápido
│   └── compare-companies.md   # Análisis comparativo
├── hooks/                     # Automatizaciones
│   ├── pre-search.json        # Validación antes de búsquedas
│   └── post-report.json       # Acciones post-reporte
└── skills/                    # Skills automáticos
    └── competitive-intel/     # Skill de inteligencia competitiva
```

## Usage

### Quick Start
```bash
# Análisis completo
/cia-analyze "Stripe"

# Análisis rápido (solo SWOT + escenarios)
/quick-intel "OpenAI"

# Comparación de empresas
/compare-companies "Stripe" "Square"
```

### Direct Subagent Invocation
```
Use the planning-director subagent to analyze Tesla
Use the strategic-analyst subagent on the collected data
```

## Conventions

### Data Flow
- Cada agente produce un output estructurado en JSON/Markdown
- El output de cada fase alimenta la siguiente
- Los datos se almacenan en `/tmp/cia-analysis/{company}/`

### File Naming
- Datos crudos: `{phase}-raw-{timestamp}.json`
- Datos procesados: `{phase}-processed-{timestamp}.json`
- Reporte final: `{company}_Intelligence_Assessment_{date}.docx`

### Confidence Levels
- **HIGH**: Múltiples fuentes confiables, verificación cruzada exitosa
- **MEDIUM**: Una fuente confiable o múltiples fuentes de menor confianza
- **LOW**: Fuente única no verificada o información inferida

### Source Reliability Scale
- **A**: Completamente confiable (SEC filings, empresa directamente)
- **B**: Usualmente confiable (medios reputados, analysts oficiales)
- **C**: Fairly confiable (industria, agregadores conocidos)
- **D**: No usualmente confiable (rumores, fuentes anónimas)
- **E**: No confiable (sin verificar)
- **F**: No se puede juzgar confiabilidad

## Analytical Frameworks

Este sistema implementa las siguientes técnicas del CIA Tradecraft:

1. **Analysis of Competing Hypotheses (ACH)** - Evaluación de hipótesis contra evidencia
2. **Linchpin Analysis** - Identificación de supuestos críticos
3. **Red Team Analysis** - Perspectiva adversaria
4. **Scenario Planning** - Best/Most Likely/Worst case
5. **SWOT Analysis** - Fortalezas, Debilidades, Oportunidades, Amenazas
6. **Porter's Five Forces** - Análisis de competitividad industrial

## Output Format

El reporte final incluye:
1. Executive Summary con BLUF (Bottom Line Up Front)
2. Key Judgments con niveles de confianza
3. Company Overview
4. Financial Intelligence
5. Competitive Positioning
6. Strategic Direction
7. Risk Assessment
8. Scenario Analysis
9. Early Warning Indicators
10. Anexos (metodología, fuentes, matrices)

## Best Practices

- Siempre verificar datos críticos con múltiples fuentes
- Indicar nivel de confianza en cada afirmación clave
- Identificar gaps de información explícitamente
- Separar hechos de inferencias
- Usar fechas específicas para datos temporales
- Citar fuentes para claims verificables

## Ethical Guidelines

- Solo usar OSINT (información pública disponible)
- No acceder a información privilegiada
- Cumplir con regulaciones de privacidad
- No hacer trading basado en información no pública
- Declarar limitaciones del análisis

---
*HiveAgents.dev - AI Agent Engineering*
