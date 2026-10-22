# CDF-PLAN-001 — Disponibilidad de Labs

Documento recuperado del plan presentado en esta conversación, con las decisiones y autorizaciones posteriores del desarrollador incorporadas. Los hallazgos describen la revisión original del repositorio; no acreditan implementación ni pruebas posteriores.

## 1. Identificación

- **Plan ID:** CDF-PLAN-001.
- **Especificación relacionada:** [CDF-SPEC-001](../specs/CDF-SPEC-001.md), presentada anteriormente en esta conversación y aprobada para planificación.
- **Estado:** **CERRADO — TASK-006 APROBADA POR REVISIÓN HUMANA**.
- **Objetivo:** Corregir los mensajes de disponibilidad de Labs mediante cambios pequeños de contenido y presentación, preservando Coffee Tech.

### Decisiones aprobadas

- LeadFlow: **IN DEVELOPMENT**.
- SupportAI y E-commerce: **PLANNED**.
- Conservar JSON y consola como ejemplos ilustrativos.
- Utilizar etiquetas técnicas en inglés con aclaraciones en español.
- Preservar la identidad Coffee Tech.

### Autorización de ejecución

**Estado vigente al cierre del primer ciclo CDF 1.0 (22 de octubre de 2026):** el desarrollador aprueba TASK-006 y acepta AC-001 a AC-007 según las evidencias registradas y su revisión manual de ClaudioDev.com en Edge, desde zoom 100 % hasta 200 %, incluyendo cambios de tamaño de ventana, sin encontrar problemas visibles. Se cierra el ciclo correspondiente a CDF-SPEC-001 / CDF-PLAN-001. Los registros de autorizaciones, fallos y pendientes que siguen se conservan como historial; este cierre prevalece sobre sus estados anteriores. CDF-SPEC-001 se conserva sin editar por instrucción expresa. El cierre no autoriza `git add`, commit, push ni despliegue.

La aprobación del plan no autoriza la ejecución de todas sus tareas. El 22 de octubre de 2026, el desarrollador confirmó que **TASK-001 y TASK-002 están aprobadas**, que **TASK-003 está implementada con revisión visual detallada pendiente** y que **TASK-004 está implementada y aprobada visualmente**. TASK-005 está implementada y aprobada por el desarrollador. Autoriza exclusivamente **TASK-006 en modalidad de auditoría, sin correcciones automáticas**. TASK-006 no está aprobada; TASK-003 mantiene pendiente su revisión visual detallada. Se autorizan lint, TypeScript sin emisión, build y revisión del diff, sin modificar código.

Para TASK-003, el desarrollador aprobó conservar el JSON con `"estado": "ok"` como respuesta simulada y estática, identificada expresamente como ajena a un servidor activo. Esta decisión editorial ajusta la sugerencia de cambiar el valor incluida en el plan; `"ok"` no representa el estado real del servicio.

| Tarea | Autorización y estado registrado |
|---|---|
| TASK-001 | Implementada, revisada visualmente y aprobada por el desarrollador. |
| TASK-002 | Implementada y aprobada mediante revisión humana por el desarrollador. |
| TASK-003 | Implementada; revisión visual realizada en TASK-006-VERIFY y aceptada dentro del cierre humano de AC-003. |
| TASK-004 | Implementada y aprobada visualmente por el desarrollador. |
| TASK-005 | Implementada y aprobada por el desarrollador. |
| TASK-006 | Aprobada por el desarrollador al cierre; AC-001 a AC-007 aceptados según las evidencias y revisión manual en Edge. |
| TASK-006-FIX-01 | Corrección de desbordamiento implementada y aceptada dentro del cierre de TASK-006. |
| TASK-006-FIX-02 | Correcciones localizadas de contraste implementadas y aceptadas dentro del cierre de TASK-006. |
| TASK-006-FIX-03 | Cabecera opaca implementada y aceptada dentro del cierre de TASK-006. |

## 2. Estado actual verificado

