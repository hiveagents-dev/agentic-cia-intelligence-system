# CIA Intelligence Cycle - Corporate Analysis System

Sistema multi-agente para ejecutar analisis de inteligencia competitiva siguiendo la metodologia del CIA Intelligence Cycle, construido como una configuracion nativa de **Claude Code** usando subagents, hooks, skills y slash commands.

> Este proyecto demuestra como usar Claude Code mas alla del desarrollo de software: como plataforma de agentes de proposito general para inteligencia competitiva corporativa.

---

## Quick Start

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/cia-intelligence-system.git

# 2. Abrir Claude Code en el directorio
cd cia-intelligence-system
claude

# 3. Ejecutar un analisis
/cia-analyze Stripe
```

Eso es todo. Claude Code detecta automaticamente la configuracion en `.claude/` y habilita los 6 agentes, comandos y hooks.

### Comandos disponibles

| Comando | Ejemplo | Tiempo |
|---------|---------|--------|
| `/cia-analyze` | `/cia-analyze Stripe` | ~60 min |
| `/quick-intel` | `/quick-intel OpenAI` | ~15 min |
| `/compare-companies` | `/compare-companies Stripe Square` | ~45 min |

---

## Que es esto?

Un framework que transforma Claude Code en un sistema de inteligencia competitiva con 6 agentes especializados que siguen el ciclo de inteligencia de la CIA:

```
Planning ──> Collection ──> Processing ──> Analysis ──> Report ──> Validation
   │                                                                    │
   └────────────────────── Feedback Loop ──────────────────────────────┘
