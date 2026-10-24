# CDF-CORE — Fuente normativa común de CDF 1.3.0

- **Identidad:** ClaudioDev Development Framework — CDF.
- **Versión normativa objetivo:** `1.3.0`.
- **Estado del documento:** ACEPTADO mediante H3-ACCEPT-01 (2026-10-24).
- **Compatibilidad del conjunto de seis Skills:** COMPROBADA EN EL ALCANCE DOCUMENTAL Y ESTÁTICO de TEST-001 y REVIEW-001; aceptada en H3.
- **Vigencia:** CDF 1.3.0 OPERATIVO en el alcance documental y estático aceptado.
- **Entrega:** CDF 1.3 — BUILD-001 / TASK-001 de CDF-PLAN-003.
- **Fecha de esta incorporación:** 2026-10-24.
- **Punto de revisión:** H1 humano; no habilita TASK-002 ni TASK-003.

## Estado vigente — H3-ACCEPT-01, 2026-10-24

El responsable aprobó H3 y aceptó CDF 1.3.0 como versión operativa dentro del alcance documental y estático de TEST-001 y REVIEW-001: V-01 a V-07 satisfactorias y AC-01 a AC-12 sustentados por REVIEW, sin defectos bloqueantes conocidos. Los seis Skills adaptados (project-scan, feature-spec, implementation-plan, build-task, test-task y review-task), versión individual inicial 1.0.0 cada uno, tienen compatibilidad documental/estática comprobada con CDF 1.3.0 para la entrega aceptada.

Esta aceptación no garantiza cumplimiento conductual universal de agentes futuros ni autoriza operaciones Git o despliegue. N-01 a N-18, competencias, formatos, autorizaciones y resultados TEST/REVIEW permanecen íntegros.

Las declaraciones de estado y próximos pasos de BUILD-001/H1 que siguen son registros históricos de la primera incorporación del CORE, no el estado vigente posterior a H3. La condición de completar TEST, REVIEW y aceptación humana final queda cumplida para esta entrega; no se dispensa para otras entregas ni amplía permisos.

## Procedencia, alcance y condición de activación

Este documento candidato incorpora la fuente normativa común prevista en [CDF-SPEC-003](../specs/CDF-SPEC-003.md), CDF13-SPEC-01 consolidada mediante SPEC-02 y APROBADA mediante SPEC-SAVE-01, y en [CDF-PLAN-003](../plans/CDF-PLAN-003.md), CDF13-PLAN-01 versión 1.0.0, APROBADO mediante PLAN-SAVE-01.

La autorización BUILD-001 permite exclusivamente crear este directorio y archivo, trasladar las reglas aprobadas, incorporar formatos y estados comunes y revisar el contenido y diff de TASK-001. No autoriza adaptar los Skills, modificar instrucciones, ejecutar TEST o avanzar a otras tareas.

Durante la migración, este CORE y los Skills que se adapten serán **CANDIDATOS**. No se declarará CDF 1.3.0 operativo ni compatibilidad comprobada antes de completar TEST, REVIEW y la aceptación humana final de una entrega identificada. La existencia del archivo, la aprobación documental y los controles propios de BUILD no sustituyen esas etapas ni conceden permisos de ejecución.

El CORE está destinado a ser la única fuente normativa común. La SPEC conserva el diseño aprobado y el PLAN la estrategia y sus autorizaciones; no son alternativas para escoger una regla más permisiva. Los Skills conservarán sus responsabilidades particulares y referenciarán la norma común sin mantener copias normativas completas divergentes. Los seis SKILL.md vigentes permanecen sin adaptar en esta entrega.

### Documentos y fuentes consultadas

| Fuente | Aporte y referencia de procedencia |
|---|---|
| `docs/specs/CDF-SPEC-003.md` | N-01 a N-18, matriz de trazabilidad, formatos y reglas comunes aprobadas. SHA-256 de la fuente: `D161226E9D86B8322AF52EBE1771E5817FF0C1FEF679D8228EFDA3A310F3AC8A`. |
| `docs/plans/CDF-PLAN-003.md` | TASK-001, estados candidatos, carga explícita, resolución de rutas, versiones objetivo e hitos H1/H2/H3. SHA-256 de la fuente: `B58614CE54EBE0A75ACE15BB7627C6BC7E79F88FEF70FE42C98D2EAFB012358B`. |
| `AGENTS.md` raíz | Instrucciones aplicables de proyecto, preservadas sin cambios. |
| `.agents/skills/project-scan/SKILL.md` | Responsabilidad SCAN vigente; encabezado CDF 1.0. |
| `.agents/skills/feature-spec/SKILL.md` | Responsabilidad SPEC vigente; encabezado CDF 1.0. |
| `.agents/skills/implementation-plan/SKILL.md` | Responsabilidad PLAN vigente; encabezado CDF 1.0. |
| `.agents/skills/build-task/SKILL.md` | Responsabilidad BUILD vigente; encabezado CDF 1.0. |
| `.agents/skills/test-task/SKILL.md` | Estados, conclusiones globales y responsabilidad TEST vigentes; encabezado CDF 1.1. |
| `.agents/skills/review-task/SKILL.md` | Estados, conclusiones globales y responsabilidad REVIEW vigentes; encabezado CDF 1.1. |