- `page.tsx` concentra los mensajes, estados, enlaces y ejemplos afectados.
- Persisten «Probar Labs», «APIs funcionales», «Automatizaciones reales», «Demos interactivas», «SYSTEM ONLINE» y «READY».
- LeadFlow muestra `IN DEVELOPMENT`; SupportAI, `PLANNED`. La tarjeta de E-commerce no tiene una etiqueta explícita equivalente.
- El JSON y la consola son cadenas estáticas. El JSON muestra `"estado": "ok"`.
- «Ver arquitectura» enlaza a `#labs`, donde se muestran tarjetas y la consola.
- `layout.tsx` contiene la descripción de metadatos que debe alinearse con la corrección.
- `ButtonLink` y `SectionHeader` permiten actualizar el contenido sin modificar sus interfaces.
- `package.json` ofrece comandos de ESLint y compilación; no declara un comando de pruebas.
- Git mostraba `AGENTS.md` y `.agents/` como archivos sin seguimiento en la revisión original. Deben preservarse.

## 3. Alcance y archivos afectados

| Archivo | Cambio previsto |
|---|---|
| `frontend/src/app/page.tsx` | Textos, estados bilingües, llamadas a la acción, aclaraciones de ejemplos y ajustes locales de presentación. |
| `frontend/src/app/layout.tsx` | Descripción de metadatos coherente con el estado de Labs. |

Los componentes compartidos y `globals.css` se reutilizarán sin cambios previstos. No se requieren dependencias, servicios, directorios ni nuevas abstracciones para la implementación.

## 4. Relación con requisitos y aceptación

Se conservan los identificadores de CDF-SPEC-001.

| Requisito | Tareas | Criterios relacionados |
|---|---|---|
| REQ-001: disponibilidad general clara | TASK-001, TASK-002 | AC-001 |
| REQ-002: estados coherentes | TASK-002, TASK-004 | AC-002 |
| REQ-003: funcionalidades descritas como previstas | TASK-002 | AC-002 |
| REQ-004: enlaces y textos coherentes | TASK-001, TASK-003 | AC-001 |
| REQ-005: JSON identificado como estático | TASK-003 | AC-003 |
| REQ-006: consola e indicadores ilustrativos | TASK-001, TASK-002, TASK-004 | AC-004 |
| REQ-007: metadatos honestos | TASK-005 | AC-005 |
| REQ-008: avisos accesibles y próximos | TASK-001 a TASK-004, TASK-006 | AC-006 |
| REQ-009: preservar diseño y navegación | TASK-001 a TASK-006 | AC-006 |
| REQ-010: separar capacidades profesionales y demos | TASK-001, TASK-002, TASK-005, TASK-006 | AC-007 |

## 5. Tareas de implementación

### TASK-001 — Corregir el mensaje inicial

- **Autorización:** implementada, revisada visualmente y aprobada por el desarrollador.
- **Objetivo:** Evitar expectativas de disponibilidad inmediata.
- **Archivo:** `frontend/src/app/page.tsx`, sección de inicio.
- **Cambios:** sustituir «Probar Labs» por «Explorar Labs»; reformular las tres afirmaciones de disponibilidad y añadir una aclaración próxima sobre desarrollo y planificación. Sustituir los puntos verdes asociados por indicadores neutrales existentes en la paleta.
- **Dependencias:** aprobación del plan, registrada en este documento.
- **Verificación:** revisar el bloque completo y comprobar que el enlace conserva `#labs`.
- **Finalización:** el inicio comunica que las demos aún no están disponibles y mantiene la presentación profesional de Claudio.

### TASK-002 — Unificar encabezado y estados de proyectos

- **Autorización:** implementada y aprobada mediante revisión humana por el desarrollador.
- **Objetivo:** Alinear las tarjetas y la vista destacada con las decisiones aprobadas.
- **Archivo:** `frontend/src/app/page.tsx`, encabezado de Labs y presentaciones de proyectos.
- **Cambios:** reemplazar «Pruébalo» y la descripción de soluciones ya construidas; sustituir «SYSTEM ONLINE» por un estado editorial. Mostrar `IN DEVELOPMENT — En desarrollo` para LeadFlow y `PLANNED — Planificado` para SupportAI y E-commerce. Expresar las funciones como objetivos previstos y aclarar que las tecnologías enumeradas corresponden a la propuesta del proyecto.
- **Dependencias:** TASK-001, para mantener coherencia editorial.
- **Verificación:** comparar todas las apariciones de cada proyecto y revisar que las etiquetas no dependan del color.
- **Finalización:** estados y descripciones consistentes, con aclaraciones visibles en español.

