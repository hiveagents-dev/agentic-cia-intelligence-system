#!/usr/bin/env node

/**
 * Safe GitHub CLI Helper
 * Prevents timeout issues when using gh commands with special characters
 *
 * Usage:
 *   ./github-safe.js issue comment 123 "Message with `backticks`"
 *   ./github-safe.js pr create --title "Title" --body "Complex body"
 */

const { execFileSync } = require('child_process');
const { writeFileSync, unlinkSync } = require('fs');
const { tmpdir } = require('os');
const { join } = require('path');
const { randomBytes } = require('crypto');

const ALLOWED_COMMANDS = ['issue', 'pr', 'repo', 'release', 'gist', 'api'];
const ALLOWED_SUBCOMMANDS = ['comment', 'create', 'list', 'view', 'edit', 'close', 'merge', 'diff', 'checks'];

function validateCommand(cmd) {
  if (!ALLOWED_COMMANDS.includes(cmd)) {
    console.error(`Error: Unknown command "${cmd}". Allowed: ${ALLOWED_COMMANDS.join(', ')}`);
    process.exit(1);
  }
}

const args = process.argv.slice(2);

if (args.length < 2) {
  console.log(`
Safe GitHub CLI Helper

Usage:
  ./github-safe.js issue comment <number> <body>
  ./github-safe.js pr comment <number> <body>
  ./github-safe.js issue create --title <title> --body <body>
  ./github-safe.js pr create --title <title> --body <body>

This helper prevents timeout issues with special characters like:
- Backticks in code examples
- Command substitution $(...)
- Directory paths
- Special shell characters
`);
  process.exit(1);
}

const [command, subcommand, ...restArgs] = args;

validateCommand(command);

// Handle commands that need body content
if ((command === 'issue' || command === 'pr') &&
    (subcommand === 'comment' || subcommand === 'create')) {

  let bodyIndex = -1;
  let body = '';

  if (subcommand === 'comment' && restArgs.length >= 2) {
    // Simple format: github-safe.js issue comment 123 "body"
    body = restArgs[1];
    bodyIndex = 1;
  } else {
    // Flag format: --body "content"
    bodyIndex = restArgs.indexOf('--body');
    if (bodyIndex !== -1 && bodyIndex < restArgs.length - 1) {
      body = restArgs[bodyIndex + 1];
    }
  }

  if (body) {
    // Use temporary file for body content
    const tmpFile = join(tmpdir(), `gh-body-${randomBytes(8).toString('hex')}.tmp`);

    try {
      writeFileSync(tmpFile, body, 'utf8');

      // Build new command with --body-file
      const newArgs = [...restArgs];
      if (subcommand === 'comment' && bodyIndex === 1) {
        // Replace body with --body-file
        newArgs[1] = '--body-file';
        newArgs.push(tmpFile);
      } else if (bodyIndex !== -1) {
        // Replace --body with --body-file
        newArgs[bodyIndex] = '--body-file';
        newArgs[bodyIndex + 1] = tmpFile;
      }

      // Execute safely using execFileSync (no shell interpolation)
      execFileSync('gh', [command, subcommand, ...newArgs], {
        stdio: 'inherit',
        timeout: 30000
      });

    } catch (error) {
      console.error('Error:', error.message);
      process.exit(1);
    } finally {
      // Clean up
      try {
        unlinkSync(tmpFile);
      } catch (e) {
        // Ignore cleanup errors
      }
    }
  } else {
    // No body content, execute normally
    execFileSync('gh', args, { stdio: 'inherit' });
  }
} else {
  // Other commands, execute normally
  execFileSync('gh', args, { stdio: 'inherit' });
}
