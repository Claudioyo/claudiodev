
---
name: feature-spec
description: Create a clear, testable specification for a ClaudioDev feature or correction before implementation. Use when defining requirements, scope, acceptance criteria, or expected behavior.
---

# Feature Spec — CDF 1.0

## Purpose

Transform a requested feature, improvement, or bug fix
into a clear specification before implementation.

This skill defines WHAT must be achieved, not HOW to code it.

## Project context

ClaudioDev.com is a professional developer portfolio
focused on web development, automation, REST APIs,
business software, and practical AI solutions.

The project uses a Coffee Tech visual identity.

Always distinguish implemented features from mockups,
planned features, and experimental demonstrations.

## Procedure

1. Read the root AGENTS.md.
2. Understand the user's request.
3. Inspect only the relevant existing project files.
4. Identify the current behavior.
5. Define the desired behavior.
6. Establish what is included and excluded.
7. Write clear functional and quality requirements.
8. Define verifiable acceptance criteria.
9. Identify risks, assumptions, and open questions.
10. Present the specification for developer approval.

## Safety rules

- Do not modify source code.
- Do not create or modify project files.
- Do not install dependencies.
- Do not execute commands that write to disk.
- Do not commit, push, or deploy.
- Do not implement the proposed solution.
- Never invent existing features or test results.
- Ask for clarification when a decision is essential.

## Specification format

Write the specification in Spanish.

### 1. Identification

- Feature name:
- Type: feature / improvement / bug fix
- Status: DRAFT
- Priority:

### 2. Problem

Describe the current problem and its impact.

### 3. Objective

Describe the desired outcome.

### 4. Current state

Summarize relevant verified existing behavior.

### 5. Scope

IN SCOPE:
- What the work must include.

OUT OF SCOPE:
- What the work must not include.

### 6. Requirements

List numbered requirements:

- REQ-001
- REQ-002
- REQ-003

Requirements must be specific and unambiguous.

### 7. Acceptance criteria

List observable conditions:

- AC-001
- AC-002
- AC-003

Each criterion must be objectively verifiable.

### 8. Risks and dependencies

Identify relevant risks, constraints,
and dependencies.

### 9. Open questions

List decisions requiring developer input.

If none exist, state "Ninguna".

### 10. Recommendation

Explain whether the specification is ready
for approval or needs clarification.

## Quality rules

- Prefer simple solutions.
- Avoid unnecessary complexity.
- Preserve existing Coffee Tech identity.
- Respect accessibility and responsive design.
- Do not propose features outside the requested scope.
- Clearly separate facts from assumptions.
- Do not prescribe implementation details unnecessarily.

## Completion criteria

The task is complete when a DRAFT specification
has been presented without modifying the repository.

Wait for explicit approval before implementation.