### TASK-003 — Aclarar el ejemplo de API

- **Autorización:** implementada y autorizada para continuar por el desarrollador, con la decisión editorial registrada arriba de conservar `"ok"` como valor simulado; revisión visual detallada pendiente.
- **Objetivo:** Conservar el JSON sin aparentar una integración activa.
- **Archivo:** `frontend/src/app/page.tsx`, vista destacada de LeadFlow.
- **Cambios:** mantener la etiqueta técnica `API Preview` con una aclaración inmediata: «Ejemplo ilustrativo estático; no ejecuta solicitudes reales». Cambiar el valor ilustrativo `"ok"` por uno coherente, como `"en_desarrollo"`. Renombrar «Ver arquitectura» a «Ver estado del proyecto», conservando `#labs`. Expresar la indisponibilidad de la demo sin prometer una fecha.
- **Dependencias:** TASK-002.
- **Verificación:** comprobar legibilidad del JSON, proximidad del aviso y correspondencia entre enlace y destino.
- **Finalización:** el bloque no puede interpretarse como evidencia de una respuesta real del servicio.

### TASK-004 — Aclarar la consola ilustrativa

- **Autorización:** implementada y aprobada visualmente por el desarrollador.
- **Objetivo:** Eliminar la apariencia de ejecución o monitoreo real.
- **Archivo:** `frontend/src/app/page.tsx`, bloque `Lab Console`.
- **Cambios:** sustituir `READY` por una etiqueta como `STATIC EXAMPLE`, acompañada de «Representación ilustrativa; no ejecuta comandos ni verifica servicios». Unificar los estados del listado con `IN DEVELOPMENT` y `PLANNED`, con sus aclaraciones en español. Retirar la señal verde de disponibilidad de este bloque.
- **Dependencias:** TASK-002.
- **Verificación:** cotejar consola y tarjetas; comprobar que ningún texto sugiera comprobaciones de salud o ejecución.
- **Finalización:** consola conservada, explícitamente estática y coherente con los estados aprobados.

### TASK-005 — Alinear metadatos

- **Autorización:** implementada y aprobada por el desarrollador.
- **Objetivo:** Extender la corrección a la descripción del sitio.
- **Archivo:** `frontend/src/app/layout.tsx`.
- **Cambios:** reemplazar la descripción por una formulación profesional que indique que Labs reúne proyectos en desarrollo y planificación. Conservar título, fuentes e idioma del documento.
- **Dependencias:** TASK-001 y TASK-002.
- **Verificación:** revisar la descripción en código y en el HTML generado durante la validación posterior.
- **Finalización:** los metadatos no atribuyen disponibilidad actual a las demos pendientes.

### TASK-006 — Validar el conjunto

- **Autorización:** auditoría autorizada exclusivamente por el desarrollador el 22 de octubre de 2026, sin correcciones automáticas; pendiente de aprobación humana.
- **Registro de auditoría (22 de octubre de 2026):** lint, TypeScript sin emisión y `git diff --check` correctos. El primer build falló al descargar Google Fonts; la repetición fuera del sandbox terminó correctamente. HTML de producción con descripción y avisos comprobados. AC-001, AC-002, AC-004, AC-005 y AC-007 conformes en la evidencia editorial y técnica revisada; AC-003 mantiene pendiente la revisión visual detallada de TASK-003. AC-006 fallido: en Edge a 320 px el documento mide 341 px y la vista destacada desborda. A 768 y 1280 px las mediciones DOM no detectaron desbordamiento general, pero las capturas fallaron por tiempo de espera; no se acredita revisión visual completa. Tab y Enter comprobados en el enlace de estado, con foco visible; recorrido completo, menú móvil y zoom al 200 % pendientes. Contraste y accesibilidad requieren revisión adicional. Sin cambios de código, dependencias nuevas ni coincidencias en el escaneo básico de patrones de credenciales; esto no equivale a una auditoría de seguridad exhaustiva. TASK-006 no está aprobada.
- **Objetivo:** Verificar requisitos, accesibilidad y ausencia de regresiones.
- **Archivos:** los dos archivos modificados; sin nuevos archivos de pruebas previstos.
- **Cambios:** únicamente ajustes puntuales derivados de fallos de validación.
- **Dependencias:** TASK-001 a TASK-005.
- **Verificación:** aplicar la estrategia siguiente y revisar el diff final.
- **Finalización:** AC-001 a AC-007 comprobados, con resultados y limitaciones documentados en el informe de entrega.