### Carga y rutas previstas por el PLAN aprobado

Cada Skill deberá leer explícita e íntegramente el CORE antes de operar y registrar ruta, versión del CORE y versión individual del Skill. Una referencia documental por sí sola no garantiza la lectura. Esta entrega documenta el contrato aprobado; su incorporación a cada Skill corresponde a tareas posteriores no ejecutadas.

La ubicación canónica se resuelve desde la raíz real del repositorio como `docs/cdf/CDF-CORE.md`. Para cada Skill, la ruta `../../../docs/cdf/CDF-CORE.md` se resolverá exclusivamente desde el directorio que contiene su `SKILL.md`, nunca desde el directorio de trabajo de la terminal. No se utilizarán rutas personales absolutas ni una copia arbitraria de otro repositorio.

Conforme al apartado 3 del PLAN, ausencia, ilegibilidad, contenido incompleto, incompatibilidad de identidad o versión, falta de declaración de compatibilidad, conflicto con instrucciones superiores o lectura truncada detienen la operación dependiente. No autorizan crear, descargar o sustituir automáticamente el CORE. La inicialización mínima para localizar instrucciones y CORE no habilita la operación sustantiva. Tras pérdida de contexto se repetirá la carga; su reutilización exige contenido disponible y revisión vigente identificada. No se afirma una garantía técnica automática de cumplimiento.

## Reglas comunes N-01 a N-18

El bloque siguiente se traslada íntegramente de la SPEC aprobada, conservando identificadores y redacción, incluidos los formatos de N-17/N-18 y la matriz de N-12. Las expresiones de propuesta conservadas en él reflejan su procedencia documental y no alteran el estado CANDIDATO de esta implementación. No se añaden excepciones ni permisos implícitos. La precisión de PLAN-SAVE-01 exige además aceptación humana final antes de declarar compatibilidad comprobada o vigencia operativa.

### N-01. Significado normativo

- **DEBE / NO DEBE:** obligación o prohibición.
- **PUEDE:** opción permitida dentro de una autorización vigente.
- **POR DEFECTO:** obligación aplicable salvo excepción expresamente admitida y aprobada.

Una recomendación técnica, un documento aprobado y un permiso de ejecución son conceptos distintos.

### N-02. Precedencia y resolución de conflictos

La precedencia documental del CDF **no sustituye ni redefine la jerarquía efectiva de instrucciones de la plataforma**. Tampoco concede permisos que el entorno deniegue ni permite excepciones implícitas.

Dentro del ámbito que esa jerarquía permita, la interpretación documental del CDF seguirá este orden:

1. Restricciones aplicables de plataforma, seguridad y entorno de ejecución.
2. Instrucciones humanas explícitas vigentes.
3. `AGENTS.md` aplicables, de acuerdo con su ámbito.
4. Fuente normativa común `docs/cdf/CDF-CORE.md` y reglas particulares de cada Skill.
5. SPEC aprobada.
6. PLAN aprobado.

Este orden es una regla interna de interpretación del CDF, subordinada a la jerarquía efectiva de la plataforma.

La autorización de una operación y la modificación de una regla son decisiones diferentes:

- **Autorización de operación:** permite las acciones expresamente delimitadas dentro de las reglas vigentes.
- **Modificación normativa:** cambia una regla identificada, indicando contenido, alcance y aprobación. Requiere documentación persistente y versionada conforme a N-06 y N-16.

Se aplican estas condiciones:

- Una instrucción inferior NO DEBE anular una restricción superior.
- Una prohibición humana explícita, como «solo lectura», prevalece sobre permisos generales de un Skill, dentro de la jerarquía efectiva.
- Un `AGENTS.md` específico complementa al raíz; no se interpreta como permiso tácito para eliminar una prohibición expresa del raíz.
- Las reglas particulares de los Skills conservan sus responsabilidades y NO DEBEN contradecir la fuente común.
- PLAN NO DEBE ampliar SPEC; SPEC y PLAN NO DEBEN alterar las competencias de TEST o REVIEW.
- Una excepción solo es válida cuando la regla aplicable admite ese mecanismo y no existe una prohibición superior.
- Aprobar una operación no modifica reglas por implicación. Expresiones como «continúa» no constituyen por sí mismas una modificación normativa.
- Ante un conflicto irresoluble, se detiene la acción dependiente y se solicita una decisión concreta. Una autorización operativa adicional no resuelve por sí sola un conflicto normativo.

Entre instrucciones humanas del mismo nivel, una decisión posterior explícita puede sustituir otra anterior. La sustitución DEBE conservar su referencia histórica y no cambiar lo que realmente se ejecutó.

### N-03. Clasificación por impacto

SCAN DEBE proponer el nivel y su justificación; SPEC lo confirma y PLAN concreta sus controles.

