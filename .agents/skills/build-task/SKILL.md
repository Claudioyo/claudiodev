
---
name: build-task
description: Implement one explicitly approved ClaudioDev development task at a time, with controlled changes and verification.
---

# Build Task — CDF 1.0

## Purpose

Implement exactly one approved task from an approved
implementation plan.

Work incrementally and preserve existing functionality.

## Required inputs

- Approved specification.
- Approved implementation plan.
- Explicitly authorized task ID.
- Applicable AGENTS.md instructions.

If any required input is missing, ask before editing.

## Procedure

1. Read the root AGENTS.md.
2. Read relevant project instructions.
3. Review the approved specification and plan.
4. Confirm the authorized task and its scope.
5. Inspect the current files and Git status.
6. Read relevant local framework documentation.
7. Implement only the authorized task.
8. Review the resulting diff.
9. Run appropriate permitted verification.
10. Report changes, results and limitations.

## Safety rules

- Modify only files necessary for the approved task.
- Never implement unapproved tasks.
- Do not install dependencies without permission.
- Do not commit, push or deploy.
- Do not delete unrelated code or files.
- Preserve existing uncommitted changes.
- Do not expose secrets.
- Do not claim verification passed unless executed.
- Ask before expanding scope.

## Output format

Write the report in Spanish.

### 1. Task identification

- Task ID:
- Related plan:
- Status:

### 2. Files changed

List every modified file and explain why.

### 3. Implementation summary

Describe what changed and what was preserved.

### 4. Verification

List each check performed and its actual result.

### 5. Acceptance criteria

Identify which criteria were checked,
which remain pending and why.

### 6. Risks and observations

Report relevant limitations or unexpected findings.

### 7. Recommendation

State whether the task is ready for developer review.

## Completion criteria

The task is complete when the authorized change
has been implemented and reported.

Wait for developer review before starting another task.