Antes de escribir código se consultará la documentación local pertinente de Next.js, conforme a `frontend/AGENTS.md`.

### Registro TASK-006-FIX-01 — Desbordamiento móvil

- **Autorización:** exclusivamente corregir el desbordamiento de AC-006, sin cambios de contraste, contenido editorial, estados, enlaces ni dependencias. Esta autorización posterior permite únicamente esta corrección sobre el código auditado.
- **Evidencia previa en Edge:** viewport 320 px, `document.documentElement.clientWidth = 305`, `scrollWidth = 341`. La columna implícita de `#inicio` medía 316,6 px y sus dos hijos terminaban en x=340,6. El mínimo automático de la pista propagaba el ancho intrínseco del contenido de LeadFlow. Cambiar únicamente la cuadrícula interna de tecnologías no redujo el ancho de 341 px.
- **Corrección:** `grid-cols-1` en la cuadrícula inicial para establecer una pista con mínimo cero, conservando la distribución `lg`. Al reducir la tarjeta, las celdas de tecnologías de tres columnas medían 59 px y Backend tenía `scrollWidth = 68`; se usa una columna en móvil y tres desde `sm` para evitar ese desbordamiento interno. No se añadió ocultación horizontal global.
- **Mediciones posteriores:**

| Viewport | `document.scrollingElement.scrollWidth` | `document.documentElement.scrollWidth` | `document.documentElement.clientWidth` |
|---|---|---|---|
| 320 | 305 | 305 | 305 |
| 375 | 360 | 360 | 360 |
| 768 | 753 | 753 | 753 |
| 1280 | 1265 | 1265 | 1265 |

- **Resultados:** sin desbordamiento horizontal general en las cuatro anchuras; las celdas de tecnologías tienen `scrollWidth = clientWidth`. Los 15 px respecto al viewport corresponden al espacio de la barra vertical. ESLint, TypeScript sin emisión y `git diff --check` correctos. Diff frente al estado inicial: solo dos cambios de clases en `page.tsx`, además de este registro. Contenido y cambios previos preservados.
- **Revisión visual y límites:** capturas reales de Edge en las cuatro anchuras, con cobertura parcial del contenido visible y variaciones de posición por desplazamiento suave; no equivalen a una revisión completa de toda la página, zoom al 200 % ni dispositivos físicos. El JSON conserva su desplazamiento horizontal local. Contraste, revisión visual detallada de TASK-003 y aceptación integral de AC-006 siguen pendientes. TASK-006 no está aprobada.

## 6. Estrategia de verificación

### Registro TASK-006-FIX-03 — Cabecera opaca

- **Autorización posterior:** exclusivamente corregir el contraste de la cabecera de navegación, manteniendo TASK-006 pendiente de aprobación humana.
- **Cambio mínimo:** en `frontend/src/components/Navbar.tsx`, sustituir `bg-[rgba(246,241,231,0.88)]` por `bg-[var(--background)]`. Se conservan colores de enlaces, clases sticky, foco, menú móvil, disposición y comportamiento. Ningún cambio en textos, Labs, JSON, consola o metadatos.
- **Contraste efectivo:** Edge confirma fondo `rgb(246, 241, 231)` y opacidad 1 tanto al inicio como sobre Labs; al ser opaco, el contenido subyacente ya no interviene. Cálculo sRGB: enlaces normales `#6f655d` sobre `#f6f1e7`, 5,048:1; hover definido `#171310`, 16,406:1. Superan 4,5:1 para texto normal. El hover se calcula desde la regla CSS conservada, sin nueva simulación de puntero.
- **Regresión responsive en Edge:** viewport 320/375/768/1280 px; `document.documentElement.scrollWidth = clientWidth` respectivamente 305/360/753/1265 px. Sin desbordamiento horizontal general. Cabecera observada sobre Labs con `top = 0` y `position: sticky`. Menú abierto y cerrado con Enter a 375 px; Tab alcanza Inicio con foco visible. Viewport temporal restaurado.
- **Verificaciones:** ESLint, TypeScript sin emisión (`--noEmit --incremental false`) y `git diff --check` correctos. Diff frente al estado inicial limitado a una sustitución de clase en Navbar y este registro; cambios anteriores preservados. Sin instalación, commit ni push.
- **Límites y pendientes:** esta intervención no constituye auditoría WCAG AA global ni aprobación de TASK-006. Se mantiene pendiente la prueba real de zoom al 200 % y la revisión humana integral; la revisión visual de TASK-003 realizada en TASK-006-VERIFY no se convierte en aprobación humana mediante este registro. No se repitió la auditoría visual completa de toda la página.

