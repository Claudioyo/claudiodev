**CDF-PLAN-002 — Claridad editorial de las fichas Labs**

- **Framework:** CDF 1.2 · PLAN-01.
- **Especificación relacionada:** `docs/specs/CDF-SPEC-002.md`.
- **Estado:** APPROVED — aprobación humana mediante la instrucción CDF 1.2 — PLAN-SAVE-01.
- **Objetivo:** incorporar los textos aprobados mediante una intervención editorial mínima, controlar su alcance y entregar evidencia a TEST y REVIEW.
- **Autorización actual:** únicamente presentar este plan. No autoriza guardarlo, implementarlo ni ejecutar verificaciones.

Registro de aprobación: el desarrollador aprobó mediante PLAN-SAVE-01 el plan presentado en PLAN-01, con sus siete tareas, matriz de trazabilidad, estrategia de control del diff, verificaciones y puntos de autorización humana. Autoriza exclusivamente crear `docs/plans/CDF-PLAN-002.md`; no autoriza ejecutar ninguna TASK, implementar ni realizar pruebas. El contenido siguiente conserva fielmente la propuesta de PLAN-01, incluidas sus referencias históricas a la autorización de presentación y las aprobaciones entonces pendientes. Este registro actualiza exclusivamente el estado documental y la autorización para guardar el plan; no concede autorización de ejecución.

**1. Estado actual verificado**

Leí las instrucciones raíz, `frontend/AGENTS.md`, el Skill PLAN y la especificación completa.

CDF-SPEC-002 está **APPROVED**, mediante SPEC-SAVE-01. Contiene REQ-001 a REQ-009, AC-001 a AC-009, la matriz y los seis textos editoriales aprobados.

Ubicaciones actuales en `frontend/src/app/page.tsx`:

| Ficha | Líneas actuales | Descripción que se sustituirá |
|---|---|---|
| LeadFlow | 191–221 | Párrafo en 206–208 |
| SupportAI | 223–253 | Párrafo en 238–240 |
| E-commerce | 255–272 | Párrafo en 269–271 |

Las líneas son referencias iniciales; después de editar se identificarán los artículos por nombre e identificador LAB.

Consulté CDF-PLAN-001 como antecedente. Sus autorizaciones y resultados pertenecen al ciclo anterior y no autorizan este trabajo.

Git muestra únicamente `docs/specs/CDF-SPEC-002.md` como archivo sin seguimiento. Es un antecedente autorizado que debe preservarse, no una modificación de implementación.

**2. Alcance y enfoque mínimo**

Único archivo de código modificable: **`frontend/src/app/page.tsx`**, dentro de los tres artículos Labs.

En cada ficha se sustituirá el párrafo actual por dos párrafos consecutivos: «Problema» y «Propósito previsto». Se reutilizarán las clases existentes de texto y separación, conservando colores, tamaños, encabezados, estados, tecnologías, bordes y cuadrícula.

No se modificarán componentes compartidos, estilos globales, vista destacada, API Preview, Lab Console, navegación, metadatos ni otras secciones. No habrá nuevas dependencias, rutas, componentes, backend o refactorización.

Antes de escribir código, BUILD deberá consultar la documentación local pertinente de Next.js exigida por `frontend/AGENTS.md`.

**3. Separación de etapas y autorización**

| Etapa | Responsabilidad | Límite |
|---|---|---|
| **BUILD** | Implementar las tareas expresamente autorizadas y controlar su diff | No ejecutar automáticamente las verificaciones reservadas a TEST |
| **TEST** | Ejecutar verificaciones autorizadas y producir evidencia reproducible | No corregir código ni aprobar tareas |
| **REVIEW** | Evaluar diff, evidencia, cobertura y riesgos | No ejecutar pruebas, aplicar correcciones ni otorgar aprobación humana |

Aquí **BUILD es la etapa de implementación**. El comando `npm run build` es una comprobación de compilación separada y requiere permiso específico.

Un resultado satisfactorio de TEST no equivale a aprobación de BUILD ni al cierre del ciclo.

