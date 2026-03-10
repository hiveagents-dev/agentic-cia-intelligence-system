#!/usr/bin/env bash
# ═══════════════════════════════════════════════════════════════════════════════
# CIA INTELLIGENCE CYCLE - SETUP SCRIPT
# HiveAgents.dev - AI Agent Engineering
# ═══════════════════════════════════════════════════════════════════════════════
#
# Este script configura el sistema de inteligencia competitiva para Claude Code
#
# USO: ./setup.sh [target-directory]
#
# ═══════════════════════════════════════════════════════════════════════════════

set -e

# Colores
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m'

# Banner
echo -e "${PURPLE}"
echo "═══════════════════════════════════════════════════════════════════════════════"
echo "                    🕵️ CIA INTELLIGENCE CYCLE SYSTEM"
echo "                           Setup & Installation"
echo "═══════════════════════════════════════════════════════════════════════════════"
echo -e "${NC}"

# Directorio destino
TARGET_DIR="${1:-.}"

echo -e "${CYAN}Target directory:${NC} $TARGET_DIR"
echo ""

# Verificar estructura
echo -e "${YELLOW}📁 Verificando estructura...${NC}"

REQUIRED_FILES=(
    "CLAUDE.md"
    ".claude/agents/planning-director.md"
    ".claude/agents/osint-collector.md"
    ".claude/agents/data-processor.md"
    ".claude/agents/strategic-analyst.md"
    ".claude/agents/report-producer.md"
    ".claude/agents/qa-validator.md"
    ".claude/commands/cia-analyze.md"
    ".claude/commands/quick-intel.md"
    ".claude/commands/compare-companies.md"
    ".claude/hooks/pre-analysis.json"
    ".claude/hooks/post-report.json"
    ".claude/skills/competitive-intel/SKILL.md"
    ".claude/settings.json"
)

MISSING=0
for file in "${REQUIRED_FILES[@]}"; do
    if [ -f "$TARGET_DIR/$file" ]; then
        echo -e "  ${GREEN}✓${NC} $file"
    else
        echo -e "  ${RED}✗${NC} $file (MISSING)"
        MISSING=$((MISSING + 1))
    fi
done

echo ""

if [ $MISSING -gt 0 ]; then
    echo -e "${RED}❌ $MISSING archivos faltantes. Verifica la instalación.${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Todos los archivos están presentes.${NC}"
echo ""

# Crear directorios de trabajo
echo -e "${YELLOW}📂 Creando directorios de trabajo...${NC}"
mkdir -p /tmp/cia-analysis
echo -e "  ${GREEN}✓${NC} /tmp/cia-analysis"

# Verificar permisos
echo ""
echo -e "${YELLOW}🔐 Verificando permisos...${NC}"
if [ -w "/tmp/cia-analysis" ]; then
    echo -e "  ${GREEN}✓${NC} Directorio de trabajo escribible"
else
    echo -e "  ${RED}✗${NC} No se puede escribir en /tmp/cia-analysis"
fi

# Resumen
echo ""
echo -e "${GREEN}═══════════════════════════════════════════════════════════════════════════════${NC}"
echo -e "${GREEN}                        ✅ SETUP COMPLETADO${NC}"
echo -e "${GREEN}═══════════════════════════════════════════════════════════════════════════════${NC}"
echo ""
echo -e "${CYAN}Componentes instalados:${NC}"
echo "  • 6 Subagentes especializados"
echo "  • 3 Slash commands"
echo "  • 2 Hooks de automatización"
echo "  • 1 Skill de inteligencia competitiva"
echo ""
echo -e "${CYAN}Uso:${NC}"
echo "  1. Abre Claude Code en este directorio"
echo "  2. Ejecuta: /cia-analyze [nombre-empresa]"
echo ""
echo -e "${CYAN}Comandos disponibles:${NC}"
echo "  /cia-analyze [company]        - Análisis completo"
echo "  /quick-intel [company]        - Análisis rápido"
echo "  /compare-companies [A] [B]    - Comparación"
echo ""
echo -e "${PURPLE}HiveAgents.dev - AI Agent Engineering${NC}"
echo ""
