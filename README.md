# CIA Intelligence System - Corporate & Person Analysis

Sistema multi-agente dual para ejecutar analisis de inteligencia competitiva (empresas) y evaluacion profesional (personas), siguiendo la metodologia del CIA Intelligence Cycle, construido como una configuracion nativa de **Claude Code** usando subagents, hooks, skills y slash commands.

> Este proyecto demuestra como usar Claude Code mas alla del desarrollo de software: como plataforma de agentes de proposito general para inteligencia competitiva y evaluacion profesional.

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

Eso es todo. Claude Code detecta automaticamente la configuracion en `.claude/` y habilita los 11 agentes, comandos y hooks.

### Comandos disponibles

**Corporate Intelligence**

| Comando | Ejemplo | Tiempo |
|---------|---------|--------|
| `/cia-analyze` | `/cia-analyze Stripe` | ~60 min |
| `/quick-intel` | `/quick-intel OpenAI` | ~15 min |
| `/compare-companies` | `/compare-companies Stripe Square` | ~45 min |

**Person Intelligence**

| Comando | Ejemplo | Tiempo |
|---------|---------|--------|
| `/person-analyze` | `/person-analyze "Jensen Huang"` | ~60 min |
| `/quick-person` | `/quick-person "Brian Chesky"` | ~15 min |

---

## Que es esto?

Un framework que transforma Claude Code en un sistema de inteligencia con 11 agentes especializados operando en dos modos:

### Modo Corporate (6 agentes)

```
Planning ──> Collection ──> Processing ──> Analysis ──> Report ──> Validation
   │                                                                    │
   └────────────────────── Feedback Loop ──────────────────────────────┘
```

### Modo Person (5 agentes + 2 compartidos)

```
Consent ──> Planning ──> Collection ──> Processing ──> Analysis ──> Report ──> Validation
   │            │                                                       │          │
   │ REJECTED   └──────────────────── Feedback Loop ───────────────────┘          │
   └── STOP                                                                       │
                                                         (reusa Report Producer + QA Validator)
```

**Phase 0 (Consent)** es obligatoria: si el analisis no tiene justificacion profesional, el sistema se detiene antes de recolectar datos.

Cada fase es ejecutada por un agente con un rol especifico, herramientas dedicadas, y un output estructurado que alimenta la siguiente fase.

---

## Arquitectura

### Corporate Intelligence (6 agentes)

| # | Agente | Que hace | Output |
|---|--------|----------|--------|
| 1 | **Planning Director** | Define Key Intelligence Topics (KITs), hipotesis, y plan de recoleccion | `01-planning.md` |
| 2 | **OSINT Collector** | Busca informacion publica en 6 tiers de fuentes | `02-collection.md` |
| 3 | **Data Processor** | Normaliza, categoriza y estructura los datos crudos | `03-processed.md` |
| 4 | **Strategic Analyst** | Aplica ACH, SWOT, Porter, Red Team y Scenario Planning | `04-analysis.md` |
| 5 | **Report Producer** | Genera un reporte ejecutivo profesional en DOCX | `Intelligence_Assessment.docx` |
| 6 | **QA Validator** | Valida fuentes, detecta sesgos, verifica logica | `06-qa-report.md` |

### Person Intelligence (5 agentes + 2 compartidos)

| # | Agente | Que hace | Output |
|---|--------|----------|--------|
| 0 | **Consent Validator** | Gate etico obligatorio: verifica justificacion profesional | APPROVED / REJECTED |
| 1 | **Person Planner** | Define 6 KITs profesionales e hipotesis sobre el individuo | `01-person-planning.md` |
| 2 | **Person OSINT** | Recolecta datos publicos profesionales en 7 tiers eticos | `02-person-collection.md` |
| 3 | **Person Processor** | Estructura datos en 6 dimensiones (carrera, red, reputacion, liderazgo, thought leadership, riesgo) | `03-person-processed.md` |
| 4 | **Person Analyst** | Professional SWOT, Leadership Score (/40), Influence Score (/25), 3 escenarios de trayectoria | `04-person-analysis.md` |
| 5 | **Report Producer** | *(compartido)* Genera reporte DOCX | `Professional_Assessment.docx` |
| 6 | **QA Validator** | *(compartido)* Validacion final de calidad | `06-qa-report.md` |

### Estructura del proyecto

```
cia-intelligence-system/
├── .claude/
│   ├── agents/                    # 11 subagentes especializados
│   │   ├── planning-director.md   # Corporate: planificacion
│   │   ├── osint-collector.md     # Corporate: recoleccion OSINT
│   │   ├── data-processor.md      # Corporate: procesamiento
│   │   ├── strategic-analyst.md   # Corporate: analisis estrategico
│   │   ├── report-producer.md     # Compartido: generacion de reportes
│   │   ├── qa-validator.md        # Compartido: validacion de calidad
│   │   ├── consent-validator.md   # Person: gate etico (Phase 0)
│   │   ├── person-planner.md      # Person: planificacion
│   │   ├── person-osint.md        # Person: recoleccion etica
│   │   ├── person-processor.md    # Person: procesamiento
│   │   └── person-analyst.md      # Person: analisis profesional
│   ├── commands/                  # Slash commands
│   │   ├── cia-analyze.md         # /cia-analyze [company]
│   │   ├── quick-intel.md         # /quick-intel [company]
│   │   ├── compare-companies.md   # /compare-companies [A] [B]
│   │   ├── person-analyze.md      # /person-analyze [name]
│   │   └── quick-person.md        # /quick-person [name]
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
# Corporate
/cia-analyze Stripe
/quick-intel OpenAI
/compare-companies Stripe Square

# Person
/person-analyze "Jensen Huang"
/quick-person "Brian Chesky"
```

### Invocacion directa de agentes
```
# Corporate
Use the planning-director subagent to analyze Tesla
Use the strategic-analyst subagent to generate SWOT and Porter's Five Forces for Tesla

# Person
Use the consent-validator subagent to evaluate a request for "Satya Nadella"
Use the person-analyst subagent to generate leadership assessment for "Lisa Su"
```

### Prompt libre
```
Ejecuta un analisis de inteligencia competitiva completo para [EMPRESA]
siguiendo el CIA Intelligence Cycle con los 6 agentes especializados.

Ejecuta una evaluacion profesional completa de [PERSONA]
con validacion etica y los 5 agentes de Person Intelligence.
```

---

## Consideraciones eticas

### Corporate Intelligence
- Solo informacion publica y verificable (OSINT)
- Sin acceso a informacion privilegiada
- Fuentes documentadas con ratings de confiabilidad (A-F)

### Person Intelligence
- **Consent Gate obligatorio** (Phase 0): todo analisis debe pasar validacion etica antes de ejecutarse
- Solo informacion profesional publica (LinkedIn, conferencias, publicaciones, SEC filings)
- **Prohibido recolectar:** domicilio, telefono, familia, salud, finanzas personales, redes sociales privadas
- Rechaza automaticamente: investigaciones personales, vigilancia, acoso, motivaciones no profesionales
- Acepta: due diligence, evaluacion de liderazgo, research academico, analisis de inversiones

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