| Nivel | Criterios |
|---|---|
| **Pequeño** | Cambio localizado y reversible, comportamiento conocido, sin contratos nuevos, efectos externos, datos sensibles ni alteraciones de seguridad. Consumidores afectados identificables. |
| **Mediano** | Cambia comportamiento, interacción, estructura o componentes compartidos; exige regresión entre varios estados o consumidores, con efectos acotados. |
| **Grande** | Afecta autenticación, autorización, secretos, datos sensibles, pagos, migraciones, operaciones destructivas, contratos externos, infraestructura o arquitectura transversal; también cuando existe incertidumbre elevada sobre consecuencias relevantes. |

El nivel se determina por el riesgo más alto aplicable. El número de líneas, archivos o tareas es información auxiliar.

Modificar las reglas de autorización o seguridad de los Skills requiere **nivel grande por impacto procedimental**, aunque no cambie la aplicación ni requiera compilarla.

### N-04. Escalamiento

Se DEBE reevaluar el nivel cuando aparezcan:

- Nuevos consumidores o dependencias.
- Efectos externos, persistencia o datos no previstos.
- Necesidad de modificar seguridad, contratos o configuración.
- Dificultad de reversión.
- Incertidumbre que impida acotar el riesgo.
- Desviaciones de alcance o fallos que revelen un impacto mayor.

El agente PUEDE elevar provisionalmente el nivel para detener la ejecución y explicar el riesgo. La elevación no amplía permisos.

Una reducción de nivel requiere justificación y confirmación humana. Ningún nivel permite omitir una obligación por conveniencia.

### N-05. Seis etapas obligatorias

Todo ciclo conserva:

**SCAN → SPEC → PLAN → BUILD → TEST → REVIEW → decisión humana.**

Cada etapa DEBE tener entrada, resultado y límite identificables. Se permiten secciones de una misma entrega o referencias compartidas; no se exige un archivo ni un turno por etapa.

La compactación no permite saltar aprobaciones:

- PLAN requiere SPEC aprobada.
- BUILD requiere PLAN aprobado y autorización de ejecución.
- TEST y REVIEW requieren autorización suficiente para sus respectivas operaciones.

Una autorización agrupada conforme a N-07 permite transiciones sin reiterar permisos, pero no elimina etapas, controles de entrada ni paradas obligatorias.

Un resultado fallido o incompleto puede pasar a REVIEW bajo las condiciones de N-08 y N-14; ello no equivale a conformidad ni cierre.

### N-06. Proporcionalidad documental

- **Pequeño:** SPEC y PLAN compactos; una tarea BUILD cohesionada cuando proceda.
- **Mediano:** requisitos, escenarios, consumidores y tareas por dependencias reales.
- **Grande:** decisiones arquitectónicas pertinentes, escenarios de fallo, estrategia de recuperación y puntos de revisión por hitos.

En todos los niveles se mantienen objetivo, alcance, exclusiones, AC, riesgos, trazabilidad y permisos.

SPEC, PLAN e informes PUEDEN permanecer en conversación cuando el alcance y las reglas vigentes lo permitan. Su persistencia requiere autorización que identifique destino y contenido; puede agruparse con su aprobación expresa.

**Los cambios normativos del framework requieren documentación persistente y versionada.** Una propuesta normativa puede elaborarse y aprobarse en conversación, pero no adquiere vigencia operativa únicamente por esa aprobación. Su incorporación exige autorización explícita de escritura, implementación y revisión.

La fuente normativa común propuesta será **`docs/cdf/CDF-CORE.md`**. Los seis Skills DEBEN referenciarla y conservar sus responsabilidades particulares. Las reglas comunes se definen allí; los Skills las aplican mediante referencias, sin mantener copias normativas completas que puedan divergir.

Los documentos persistentes de SPEC y PLAN de un cambio normativo DEBEN quedar identificados y versionados antes de ejecutar su implementación. Sus destinos y contenido se concretarán al solicitar autorización de escritura.

### N-07. Autorización delimitada de secuencia

Una autorización humana PUEDE cubrir BUILD→TEST→REVIEW únicamente si identifica expresamente:

| Campo obligatorio | Contenido |
|---|---|
| Referencias | SPEC, PLAN, tareas y revisión documental autorizadas. |
| Operaciones | Ediciones, comandos, inspecciones y transiciones permitidas. |
| Archivos | Fuente modificable, regiones o límites y destinos de artefactos. |
| Criterios | AC y comprobaciones obligatorias o condicionales. |
| Entorno | Directorio, herramientas, modo de ejecución y URL cuando corresponda. |
| Efectos | Generación de archivos, servidor y acceso a red previstos. |
| Paradas | Desviaciones, fallos, conflictos y permisos insuficientes. |
| Vigencia | Entrega o secuencia concreta cubierta. |
| Exclusiones | Correcciones posteriores, instalaciones, staging, commit, push y despliegue, salvo autorización independiente. |

Los campos no aplicables DEBEN indicarse como tales y justificarse; no se omiten silenciosamente.

Una referencia a un bloque de permisos completo y presentado es válida si el usuario lo adopta explícitamente.

**Aprobar PLAN nunca autoriza automáticamente su ejecución.** Una misma instrucción puede aprobarlo y, en una cláusula distinta, autorizar operaciones concretas.

No debe volver a pedirse un permiso ya vigente y suficiente. Sin embargo:

