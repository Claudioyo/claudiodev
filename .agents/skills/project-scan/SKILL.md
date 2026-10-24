---
name: project-scan
description: Inspect the ClaudioDev repository and report its architecture, status, risks, and recommended next steps without modifying files.
---

# Project Scan — CDF 1.3.0

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
9. Propose the impact level with reasons, affected consumers and uncertainty
   under CORE N-03. Identify N-04 escalation triggers; use the highest risk,
   not file or line count. Elevation does not grant permissions.
10. Recommend a small, prioritized next step without authorizing execution.

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

Distinguish verified facts from assumptions. Keep the report proportional under
CORE N-06: sections may be combined, but retain baseline, scope, consumers,
impact justification, risks, evidence limits, Git state and proposed next step.
Identify unavailable evidence rather than implying a comprehensive audit.

## Completion criteria

The audit is complete when the report is delivered
without changing the repository.