```

Cada fase es ejecutada por un agente con un rol especifico, herramientas dedicadas, y un output estructurado que alimenta la siguiente fase.

---

## Arquitectura

### Los 6 agentes

| # | Agente | Que hace | Output |
|---|--------|----------|--------|
| 1 | **Planning Director** | Define Key Intelligence Topics (KITs), hipotesis, y plan de recoleccion | `01-planning.md` |
| 2 | **OSINT Collector** | Busca informacion publica en 6 tiers de fuentes | `02-collection.md` |
| 3 | **Data Processor** | Normaliza, categoriza y estructura los datos crudos | `03-processed.md` |
| 4 | **Strategic Analyst** | Aplica ACH, SWOT, Porter, Red Team y Scenario Planning | `04-analysis.md` |
| 5 | **Report Producer** | Genera un reporte ejecutivo profesional en DOCX | `Intelligence_Assessment.docx` |
| 6 | **QA Validator** | Valida fuentes, detecta sesgos, verifica logica | `06-qa-report.md` |

### Estructura del proyecto

```
cia-intelligence-system/
├── .claude/
│   ├── agents/                    # 6 subagentes especializados
│   │   ├── planning-director.md
│   │   ├── osint-collector.md
│   │   ├── data-processor.md
│   │   ├── strategic-analyst.md
│   │   ├── report-producer.md
│   │   └── qa-validator.md
│   ├── commands/                  # Slash commands
│   │   ├── cia-analyze.md         # /cia-analyze [company]
│   │   ├── quick-intel.md         # /quick-intel [company]
│   │   └── compare-companies.md   # /compare-companies [A] [B]
│   ├── hooks/                     # Automatizaciones
│   │   ├── pre-analysis.json      # Crea directorios antes de analizar
│   │   └── post-report.json       # Confirmacion post-reporte
│   ├── skills/
│   │   └── competitive-intel/     # Skill de activacion automatica
│   │       ├── SKILL.md
│   │       ├── templates/         # Templates de reportes
│   │       └── prompts/           # Prompts analiticos (SWOT, Porter, Scenarios)
│   └── settings.json              # Configuracion, hooks, permisos
├── reports/                       # Output de analisis (generado automaticamente)
├── CLAUDE.md                      # Contexto del proyecto para Claude Code
├── MASTER_PROMPT.md               # Documentacion detallada de cada agente
├── QUICK_PROMPT.md                # Prompts simplificados para uso rapido
└── README.md
```

---

## Como funciona Claude Code con este proyecto

Claude Code lee automaticamente:

- **`CLAUDE.md`** - Reglas de comportamiento y configuracion del proyecto
- **`.claude/agents/*.md`** - Define subagentes con roles, herramientas y modelos especificos
- **`.claude/commands/*.md`** - Registra slash commands como `/cia-analyze`
- **`.claude/hooks/*.json`** - Ejecuta acciones automaticas (ej: crear directorios antes de un web search)
- **`.claude/skills/`** - Activa comportamientos automaticos cuando detecta patrones (ej: "analiza Stripe")
- **`.claude/settings.json`** - Permisos, modelo por defecto, hooks del sistema

No hay codigo ejecutable ni dependencias. Todo es configuracion declarativa que Claude Code interpreta.

---

## Tecnicas analiticas incluidas

### Del framework CIA
- **Analysis of Competing Hypotheses (ACH)** - Evalua hipotesis contra evidencia
- **Linchpin Analysis** - Identifica supuestos criticos
- **Red Team Analysis** - Perspectiva del adversario
- **Scenario Planning** - Best / Most Likely / Worst case
- **Early Warning Indicators** - Senales tempranas de cambio

### Frameworks corporativos
- **SWOT Analysis** - Fortalezas, Debilidades, Oportunidades, Amenazas
- **Porter's Five Forces** - Competitividad de la industria
- **Risk Matrix** - Impacto x Probabilidad

---

## Estructura del reporte final

```
Corporate Intelligence Assessment: [EMPRESA]
├── Executive Summary
│   ├── BLUF (Bottom Line Up Front)
│   ├── Key Judgments (con confidence levels)
│   └── Recommended Actions (con timeline)
├── Company Overview
├── Financial Intelligence
├── Competitive Positioning
├── Strategic Direction
├── Leadership & Organization
├── Risk Assessment
├── Scenario Analysis (3 escenarios)
├── Early Warning System
└── Annexes (Metodologia, Fuentes, SWOT, Porter)
```

---

## Fuentes OSINT consultadas

| Tier | Tipo | Ejemplos |
|------|------|----------|
| 1 | Oficiales | Website corporativo, SEC Filings, Earnings calls |
| 2 | Financieras | Bloomberg, Reuters, Analyst reports |
| 3 | Mercado | Industry reports, Customer reviews (G2, Trustpilot), Glassdoor |
| 4 | Alternativas | Patent filings, Job postings, Social media |
| 5 | Conferencias | Expert interviews, Conference presentations, Podcasts |

---

## Formas de uso

### Slash commands (recomendado)
```
/cia-analyze Stripe
/quick-intel OpenAI
/compare-companies Stripe Square
```

### Invocacion directa de agentes
```
Use the planning-director subagent to analyze Tesla
Use the strategic-analyst subagent to generate SWOT and Porter's Five Forces for Tesla
```

### Prompt libre
```
Ejecuta un analisis de inteligencia competitiva completo para [EMPRESA]
siguiendo el CIA Intelligence Cycle con los 6 agentes especializados.
```

---

## Consideraciones eticas

Este sistema utiliza unicamente **Open Source Intelligence (OSINT)**:
- Solo informacion publica y verificable
- Sin acceso a informacion privilegiada
- Fuentes documentadas con ratings de confiabilidad (A-F)
- Cumple con regulaciones de privacidad

---

## Requisitos

- [Claude Code](https://docs.anthropic.com/en/docs/claude-code) (CLI de Anthropic)
- Suscripcion a Claude con acceso a agentes

---

## Referencias

- [CIA Intelligence Cycle](https://www.cia.gov/spy-kids/static/Briefing-intelligence-cycle.pdf)
- [Claude Code - Subagents](https://docs.anthropic.com/en/docs/claude-code)
- [SCIP - Strategic Consortium of Intelligence Professionals](https://www.scip.org/)

---

*Desarrollado por [HiveAgents.dev](https://hiveagents.dev) - AI Agent Engineering*
