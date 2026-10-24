# CDF13-PLAN-01 — Implementación de CDF 1.3.0

**Identificador documental:** CDF-PLAN-003.\
**Versión de esta propuesta:** 1.0.0.\
**Estado:** APROBADO.\
**Especificación:** [CDF-SPEC-003.md](../specs/CDF-SPEC-003.md), CDF13-SPEC-01 consolidada mediante SPEC-02 y aprobada mediante SPEC-SAVE-01.\
**Impacto:** **GRANDE**, por afectar autorizaciones y seguridad procedimental.\
**Destino:** `docs/plans/CDF-PLAN-003.md`.

**Estado vigente del ciclo — H3-ACCEPT-01, 2026-10-24:** el responsable aprobó H3 y aceptó CDF 1.3.0 como versión operativa dentro del alcance documental y estático verificado por TEST-001 y REVIEW-001. La decisión reconoce V-01 a V-07 satisfactorias y los doce AC sustentados por REVIEW, sin defectos bloqueantes conocidos. La compatibilidad comprobada se limita a ese alcance; no garantiza cumplimiento conductual universal de agentes futuros. Los estados, permisos pendientes y condiciones de vigencia del contenido histórico siguiente conservan su referencia a la etapa en que se redactaron y quedan resueltos, cuando corresponda, por esta decisión y las autorizaciones intermedias. Se conservan los resultados TEST/REVIEW, reglas y antecedentes; H3 no concede permisos de staging, commit, push ni despliegue.

**Registro de decisión humana — CDF 1.3 / PLAN-SAVE-01, 2026-10-24:** el responsable aprobó CDF13-PLAN-01, versión 1.0.0, con las dos precisiones obligatorias que se incorporan a continuación. Autorizó exclusivamente crear `docs/plans/CDF-PLAN-003.md` con el contenido íntegro del plan aprobado, registrar el estado APROBADO y esta decisión, verificar su integridad, sus seis tareas, hitos H1/H2/H3, matriz de los doce AC y alcance autorizado, e informar el diff y estado Git preservando `docs/specs/CDF-SPEC-003.md` sin seguimiento. No autorizó crear CDF-CORE.md, modificar Skills, AGENTS.md ni frontend/AGENTS.md, ejecutar pruebas de aplicación, staging, commit, push, despliegue ni iniciar BUILD. Tras guardar y verificar el PLAN, corresponde detenerse para revisión humana.

**Precisiones obligatorias aprobadas:**

1. La ruta relativa `../../../docs/cdf/CDF-CORE.md` se resolverá exclusivamente desde el directorio que contiene cada `SKILL.md`, nunca desde el directorio de trabajo de la terminal.
2. Durante la migración, CORE y Skills adaptados se considerarán **CANDIDATOS**. No se declarará CDF 1.3.0 operativo ni compatibilidad comprobada antes de completar TEST, REVIEW y la aceptación humana final.

El contenido aprobado siguiente se conserva íntegro, con el estado y destino actualizados, la referencia a SPEC adaptada a una ruta relativa y las dos precisiones incorporadas en los apartados correspondientes. Sus referencias a permisos de guardado pendientes, estado Git y detención describen la presentación de PLAN-01. PLAN-SAVE-01 resuelve la aprobación y autoriza únicamente este guardado y su verificación; no concede permisos de implementación. Los restantes permisos y decisiones no se deducen de esta aprobación documental.

La autorización actual permite presentar este plan en conversación. **No autoriza guardarlo ni ejecutarlo.**

## 1. Objetivo y estado comprobado

El objetivo es incorporar una fuente normativa común, adaptar los seis Skills sin perder sus competencias particulares y verificar su coherencia con CDF 1.3.0.

Se leyeron la SPEC, `AGENTS.md`, `frontend/AGENTS.md` y los seis Skills. Se confirmó:

| Elemento | Estado observado |
|---|---|
| SPEC | Estado **APROBADA**, registro SPEC-SAVE-01, N-01 a N-18, AC-01 a AC-12, ejemplos y mapa de seis Skills. |
| Nota de aprobación | Exige que cada Skill cargue explícitamente el CORE antes de operar. |
| Instrucciones raíz | Encabezado CDF 1.0; reglas de misión, seguridad, arquitectura y desarrollo. |
| Instrucciones frontend | Bloque generado de Next.js; se preservará íntegro. |
| SCAN, SPEC, PLAN y BUILD | Encabezados CDF 1.0. |
| TEST y REVIEW | Encabezados CDF 1.1. |
| Versiones individuales | No se encontraron declaraciones independientes ni historiales semánticos individuales. |
| CORE | `docs/cdf/CDF-CORE.md` no existe. |
| PLAN propuesto | `docs/plans/CDF-PLAN-003.md` no existe. |

**Base Git observada:**

- Rama: `main`.
- HEAD: `0ba236a185657089e9eef4dfd8647c0df7567b07`.
- Único cambio informado por Git: `?? docs/specs/CDF-SPEC-003.md`.
- Sin diferencias de archivos seguidos ni cambios en staging.

La SPEC sin seguimiento es trabajo preexistente aprobado: se conservará íntegra. No se incorporará al índice ni se sobrescribirá.

La búsqueda focalizada en `frontend/` no encontró referencias a `CDF-CORE`, `.agents/skills` o mecanismos de lectura de archivos que vinculen estos documentos con la generación de la aplicación. Esto respalda el alcance exclusivamente normativo; no constituye una auditoría exhaustiva de generación.

## 2. Alcance y archivos

| Archivo | Operación futura propuesta | Finalidad |
|---|---|---|
| `docs/cdf/CDF-CORE.md` | Crear | Fuente normativa común, N-01 a N-18, formatos, estados y registro de versiones objetivo. |
| `.agents/skills/project-scan/SKILL.md` | Adaptar | Clasificación, escalamiento y resultado proporcional. |
| `.agents/skills/feature-spec/SKILL.md` | Adaptar | SPEC proporcional, AC y aprobación diferenciada. |
| `.agents/skills/implementation-plan/SKILL.md` | Adaptar | Tareas cohesionadas, permisos y estrategia TEST. |
| `.agents/skills/build-task/SKILL.md` | Adaptar | Implementación delimitada, entrega y transiciones. |
| `.agents/skills/test-task/SKILL.md` | Adaptar | Verificación proporcional y política común, sin correcciones. |
| `.agents/skills/review-task/SKILL.md` | Adaptar | Valoración independiente, exclusivamente mediante lectura. |
| `AGENTS.md` raíz | Modificación mínima propuesta | Enlace al CORE y explicación de su carga, sin duplicar normativa. |

El guardado futuro de `CDF-PLAN-003.md` es una operación documental previa e independiente de las tareas de implementación.

**Exclusiones:**

- Modificar `frontend/AGENTS.md`, incluida cualquier parte de su bloque generado.
- Cambiar aplicación, backend, dependencias, configuración, secretos o archivos de entorno.
- Modificar SPEC y PLAN históricos.
- Añadir ejecutables, cargadores automáticos, servicios o infraestructura.
- Instalar herramientas o acceder a servicios externos.
- Ejecutar build, lint de aplicación, TypeScript, servidores o navegador.
- Staging, commit, push, despliegue, limpieza o reversión automática.

La adaptación permitirá sustituir secciones normativas duplicadas **identificadas en los seis Skills** por referencias al CORE. Esa sustitución requiere autorización expresa del alcance; no habilita una reescritura general ni la eliminación de instrucciones particulares útiles.

## 3. Diseño del CORE y carga explícita

### Contenido y autoridad

`docs/cdf/CDF-CORE.md` contendrá:

- Identidad y versión normativa objetivo `CDF 1.3.0`.
- Procedencia: SPEC aprobada, PLAN aprobado y decisiones posteriores identificadas.
- N-01 a N-18, conservando sus identificadores y significado.
- Formatos comunes, matriz de trazabilidad, estados y conclusiones globales.
- Historial normativo y tabla de versiones individuales objetivo.
- Distinción entre implementación candidata, compatibilidad comprobada y aceptación humana.

