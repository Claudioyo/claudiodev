---
name: implementation-plan
description: Create a safe, incremental implementation plan from an approved ClaudioDev specification. Use when the user requests a development plan before coding.
---

# Implementation Plan — CDF 1.3.0

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
7. Divide implementation into cohesive tasks by actual dependencies and risk
   boundaries; do not split merely by file/card or inflate a small change.
8. Map every AC to tasks and planned checks using CORE N-12/N-18. Apply N-10:
   declare mandatory checks, conditions activating conditional checks and
   justified non-applicability. Distinguish application effects from file type.
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

Write in Spanish using CORE N-18's complete minimum PLAN format and N-06's
proportional detail. Identify plan ID/version/DRAFT status, approved SPEC and
current baseline, objective, scope/exclusions, files, cohesive TASK IDs,
dependencies, completion criteria and AC-to-task-to-check traceability.

Describe TEST strategy, environment, commands, required artifacts/effects,
risks, stops, proposed recovery (without executing it), and human milestones
for large changes. Preserve frontend/generated instructions and preexisting work.
Distinguish automated checks from manual checks in the TEST strategy, stating
what evidence is expected from each. Preserve the authorization boundaries and
activation conditions for conditional checks already specified below.
List open decisions or "Ninguna" and recommend whether PLAN is ready for approval.

Use the full nine-field authorization block in CORE N-07 by reference to its
canonical format. Fill every field; justify non-applicability. Enumerate editing
boundaries, commands/inspections, outputs, network/server effects, stops,
validity and exclusions. Keep plan approval and execution authorization in
separate fields, even if explicitly granted in the same human instruction.

For documentary/Skill-only changes without application generation effects,
plan normative/static checks without application build. For application changes,
apply CORE N-10's mandatory-by-default build and relevant lint/types/behavior/UI
checks; any permitted exception follows N-11. Inspect existing scripts before
proposing their execution; missing tools never authorize installation.

PLAN may remain conversational when N-06 permits. Normative framework changes
require identified, versioned persistent SPEC and PLAN before BUILD, with
explicit writing permission. Do not copy SPEC's full approved wording into PLAN.

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

Present PLAN for explicit approval; do not implement. Approval does not grant
execution permission. A subsequent stage requires CORE N-05/N-07 inputs and
sufficient authorization; preserve required milestones and N-14 stops.
