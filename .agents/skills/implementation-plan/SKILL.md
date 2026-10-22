
---
name: implementation-plan
description: Create a safe, incremental implementation plan from an approved ClaudioDev specification. Use when the user requests a development plan before coding.
---

# Implementation Plan — CDF 1.0

## Purpose

Convert an approved specification into a clear,
incremental and verifiable implementation plan.

This skill defines HOW to implement approved requirements.

Do not implement the plan.

## Required inputs

- An approved specification.
- Confirmed decisions and acceptance criteria.
- Current repository state.
- Applicable AGENTS.md instructions.

If the specification is missing or not approved,
stop and request clarification.

## Procedure

1. Read the root AGENTS.md.
2. Read relevant project instructions.
3. Review the approved specification.
4. Inspect the files relevant to the requested changes.
5. Identify the smallest practical implementation scope.
6. Map requirements to affected files.
7. Divide the implementation into small ordered tasks.
8. Define verification steps for each task.
9. Identify dependencies, risks and possible regressions.
10. Present the plan for developer approval.

## Safety rules

- Do not modify, create, rename or delete files.
- Do not install dependencies.
- Do not execute commands that write files.
- Do not run git add, commit, push, reset or clean.
- Do not deploy or publish.
- Do not expose secrets.
- Do not begin implementation without explicit approval.
- Do not expand the approved specification.

## Output format

Write the plan in Spanish.

### 1. Identification

- Plan ID:
- Related specification:
- Status: DRAFT
- Objective:

### 2. Verified current state

Summarize the relevant repository findings.

### 3. Scope and affected files

List the files that need modification
and explain why each one is necessary.

### 4. Requirement mapping

Map each approved REQ and AC to the
implementation tasks that address them.

### 5. Implementation tasks

For every task include:

- Task ID: TASK-001, TASK-002, etc.
- Objective.
- Files affected.
- Proposed changes.
- Dependencies.
- Verification steps.
- Completion criteria.

Order tasks by dependencies and risk.

### 6. Verification strategy

Describe appropriate checks, such as:

- TypeScript validation.
- ESLint.
- Production build.
- Browser inspection.
- Responsive and accessibility checks.

Distinguish automated checks from manual checks.

### 7. Risks and rollback

Identify possible regressions and explain
how to revert changes safely using Git.

Do not execute rollback commands.

### 8. Open questions

List unresolved decisions.

If none exist, state "Ninguna".

### 9. Recommendation

State whether the plan is ready for approval.

## Quality rules

- Prefer small, focused changes.
- Preserve the Coffee Tech visual identity.
- Reuse existing components.
- Avoid unnecessary dependencies.
- Avoid speculative refactoring.
- Never claim tests have passed before running them.
- Keep implementation tasks understandable
  to a developer who is learning.

## Completion criteria

The task is complete when a DRAFT plan
has been presented without modifying the repository.

Wait for explicit approval before implementation.
