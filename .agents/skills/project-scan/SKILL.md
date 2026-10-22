
---
name: project-scan
description: Inspect the ClaudioDev repository and report its architecture, status, risks, and recommended next steps without modifying files.
---

# Project Scan — CDF 1.0

## Purpose

Perform a read-only technical audit of ClaudioDev.com.

## Procedure

1. Read the root AGENTS.md instructions.
2. Inspect the repository structure.
3. Read the relevant frontend AGENTS.md instructions.
4. Identify frameworks, languages, and dependencies.
5. Review important configuration and source files.
6. Check Git status without modifying the repository.
7. Identify implemented, incomplete, and planned features.
8. Detect obvious architectural risks and maintenance issues.
9. Recommend a small, prioritized next step.

## Safety rules

- Do not modify, create, rename, or delete files.
- Do not install or update dependencies.
- Do not execute build scripts or commands that write files.
- Do not run git add, commit, push, reset, or clean.
- Do not read or expose secrets.
- Do not inspect node_modules or .next recursively.
- If additional verification requires modifying files, ask first.

## Output format

Write the report in Spanish.

Include:

1. Project overview.
2. Technology stack.
3. Repository structure.
4. Implemented functionality.
5. Incomplete or planned functionality.
6. Risks and technical observations.
7. Git status.
8. Three prioritized recommendations.

Distinguish verified facts from assumptions.

## Completion criteria

The audit is complete when the report is delivered
without changing the repository.
