# CDF13-SPEC-01 — Diseño normativo consolidado mediante SPEC-02

**Estado: APROBADA.**

**Identificador documental:** CDF-SPEC-003.

**Estado vigente del ciclo — H3-ACCEPT-01, 2026-10-24:** el responsable aprobó H3 y aceptó CDF 1.3.0 como versión operativa dentro del alcance documental y estático verificado por TEST-001 y REVIEW-001. La decisión reconoce V-01 a V-07 satisfactorias y los doce AC sustentados por REVIEW, sin defectos bloqueantes conocidos. La compatibilidad comprobada se limita a ese alcance; no garantiza cumplimiento conductual universal de agentes futuros. Los estados, permisos pendientes y condiciones de vigencia del contenido histórico siguiente conservan su referencia a la etapa en que se redactaron y quedan resueltos, cuando corresponda, por esta decisión y las autorizaciones intermedias. Se conservan los resultados TEST/REVIEW, reglas y antecedentes; H3 no concede permisos de staging, commit, push ni despliegue.

**Registro de decisión humana — CDF 1.3 / SPEC-SAVE-01, 2026-10-24:** el responsable aprobó expresamente la especificación consolidada CDF13-SPEC-01, revisada mediante SPEC-02, con sus reglas N-01 a N-18 y criterios AC-01 a AC-12. Autorizó exclusivamente crear `docs/specs/CDF-SPEC-003.md` con su contenido íntegro, verificar la conservación de las 18 reglas, los doce AC y el mapa de los seis Skills, e informar el archivo creado, el diff y el estado Git. La aprobación y esta persistencia no autorizan implementar el framework ni comenzar PLAN. No se autoriza modificar AGENTS.md, Skills o código de aplicación, crear CDF-CORE.md, ejecutar pruebas de aplicación, staging, commit, push ni despliegue. Tras guardar y verificar la SPEC, corresponde detenerse para revisión humana antes de comenzar PLAN.

**Nota humana para el futuro PLAN:** cada Skill deberá cargar explícitamente `docs/cdf/CDF-CORE.md` antes de operar; una referencia documental por sí sola no garantiza su lectura. Esta nota no autoriza crear la fuente común ni adaptar los Skills.

El contenido consolidado siguiente se conserva íntegro, salvo la actualización del estado a APROBADA y este registro. Sus referencias a una aprobación, persistencia o decisión futura describen el estado al presentarse SPEC-02. SPEC-SAVE-01 resuelve la aprobación y autoriza únicamente esta persistencia; las demás operaciones y decisiones siguen pendientes. La aprobación documental no concede vigencia operativa al framework.

Esta propuesta no tiene vigencia operativa. Su aprobación no autoriza guardarla, implementar CDF 1.3, modificar Skills ni ejecutar verificaciones. La escritura, implementación y verificación requieren autorizaciones explícitas con su alcance correspondiente.

**Objetivo:** adaptar el esfuerzo del procedimiento al impacto del cambio, conservando las seis etapas, la trazabilidad, los límites de ejecución y las decisiones humanas.

**Base documental:** texto DRAFT completo de CDF13-SPEC-01 proporcionado por el responsable y ajustes solicitados en SPEC-02. Se confirmó la presencia de N-01 a N-18, los doce AC, los ejemplos y el mapa de adaptación de los seis Skills.

Las afirmaciones del DRAFT sobre versiones actuales, instrucciones inspeccionadas y discrepancias previas se conservan como antecedentes de aquella revisión; no constituyen una nueva comprobación de esos archivos ni evidencia de implementación.

**Alcance:** reglas comunes, clasificación, permisos, comprobaciones, formatos, versionado y responsabilidades de los seis Skills.

**Impacto propuesto:** grande por modificación de reglas de autorización y del procedimiento, aunque no implique cambios en la aplicación ni compilación de esta.

**Exclusiones:** implementar estas reglas, crear `docs/cdf/CDF-CORE.md`, guardar SPEC o PLAN, editar Skills, ejecutar pruebas, incorporar dependencias, staging, commit, push y despliegue.

## Reglas normativas propuestas

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

## Ejemplos de aplicación