**4. Tareas propuestas**

Todas están **pendientes y sin autorización de ejecución**. Los identificadores pertenecen a CDF-PLAN-002.

**TASK-001 — Registrar la base de implementación**

- **Objetivo:** disponer de una referencia que permita distinguir cambios propios y preexistentes.
- **REQ/AC:** REQ-005, REQ-007, REQ-009; AC-006, AC-008.
- **Archivo permitido:** lectura de `page.tsx`, instrucciones y especificación; ninguna escritura.
- **Cambios previstos:** ninguno. Registrar HEAD, Git status, diff inicial y contenido base de `page.tsx` en la evidencia de la conversación.
- **Exclusiones:** alterar, guardar o limpiar cambios preexistentes; crear archivos auxiliares.
- **Evidencia:** estado inicial y referencia íntegra recuperable del archivo, junto con límites de los tres artículos.
- **Dependencias:** aprobación del plan y autorización para iniciar BUILD.
- **Finalización:** base identificada, especificación preservada y ausencia de cambios conflictivos sin resolver.

**TASK-002 — Actualizar LeadFlow**

- **Objetivo:** explicar el problema y propósito aprobados.
- **REQ/AC:** REQ-001, REQ-004 a REQ-009; AC-001, AC-004 a AC-008.
- **Archivo permitido:** únicamente el artículo LAB-001 en `page.tsx`.
- **Cambios previstos:** sustituir la descripción por estos textos exactos:

> Problema: pequeños negocios reciben contactos de clientes y necesitan organizarlos para no perder oportunidades.
>
> Propósito previsto: desarrollar un sistema para recibir, validar y organizar prospectos mediante una API REST con Python y JSON.

- **Exclusiones:** cambiar estado, identificador, título, tecnologías o vista destacada.
- **Evidencia:** fragmento del diff y cotejo literal de ambos textos.
- **Dependencias:** TASK-001 y autorización expresa de implementación.
- **Finalización:** textos incorporados, lectura natural y diff local; validación visual pendiente de TEST.

**TASK-003 — Actualizar SupportAI**

- **Objetivo:** explicar el problema y propósito aprobados.
- **REQ/AC:** REQ-002, REQ-004 a REQ-009; AC-002, AC-004 a AC-008.
- **Archivo permitido:** únicamente el artículo LAB-002 en `page.tsx`.
- **Cambios previstos:** sustituir la descripción por:

> Problema: los negocios reciben preguntas repetitivas y necesitan responder de forma más eficiente.
>
> Propósito previsto: explorar un asistente de IA que ayude a orientar clientes y responder consultas frecuentes.

- **Exclusiones:** cambiar estado, identificador, título o tecnologías; añadir interacción.
- **Evidencia:** diff localizado y cotejo literal.
- **Dependencias:** TASK-002 y autorización expresa.
- **Finalización:** textos incorporados sin cambios ajenos; validación visual pendiente.

**TASK-004 — Actualizar E-commerce**

- **Objetivo:** concretar el problema y propósito sin comprometer funcionalidades futuras.
- **REQ/AC:** REQ-003, REQ-004 a REQ-009; AC-003 a AC-008.
- **Archivo permitido:** únicamente el artículo LAB-003 en `page.tsx`.
- **Cambios previstos:** sustituir la descripción por:

> Problema: pequeños comercios necesitan presentar productos y administrar su información comercial digitalmente.
>
> Propósito previsto: explorar un catálogo digital, con posibilidades futuras de inventario e integraciones.

- **Exclusiones:** añadir tecnologías, funcionalidades o fechas; alterar estado o borde discontinuo.
- **Evidencia:** diff localizado y cotejo literal, incluida «posibilidades futuras».
- **Dependencias:** TASK-003 y autorización expresa.
- **Finalización:** textos exactos incorporados conservando el tratamiento visual; validación visual pendiente.

**TASK-005 — Controlar alcance y entregar BUILD a TEST**

