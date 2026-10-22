---
name: test-task
description: Verify an implemented ClaudioDev task against acceptance criteria after BUILD or a correction, and deliver reproducible evidence to REVIEW without applying fixes or approving tasks.
---

# Test Task — CDF 1.1

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

A general TEST authorization permits lint, TypeScript without emission, and
non-destructive checks within scope, unless the user limits execution further.
Build, server startup, and persistent artifacts require explicit permission or
an existing authorization covering them. Do not ask again when already covered.
Reports and status changes in files also require permission.

Inspect scripts and effects before execution. Build and development servers
can generate files and access the network without editing source code. Evaluate
active processes and shared output-directory conflicts before starting work.
Do not build against output used by an active server without resolving the
conflict within authorization. Do not stop unrelated processes.

Missing tools or permissions do not make a mandatory check optional. Mark it
PENDIENTE or BLOQUEADA with a reason. Follow environment approval controls for
sandbox/network retries and report each attempt separately. Do not change
configuration to obtain a pass or download missing tools implicitly.

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
10. Deliver the Spanish report and REVIEW handoff in the conversation. Stop for
    human review; do not update files or initiate BUILD automatically.

## Test selection matrix

Apply checks proportionally to the change and approved plan. Include affected
shared-component consumers in regression coverage.

| Change | Required applicable checks | Conditional checks |
|---|---|---|
| Any task | Git baseline/final state, scope/diff inspection, AC mapping, limitations | New-file and artifact inspection |
| Documentation or Skills only | Consistency, references, authorization boundaries, diff formatting | Existing validator when available and permitted; no frontend build by default |
| Frontend source | ESLint and TypeScript without emission | Build according to integration impact and permission |
| Visible UI or text | Actual browser inspection, affected content, wrapping, responsive layout | Keyboard, contrast, shared-component regression according to impact |
| Navigation or interaction | Destinations, relevant states, keyboard activation, visible focus | Mobile menu, closing behavior, focus recovery |
| Colors or transparency | Effective text/background contrast and affected interactive states | Sticky overlays over light/dark sections and compositing variations |
| Legibility, layout, or navigation | Real 200% browser zoom and reflow/navigation inspection | Attributed human validation if agent tools cannot verify actual zoom |
| Metadata, routes, Next.js configuration or integration | Build and generated output inspection | Production startup and HTML inspection when authorized |
| Functional logic | Relevant expected, boundary, failure cases and existing affected tests | Unit/integration/E2E execution only with available infrastructure |

Build is required before closing a cycle containing application changes,
subject to authorization. Reuse prior evidence only when revision, environment,
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

Use these states for each check and each applicable AC:

| State | Meaning |
|---|---|
| PASA | Executed or supported by attributed human evidence with sufficient coverage |
| FALLA | Observed behavior contradicts the expected result |
| PENDIENTE | A necessary check has not been executed or requires later validation, without an identified impediment preventing execution |
| BLOQUEADA | An identified impediment prevents execution, such as an explicit prohibition, a missing indispensable tool, or an external dependency |
| NO APLICA | Excluded with a change-specific justification |

For both PENDIENTE and BLOQUEADA, record the reason and the next step needed
to resolve the state. Use BLOQUEADA when an identified impediment exists;
do not classify the same check as merely PENDIENTE in that case.

A partial pass is not a complete pass for a compound AC. Any confirmed failure
keeps that AC FALLA even if other portions remain pending. Otherwise incomplete
mandatory coverage prevents PASA. Keep execution results and human acceptance
separate: TEST never marks the task approved.

Apply global conclusions in this order:

1. **CON FALLOS:** at least one check is FALLA, even when other checks are incomplete.
2. **INCOMPLETO:** no checks are FALLA, but mandatory applicable checks remain
   PENDIENTE or BLOQUEADA.
3. **SIN FALLOS EN EL ALCANCE VERIFICADO:** all mandatory applicable checks
   have sufficient evidence and are PASA.

None of these conclusions constitutes human approval.

For each result record, as applicable: test ID, task/AC, commit or identified
diff, environment, date, command and working directory or browser steps,
expected/observed behavior, exit code or measurements, evidence reference, and
limitations. Label evidence as automatic, browser-observed, calculated, or
human-reported. Never fabricate screenshots, paths, exit codes, integration
success, or prior runs.

After later changes, identify affected evidence and rerun failed checks and
justified regressions. Historical results remain attached to their original
revision; never silently promote stale evidence to the new implementation.

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
or pending checks. Wait for human review before further work.