| Nivel | Ejemplo | Tratamiento |
|---|---|---|
| **Pequeño** | Ampliar textos de tres fichas estáticas sin alterar lógica ni estilos compartidos. | Una tarea BUILD; cotejo editorial, diff, lint/tipos, build por defecto y revisión visual de ajuste y zoom pertinente. |
| **Mediano** | Añadir filtros interactivos a Labs. | Escenarios de estado vacío, selección y teclado; regresión de componentes afectados, build y revisión funcional y visual. |
| **Grande** | Incorporar autenticación y almacenamiento de contactos. | Contratos y datos, controles de acceso, fallos de integración, pruebas ampliadas y puntos de revisión por hitos. |

Una corrección ortográfica en un documento puede ser pequeña y no requerir build.

Una modificación de dos líneas que debilite autorizaciones del CDF es grande y exige revisión normativa ampliada y documentación persistente y versionada, también sin build de aplicación cuando no afecte a su generación.

Los tratamientos describen comprobaciones previstas; no conceden permiso para ejecutarlas.

## Criterios de aceptación

Se conservan los doce identificadores y su finalidad. La redacción siguiente concreta condiciones verificables sin añadir criterios nuevos.

| ID | Condición verificable consolidada | Ajuste de redacción |
|---|---|---|
| **AC-01** | N-03 y N-04 definen los tres niveles, sus ejemplos y los desencadenantes de escalamiento; el nivel responde al riesgo más alto aplicable. | Se explicita cómo comprobar la clasificación. |
| **AC-02** | Las seis etapas mantienen entradas, resultados y límites identificables; compactación y autorización agrupada no omiten etapas ni aprobaciones. | Se precisa el efecto de la compactación. |
| **AC-03** | La aprobación de PLAN y el permiso de ejecución figuran separados; toda autorización de secuencia cubre los nueve campos de N-07, con justificación de los no aplicables. | Se concreta la integridad del bloque de permisos. |
| **AC-04** | TEST prohíbe correcciones y opciones de reparación; REVIEW prohíbe ejecuciones de verificación y modificaciones. Toda necesidad adicional se remite a la etapa competente. | Se distingue generación autorizada de evidencia de corrección. |
| **AC-05** | La política distingue documentos y Skills sin efecto en la aplicación, cambios de aplicación y cambios críticos; las excepciones registran los campos de N-11 y conservan los resultados reales. | Se explicitan trazabilidad y límites de la excepción. |
| **AC-06** | La matriz contiene resultado TEST y valoración REVIEW separados, conserva sus estados y registra el fundamento de cualquier discrepancia. | Se concreta qué debe conservarse. |
| **AC-07** | Los formatos compactos contienen todos los campos de N-17 y N-18; su uso conversacional respeta N-06 y no exime de persistir y versionar cambios normativos. | Se incorpora la persistencia normativa obligatoria. |
| **AC-08** | Cada condición de N-14 detiene la acción o conclusión dependiente; la continuación independiente está autorizada y no agrava el problema; la reanudación identifica causa resuelta y permiso suficiente. | Se delimita la parada frente a actividad independiente. |
| **AC-09** | Aceptación, staging/commit, push y despliegue figuran como decisiones explícitas diferenciadas, con entrega y destinos delimitados; ninguna se deduce de otra. | Se incluye expresamente staging y sus límites. |
| **AC-10** | La precedencia se declara subordinada a la jerarquía efectiva de la plataforma; se distinguen autorización operativa, excepción admitida y modificación normativa, sin anulaciones implícitas. | Se corrige la posible interpretación de una jerarquía alternativa. |
| **AC-11** | Se separan versión individual, versión del framework y compatibilidad; se conserva el historial y se justifica cualquier numeración. La compatibilidad comprobada con CDF 1.3.0 exige implementación y revisión de los seis Skills. | Se concreta cuándo puede declararse compatibilidad. |
| **AC-12** | El mapa cubre los seis Skills y su referencia a `docs/cdf/CDF-CORE.md`, sin duplicaciones normativas completas; la propuesta y su aprobación no se presentan como implementación ni vigencia operativa. | Se fija la fuente común y se precisa la ausencia de vigencia automática. |

Estos AC sirven para revisar el diseño y, posteriormente, verificar su implementación autorizada. **No constituyen resultados de pruebas.** La compatibilidad implementada, las referencias reales y la ausencia de contradicciones en los archivos siguen pendientes de comprobación futura.

## Mapa de adaptación de los seis Skills

Todos los Skills están bajo `.agents/skills/`. La fuente común propuesta está fuera de ese directorio, en `docs/cdf/CDF-CORE.md`.