La SPEC seguirá siendo el registro del diseño aprobado. El CORE será la referencia operativa común cuando la implementación haya sido verificada, revisada y aceptada. No se presentarán ambos como normas alternativas entre las que elegir.

Los Skills conservarán entradas, procedimientos, salidas y límites particulares. Los recordatorios locales remitirán a identificadores del CORE; no mantendrán seis copias completas de las reglas comunes.

### Procedimiento obligatorio en cada Skill

Cada uno incorporará un bloque inicial de carga que ordene:

1. Identificar el repositorio y leer las instrucciones aplicables.
2. Resolver `docs/cdf/CDF-CORE.md` desde la raíz de ese repositorio.
3. **Leer íntegramente el archivo antes de ejecutar el procedimiento del Skill**, incluidas sus operaciones específicas de inspección.
4. Comprobar identidad, versión y compatibilidad declarada.
5. Registrar en el informe la ruta leída, versión del CORE y versión del Skill.
6. Aplicar sus reglas junto con las responsabilidades particulares.

Las lecturas mínimas para localizar instrucciones y CORE forman parte de esta inicialización. No habilitan la tarea sustantiva cuando falta la norma común.

### Resolución de rutas

Para un Skill situado en:

```text
<repositorio>/.agents/skills/<skill>/SKILL.md
```

la ruta relativa al CORE será:

```text
../../../docs/cdf/CDF-CORE.md
```

Esta ruta relativa se resolverá **exclusivamente desde el directorio que contiene cada `SKILL.md`, nunca desde el directorio de trabajo de la terminal**. No contendrá rutas personales absolutas.

Cuando Git esté disponible, se podrá contrastar la raíz con `git rev-parse --show-toplevel`. Si la ubicación del Skill y el repositorio seleccionado no coinciden, se detendrá la operación dependiente.

La ausencia de Git no impedirá por sí sola localizar el CORE desde la ubicación conocida del Skill. Si no puede identificarse inequívocamente el repositorio, no se buscará una copia arbitraria en otros proyectos.

### Ausencia, incompatibilidad y contexto perdido

Se detendrá la operación dependiente cuando:

- El CORE no exista, no sea legible o esté incompleto.
- Su identidad o versión no corresponda a la compatibilidad declarada.
- El Skill carezca de declaración de compatibilidad.
- Existan contradicciones con instrucciones superiores o decisiones vigentes.
- La lectura disponible esté truncada y no pueda completarse.

No habrá descarga, creación, modificación ni uso de una copia histórica como sustituto automático.

La primera migración declarará compatibilidad objetivo exacta con `1.3.0`; no se presumirá un rango futuro. Durante la migración, CORE y Skills adaptados se considerarán **CANDIDATOS**. No se declarará CDF 1.3.0 operativo ni compatibilidad comprobada antes de completar TEST, REVIEW y la aceptación humana final.

Tras reinicio o pérdida de contexto se repetirá la carga. Una lectura anterior solo podrá reutilizarse si su contenido sigue disponible y su revisión permanece identificada y vigente.

**Límite:** estas instrucciones y su comprobación estática no constituyen un mecanismo técnico que garantice que toda futura ejecución leerá el CORE. La evidencia de carga deberá acompañar cada operación; no se afirmará una garantía automática inexistente.

## 4. Versionado individual propuesto

El historial Git consultado muestra:

- `cbc1f83`: incorporación de SCAN, SPEC, PLAN y BUILD.
- `ce7ec51`: incorporación de TEST y REVIEW.

Los archivos actuales no declaran versiones individuales independientes. Sus encabezados CDF 1.0 y CDF 1.1 identifican antecedentes del framework; no se convertirán retrospectivamente en versiones individuales.

Propongo **inicializar en `1.0.0` el versionado individual explícito de cada Skill**:

| Skill | Antecedente observado | Versión individual propuesta | Justificación del cambio |
|---|---|---|---|
| `project-scan` | CDF 1.0 | `1.0.0` inicial | Añade carga obligatoria, clasificación y escalamiento; primera versión individual declarada. |
| `feature-spec` | CDF 1.0 | `1.0.0` inicial | Formaliza formatos proporcionales, persistencia normativa y separación de aprobaciones. |
| `implementation-plan` | CDF 1.0 | `1.0.0` inicial | Incorpora bloque delimitado de permisos y estrategia común de verificación. |
| `build-task` | CDF 1.0 | `1.0.0` inicial | Precisa tareas cohesionadas, competencias y transiciones autorizadas. |
| `test-task` | CDF 1.1 | `1.0.0` inicial | Unifica compilación, excepciones y permisos sin permitir correcciones. |
| `review-task` | CDF 1.1 | `1.0.0` inicial | Conserva evaluación independiente y formaliza integración con la fuente común. |

La coincidencia entre las seis versiones es una **inicialización deliberada**, pendiente de aprobación; no se deriva de CDF 1.3.0 ni implica que los seis cambios tengan idéntica magnitud.

La migración altera entradas y obligaciones procedimentales. Por ello no se describirá como un PATCH de versiones previas inexistentes. Cada archivo registrará:

- Antecedente documental observado.
- Inicio del versionado individual.
- Cambios relevantes.
- Compatibilidad **objetivo** `CDF 1.3.0`, pendiente de comprobación.

Si aparece historial adicional que contradiga esta base, se detendrá la asignación y se revisará la propuesta.

La compatibilidad podrá declararse comprobada únicamente cuando estén implementados los seis Skills, TEST haya aportado evidencia suficiente, REVIEW haya evaluado la misma revisión sin contradicciones bloqueantes y se haya completado la aceptación humana final. Durante la migración, CORE y Skills adaptados seguirán siendo **CANDIDATOS**. La aceptación humana será una decisión independiente de los resultados de TEST y REVIEW; antes de ella no se declarará CDF 1.3.0 operativo ni compatibilidad comprobada.

## 5. Tareas y dependencias

Las tareas siguientes son propuestas. Ninguna está autorizada para ejecución.

### TASK-001 — Crear la fuente normativa común

**Etapa:** BUILD.\
**Archivo:** `docs/cdf/CDF-CORE.md`.

**Cambios:**

- Incorporar N-01 a N-18 desde la SPEC aprobada.
- Incorporar los estados y conclusiones globales actuales de TEST/REVIEW.
- Añadir identidad, historial y tabla de versiones objetivo.
- Distinguir reglas comunes de responsabilidades particulares.

**Dependencias:** PLAN aprobado y guardado; autorización de escritura y TASK-001.

**Finalización:** CORE candidato íntegro, trazable a la SPEC, sin excepciones nuevas ni afirmaciones de compatibilidad comprobada.

**Control propio de BUILD:** lectura del contenido y diff; inventario de reglas trasladadas. No sustituye TEST.

**Hito H1:** revisión humana del CORE candidato antes de adaptar los Skills. Los Skills existentes todavía no se consideran migrados.

### TASK-002 — Adaptar SCAN, SPEC y PLAN

**Etapa:** BUILD.\
**Archivos:** los tres Skills correspondientes.

**Cambios:**

- Añadir carga inicial explícita y metadatos individuales.
- SCAN: nivel, justificación, consumidores, incertidumbre y escalamiento.
- SPEC: formato compacto completo, AC verificables y estado vigente.
- PLAN: tareas cohesionadas, trazabilidad y nueve campos de autorización.
- Preservar el carácter de solo lectura de estas etapas.
- Referenciar las reglas comunes sin replicarlas íntegramente.

**Dependencias:** TASK-001 y aprobación de H1.

**Finalización:** los tres procedimientos conservan sus responsabilidades y remiten al mismo CORE candidato; no autorizan ejecución por aprobación documental.

### TASK-003 — Adaptar BUILD, TEST y REVIEW

**Etapa:** BUILD.\
**Archivos:** los tres Skills correspondientes.

**Cambios:**