- La autorización agrupada no permite ignorar N-14.
- No autoriza correcciones posteriores por el hecho de haber autorizado BUILD inicialmente.
- No amplía las competencias de TEST o REVIEW.
- Las decisiones de N-15 siguen siendo independientes.

### N-08. Transiciones y alcance de BUILD

BUILD DEBE implementar únicamente tareas autorizadas. Una tarea puede incluir varias ediciones relacionadas con el mismo objetivo y frontera de riesgo.

Registrar la base, editar tres fichas relacionadas y comprobar el diff puede constituir una tarea cohesionada; no se requieren tareas separadas por ficha.

BUILD DEBE:

- Identificar base Git y cambios preexistentes.
- Consultar las instrucciones y documentación local pertinente.
- Preservar trabajo ajeno.
- Revisar el diff y entregar la implementación identificable.
- Separar controles propios de edición de la verificación formal de TEST.

El paso a TEST exige una entrega suficientemente identificada y sin desviaciones de alcance pendientes.

El paso a REVIEW PUEDE ocurrir con pruebas fallidas o incompletas para evaluar esas limitaciones, si está autorizado y no requiere continuar una operación detenida. No equivale a una recomendación favorable.

### N-09. Independencia de TEST y REVIEW

TEST NO DEBE corregir fuente, estilos, configuración, dependencias, pruebas o snapshots, ni ejecutar opciones de reparación.

TEST PUEDE generar salidas de herramientas y artefactos de evidencia expresamente autorizados. Esa generación no constituye permiso para editar archivos con el fin de corregir resultados. Los efectos inesperados se rigen por N-14.

REVIEW NO DEBE ejecutar pruebas, validadores, servidores, comprobaciones de navegador ni modificar archivos. Solo evalúa código, documentación y evidencia existente mediante lectura.

Una autorización de secuencia no mezcla estas competencias:

- Toda ejecución adicional de verificación corresponde a TEST y requiere permiso vigente y suficiente.
- Toda corrección corresponde a BUILD y requiere autorización específica posterior.
- Si REVIEW necesita nueva evidencia, la solicita; no la produce ejecutando comprobaciones.

La independencia exigida es de responsabilidades y conclusiones. No obliga a utilizar agentes distintos. REVIEW DEBE valorar la evidencia, no copiar el dictamen de TEST.

### N-10. Política de compilación y pruebas

| Tipo de cambio | Política |
|---|---|
| Exclusivamente documental o Skills, sin efecto en la generación de la aplicación | **Sin build de aplicación.** Revisar coherencia, referencias, permisos, trazabilidad y diff. |
| Código o interfaz, incluido texto en JSX | **Build obligatorio por defecto**, además de controles aplicables de lint, tipos, comportamiento y presentación. |
| Cambio crítico o de nivel grande en aplicación | Build y pruebas ampliadas según riesgos: autorización, errores, integración, datos, recuperación u otros escenarios pertinentes. |
| Documentación que alimenta rutas o contenido generado | Tratar según su efecto en la aplicación; no clasificarla como exclusivamente documental por su extensión. |

La compilación no sustituye controles visuales, de accesibilidad o funcionales.

PLAN DEBE declarar qué comprobaciones son obligatorias y cuáles condicionales, con su motivo. Las condicionales DEBEN indicar la condición que las activa.

Deben inspeccionarse los scripts antes de ejecutarlos y autorizarse sus efectos. No se solapan build y servidor sobre una salida compartida incompatible.

La ausencia de herramientas no autoriza instalaciones ni convierte una comprobación obligatoria en opcional.

La excepción al build obligatorio por defecto solo puede tramitarse conforme a N-11. Las verificaciones ejecutables corresponden a TEST; REVIEW evalúa su evidencia.

### N-11. Excepciones humanas

Se admite solicitar una excepción a una exigencia de evidencia o compilación cuando la regla aplicable permita ese mecanismo. La excepción DEBE identificar:

- Comprobación y AC afectados.
- Revisión y entorno.
- Motivo concreto.
- Evidencia alternativa, si existe.
- Riesgo residual aceptado.
- Alcance temporal y validación posterior, cuando corresponda.
- Referencia a la decisión humana.

Una excepción no transforma una prueba no ejecutada en `PASA`, ni un fallo observado en conformidad. El resultado histórico se conserva; la excepción se registra en la valoración y decisión correspondientes.

No permite:

- Ignorar violaciones confirmadas de AC ni riesgos críticos o altos bloqueantes.
- Ampliar permisos operativos.
- Eliminar paradas por efectos inesperados.
- Alterar las competencias de TEST o REVIEW.
- Modificar requisitos mediante una dispensa de evidencia.

Cambiar un requisito exige revisar SPEC y su aprobación. Cambiar una regla del framework exige el tratamiento normativo de N-02, N-06 y N-16.

TEST registra los resultados y limitaciones; REVIEW evalúa si la excepción está documentada y es aplicable. Ninguna etapa concede por sí misma la excepción humana.

### N-12. Trazabilidad común, juicios separados

Se utilizará esta matriz:

| AC | Implementación | Evidencia | Resultado TEST | Valoración REVIEW | Límites / decisión humana |
|---|---|---|---|---|---|
| AC-… | Tarea, archivo/región y revisión | ID, método, entorno y referencia | Estado y motivo | Estado y fundamento independiente | Pendientes, excepción o aceptación |

