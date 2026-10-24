---
name: feature-spec
description: Create a clear, testable specification for a ClaudioDev feature or correction before implementation. Use when defining requirements, scope, acceptance criteria, or expected behavior.
---

# Feature Spec — CDF 1.3.0

- **Individual version:** 1.0.0 (initial explicit individual version).
- **Documentary antecedent:** previous heading CDF 1.0; this identifies the
  historical framework, not an inferred individual Skill version.
- **Compatibility:** CDF 1.3.0 exactly; CONFIRMED in the documentary/static scope
  of TEST-001 and REVIEW-001. No future version range is assumed.
- **Status:** ACCEPTED AND OPERATIONAL within that verified scope.
- **Human acceptance — 2026-10-24 / H3-ACCEPT-01:** H3 approved; compatibility
  is documentary/static only, without a guarantee of universal future agent
  behavioral compliance. Individual version remains 1.0.0.
- **Change record — 2026-10-24 / BUILD-002:** initial individual versioning,
  mandatory full CORE loading and role-specific adaptation under CDF-PLAN-003
  TASK-002/TASK-003. Preserve prior Git/documentary history; no prior individual
  versions are invented. Unexpected contradictory history requires reassessment.

## Required initial CORE loading — before operating

1. Locate this exact `SKILL.md` and its containing directory. Resolve
   `../../../docs/cdf/CDF-CORE.md` exclusively from that directory, NEVER from
   the terminal working directory. The destination must be the same repository's
   `<root>/docs/cdf/CDF-CORE.md`; contrast the repository root with Git when
   available. If repository identity is ambiguous, stop the dependent operation.
2. Read applicable `AGENTS.md` instructions and read the CORE IN FULL before
   this Skill's substantive procedure. A link, remembered summary, title or
   partial/truncated output is not a complete reading. Complete the reading
   before proceeding; after context loss, load it again. Reuse a reading only
   when its full content is available and its identified revision remains current.
3. Check CORE identity `ClaudioDev Development Framework — CDF` and its declared
   normative target `1.3.0` against this Skill's exact compatibility declaration.
   Stop the dependent operation if CORE is missing, unreadable, incomplete,
   truncated or incompatible, or conflicts with higher instructions. Do not
   create, download, replace or silently select another CORE to bypass the stop.
4. Apply CORE N-01/N-02 within the platform's effective instruction hierarchy.
   Only initialization reads needed to locate instructions and CORE precede
   this gate. Record the resolved CORE path, version and identified revision,
   this Skill's individual version and the applicable authorization in the report.
5. Use this Skill only within explicit authorized scope;
   loading it does not activate CDF 1.3.0 or authorize another stage. CORE's
   BUILD-001 delivery descriptions are historical; later explicit decisions
   must be read without rewriting that history. Preserve H1/H2/H3 gates and
   CORE N-14 stops. No checked compatibility or operational status may be
   declared before TEST, REVIEW and final human acceptance.

Common rules live only in [CDF-CORE](../../../docs/cdf/CDF-CORE.md). Apply its
N-03/N-04 (impact), N-05/N-07 (stages and authorization), N-06 (documentation),
N-09 (competences), N-10/N-11 (checks and exceptions), N-12/N-13 (evidence),
N-14/N-15 (stops and human decisions) and N-16 (version history). This loading
block is an instruction to READ that source, not a substitute copy of its rules.

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
10. Confirm SCAN's impact level and reasons under CORE N-03/N-04; identify
    consumers and uncertainty. Do not lower the level implicitly.
11. Map REQ to verifiable AC, distinguish approval from permissions, and
    present the identified specification for explicit approval.

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

Write in Spanish using the complete minimum format in CORE N-17, with detail
proportional to N-06. Keep type, identity, version, DRAFT/current status,
priority and justified impact explicit. Preserve numbered REQ and verifiable AC
with their correspondence, verified behavior, scope/exclusions, risks,
assumptions, dependencies, restrictions and open decisions (or "Ninguna").

Use DRAFT until an explicit approval identifies the accepted revision. Read
later decisions against the historical record; never rewrite past execution.
Keep one approved wording reference location for PLAN to cite.

SPEC may remain conversational where N-06 allows. Framework normative changes
require persistent, versioned documents before implementation and explicit
writing authorization. Approval alone authorizes neither saving nor BUILD.

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

Deliver SPEC for explicit approval before PLAN. Do not implement. Transitions
require CORE N-05/N-07 inputs and sufficient existing authorization; do not
ask again for a sufficient permission or bypass a mandatory stop.