- Añadir carga explícita y metadatos.
- BUILD: alcance por tarea, base Git, controles de edición y entrega identificable.
- TEST: eliminar contradicciones entre build condicional y obligatorio por defecto; concretar permisos de comandos y efectos.
- REVIEW: conservar lectura exclusiva, valoración propia y solicitudes a TEST/BUILD.
- Trasladar definiciones comunes de estados y conclusiones al CORE, preservando su significado.
- Sustituir paradas incondicionales entre etapas por la aplicación explícita de autorización vigente, hitos y N-14.
- Mantener autorización específica posterior para correcciones.

**Dependencias:** TASK-001 y TASK-002, para alinear la cadena completa.

**Finalización:** no hay concesiones implícitas de permisos, TEST no corrige y REVIEW no ejecuta verificaciones. Se conservan:

| TEST | REVIEW |
|---|---|
| CON FALLOS | REQUIERE CORRECCIONES |
| INCOMPLETO | REQUIERE EVIDENCIA ADICIONAL |
| SIN FALLOS EN EL ALCANCE VERIFICADO | LISTO PARA CONSIDERACIÓN HUMANA |

La tabla identifica las conclusiones de cada etapa; no establece una equivalencia automática entre ellas.

**Hito H2:** revisión humana del conjunto CORE + seis Skills, antes de enlazarlo desde las instrucciones raíz y comenzar TEST.

### TASK-004 — Integrar las instrucciones raíz

**Etapa:** BUILD.\
**Archivo:** `AGENTS.md` raíz.

**Propuesta recomendada:**

- Añadir una sección breve con enlace a `docs/cdf/CDF-CORE.md`.
- Exigir su lectura para operar mediante los seis Skills.
- Aclarar subordinación a la jerarquía efectiva y ausencia de permisos implícitos.
- Cambiar únicamente el título raíz a uno neutral, como `ClaudioDev — Instrucciones del repositorio`, para evitar presentar el encabezado CDF 1.0 como versión vigente de todo el conjunto.

Se conservarán misión, seguridad, arquitectura, diseño y demás instrucciones. No se copiarán las 18 reglas al archivo raíz.

**Dependencias:** H2 aprobado y autorización expresa de estos cambios locales.

**Finalización:** enlace y alcance inequívocos; `frontend/AGENTS.md` intacto; ningún anuncio anticipado de compatibilidad comprobada.

### TASK-005 — Verificación normativa y estática

**Etapa:** TEST.\
**Archivos modificables:** ninguno. Evidencia en conversación.

**Comprobaciones:** V-01 a V-07 descritas más adelante.

**Dependencias:** entrega identificada de TASK-001 a TASK-004, sin desviaciones de alcance pendientes, y autorización TEST.

**Finalización:** cada AC tiene resultado, evidencia y limitaciones; las verificaciones fallidas o bloqueadas se informan sin corregirlas.

Un informe TEST completo puede contener fallos. No equivale a compatibilidad comprobada ni aceptación.

### TASK-006 — Revisión independiente y recomendación

**Etapa:** REVIEW.\
**Archivos modificables:** ninguno.

**Trabajo:**

- Leer entrega, diff, documentos y evidencia TEST.
- Evaluar los doce AC con juicio propio.
- Revisar las relaciones entre autorizaciones, paradas, excepciones y competencias.
- Comprobar vigencia de evidencia y justificación de versiones.
- Emitir recomendación y solicitudes concretas de corrección o evidencia.

**Dependencias:** informe de TASK-005 y autorización REVIEW. Puede evaluar resultados fallidos o incompletos.

**Finalización:** valoración trazable de todos los AC, riesgos y conclusión global. No ejecuta validadores ni concede aprobación.

**Hito H3:** decisión humana final. Solo después de completar TEST, REVIEW y la aceptación humana final podrá declararse la compatibilidad comprobada, si queda sustentada, para la revisión exacta evaluada, y CDF 1.3.0 operativo. Hasta entonces CORE y Skills adaptados serán **CANDIDATOS**. Su eventual registro persistente requerirá autorización adicional; REVIEW no editará metadatos para certificarse a sí mismo.

## 6. Verificaciones previstas

