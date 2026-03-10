# 🕵️ CIA Intelligence Cycle - Corporate Analysis System

## Sistema Multi-Agente para Análisis de Inteligencia Competitiva

Un framework completo para ejecutar análisis de inteligencia competitiva siguiendo la metodología del CIA Intelligence Cycle, optimizado para **Claude Code** con subagents, hooks, skills, y slash commands.

---

## 📁 Estructura del Proyecto

```
cia-intelligence-system/
├── CLAUDE.md                      # 📋 Contexto principal del proyecto
├── .claude/
│   ├── agents/                    # 🤖 6 Subagentes especializados
│   │   ├── planning-director.md   #    Fase 1: Planning & Direction
│   │   ├── osint-collector.md     #    Fase 2: Collection (OSINT)
│   │   ├── data-processor.md      #    Fase 3: Processing
│   │   ├── strategic-analyst.md   #    Fase 4: Analysis & Production
│   │   ├── report-producer.md     #    Fase 5: Dissemination
│   │   └── qa-validator.md        #    Fase 6: Feedback & Validation
│   ├── commands/                  # ⚡ Slash commands
│   │   ├── cia-analyze.md         #    /cia-analyze [company]
│   │   ├── quick-intel.md         #    /quick-intel [company]
│   │   └── compare-companies.md   #    /compare-companies [A] [B]
│   ├── hooks/                     # 🪝 Automatizaciones
│   │   ├── pre-analysis.json      #    Setup antes de análisis
│   │   └── post-report.json       #    Acciones post-reporte
│   ├── skills/                    # 🎯 Skills automáticos
│   │   └── competitive-intel/
│   │       └── SKILL.md
│   └── settings.json              # ⚙️ Configuración
├── MASTER_PROMPT.md               # 📖 Documentación completa
├── QUICK_PROMPT.md                # 🚀 Prompts simplificados
└── README.md                      # 📚 Esta documentación
```

---

## 🚀 Instalación

### Para Claude Code
```bash
# Clonar o copiar el directorio a tu proyecto
cp -r cia-intelligence-system/ tu-proyecto/

# O agregar como submódulo
git submodule add [repo-url] cia-intelligence

# El directorio .claude/ será detectado automáticamente por Claude Code
```

### Verificar instalación
```bash
# En Claude Code, verifica que los agentes estén disponibles
/agents
```

---

## 🎯 Uso

### Método 1: Slash Commands (Recomendado)
```bash
# Análisis completo (60+ minutos)
/cia-analyze Stripe

# Análisis rápido (15-20 minutos)
/quick-intel OpenAI

# Comparación de empresas
/compare-companies Stripe Square
```

### Método 2: Invocación Directa de Subagentes
```
# Invocar un agente específico
Use the planning-director subagent to analyze Tesla

# Continuar con el siguiente agente
Use the osint-collector subagent with the KITs from the planning phase

# Ejecutar análisis con técnicas específicas
Use the strategic-analyst subagent to generate SWOT and Porter's Five Forces
```

### Método 3: Prompt Completo
```
Ejecuta un análisis de inteligencia competitiva completo para [EMPRESA] 
siguiendo el CIA Intelligence Cycle.

Fases: Planning → Collection → Processing → Analysis → Dissemination → Validation

Usa los 6 subagentes especializados en secuencia y genera un reporte .docx profesional.
```

---

## 🔄 El CIA Intelligence Cycle

```
    ┌─────────────────────────────────────────────────────┐
    │                                                     │
    │    ┌──────────┐     ┌──────────┐     ┌──────────┐  │
    │    │ PLANNING │────▶│COLLECTION│────▶│PROCESSING│  │
    │    │    &     │     │          │     │          │  │
    │    │DIRECTION │     │  OSINT   │     │   DATA   │  │
    │    └──────────┘     └──────────┘     └────┬─────┘  │
    │          ▲                                │        │
    │          │                                ▼        │
    │    ┌──────────┐     ┌──────────┐     ┌──────────┐  │
    │    │ FEEDBACK │◀────│DISSEMIN- │◀────│ ANALYSIS │  │
    │    │    &     │     │  ATION   │     │    &     │  │
    │    │VALIDATION│     │          │     │PRODUCTION│  │
    │    └──────────┘     └──────────┘     └──────────┘  │
    │                                                     │
    └─────────────────────────────────────────────────────┘
```

---

## 🤖 Los 6 Subagentes Especializados

| Agente | Archivo | Rol | Herramientas |
|--------|---------|-----|--------------|
| **Planning Director** | `planning-director.md` | Define KITs, hipótesis, collection plan | Read, Write, Edit |
| **OSINT Collector** | `osint-collector.md` | Recolección de información pública | WebSearch, WebFetch, Bash |
| **Data Processor** | `data-processor.md` | Normalización y estructuración | Read, Write, Edit, Bash |
| **Strategic Analyst** | `strategic-analyst.md` | ACH, SWOT, Porter, Red Team, Scenarios | Read, Write, Edit |
| **Report Producer** | `report-producer.md` | Genera reporte ejecutivo .docx | Read, Write, Edit, Bash |
| **QA Validator** | `qa-validator.md` | Validación, bias detection, quality | Read, Write, Edit |

### Flujo de Agentes

```
┌─────────────────┐
│    PLANNING     │ → Define qué investigar
│    DIRECTOR     │   (KITs, hipótesis)
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│     OSINT       │ → Busca información
│   COLLECTOR     │   (web search, OSINT)
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│      DATA       │ → Estructura datos
│   PROCESSOR     │   (normaliza, categoriza)
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   STRATEGIC     │ → Analiza con frameworks
│    ANALYST      │   (SWOT, ACH, scenarios)
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│     REPORT      │ → Genera documento
│    PRODUCER     │   (DOCX profesional)
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│       QA        │ → Valida calidad
│   VALIDATOR     │   (bias, gaps, logic)
└─────────────────┘
```