| Skill | Responsabilidad particular que conserva | Adaptación necesaria |
|---|---|---|
| `project-scan/SKILL.md` | Inspeccionar y caracterizar el estado, sin convertir hallazgos en permisos. | Referenciar la fuente común; clasificación y escalamiento; inspección focalizada; resultado compacto y límites de evidencia. |
| `feature-spec/SKILL.md` | Definir problema, alcance, requisitos y AC para aprobación. | Referenciar la fuente común; SPEC compacta; impacto; estado vigente; distinción entre aprobación, persistencia y ejecución. |
| `implementation-plan/SKILL.md` | Convertir SPEC aprobada en tareas y controles delimitados. | Referenciar la fuente común; tareas cohesionadas; matriz AC→tarea→comprobación; política de build y bloque completo de permisos. |
| `build-task/SKILL.md` | Implementar exclusivamente las tareas autorizadas. | Referenciar la fuente común; alcance por tarea; controles de edición; transiciones autorizadas; paradas y entrega identificable. |
| `test-task/SKILL.md` | Ejecutar verificaciones autorizadas y producir evidencia reproducible, sin corregir ni aprobar. | Referenciar la fuente común; política uniforme de compilación; pruebas por impacto; artefactos autorizados; excepciones y prohibición de reparaciones. |
| `review-task/SKILL.md` | Evaluar código, documentación y evidencia existente con juicio propio, sin ejecutar ni aprobar. | Referenciar la fuente común; matriz compartida; vigencia de evidencia; evaluación de excepciones y decisiones humanas separadas. |

Los seis DEBEN declarar versión individual, compatibilidad y cambios relevantes conforme a N-16.

Las reglas comunes se mantendrán en la fuente única. Los Skills podrán explicar su aplicación particular sin crear obligaciones comunes alternativas.

No se propone alterar el bloque generado de `frontend/AGENTS.md`. Cualquier enlace desde las instrucciones raíz deberá incluirse expresamente en el futuro alcance de implementación y autorización de escritura.

## Coherencia normativa resuelta

| Relación | Resolución |
|---|---|
| N-02 / N-07 | Autorizar una secuencia concede operaciones delimitadas; no modifica reglas ni concede dispensas implícitas. |
| N-05 / N-07 | Se pueden agrupar permisos y entregas; las etapas y sus controles de entrada se conservan. |
| N-07 / N-14 | Las paradas prevalecen sobre la continuación automática de la secuencia autorizada. |
| N-09 / N-10 | TEST ejecuta comprobaciones; REVIEW evalúa evidencia. Un cambio documental grande no exige por ello build de aplicación. |
| N-10 / N-11 | El build obligatorio por defecto admite una excepción humana documentada; su omisión no se registra como prueba satisfactoria. |
| N-11 / N-14 | Una excepción de evidencia no neutraliza incumplimientos confirmados, riesgos bloqueantes ni efectos inesperados. |
| N-08 / N-14 | REVIEW puede evaluar fallos o bloqueos registrados sin reanudar la operación detenida ni emitir conformidad injustificada. |
| N-09 / N-15 | TEST y REVIEW no conceden aceptación humana ni permisos Git o de despliegue. |
| N-06 / N-17 / N-18 | El formato compacto o conversacional no elimina la persistencia obligatoria de los cambios normativos. |

## Decisiones resueltas y pendientes

Quedan resueltas en esta propuesta:

- **Fuente común:** `docs/cdf/CDF-CORE.md`, referenciada por los seis Skills.
- **Precedencia:** interpretación interna subordinada a la jerarquía efectiva de la plataforma.
- **Autorizaciones:** separación entre operación, excepción y modificación normativa.
- **Persistencia:** SPEC y PLAN pueden ser conversacionales cuando proceda; los cambios normativos requieren documentación persistente y versionada, con escritura autorizada.
- **Versionado:** conservación del historial individual; ninguna numeración nueva se asigna automáticamente.
- **Compatibilidad:** CDF 1.3.0 es el objetivo propuesto; su comprobación exige implementar y revisar los seis Skills.

Requieren intervención humana posterior:

1. **Aprobar o solicitar cambios a esta especificación consolidada.**
2. Autorizar expresamente su persistencia y definir los destinos documentales de SPEC y PLAN.
3. Aprobar las versiones individuales propuestas tras analizar los historiales y la naturaleza de los cambios.
4. Aprobar el futuro PLAN y autorizar por separado sus operaciones de implementación y verificación.

**Me detengo para aprobación humana.** No modifiqué archivos ni ejecuté implementación, pruebas, staging, commit, push o despliegue.