Todas quedan pendientes; no se han ejecutado en esta etapa.

| ID | Tipo | Comprobación y evidencia esperada |
|---|---|---|
| **V-01** | Estática | Base/final Git, archivos seguidos y nuevos, alcance y preservación del trabajo previo. Identificar entrega mediante HEAD, diff y huellas de archivos nuevos. |
| **V-02** | Documental | Cotejo N-01 a N-18 frente a SPEC; integridad de obligaciones, excepciones, formatos y estados globales. |
| **V-03** | Estática + documental | Seis bloques de carga explícita, resolución de rutas, existencia del destino, versiones objetivo y tratamiento de CORE ausente o incompatible. |
| **V-04** | Documental | Responsabilidades, entradas y salidas de seis etapas; ausencia de duplicaciones normativas contradictorias. |
| **V-05** | Documental por escenarios | Autorizaciones agrupadas, paradas, excepciones, correcciones y decisiones humanas independientes. |
| **V-06** | Estática | Formato del diff, referencias locales afectadas, metadatos e historial; comparación de `frontend/AGENTS.md` y archivos preexistentes. |
| **V-07** | Documental | Matriz completa AC→implementación→evidencia→TEST→REVIEW y vigencia de la revisión evaluada. |

**Escenarios mínimos de V-05:**

1. PLAN aprobado sin permiso BUILD: no se edita.
2. Secuencia completa autorizada: no se repiten permisos suficientes, pero se respetan H1/H2.
3. Fallo TEST: se registra, no se corrige y solo continúan comprobaciones independientes autorizadas.
4. REVIEW solicita una ejecución: se remite a TEST.
5. CORE ausente, incompatible o de otro repositorio: se detiene la operación dependiente.
6. Cambio normativo conversacional aprobado, sin autorización de persistencia: no se implementa.
7. Excepción de build: conserva resultado no ejecutado y riesgo aceptado; no subsana un AC incumplido.
8. Aceptación final: no implica staging, commit, push o despliegue.

Estos escenarios se resolverán mediante análisis documental, sin borrar CORE, alterar versiones ni ejecutar acciones prohibidas para simular fallos.

**NO APLICA en este alcance:** build de aplicación, ESLint de frontend, TypeScript, pruebas funcionales de aplicación, servidor, navegador, responsive y accesibilidad visual. No cambia código ni contenido generado de la aplicación.

No se trata de una excepción al build: corresponde a la categoría documental de N-10. Si aparece efecto sobre generación de aplicación, se detendrá la clasificación y se revisarán alcance y permisos.

## 7. Matriz de trazabilidad

| AC | Tareas | Comprobaciones previstas |
|---|---|---|
| **AC-01** | 001, 002, 005, 006 | V-02/V-04/V-05: niveles, ejemplos, riesgo máximo y escalamiento. |
| **AC-02** | 001, 002, 003, 005, 006 | V-04/V-05: seis etapas identificables y aprobaciones conservadas. |
| **AC-03** | 001, 002, 003, 005, 006 | V-02/V-05: nueve campos, no aplicables justificados y aprobación separada de ejecución. |
| **AC-04** | 001, 003, 005, 006 | V-04/V-05: TEST sin correcciones; REVIEW sin ejecución ni escritura. |
| **AC-05** | 001, 002, 003, 005, 006 | V-02/V-05: política uniforme de compilación, efectos y excepciones. |
| **AC-06** | 001, 002, 003, 005, 006 | V-02/V-07: resultados TEST y juicios REVIEW separados. |
| **AC-07** | 001, 002, 005, 006 | V-02/V-04: campos compactos completos y persistencia normativa obligatoria. |
| **AC-08** | 001, 003, 005, 006 | V-05: parada dependiente, continuación independiente y reanudación justificada. |
| **AC-09** | 001, 003, 004, 005, 006 | V-02/V-05: aceptación y operaciones Git/despliegue independientes. |
| **AC-10** | 001, 002, 003, 004, 005, 006 | V-02/V-04/V-05: jerarquía efectiva, autorización, excepción y modificación normativa. |
| **AC-11** | 001, 002, 003, 005, 006 | V-03/V-06/V-07: historial, inicialización individual y compatibilidad comprobada solo después de TEST, revisión conjunta y aceptación humana final. |
| **AC-12** | 001 a 006 | V-01/V-03/V-04/V-06: seis Skills, fuente única, carga explícita y ausencia de vigencia automática. |

