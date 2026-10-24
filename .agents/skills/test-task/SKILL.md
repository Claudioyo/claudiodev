---
name: test-task
description: Verify an implemented ClaudioDev task against acceptance criteria after BUILD or a correction, and deliver reproducible evidence to REVIEW without applying fixes or approving tasks.
---

# Test Task — CDF 1.3.0

- **Individual version:** 1.0.0 (initial explicit individual version).
- **Documentary antecedent:** previous heading CDF 1.1; this identifies the
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

## Purpose and invocation

Verify an authorized implementation and relevant regressions. Deliver evidence
to REVIEW; do not implement corrections or grant task acceptance.

Use after BUILD, after an authorized fix, or for a requested audit of an
implemented task. Do not substitute TEST for specification, planning,
implementation, or human approval.

## Required inputs

- Authorized task ID and verification scope.
- Applicable AGENTS.md instructions, approved specification and plan,
  acceptance criteria, and subsequent approved decisions.
- Implemented commit or working-tree diff; BUILD report when available.
- Target environment and URL when browser checks apply.
- Execution permissions, including any permission covering build, server
  startup, or persistent artifacts.

Resolve current decisions against historical records; an old pending status
does not override an explicit later approval. If essential inputs are missing
or contradictory, ask about dependent checks and continue useful independent
checks within scope. Preserve existing changes; a dirty tree alone does not
block verification.

## Authorization and execution effects

Apply the actual authorization boundaries in CORE N-07/N-09/N-14. A stage name
or document approval alone is not a command/effect permission. Match proposed
checks, paths, environment, outputs and transitions to the existing explicit
scope; reuse sufficient permissions without asking again. Persistent reports,
artifacts, build/server output and network effects must be covered explicitly.

Inspect scripts/effects before execution and resolve shared-output conflicts
within authorization; never stop unrelated processes. Missing tools or permissions
do not make mandatory checks optional: classify under CORE's TEST states with
reason and next step. Do not install, repair configuration or silently retry
with changed effects. Report each authorized attempt and actual exit code.

## Procedure

1. Read root and relevant frontend instructions, specification, plan, current
   decisions, and BUILD report. Consult installed framework documentation when
   relevant to the checks.
2. Record branch, HEAD, baseline, tracked/untracked changes, and target files.
   Identify the actual diff under test, including uncommitted changes.
3. Map applicable AC to checks selected by change type and impact. Identify
   mandatory and conditional checks, execution permissions, and unavailable tools.
4. Inspect current package scripts and configuration. Use installed tools;
   do not assume a test framework or browser connection exists.
5. Execute permitted automatic checks without fix options. Capture actual
   completion and exit codes, not merely successful command startup.
6. Inspect affected browser flows and visual states when applicable. Identify
   development, production, or deployed environment and ensure it represents
   the tested implementation. Reload when needed.
7. Attribute human evidence to the user with stated environment, scope, result,
   and limitations. Do not invent missing details or claim agent execution.
8. Classify results and incidents. Separate product defects from tooling,
   environment, permission, and external-resource failures.
9. Compare final Git state with the baseline. Report generated or unexpected
   files without deleting, reverting, staging, or fixing them. Restore temporary
   browser settings when possible; report failed restoration.
10. Deliver the Spanish report and REVIEW handoff in the conversation. Observe
    human milestones and N-14 stops. REVIEW may follow with failed/incomplete
    evidence only if already authorized under N-07/N-08; do not update files,
    initiate corrections or treat that transition as a favorable recommendation.

## Test selection matrix

Apply checks proportionally to the change and approved plan. Include affected
shared-component consumers in regression coverage.