Cada evidencia DEBE registrar, según aplique: autor o procedencia, fecha, revisión o diff, entorno, pasos o comando, resultado observado, código de salida, cobertura y limitaciones.

Estados conservados:

- **TEST:** `PASA`, `FALLA`, `PENDIENTE`, `BLOQUEADA`, `NO APLICA`.
- **REVIEW:** `SUSTENTADO`, `NO SUSTENTADO`, `EVIDENCIA INSUFICIENTE`, `NO APLICA`.

REVIEW conserva el resultado original de TEST y explica cualquier discrepancia. Un criterio compuesto incompletamente cubierto no se declara satisfecho.

Las conclusiones globales actuales de TEST y REVIEW se mantienen, incluida la precedencia de fallos sobre evidencia incompleta y la separación de aceptación humana. Su correspondencia exacta con los Skills vigentes DEBE comprobarse durante la implementación y revisión; esta propuesta no inventa ni sustituye sus denominaciones.

### N-13. Vigencia y reutilización de evidencia

La evidencia se PUEDE reutilizar únicamente con justificación de vigencia respecto de revisión, entorno y cobertura.

Un cambio posterior invalida los resultados afectados, no necesariamente todos. Un archivo intacto tampoco garantiza comportamiento intacto si cambiaron sus dependencias.

La evidencia obsoleta o contradictoria bloquea la conclusión dependiente hasta revalidación o excepción válida. No se reescribe su resultado histórico.

Una excepción puede registrar la falta de evidencia vigente; no convierte evidencia obsoleta o contradictoria en prueba válida ni neutraliza un incumplimiento confirmado.

### N-14. Paradas obligatorias

| Condición | Acción obligatoria |
|---|---|
| Desviación de alcance o necesidad de otro archivo u operación | Detener la edición afectada y solicitar autorización. |
| Permiso ausente, ambiguo, revocado o insuficiente | No ejecutar la operación dependiente. |
| Cambio inesperado o conflicto con trabajo ajeno | Preservar estado y detener las operaciones que puedan interferir. |
| Evidencia obsoleta, inaccesible o contradictoria | Suspender la conclusión dependiente y solicitar evidencia concreta o una excepción admisible. |
| Fallo técnico | Registrar resultado y detener la ruta dependiente; no reparar ni reintentar alterando el entorno sin autorización. |
| Mutación inesperada, exposición sensible o efecto externo no previsto | Detener inmediatamente la acción y reportar sin reproducir secretos. |
| Incumplimiento confirmado de AC o riesgo bloqueante | Impedir recomendación favorable y cierre conforme. |

Pueden continuar lecturas o comprobaciones independientes ya autorizadas si no agravan el problema. No se limpia, revierte ni elimina evidencia para recuperar artificialmente un estado satisfactorio.

Una autorización agrupada no elimina estas paradas. Su aplicación suspende las acciones dependientes, no necesariamente toda actividad autorizada.

REVIEW PUEDE evaluar un fallo o bloqueo ya registrado porque esa evaluación no implica continuar la operación fallida. La conclusión DEBE conservar la limitación.

La reanudación exige resolver la causa y disponer de permiso suficiente; no siempre exige pedir un permiso nuevo si el vigente sigue cubriendo la operación. Las correcciones posteriores conservan la exigencia de autorización específica de N-09.

### N-15. Decisiones humanas independientes

Deben distinguirse expresamente:

1. Aceptación final de una entrega identificada.
2. Autorización de staging y commit, con contenido y rama delimitados.
3. Autorización de push, con remoto y rama.
4. Autorización de despliegue, con versión y entorno.

Ninguna implica las siguientes. Pueden expresarse en una misma instrucción mediante decisiones explícitas separadas, sin convertirlas en consecuencias automáticas.

La autorización agrupada de BUILD→TEST→REVIEW no incluye estas decisiones salvo que se otorguen expresamente con sus propios límites.

La aceptación humana no cambia resultados históricos de TEST ni valoraciones de REVIEW. Tampoco permite declarar cierre conforme si existe un incumplimiento confirmado o un riesgo bloqueante de N-11 y N-14.

Cambios posteriores relevantes requieren revisar la aceptación y los permisos afectados.

### N-16. Versionado

Se separan:

- **Versión del framework:** conjunto normativo compatible; versión objetivo propuesta, CDF `1.3.0`.
- **Versión individual del Skill:** revisión propia de sus instrucciones.
- **Compatibilidad declarada:** versión o rango del CDF que implementa cada Skill.

Cada Skill DEBE declarar nombre, versión individual, compatibilidad CDF y cambios relevantes. La coincidencia numérica entre Skill y framework no es obligatoria.

Se DEBE conservar el historial individual existente. Los encabezados que identifican una versión del CDF no deben reinterpretarse automáticamente como versiones individuales del Skill.

No se asignan números nuevos en esta propuesta. Antes de asignarlos se DEBE analizar el historial, la naturaleza del cambio y su compatibilidad:

