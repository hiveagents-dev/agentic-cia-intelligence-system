#!/usr/bin/env node
/**
 * Claude Flow Agent Router
 * Routes tasks to optimal agents based on learned patterns
 */

const AGENT_CAPABILITIES = {
  // CIA Intelligence Cycle agents
  'planning-director': ['intelligence-planning', 'kits', 'hypotheses', 'collection-plan'],
  'osint-collector': ['osint', 'data-collection', 'source-gathering', 'web-search'],
  'data-processor': ['data-processing', 'normalization', 'categorization', 'timeline'],
  'strategic-analyst': ['strategic-analysis', 'swot', 'porters', 'ach', 'scenario-planning'],
  'report-producer': ['report-generation', 'executive-report', 'docx', 'intelligence-report'],
  'qa-validator': ['quality-assurance', 'source-verification', 'bias-detection', 'validation'],
  // Person Intelligence agents
  'consent-validator': ['consent', 'ethics', 'permission', 'person-validation'],
  'person-planner': ['person-planning', 'individual-research', 'person-kits'],
  'person-osint': ['person-osint', 'person-collection', 'individual-data'],
  'person-processor': ['person-processing', 'individual-data-processing'],
  'person-analyst': ['person-analysis', 'leadership-assessment', 'person-swot'],
  // General development agents
  coder: ['code-generation', 'refactoring', 'debugging', 'implementation'],
  tester: ['unit-testing', 'integration-testing', 'coverage', 'test-generation'],
  reviewer: ['code-review', 'security-audit', 'quality-check', 'best-practices'],
  researcher: ['web-search', 'documentation', 'analysis', 'summarization'],
  architect: ['system-design', 'architecture', 'patterns', 'scalability'],
  'backend-dev': ['api', 'database', 'server', 'authentication'],
  'frontend-dev': ['ui', 'react', 'css', 'components'],
  devops: ['ci-cd', 'docker', 'deployment', 'infrastructure'],
};

const TASK_PATTERNS = {
  // CIA Intelligence Cycle patterns (must be before generic patterns)
  'intelligence|cia|competitive intelligence|due diligence': 'planning-director',
  'osint|collect data|gather sources|open source intelligence': 'osint-collector',
  'process data|normalize|categorize|structure data': 'data-processor',
  'swot|porter|five forces|scenario|red team|ach|hypothesis': 'strategic-analyst',
  'generate report|produce report|docx|executive summary': 'report-producer',
  'validate report|qa|quality assurance|verify sources|bias': 'qa-validator',

  // Person Intelligence patterns
  'person analyze|person intelligence|individual assessment|leadership assessment': 'consent-validator',
  'person osint|person collect|individual sources': 'person-osint',
  'person process|individual data structure': 'person-processor',
  'person swot|leadership analysis|person scenario|person analyst': 'person-analyst',
  'person plan|individual research plan|person kits': 'person-planner',

  // Code patterns
  'implement|create|build|add|write code': 'coder',
  'test|spec|coverage|unit test|integration': 'tester',
  'review|audit|check|validate|security': 'reviewer',
  'research|find|search|documentation|explore': 'researcher',
  'design|architect|structure|plan': 'architect',

  // Domain patterns
  'api|endpoint|server|backend|database': 'backend-dev',
  'ui|frontend|component|react|css|style': 'frontend-dev',
  'deploy|docker|ci|cd|pipeline|infrastructure': 'devops',
};

function sanitizeCompanyName(name) {
  if (!name || typeof name !== 'string') return null;
  // Reject names with shell metacharacters or path traversal
  if (/[;&|`$(){}[\]<>!\\\n\r]/.test(name)) return null;
  if (/\.\./.test(name)) return null;
  const sanitized = name.trim().slice(0, 200);
  return sanitized.length === 0 ? null : sanitized;
}

function routeTask(task) {
  const taskLower = task.toLowerCase();

  // Check patterns
  for (const [pattern, agent] of Object.entries(TASK_PATTERNS)) {
    const regex = new RegExp(pattern, 'i');
    if (regex.test(taskLower)) {
      return {
        agent,
        confidence: 0.8,
        reason: `Matched pattern: ${pattern}`,
      };
    }
  }

  // Default to coder for unknown tasks
  return {
    agent: 'coder',
    confidence: 0.5,
    reason: 'Default routing - no specific pattern matched',
  };
}

// CLI
const task = process.argv.slice(2).join(' ');

if (task) {
  const result = routeTask(task);
  console.log(JSON.stringify(result, null, 2));
} else {
  console.log('Usage: router.js <task description>');
  console.log('\nAvailable agents:', Object.keys(AGENT_CAPABILITIES).join(', '));
}

module.exports = { routeTask, sanitizeCompanyName, AGENT_CAPABILITIES, TASK_PATTERNS };