### Registro TASK-006-FIX-02 — Contraste localizado

- **Autorización posterior:** implementación exclusivamente de las cuatro correcciones de contraste aprobadas. No se cambia la transparencia de la cabecera ni se aprueba TASK-006.
- **Intervención:** token `--coffee-text: #8a5f3d` para los dos textos pequeños de inicio/LeadFlow y las etiquetas claras de `SectionHeader`; `--coffee-medium: #b8875a` conservado para decoración. Rótulo Lab Console a `text-zinc-400`; aviso de demo a `opacity-85`; selección con fondo café original y texto `#171310`. Archivos: `page.tsx`, `globals.css`, `SectionHeader.tsx` y este registro. Sin cambios editoriales, estructurales, de enlaces, estados, comportamiento o dependencias.
- **Verificación de contraste:** estilos calculados comprobados en Edge. Cálculo de luminancia relativa sRGB y composición alfa: coffee-text/background 4,9287:1; coffee-text/surface 5,3392:1; demo con opacidad 0,85 sobre surface 4,9897:1; selección 5,8495:1. Lab Console aproximadamente 7,40:1 sobre negro al 30 % y fondo Labs; estimación conservadora con ambos resplandores al máximo: 7,10:1. Todas las combinaciones corregidas superan 4,5:1; el fondo efectivo del rótulo varía por los resplandores, sin muestreo exhaustivo por píxel.
- **Responsive en Edge:** viewport 320/375/768/1280 px; `document.documentElement.scrollWidth` y `clientWidth` coinciden respectivamente en 305/360/753/1265 px. Sin reaparición de desbordamiento horizontal general. Viewport temporal restaurado. Captura real parcial de escritorio; no se acredita una nueva revisión visual completa de todas las anchuras.
- **Comprobaciones:** ESLint, TypeScript `--noEmit --incremental false` y `git diff --check` correctos. Diff revisado frente a copias previas, limitado a los estilos autorizados y este registro; cambios anteriores preservados. Sin instalación, commit ni push.
- **Pendientes:** revisión humana de esta intervención; revisión visual detallada de TASK-003; menú móvil, recorrido completo por teclado, zoom al 200 % y revisión visual integral. Permanece el riesgo de contraste de navegación sobre la cabecera translúcida, expresamente excluida. TASK-006 permanece abierta y sin aprobar.

Las comprobaciones siguientes están autorizadas para TASK-006 en modalidad de auditoría, incluido BUILD. No se autorizan correcciones de código. Los resultados se registrarán tras ejecutarlas; TASK-006 queda pendiente de aprobación humana.

**Comprobaciones automatizadas previstas, desde `frontend/`:**

- `npm run lint`.
- `npm run build`.
- Validación TypeScript con el compilador local y opciones `--noEmit --incremental false`, después de disponer de los tipos generados necesarios.
- Revisión del diff y búsqueda de mensajes anteriores para detectar contradicciones pendientes.

Se usarán las herramientas ya instaladas. Si faltan dependencias, se informará la limitación sin instalarlas automáticamente.

**Comprobaciones manuales previstas:**

- Revisar inicio, vista de LeadFlow, tarjetas, consola y metadatos contra AC-001 a AC-007.
- Inspeccionar a 320, 768 y 1280 píxeles, además de zoom al 200 %.
- Confirmar avisos legibles, contraste suficiente y ausencia de desbordamiento general.
- Recorrer enlaces por teclado, comprobar foco visible y destinos.
- Verificar que las etiquetas técnicas tienen aclaraciones visibles en español.
- Confirmar que las capacidades profesionales siguen diferenciadas del estado de las demos.