- **PATCH:** aclaración sin cambio de permisos, obligaciones o resultados.
- **MINOR:** capacidad compatible adicional.
- **MAJOR:** cambio incompatible de competencias, permisos, entradas o garantías.

Si no existe una versión individual previa inequívoca, la propuesta de inicialización DEBE documentarse sin inventar antecedentes.

La fuente común DEBE identificar su versión del framework e historial de cambios normativos. La actualización DEBE enumerar las versiones de los seis Skills compatibles y la revisión de la fuente común utilizada.

**La compatibilidad con CDF 1.3.0 solo puede declararse comprobada después de implementar y revisar los seis Skills**, con evidencia de coherencia común y responsabilidades particulares. Hasta entonces se identifica como compatibilidad objetivo o pendiente de verificación.

Los ciclos históricos conservan las versiones con las que se ejecutaron; no se reinterpretan retrospectivamente.

### N-17. SPEC compacta

Contenido mínimo:

1. ID, versión, estado, prioridad y nivel de impacto justificado.
2. Problema, objetivo y estado comprobado.
3. Alcance y exclusiones.
4. REQ y AC verificables, con correspondencia breve.
5. Riesgos, supuestos y dependencias.
6. Restricciones y operaciones que requerirán autorización.
7. Decisiones abiertas y referencia de aprobación.

La redacción aprobada se mantiene en una sola ubicación de referencia. No se repite íntegramente en PLAN salvo necesidad justificada.

SPEC PUEDE ser compacta o permanecer en conversación conforme a N-06. La compactación no elimina la persistencia y el versionado obligatorios cuando se modifica la normativa del framework. Guardarla requiere autorización explícita.

### N-18. PLAN compacto

Contenido mínimo:

1. ID, versión, SPEC aprobada y base.
2. Objetivo, alcance, exclusiones y archivos.
3. Tareas cohesionadas: cambio, dependencias y finalización.
4. Matriz AC→tarea→comprobación prevista.
5. Estrategia TEST, entorno, artefactos y permisos solicitados.
6. Riesgos, paradas y recuperación prevista, sin ejecutarla.
7. Aprobación del plan y autorización de ejecución en campos separados.

La compactación elimina repetición, no información obligatoria. Los antecedentes se referencian; el estado vigente se muestra explícitamente.

PLAN PUEDE permanecer en conversación conforme a N-06. Para cambios normativos, DEBE quedar persistido y versionado antes de ejecutar la implementación, con autorización explícita de escritura.

## Formatos comunes y ubicación única

Los formatos comunes ya están incluidos en las reglas trasladadas; no se mantienen segundas versiones dentro de este documento:

| Formato | Ubicación | Uso |
|---|---|---|
| Autorización delimitada de secuencia | N-07 | Nueve campos obligatorios; los no aplicables se justifican. |
| Matriz de trazabilidad | N-12 | AC, implementación, evidencia, resultado TEST, valoración REVIEW y límites/decisión humana. |
| Registro de evidencia | N-12 | Procedencia, fecha, revisión/diff, entorno, método, resultado, código de salida, cobertura y limitaciones, según aplique. |
| Excepción humana de evidencia | N-11 | Comprobación y AC, revisión y entorno, motivo, evidencia alternativa, riesgo, vigencia y decisión humana. |
| SPEC compacta | N-17 | Siete campos mínimos; persistencia normativa conforme a N-06. |
| PLAN compacto | N-18 | Siete campos mínimos y aprobación separada de ejecución. |

## Estados y conclusiones globales conservados

Esta sección explicita los significados vigentes consultados en TEST/REVIEW para cumplir N-12. Su incorporación al CORE no declara que se hayan ejecutado verificaciones o que los Skills ya estén adaptados.

### TEST: estados por comprobación y AC

| Estado | Significado conservado |
|---|---|
| `PASA` | La comprobación fue ejecutada, o está respaldada por evidencia humana atribuida, con cobertura suficiente. |
| `FALLA` | El comportamiento observado contradice el resultado esperado. |
| `PENDIENTE` | Una comprobación necesaria no se ha ejecutado o requiere validación posterior, sin un impedimento identificado que impida ejecutarla. |
| `BLOQUEADA` | Un impedimento identificado impide ejecutar la comprobación: por ejemplo, prohibición explícita, herramienta indispensable ausente o dependencia externa. |
| `NO APLICA` | La comprobación se excluye con una justificación específica del cambio. |

Para `PENDIENTE` y `BLOQUEADA` se registran motivo y siguiente paso. Si existe un impedimento identificado se utiliza `BLOQUEADA`, no meramente `PENDIENTE`.

Un resultado parcial no satisface un AC compuesto. Un incumplimiento confirmado mantiene el AC en `FALLA` aunque otras partes estén pendientes; en ausencia de fallo, una cobertura obligatoria incompleta impide `PASA`. TEST separa resultados de ejecución y aceptación humana y nunca aprueba la tarea.

### TEST: conclusiones globales y precedencia

Se aplica la primera condición que corresponda:

1. **CON FALLOS:** al menos una comprobación está en `FALLA`, aunque otras estén incompletas.
2. **INCOMPLETO:** ninguna está en `FALLA`, pero quedan comprobaciones obligatorias aplicables en `PENDIENTE` o `BLOQUEADA`.
3. **SIN FALLOS EN EL ALCANCE VERIFICADO:** todas las comprobaciones obligatorias aplicables cuentan con evidencia suficiente y están en `PASA`.