Ninguno de los doce AC se excluye. Los `NO APLICA` corresponden a comprobaciones de aplicación ajenas al cambio, no a estos criterios normativos.

## 8. Comandos, entorno y efectos

**Entorno previsto:** PowerShell, herramientas locales existentes y raíz del repositorio. Sin red, servidor ni URL.

**Lecturas y controles de BUILD previstos:**

```powershell
git rev-parse --show-toplevel
git branch --show-current
git rev-parse HEAD
git status --short
git diff --name-only
git diff --cached --name-only
git diff -- <archivos autorizados>
Get-Content -LiteralPath <archivo autorizado> -Encoding UTF8
```

**Verificaciones estáticas adicionales de TEST propuestas:**

```powershell
git diff --check
git diff --no-index --check -- /dev/null docs/cdf/CDF-CORE.md
Resolve-Path -LiteralPath <ruta al CORE>
Get-FileHash -Algorithm SHA256 -LiteralPath <archivo de la entrega>
rg -n <patrón de comprobación> <archivos autorizados>
```

Los patrones, listas de archivos y comprobaciones en memoria se concretarán antes de su ejecución. Los códigos de retorno de búsquedas y comparaciones se interpretarán según el comando; una diferencia esperada no se tratará automáticamente como fallo técnico.

`git diff` ordinario no incluye archivos nuevos sin seguimiento: el CORE se leerá directamente y se inspeccionará también mediante comparación sin índice.

**Efectos permitidos propuestos:**

- BUILD: crear únicamente el directorio necesario `docs/cdf/` y el CORE; editar los siete archivos existentes autorizados.
- TEST: lecturas y cálculos en memoria; resultados en conversación.
- REVIEW: lecturas y valoración de evidencia existente; informe en conversación.

No se proponen artefactos de evidencia en disco. Si después se solicitan, deberán autorizarse sus rutas y contenido.

## 9. Autorizaciones delimitadas

La aprobación de SPEC no autoriza estas operaciones. La aprobación futura de PLAN tampoco bastará por sí sola.

| Campo N-07 | BUILD | TEST | REVIEW |
|---|---|---|---|
| **Referencias** | SPEC-003, PLAN-003 aprobado, tareas e hitos autorizados. | Entrega BUILD exacta, SPEC, PLAN y AC. | Misma entrega e informe TEST identificado. |
| **Operaciones** | Ediciones locales y controles propios de edición. | V-01 a V-07, sin reparaciones. | Lectura y valoración; ningún validador ni ejecución TEST. |
| **Archivos** | CORE, seis Skills y cambios locales del raíz aprobados. | Sin modificaciones. | Sin modificaciones. |
| **Criterios** | Finalización de TASK-001 a 004. | AC-01 a AC-12 y comprobaciones aplicables. | Valoración independiente de los doce AC. |
| **Entorno** | Repositorio local, PowerShell y editor existente. | Repositorio local; herramientas existentes; sin URL. | Código, documentos y evidencia existente. |
| **Efectos** | Escrituras expresamente enumeradas. | Salida en conversación, sin artefactos persistentes. | Informe en conversación. |
| **Paradas** | N-14, H1/H2 y cambios preexistentes incompatibles. | Fallos dependientes, efectos inesperados o evidencia insuficiente. | Conclusión dependiente suspendida; solicitar evidencia o corrección. |
| **Vigencia** | Tareas y revisión expresamente identificadas. | Entrega identificada; no cambios posteriores automáticos. | Entrega y evidencia identificadas. |
| **Exclusiones** | Instalaciones, correcciones posteriores no autorizadas y operaciones Git/despliegue. | Correcciones, instalaciones, aplicación y escrituras. | Pruebas, validadores, navegador y cualquier modificación. |