| Change | Required applicable checks | Conditional checks |
|---|---|---|
| Any task | Git baseline/final state, scope/diff inspection, AC mapping, limitations | New-file and artifact inspection |
| Documentation or Skills only, without application generation effects | Consistency, references, authorization boundaries, traceability, diff formatting; no application build (CORE N-10) | Existing validator only when available, applicable and authorized |
| Frontend source, including JSX text | Build mandatory by default under CORE N-10, plus applicable ESLint and TypeScript without emission | Additional checks by risk; build exceptions only under N-11 |
| Visible UI or text | Actual browser inspection, affected content, wrapping, responsive layout | Keyboard, contrast, shared-component regression according to impact |
| Navigation or interaction | Destinations, relevant states, keyboard activation, visible focus | Mobile menu, closing behavior, focus recovery |
| Colors or transparency | Effective text/background contrast and affected interactive states | Sticky overlays over light/dark sections and compositing variations |
| Legibility, layout, or navigation | Real 200% browser zoom and reflow/navigation inspection | Attributed human validation if agent tools cannot verify actual zoom |
| Metadata, routes, Next.js configuration or integration | Build and generated output inspection | Production startup and HTML inspection when authorized |
| Functional logic | Relevant expected, boundary, failure cases and existing affected tests | Unit/integration/E2E execution only with available infrastructure |

Apply CORE N-10 uniformly: application code/interface changes require build by
default; critical/large application changes require risk-based expanded checks.
Documentation feeding generated routes/content is treated by application effect.
Only N-11 admits a human evidence/build exception; never relabel an unexecuted
check as PASA or waive a confirmed AC violation. Without sufficient permission,
a mandatory check remains incomplete under CORE's states, not optional.
Reuse prior evidence only when revision, environment,
and coverage remain valid. Explain which later changes require reruns and why.
Mandatory checks without permission remain pending or blocked, never silently
omitted.

### Existing frontend commands

Recheck package.json before use. Initial CDF 1.1 has lint/build scripts and
installed TypeScript, but no test/typecheck script or declared unit/E2E framework.
Do not run a nonexistent npm test or require tools that are not installed.

From frontend/, when permitted:

```text
npm run lint
node node_modules/typescript/bin/tsc --noEmit --incremental false
npm run build
```

From the repository root, use git diff --check for tracked changes and inspect
untracked files separately. Select the intended baseline for committed tasks;
an empty working-tree diff does not inspect committed implementation changes.
TypeScript may require generated Next.js types: report missing types as a
prerequisite problem instead of disabling checks. Do not overlap dependent type
generation and validation.

### Browser and accessibility evidence

- Initial ClaudioDev widths: 320, 375, 768, and 1280 CSS pixels. Adapt or extend
  when the approved plan or change impact justifies it.
- Record viewport, document.documentElement.clientWidth and scrollWidth, plus
  document.scrollingElement.scrollWidth when available. Compare scrollWidth
  against clientWidth, allowing for vertical scrollbar space.
- Visually inspect all affected sections and states. DOM measurements alone
  do not prove legibility or absence of clipping/overlap. Distinguish permitted
  local scrolling, such as JSON, from global overflow; check access to the
  locally hidden content.
- Test Tab, Shift+Tab, Enter, visible focus, internal destinations, and affected
  mobile controls. Record the actual navigation path checked.
- Verify real 200% zoom through observable browser evidence. Sending a shortcut,
  resizing a viewport, or changing CSS scale does not establish actual zoom.
  If unverified, leave it pending for attributed human validation.
- Calculate contrast from effective foreground/background colors, opacity,
  ancestor layers, and affected normal/hover/focus states. For sticky headers,
  inspect actual light/dark backdrops while scrolling. Label estimates and
  bounds when blur or gradients prevent an exact measurement.
- Compare against 4.5:1 for normal text and 3:1 for large text (at least 24 CSS px,
  or approximately 18.67 CSS px in bold). Record size/weight and method; never
  round a subthreshold value into a pass.
- Do not claim visual inspection without seeing the interface. Partial captures,
  timeouts, unavailable browsers, and untested assistive technologies remain
  explicit limitations. Partial checks never establish global WCAG AA conformity.
