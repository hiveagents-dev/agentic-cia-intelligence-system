# PROMPT ONE-SHOT - CIA Intelligence System

## Uso Rapido
Copia el prompt que necesites y reemplaza `{{EMPRESA}}` o `{{PERSONA}}` con el nombre.

---

## MODO 1: CORPORATE INTELLIGENCE

---

```
Ejecuta un análisis de inteligencia competitiva completo para {{EMPRESA}} siguiendo el CIA Intelligence Cycle.

## FASES A EJECUTAR:

### FASE 1: PLANNING
Define 7 Key Intelligence Topics (KITs) y 5 hipótesis a validar.

### FASE 2: COLLECTION  
Busca información con web_search sobre:
- "[EMPRESA] company overview financials"
- "[EMPRESA] market share competitors 2024"
- "[EMPRESA] strategy CEO vision"
- "[EMPRESA] technology innovation"
- "[EMPRESA] employee reviews culture"
- "[EMPRESA] risks challenges news"
- "[EMPRESA] acquisitions partnerships"

### FASE 3: PROCESSING
Estructura los datos en: FINANCIERO, OPERACIONAL, ESTRATÉGICO, ORGANIZACIONAL, RIESGOS.
Crea timeline de eventos clave.

### FASE 4: ANALYSIS
Aplica estas técnicas:

1. **SWOT Analysis** - Fortalezas, Debilidades, Oportunidades, Amenazas

2. **Porter's Five Forces** - Score 1-5 cada fuerza:
   - Rivalidad existente
   - Nuevos entrantes
   - Poder proveedores
   - Poder clientes  
   - Sustitutos

3. **Red Team** - "Si fuera el competidor, ¿cómo atacaría?"

4. **Scenario Planning**:
   - BEST CASE (probabilidad, condiciones, resultado)
   - MOST LIKELY (probabilidad, condiciones, resultado)
   - WORST CASE (probabilidad, condiciones, resultado)

5. **Early Warning Indicators** - 5 métricas a monitorear

### FASE 5: DISSEMINATION
Genera un documento .docx profesional con:

1. **PORTADA** - Corporate Intelligence Assessment: {{EMPRESA}}

2. **EXECUTIVE SUMMARY** (1 página)
   - BLUF (conclusión en 2 oraciones)
   - 5 Key Judgments con nivel de confianza (HIGH/MEDIUM/LOW)
   - 3 Recommended Actions

3. **COMPANY OVERVIEW** - Descripción, métricas, posición de mercado

4. **FINANCIAL INTELLIGENCE** - Revenue, profitability, tendencias

5. **COMPETITIVE POSITIONING** - Market share, ventajas competitivas

6. **STRATEGIC DIRECTION** - Estrategia declarada vs real, M&A, R&D

7. **RISK ASSESSMENT** - Matriz de riesgos (impacto x probabilidad)

8. **SCENARIO ANALYSIS** - Los 3 escenarios detallados

9. **EARLY WARNING SYSTEM** - Dashboard de indicadores

10. **ANEXOS** - Metodología CIA, fuentes consultadas, SWOT completo

### FASE 6: VALIDATION
Quality check: verifica fuentes, detecta sesgos, confirma que conclusiones fluyen de evidencia.

## ENTREGABLE:
Un documento .docx profesional guardado en ./reports/ con el análisis completo.

Muestra progreso con "📍 FASE [N]" al iniciar cada fase.
Comienza ahora.
```

---

## Ejemplo de Uso

```
Ejecuta un análisis de inteligencia competitiva completo para Stripe siguiendo el CIA Intelligence Cycle.
[... resto del prompt ...]
```

---

## Variantes Corporate

### Version Corta (Quick Analysis)
```
Analiza {{EMPRESA}} usando el CIA Intelligence Cycle:
1. Busca info con web_search (financials, competitors, strategy, risks)
2. Genera SWOT + Porter's Five Forces + 3 Escenarios (best/likely/worst)
3. Crea reporte .docx con Executive Summary, Key Judgments, y Recomendaciones
Guarda en ./reports/
```

### Version Comparativa (vs Competidor)
```
Compara {{EMPRESA_A}} vs {{EMPRESA_B}} usando CIA Intelligence Cycle:
1. Busca info de ambas empresas
2. Genera SWOT comparativo + ventajas competitivas de cada una
3. Analiza quien gana en cada dimension: producto, mercado, finanzas, talento
4. Crea matriz de comparacion y recomendaciones
Guarda reporte .docx en ./reports/
```

### Version Due Diligence (Pre-inversion)
```
Ejecuta due diligence de {{EMPRESA}} para decision de inversion:
1. Busca: financials, unit economics, market size, team, competition, risks
2. Analiza: revenue quality, moat defensibility, scalability, red flags
3. Genera: Investment Thesis + Key Risks + Valuation Considerations
4. Incluye: Go/No-Go recommendation con nivel de confianza
Guarda reporte .docx en ./reports/
```

---

## MODO 2: PERSON INTELLIGENCE

---

### Prompt Completo - Person Analyze