Se recomienda autorizar por bloques:

1. TASK-001 → H1 humano.
2. TASK-002 y TASK-003 → H2 humano.
3. TASK-004 → TASK-005 → TASK-006, mediante cláusulas explícitas independientes.

Una autorización agrupada podrá cubrir estos bloques, pero deberá conservar las paradas H1/H2. No será necesario repetir permisos vigentes al reanudar tras su revisión si siguen siendo suficientes.

Durante la migración no se supondrá que los Skills parcialmente adaptados ya habilitan nuevas competencias. Se utilizarán las instrucciones efectivamente cargadas y la autorización concreta del ciclo. Si un archivo leído conserva una parada incompatible con la transición solicitada, se identificará el conflicto; no se ignorará mediante la futura regla todavía no implementada.

## 10. Riesgos, paradas y recuperación

| Riesgo | Control y parada |
|---|---|
| CORE y Skills discrepan | Fuente única, cotejo normativo y revisión cruzada; detener conclusión de compatibilidad. |
| Migración parcial presentada como vigente | Estado candidato y compatibilidad objetivo; hitos humanos y evaluación conjunta. |
| Referencia sin lectura real | Bloque imperativo inicial y registro de carga; no afirmar garantía automática. |
| Ruta resuelta a otro proyecto | Anclaje en ubicación del Skill y contraste de raíz. |
| Autorización agrupada interpretada como permiso ilimitado | Nueve campos, tareas, revisiones e hitos delimitados. |
| TEST o REVIEW corrigen su propio objeto de evaluación | Escritura exclusiva bajo BUILD autorizado; resultados separados. |
| Pérdida de reglas particulares al eliminar duplicados | Inventario de traslado y cotejo antes/después. |
| Trabajo preexistente alterado | Base inicial y comparación final; preservar SPEC sin seguimiento. |
| Evidencia invalidada por correcciones | Identificar archivos afectados y solicitar revalidación dirigida. |

Además de N-14, se detendrá ante versiones individuales previas no contempladas, necesidad de otro archivo, enlace de ruta ambiguo o modificación del frontend.

**Recuperación propuesta, sin ejecución:**

1. Detener la acción afectada y registrar el estado.
2. Conservar diff, archivos nuevos y evidencia.
3. Proponer un parche inverso limitado a los cambios propios identificados.
4. Solicitar autorización específica para aplicarlo.
5. Revalidar únicamente el alcance afectado y sus dependencias justificadas.

No se utilizarán `reset --hard`, `clean`, restauraciones masivas ni eliminación automática del CORE. Tampoco se revertirá trabajo preexistente para obtener un árbol limpio.

## 11. Permisos pendientes y decisiones abiertas

Antes de implementar se requiere:

1. Aprobar este PLAN y su alcance.
2. Autorizar exclusivamente su guardado en `docs/plans/CDF-PLAN-003.md`, con estado, versión y registro de aprobación.
3. Aprobar la inicialización individual `1.0.0` de los seis Skills.
4. Aprobar la inclusión y los cambios mínimos de `AGENTS.md` raíz.
5. Autorizar los bloques BUILD, TEST y REVIEW, respetando H1/H2/H3.

SPEC y PLAN deberán quedar identificados y versionados documentalmente antes de BUILD. Esto no se interpretará como permiso implícito de commit. Si se exige además un registro en historial Git antes de implementar, necesitará una decisión y autorización Git independientes.

El eventual registro persistente de compatibilidad comprobada y de aceptación final queda fuera de las escrituras propuestas para REVIEW; se podrá autorizar posteriormente sobre la evidencia obtenida.

El plan está **listo para revisión humana**, con estas decisiones pendientes expresamente delimitadas.

**No modifiqué archivos ni ejecuté pruebas, instalaciones, staging, commit, push o despliegue. El estado Git continúa mostrando únicamente `?? docs/specs/CDF-SPEC-003.md`. Me detengo antes de guardar PLAN o iniciar implementación, conforme a tu instrucción explícita.**