- **Objetivo:** demostrar que la implementación permanece dentro de los límites aprobados.
- **REQ/AC:** REQ-001 a REQ-009; AC-001 a AC-008 como control de código, sin acreditar aún su comportamiento visual.
- **Archivo permitido:** lectura del diff y `page.tsx`; ninguna escritura adicional.
- **Cambios previstos:** ninguno.
- **Exclusiones:** correcciones automáticas, reformateo general, pruebas y aprobación de tareas.
- **Evidencia:** diff completo, comparación con TASK-001, cotejo de seis textos, inventario de elementos preservados y estado Git final.
- **Dependencias:** TASK-004.
- **Finalización:** entrega con alcance comprobado y AC visuales/técnicos explícitamente pendientes. Ante discrepancias, pausar y solicitar autorización de corrección.

**TASK-006 — Ejecutar TEST y entregar evidencia**

- **Objetivo:** comprobar los nueve criterios mediante revisión editorial, controles técnicos y observación visual.
- **REQ/AC:** REQ-001 a REQ-009; AC-001 a AC-009.
- **Archivo permitido:** lectura del código y especificación; sin modificaciones de fuente. Artefactos de herramientas solo con permiso expreso.
- **Cambios previstos:** ninguno de implementación.
- **Exclusiones:** corregir código, instalar paquetes y aprobar BUILD.
- **Evidencia:** resultado por AC —conforme, fallido o pendiente—, comandos, códigos de salida, navegador, URL local, capturas, medidas y limitaciones.
- **Dependencias:** TASK-005, autorización explícita de TEST y lectura del Skill TEST.
- **Finalización:** evidencia entregada, incluidos bloqueos o fallos. No exige declarar todos los AC conformes para poder informar resultados.

**TASK-007 — REVIEW y recomendación humana**

- **Objetivo:** evaluar cobertura, coherencia y riesgos de la entrega.
- **REQ/AC:** REQ-001 a REQ-009; AC-001 a AC-009.
- **Archivo permitido:** lectura de especificación, plan aprobado, diff y evidencia; ninguna escritura.
- **Cambios previstos:** ninguno.
- **Exclusiones:** ejecutar pruebas, aplicar correcciones o aprobar tareas.
- **Evidencia:** evaluación trazable, carencias detectadas y recomendación para el desarrollador.
- **Dependencias:** TASK-006, autorización de REVIEW y lectura del Skill REVIEW.
- **Finalización:** informe presentado para decisión humana, sin cierre automático.

**5. Matriz de trazabilidad**

| TASK | Requisitos relacionados | Criterios relacionados |
|---|---|---|
| TASK-001 | REQ-005, 007, 009 | AC-006, 008 |
| TASK-002 | REQ-001, 004–009 | AC-001, 004–008 |
| TASK-003 | REQ-002, 004–009 | AC-002, 004–008 |
| TASK-004 | REQ-003–009 | AC-003–008 |
| TASK-005 | REQ-001–009 | AC-001–008; evidencia de código |
| TASK-006 | REQ-001–009 | AC-001–009; verificación |
| TASK-007 | REQ-001–009 | AC-001–009; evaluación de evidencia |

La relación de las tareas editoriales con AC-007 indica responsabilidad de preservar la adaptación; su comprobación corresponde a TASK-006.

**6. Estrategia de control del diff**

En TASK-005 y nuevamente en TEST:

1. Comparar contra el estado inicial de TASK-001, incluyendo cambios sin seguimiento. No asumir que HEAD contiene la especificación aprobada.
2. Revisar los hunks completos: cada adición o eliminación debe quedar dentro de uno de los tres artículos.
3. Comparar literalmente el contenido anterior y posterior situado fuera de esos artículos. Debe permanecer idéntico.
4. Dentro de cada artículo, comprobar que solo cambian las descripciones y la separación mínima necesaria.
5. Confirmar nombres, estados bilingües, identificadores y tecnologías intactos.
6. Confirmar sin cambios API Preview, JSON, avisos, consola, vista destacada, navegación y cuadrícula.
7. Revisar estado Git: la única modificación nueva de código debe ser `page.tsx`. Los documentos previamente autorizados se conservarán como base, sin atribuirlos a BUILD.