Ninguna conclusión constituye aprobación humana. Completar el informe TEST puede incluir fallos o pendientes; no implica cierre conforme.

### REVIEW: estados por AC

| Estado | Significado conservado |
|---|---|
| `SUSTENTADO` | La implementación y la evidencia válida respaldan suficientemente el criterio aplicable. |
| `NO SUSTENTADO` | Existe un defecto confirmado de implementación o un criterio incumplido. |
| `EVIDENCIA INSUFICIENTE` | La evidencia disponible no permite establecer el criterio, incluidas contradicciones relevantes sin resolver o evidencia invalidada. |
| `NO APLICA` | El criterio se excluye con una justificación específica de la tarea. |

REVIEW mantiene los identificadores, resultados y referencias originales de TEST junto a su propia valoración y explica cualquier discrepancia. Un cumplimiento parcial no sustenta un criterio compuesto. Una violación confirmada impide `SUSTENTADO` cualquiera que sea su gravedad; la falta de evidencia no prueba por sí misma un defecto.

Si un aspecto está respaldado pero falta evidencia obligatoria del AC completo, el estado global del criterio es `EVIDENCIA INSUFICIENTE`, con explicación separada del aspecto respaldado. Toda valoración no sustentada o insuficiente identifica motivo y siguiente paso.

### REVIEW: conclusiones globales y precedencia

Se aplica la primera condición que corresponda:

1. **REQUIERE CORRECCIONES:** existen violaciones confirmadas de requisitos o alcance, o riesgos bloqueantes sustentados, aunque también falte evidencia.
2. **REQUIERE EVIDENCIA ADICIONAL:** no hay violaciones confirmadas ni riesgos bloqueantes, pero falta evidencia obligatoria o persisten contradicciones relevantes sin resolver.
3. **LISTO PARA CONSIDERACIÓN HUMANA:** todos los AC aplicables están sustentados, no quedan incidencias bloqueantes y existe evidencia suficiente y vigente de las comprobaciones técnicas obligatorias aplicables, sujeto únicamente a las excepciones humanas válidas de evidencia descritas a continuación.

Una excepción humana explícita, justificada y documentada puede cubrir comprobaciones obligatorias pendientes o bloqueadas, con alcance exacto y riesgo residual aceptado, conforme a N-11. REVIEW cita la decisión existente; no escribe un archivo nuevo de excepción ni infiere aceptación de riesgo si faltan datos.

Bajo una excepción válida se conservan los estados TEST `PENDIENTE`/`BLOQUEADA` y, cuando corresponda, la valoración del AC `EVIDENCIA INSUFICIENTE`. Una recomendación favorable destaca la excepción y la cobertura faltante; no afirma que todas las pruebas pasaron. La excepción no dispensa incumplimientos confirmados de AC ni riesgos críticos o altos bloqueantes.

Los riesgos críticos y altos sustentados son bloqueantes; los demás se valoran por impacto. No se ignora una violación confirmada por ser menor ni se presenta una sospecha sin respaldo como defecto crítico/alto confirmado.

Ninguna conclusión REVIEW aprueba la tarea ni autoriza staging, commit, push o despliegue. Completar REVIEW puede requerir correcciones o evidencia adicional y no equivale a aceptación o cierre.

## Responsabilidades particulares conservadas

La fuente común no sustituye los procedimientos específicos de cada Skill ni amplía sus competencias.

| Etapa | Responsabilidad existente | Límite conservado |
|---|---|---|
| SCAN | Inspeccionar arquitectura, estado y riesgos; distinguir hechos de supuestos y recomendar siguientes pasos. | Solo lectura; no implementar ni ejecutar comandos de escritura. |
| SPEC | Definir qué debe lograrse: problema, objetivo, alcance, requisitos, AC, riesgos y decisiones. | Propuesta para aprobación; no implementar ni modificar archivos como efecto implícito. |
| PLAN | Definir cómo implementar una SPEC aprobada mediante tareas, dependencias, controles y riesgos. | Planificación sin implementación; aprobación no equivale a permiso de ejecución. |
| BUILD | Implementar exclusivamente la tarea autorizada de un plan aprobado y entregar cambios identificables. | Preservar trabajo previo y fronteras autorizadas; controles de edición separados de TEST. |
| TEST | Ejecutar verificaciones autorizadas y entregar evidencia reproducible e incidencias a REVIEW. | No corregir fuente, estilos, configuración, dependencias, pruebas o snapshots; no aprobar. |
| REVIEW | Evaluar implementación, alcance, evidencia y riesgos con juicio independiente. | Solo lectura; no ejecutar verificaciones, modificar archivos ni aprobar tareas. |

La independencia es de responsabilidades y conclusiones, sin exigir agentes distintos, conforme a N-09. Las transiciones y paradas se rigen por las autorizaciones vigentes y N-05/N-07/N-14; esta tabla no concede permisos de ejecución.

## Registro histórico de versiones individuales objetivo y compatibilidad pendiente — BUILD-001

