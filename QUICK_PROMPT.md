# 🎯 PROMPT ONE-SHOT - CIA Intelligence Analysis

## Uso Rápido
Copia este prompt y reemplaza `{{EMPRESA}}` con el nombre de la empresa a investigar.

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
Un documento .docx profesional guardado en /mnt/user-data/outputs/ con el análisis completo.

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

## Variantes del Prompt

### Versión Corta (Quick Analysis)
```
Analiza {{EMPRESA}} usando el CIA Intelligence Cycle:
1. Busca info con web_search (financials, competitors, strategy, risks)
2. Genera SWOT + Porter's Five Forces + 3 Escenarios (best/likely/worst)
3. Crea reporte .docx con Executive Summary, Key Judgments, y Recomendaciones
Guarda en /mnt/user-data/outputs/
```

### Versión Comparativa (vs Competidor)
```
Compara {{EMPRESA_A}} vs {{EMPRESA_B}} usando CIA Intelligence Cycle:
1. Busca info de ambas empresas
2. Genera SWOT comparativo + ventajas competitivas de cada una
3. Analiza quién gana en cada dimensión: producto, mercado, finanzas, talento
4. Crea matriz de comparación y recomendaciones
Guarda reporte .docx en /mnt/user-data/outputs/
```

### Versión Due Diligence (Pre-inversión)
```
Ejecuta due diligence de {{EMPRESA}} para decisión de inversión:
1. Busca: financials, unit economics, market size, team, competition, risks
2. Analiza: revenue quality, moat defensibility, scalability, red flags
3. Genera: Investment Thesis + Key Risks + Valuation Considerations
4. Incluye: Go/No-Go recommendation con nivel de confianza
Guarda reporte .docx en /mnt/user-data/outputs/
```

---

*HiveAgents.dev - AI Agent Engineering*