- For Labs, distinguish simulated/static examples from operational services.
  Do not execute displayed sample commands or API requests as live functionality.

## Result states and reproducible evidence

Use CORE N-12's canonical matrix and its "Estados y conclusiones globales
conservados" section, TEST subsections, as the single definitions of check/AC
states and global precedence. Preserve these labels: PASA, FALLA, PENDIENTE,
BLOQUEADA, NO APLICA; CON FALLOS, INCOMPLETO and SIN FALLOS EN EL ALCANCE VERIFICADO.
Do not redefine their meanings locally. Apply compound-criterion coverage and
failure precedence exactly as defined there; completion never grants approval.

For reproducible evidence use CORE N-12 fields, including actual command/path,
expected versus observed behavior, completion/exit code, environment and exact
revision/diff. Label provenance automatic, browser-observed, calculated or human.
Never fabricate screenshots, evidence paths, integration success or prior runs.

For later changes apply CORE N-13: identify affected evidence, repeat failed
checks and justified regressions only under sufficient authorization, and keep
historical results attached to their original revision.

## Incidents and handoff

Each incident needs a stable ID, severity (critical/high/medium/low with impact),
affected task/AC and file/component, tested state, reproduction steps,
expected/observed result, evidence, and revalidation required. Distinguish
confirmed defects from hypotheses. Suggest minimal corrections without applying them.

Deliver to REVIEW: scope/tested state, permissions used, matrix and AC results,
evidence, incidents, pending human checks, limitations, final Git state, and
proposed reruns. If REVIEW does not yet exist, deliver the package to the
developer in the conversation without assuming that another Skill is available.

For return to BUILD, identify the incident, proposed correction scope and tests
to repeat. New fixes require developer authorization; TEST does not initiate
BUILD or alter requirements. REVIEW assesses evidence and risks; task acceptance
remains a human decision.

## Safety rules

- Do not modify source, styles, configuration, dependencies, tests, or snapshots.
- Do not run --fix, install packages, stage, commit, push, deploy, reset, or clean.
- Do not write reports, status updates, or persistent evidence without permission.
- Do not expose secrets or submit forms/requests with external side effects
  without authorization covering those specific actions.
- Do not expand scope or weaken checks to obtain a pass. Stop the affected action
  if unexpected mutations or unsafe effects appear; preserve/report the evidence.
- Never confuse TEST completion, passing checks, REVIEW recommendation, and
  developer approval. Do not certify global accessibility or security.

## Report format

Write in Spanish, in the conversation, using this structure:

1. **Identificación:** tarea, especificación/plan, alcance y conclusión técnica
   (sin fallos en el alcance verificado / con fallos / incompleto).
2. **Estado probado y permisos:** rama, commit/diff, entorno, URL, herramientas
   y autorizaciones relevantes.
3. **Pruebas automáticas:** comando, ruta, resultado real, salida relevante y
   código de retorno; separar cada intento.
4. **Navegador:** anchuras, medidas, cobertura visual, teclado, contraste y zoom;
   diferenciar observación, cálculo y evidencia humana.
5. **Criterios de aceptación:** tabla AC, pruebas/evidencias, estado y límites.
6. **Incidencias:** ID, gravedad, reproducción, impacto y corrección propuesta.
7. **Pendientes y Git final:** pruebas no realizadas, causas, archivos generados
   y preservación de cambios previos.
8. **Entrega a REVIEW / retorno a BUILD:** recomendación, riesgos y revalidación
   necesaria, sin aprobar la tarea ni iniciar correcciones.

## Completion criteria

TEST is complete when authorized applicable checks have been performed or
explicitly accounted for, results/incidents are supported by evidence, and the
report/handoff has been delivered. A completed TEST report can contain failures
or pending checks. Any continuation requires sufficient existing authorization,
all stage inputs and no mandatory stop under CORE N-05/N-07/N-14. Human milestones
remain mandatory; further corrections require specifically authorized BUILD.