No se aceptará un diff reducido solo por número de líneas como prueba suficiente de alcance.

**7. Verificaciones previstas y permisos posteriores**

| Control | Procedimiento y evidencia | Permiso necesario |
|---|---|---|
| Editorial | Cotejo literal de los seis textos, estados y formulaciones futuras | Autorización de TEST |
| Alcance | Comparación contra la base y revisión del diff completo | Autorización de TEST |
| Lint | `npm run lint` desde `frontend/`; salida y código de retorno | Ejecución explícita |
| TypeScript | Compilador local con `--noEmit --incremental false`; sin descargas | Ejecución explícita |
| Responsive | 320/375/768/1024/1280 px; fichas completas, capturas y medidas de desbordamiento general y local | Navegador e instancia local autorizados; almacenamiento de capturas si corresponde |
| Zoom | Zoom real del navegador al 200 %, registrando ventana y nivel; no sustituir por emulación de viewport | Uso del navegador |
| Lectura y contraste | Orden problema→propósito, texto accesible y completo, sin nuevos elementos enfocables; estilos calculados y contraste efectivo de texto/estados | Navegador y mediciones |
| Regresión acotada | Navegación a Labs, menú móvil, foco, elementos contiguos, avisos de API y consola | Navegador |
| Compilación opcional | `npm run build` si se autoriza o se necesitan tipos generados | Permiso separado para escritura de artefactos y eventual acceso a fuentes externas |

No se reducirán tamaños de texto ni se ocultará contenido para hacer caber las fichas. Una mayor altura es admisible.

Si faltan tipos generados, herramientas o acceso a fuentes, se registrará el bloqueo. No se instalarán paquetes ni se iniciará un servidor implícitamente. Capturas o informes persistidos requerirán destinos autorizados.

**8. Riesgos, pausas y reversión**

| Riesgo o situación | Respuesta prevista |
|---|---|
| Mayor altura o desequilibrio visual | Evaluar en TEST; conservar texto íntegro y diseño existente |
| Problemas cerca del salto a tres columnas | Inspección específica a 1024 px |
| Deriva de redacción o promesas operativas | Cotejo literal con SPEC, sin reescritura durante BUILD |
| Cambio inesperado fuera de las fichas | Pausar, informar y preservar cambios ajenos |
| Necesidad de modificar estilos globales, estructura o texto aprobado | Pausar y solicitar decisión humana |
| Prueba fallida o evidencia incompleta | TEST informa; REVIEW evalúa; corrección mediante autorización posterior |
| Recursos de entorno ausentes | Registrar como pendiente, sin resultados inventados ni instalaciones |

**Reversión prevista:** bajo autorización, restaurar únicamente los fragmentos propios de las tres descripciones usando la base de TASK-001 y revisar el diff resultante. No usar restauraciones globales, `reset` ni `clean`. Si existiera después un commit exclusivo autorizado, podría evaluarse su reversión. No se ejecuta ninguna reversión en este plan.

**9. Aprobaciones pendientes y orden recomendado**

No quedan decisiones editoriales esenciales abiertas. Se requiere aprobación humana del plan y autorización expresa de las tareas que se ejecutarán.

Orden recomendado:

**TASK-001 → TASK-002 → TASK-003 → TASK-004 → TASK-005 → autorización de TEST → TASK-006 → autorización de REVIEW → TASK-007 → decisión humana.**

Guardar este plan requerirá autorización documental separada. Su aprobación no autoriza automáticamente implementación, pruebas, commit, push ni despliegue.

El plan está **listo para revisión humana**. No creé ni modifiqué archivos ni ejecuté lint, TypeScript, build, servidor, navegador o instalaciones.

La detención sigue tu instrucción y el Skill [implementation-plan](C:/Users/Claudio/Documents/Desarrollo/claudiodev.com/.agents/skills/implementation-plan/SKILL.md): “Wait for explicit approval before implementation.”