La tabla registra objetivos del PLAN aprobado y de BUILD-001, no versiones ya incorporadas a los SKILL.md ni compatibilidad comprobada.

| Skill | Antecedente documental consultado | Versión individual objetivo | Compatibilidad objetivo | Estado en esta entrega |
|---|---|---|---|---|
| `project-scan` | Encabezado CDF 1.0 | `1.0.0` inicial | CDF `1.3.0` exacta | Sin adaptar; comprobación pendiente. |
| `feature-spec` | Encabezado CDF 1.0 | `1.0.0` inicial | CDF `1.3.0` exacta | Sin adaptar; comprobación pendiente. |
| `implementation-plan` | Encabezado CDF 1.0 | `1.0.0` inicial | CDF `1.3.0` exacta | Sin adaptar; comprobación pendiente. |
| `build-task` | Encabezado CDF 1.0 | `1.0.0` inicial | CDF `1.3.0` exacta | Sin adaptar; comprobación pendiente. |
| `test-task` | Encabezado CDF 1.1 | `1.0.0` inicial | CDF `1.3.0` exacta | Sin adaptar; comprobación pendiente. |
| `review-task` | Encabezado CDF 1.1 | `1.0.0` inicial | CDF `1.3.0` exacta | Sin adaptar; comprobación pendiente. |

Los encabezados previos del framework no se reinterpretan como versiones individuales. La inicialización objetivo no inventa versiones anteriores ni borra historial. Su asignación en los archivos y la revisión de compatibilidad pertenecen a tareas posteriores; un antecedente adicional contradictorio exige detener y revisar la propuesta, conforme al PLAN y N-16.

## Trazabilidad de incorporación

| Contenido del CORE | Fuente aprobada o vigente | Alcance de TASK-001 |
|---|---|---|
| N-01 a N-18, con sus identificadores y texto íntegro | SPEC-003, bloque desde N-01 hasta N-18 inclusive | Traslado literal, sin excepciones nuevas. |
| Autorizaciones, matriz, evidencia y formatos compactos | N-07, N-11, N-12, N-17 y N-18 de SPEC-003 | Incluidos en el bloque trasladado y referenciados en el índice de formatos. |
| Carga explícita y anclaje de rutas | Nota SPEC-SAVE-01 y PLAN-003, apartado 3 y precisión PLAN-SAVE-01 | Contrato documentado; no se modifican Skills. |
| Estados y conclusiones TEST | `test-task/SKILL.md`, secciones Result states and reproducible evidence y Completion criteria | Significados y precedencia conservados en español. |
| Estados y conclusiones REVIEW | `review-task/SKILL.md`, secciones AC states and TEST traceability, Global states and precedence, Findings and risks y Completion criteria | Significados, excepciones admitidas y precedencia conservados en español. |
| Responsabilidades de seis etapas | Seis SKILL.md vigentes y N-05/N-08/N-09 | Síntesis de límites existentes; no sustituye procedimientos particulares. |
| Versiones individuales objetivo | PLAN-003, apartado 4; autorización BUILD-001 | Seis objetivos `1.0.0`, pendientes de implementación y comprobación. |
| Estado candidato y ausencia de vigencia | PLAN-SAVE-01 y BUILD-001 | Sin declaración de compatibilidad comprobada ni activación. |

Los AC-01 a AC-12 y su matriz de tareas y comprobaciones permanecen en SPEC-003 y PLAN-003 como criterios de aceptación de la migración. Esta incorporación no los declara satisfechos ni sustituye la futura verificación formal.

## Historial normativo y de incorporación

| Fecha | Versión objetivo | Registro | Estado y alcance |
|---|---|---|---|
| 2026-10-24 | CDF `1.3.0` | BUILD-001 / TASK-001, sobre SPEC-SAVE-01 y PLAN-SAVE-01 | Primera incorporación de este CORE como IMPLEMENTACIÓN CANDIDATA: N-01 a N-18, formatos, matriz, estados y conclusiones vigentes, procedencia y versiones individuales objetivo. COMPATIBILIDAD PENDIENTE y SIN VIGENCIA OPERATIVA. |
| 2026-10-24 | CDF 1.3.0 | H3-ACCEPT-01, tras TEST-001 y REVIEW-001 | Aceptación humana final: versión operativa y compatibilidad comprobada exclusivamente en el alcance documental y estático verificado. Sin garantía conductual universal; sin autorización Git o despliegue. |

No se inventa historial anterior del CORE. Los ciclos históricos y sus versiones conservan su significado original, conforme a N-16.

## Estado histórico de la entrega y siguiente decisión — BUILD-001

TASK-001 entrega únicamente el CORE candidato. Los controles propios de edición y diff de BUILD no constituyen TEST ni REVIEW. No se han ejecutado aquí verificaciones formales ni se declara compatibilidad comprobada.

**H1: detenerse para revisión humana del CORE candidato.** La revisión de H1 no elimina H2 ni H3. TASK-002, TASK-003 y las restantes tareas no se inician por esta entrega y requieren autorización suficiente. CDF 1.3.0 seguirá sin vigencia operativa hasta completar TEST, REVIEW y aceptación humana final.