```
Ejecuta una evaluacion profesional completa de {{PERSONA}} siguiendo el Person Intelligence Cycle con validacion etica obligatoria.

## FASES A EJECUTAR:

### FASE 0: CONSENT VALIDATION (obligatorio)
Verifica que este analisis tiene justificacion profesional:
- Es due diligence, hiring, investment research, o evaluacion de liderazgo?
- Solo se usara informacion profesional publica?
- No tiene motivacion personal o invasiva?
Si no pasa la validacion, DETENERSE inmediatamente.

### FASE 1: PLANNING
Define 6 Key Intelligence Topics profesionales:
- KIT-1: Trayectoria y progresion de carrera
- KIT-2: Reputacion publica y percepcion
- KIT-3: Estilo de liderazgo y efectividad
- KIT-4: Red profesional y affiliations
- KIT-5: Thought leadership y presencia digital
- KIT-6: Risk indicators publicos
Formula 3 hipotesis testables.

### FASE 2: COLLECTION (OSINT Etico)
Busca informacion profesional publica:
- "{{PERSONA}}" LinkedIn biography career
- "{{PERSONA}}" CEO OR founder OR executive interview
- "{{PERSONA}}" conference speaker keynote
- "{{PERSONA}}" Forbes OR Bloomberg profile
- "{{PERSONA}}" board member advisor
- "{{PERSONA}}" published article OR opinion
- "{{PERSONA}}" SEC filing proxy statement
NUNCA buscar: domicilio, telefono, familia, salud, finanzas personales.

### FASE 3: PROCESSING
Estructura datos en 6 dimensiones:
1. Career Trajectory (timeline, velocity, pattern)
2. Professional Network (boards, relationships, breadth)
3. Public Reputation (sentiment por fuente)
4. Leadership Style (decision-making, communication, crisis)
5. Thought Leadership (publications, speaking, influence)
6. Risk Indicators (legal, ethical, professional - solo publicos)

### FASE 4: ANALYSIS
Aplica estos frameworks:

1. **Professional SWOT** - 3 items por cuadrante con evidencia

2. **Leadership Assessment Matrix** - Score 1-5 en 8 dimensiones:
   Strategic Vision, Execution, Team Building, Innovation,
   Communication, Crisis Management, Credibility, Board Confidence
   Total: /40 | Archetype: Visionary/Operator/Builder/Turnaround/Steward

3. **Influence Score** - Score 1-5 en 5 factores:
   Network Reach, Content Influence, Decision Influence,
   Industry Standing, Media Visibility
   Total: /25 | Tier: Emerging/Established/Elite/Iconic

4. **Reputation Risk** - 5 factores x probabilidad x impacto
   Overall: LOW/MODERATE/ELEVATED/HIGH

5. **Career Trajectory Scenarios**:
   - ASCENT (probabilidad, condiciones, indicadores)
   - STABILITY (probabilidad, condiciones, indicadores)
   - DECLINE (probabilidad, condiciones, indicadores)

### FASE 5: REPORT
Genera documento .docx profesional con:
- Executive Summary con BLUF
- Professional Profile
- Professional SWOT
- Leadership Assessment Matrix
- Influence Network Analysis
- Reputation Risk
- Career Trajectory Scenarios
- Key Judgments con confidence levels
- Recommendations

### FASE 6: VALIDATION
Quality check: verifica fuentes publicas, detecta sesgos, confirma compliance etico.

## ENTREGABLE:
Documento .docx profesional guardado en ./reports/

Muestra progreso con "FASE [N]" al iniciar cada fase.
Comienza ahora con FASE 0: Consent Validation.
```

---

### Version Corta - Quick Person
```
Evaluacion rapida de {{PERSONA}}:
1. Verifica justificacion profesional (si no es profesional, detener)
2. Busca info profesional publica (LinkedIn, news, conferencias, boards)
3. Genera Professional SWOT (3 items por cuadrante con evidencia)
4. Score de liderazgo 1-5 en: Vision, Execution, Credibility, Communication, Innovation
5. Top 5 recomendaciones accionables
Guarda en ./reports/
```

### Version Executive Hiring
```
Evaluacion de {{PERSONA}} para posicion ejecutiva:
1. Consent: confirmar que es evaluacion de hiring profesional
2. Busca: career history, leadership track record, reputation, red flags
3. Analiza: leadership fit, culture alignment, execution capability, risk factors
4. Genera: Hire/No-Hire recommendation con confidence level
5. Incluye: onboarding considerations y areas to probe in interview
Guarda reporte .docx en ./reports/
```

### Version Board Assessment
```
Evaluacion de {{PERSONA}} para posicion en Board of Directors:
1. Consent: confirmar que es due diligence para board seat
2. Busca: governance experience, industry expertise, network, reputation
3. Analiza: independence, expertise gaps filled, fiduciary risk, conflicts
4. Genera: Recommend/Caution/Reject con justificacion
Guarda reporte .docx en ./reports/
```

---

*HiveAgents.dev - AI Agent Engineering*