---

## 📊 Técnicas Analíticas Incluidas

### Del Framework CIA:
- **Analysis of Competing Hypotheses (ACH)** - Evalúa hipótesis contra evidencia
- **Linchpin Analysis** - Identifica supuestos críticos
- **Red Team Analysis** - Perspectiva del adversario
- **Scenario Planning** - Best/Most Likely/Worst case

### Frameworks Corporativos:
- **SWOT Analysis** - Fortalezas, Debilidades, Oportunidades, Amenazas
- **Porter's Five Forces** - Competitividad de la industria
- **Risk Matrix** - Impacto x Probabilidad

---

## 📄 Estructura del Reporte Final

```
Corporate Intelligence Assessment: [EMPRESA]
├── Executive Summary
│   ├── BLUF (Bottom Line Up Front)
│   ├── Key Judgments (con confidence levels)
│   └── Recommended Actions
├── Company Overview
├── Financial Intelligence
├── Competitive Positioning
├── Strategic Direction
├── Leadership & Organization
├── Risk Assessment
├── Scenario Analysis
├── Early Warning System
└── Anexos
    ├── Metodología CIA
    ├── Fuentes consultadas
    └── Matrices completas
```

---

## 🔍 Fuentes OSINT Consultadas

### Tier 1 - Oficiales
- Website corporativo
- SEC Filings (10-K, 10-Q, 8-K)
- Earnings calls transcripts
- Press releases

### Tier 2 - Financieras
- Bloomberg, Reuters
- Analyst reports
- Credit ratings

### Tier 3 - Mercado
- Industry reports
- Competitor analysis
- Customer reviews (G2, Trustpilot)
- Employee reviews (Glassdoor)

### Tier 4 - Alternativas
- Patent filings
- Job postings
- Social media
- Conference presentations

---

## ⚙️ Configuración

### Requisitos:
- Claude Code o acceso a Claude con computer use
- Capacidad de web search
- Capacidad de generar archivos .docx

### Variables a personalizar:
- `{{EMPRESA}}` - Nombre de la empresa objetivo
- Profundidad de análisis (Quick/Standard/Deep)
- Industria específica (opcional)
- Competidores a comparar (opcional)

---

## 📈 Variantes de Uso

### 1. Quick Analysis (15 min)
Para decisiones rápidas. SWOT + 3 escenarios básicos.

### 2. Standard Analysis (1 hora)
Ciclo completo con todas las técnicas.

### 3. Deep Dive (2+ horas)
Análisis exhaustivo con múltiples iteraciones del ciclo.

### 4. Comparative Analysis
Dos empresas lado a lado.

### 5. Due Diligence
Enfocado en decisión de inversión/adquisición.

---

## 🛡️ Consideraciones Éticas

Este sistema utiliza únicamente **Open Source Intelligence (OSINT)**:
- ✅ Información pública disponible
- ✅ Fuentes verificables
- ✅ Sin acceso a información privilegiada
- ✅ Cumple con regulaciones de privacidad

---

## 🔗 Referencias

- [CIA Intelligence Cycle](https://www.cia.gov/spy-kids/static/Briefing-intelligence-cycle.pdf)
- [SCIP - Strategic Consortium of Intelligence Professionals](https://www.scip.org/)
- [Analysis of Competing Hypotheses](https://www.cia.gov/resources/csi/studies-in-intelligence/)

---

## ⚡ Slash Commands

| Comando | Uso | Descripción |
|---------|-----|-------------|
| `/cia-analyze` | `/cia-analyze Stripe` | Análisis completo (6 fases, 60+ min) |
| `/quick-intel` | `/quick-intel OpenAI` | Análisis rápido (SWOT + Scenarios, 15 min) |
| `/compare-companies` | `/compare-companies Stripe Square` | Comparación head-to-head |

---

## 🪝 Hooks

| Hook | Evento | Función |
|------|--------|---------|
| `pre-analysis` | PreToolUse (WebSearch) | Crea directorios de trabajo |
| `post-report` | PostToolUse (Write .docx) | Confirmación de generación |

---

## 🎯 Skills

### competitive-intel
Skill automático que se activa cuando Claude detecta:
- Solicitudes de análisis de empresas
- Queries de inteligencia competitiva
- Requests de due diligence
- Comparaciones de mercado

El skill aplica automáticamente:
- Búsqueda estructurada
- Verificación de fuentes
- Frameworks analíticos apropiados
- Formato profesional de output

---

## 📝 Changelog

### v2.0.0 (2025-01-21)
- ✨ Arquitectura completa de Claude Code
- 🤖 6 subagentes especializados en `.claude/agents/`
- ⚡ 3 slash commands en `.claude/commands/`
- 🪝 Hooks de automatización en `.claude/hooks/`
- 🎯 Skill de inteligencia competitiva
- ⚙️ Configuración centralizada en `settings.json`
- 📋 CLAUDE.md con contexto del proyecto

### v1.0.0 (2025-01-21)
- Sistema inicial con prompts
- Documentación básica

---

## 🔗 Referencias

- [CIA Intelligence Cycle](https://www.cia.gov/spy-kids/static/Briefing-intelligence-cycle.pdf)
- [Claude Code Subagents](https://docs.anthropic.com/claude-code/subagents)
- [SCIP - Strategic Consortium of Intelligence Professionals](https://www.scip.org/)

---

*Desarrollado por [HiveAgents.dev](https://hiveagents.dev) - AI Agent Engineering*

*"Transforming organizations with autonomous AI systems"*