Durante la elaboración original del plan no se ejecutaron estas comprobaciones: la compilación y el servidor pueden generar archivos. Este registro tampoco acredita su ejecución ni resultados.

## 7. Riesgos y reversión

| Riesgo | Mitigación |
|---|---|
| Etiquetas bilingües más largas rompen la distribución. | Permitir ajuste de línea y aplicar cambios locales de espaciado, conservando Coffee Tech. |
| Queda una promesa contradictoria en otra sección. | Revisión editorial completa de ambos archivos y búsqueda final de mensajes anteriores. |
| JSON o consola siguen pareciendo operativos. | Avisos próximos, estados coherentes y eliminación de señales de disponibilidad. |
| La corrección debilita el posicionamiento profesional. | Limitar las aclaraciones al estado de los proyectos y demos. |
| El build falla por acceso a fuentes externas. | Registrar la causa y distinguirla de errores introducidos por el cambio. |
| Se afectan cambios ajenos. | Registrar el estado inicial y revisar únicamente los fragmentos del alcance. |

**Reversión propuesta:** revisar el diff de los dos archivos y revertir solo los fragmentos de esta corrección. Si posteriormente existe un commit exclusivo y autorizado, podrá revertirse ese commit mediante Git. No utilizar restauraciones globales ni afectar `AGENTS.md` o `.agents/`.

No se ejecutan comandos de reversión, commits ni push como parte del registro documental.

## 8. Preguntas pendientes

Ninguna decisión esencial pendiente. Las cinco decisiones aprobadas resuelven las preguntas de la especificación anterior.

## 9. Recomendación

### Cierre vigente — primer ciclo CDF 1.0

- **Aprobación humana:** TASK-006 aprobada; ciclo CDF-SPEC-001 / CDF-PLAN-001 cerrado por autorización expresa del desarrollador.
- **Validación manual aportada por el usuario:** revisión de ClaudioDev.com en Edge, zoom del 100 % al 200 % y cambios de tamaño de ventana, sin problemas visibles. Es evidencia humana comunicada por el usuario; no se atribuye al agente una ejecución automatizada del zoom que antes no pudo acreditar.
- **AC-001 a AC-007:** aceptados por el desarrollador. AC-001: mensajes y enlaces coherentes; AC-002: estados y objetivos previstos consistentes; AC-003: API Preview y JSON claramente simulados; AC-004: consola ilustrativa; AC-005: metadatos honestos; AC-006: adaptación, legibilidad y navegación aceptadas tras las correcciones y revisión humana; AC-007: sin nuevas afirmaciones editoriales sin respaldo.
- **Base técnica registrada:** lint, TypeScript sin emisión, build satisfactorio tras repetir fuera del sandbox por descarga de fuentes, `git diff --check`, revisión de diffs, mediciones responsive a 320/375/768/1280 px, revisión visual de navegador y comprobaciones de teclado y contraste descritas en el historial. No se afirma que esos comandos se hayan repetido en este cierre documental.
- **Limitaciones:** auditoría acotada al alcance de este ciclo y al navegador revisado; sin certificación WCAG AA integral, auditoría exhaustiva de seguridad, pruebas con todos los navegadores, tecnologías de asistencia o dispositivos físicos. Las comprobaciones parciales y tiempos de espera anteriores permanecen documentados; la aceptación humana no los convierte en pruebas automatizadas realizadas. Los ejemplos siguen siendo estáticos y no acreditan servicios activos.
- **Estado de entrega:** preparado para revisión de archivos y propuesta de commit. Sin staging, commit, push, instalaciones ni despliegue autorizados en este cierre.

**Recomendación anterior, conservada como historial:**

El plan está **aprobado para implementación**, con alcance limitado a dos archivos de código y sin cambios arquitectónicos. **TASK-001 y TASK-002 están aprobadas; TASK-003 está implementada con revisión visual detallada pendiente; TASK-004 está implementada y aprobada visualmente. TASK-005 está implementada y aprobada. Solo TASK-006 está autorizada en modalidad de auditoría sin correcciones automáticas, pendiente de aprobación humana.**

La elaboración original del plan se realizó exclusivamente en lectura. El presente registro crea únicamente la especificación y el plan solicitados: no modifica código fuente, no ejecuta BUILD, no instala dependencias, no realiza commits ni push y no implementa ninguna tarea.
