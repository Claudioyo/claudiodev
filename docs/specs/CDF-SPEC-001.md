# CDF-SPEC-001 — Disponibilidad de Labs

Documento recuperado de la especificación presentada en esta conversación, con las decisiones y autorizaciones posteriores del desarrollador incorporadas. Los hallazgos describen la revisión original del código local; no acreditan una implementación ni pruebas posteriores.

## 1. Identificación

- **ID:** CDF-SPEC-001.
- **Nombre:** Corrección de mensajes sobre disponibilidad de APIs, automatizaciones y demos.
- **Tipo:** Corrección.
- **Estado:** **APROBADA PARA PLANIFICACIÓN**.
- **Prioridad propuesta:** Alta, por su impacto en la credibilidad del portafolio.

### Decisiones aprobadas

- LeadFlow: **IN DEVELOPMENT**.
- SupportAI y E-commerce: **PLANNED**.
- Conservar JSON y consola como ejemplos ilustrativos.
- Utilizar etiquetas técnicas en inglés con aclaraciones en español.
- Preservar la identidad Coffee Tech.

### Autorización de ejecución

La aprobación de esta especificación habilita la planificación. Del plan CDF-PLAN-001, **solo TASK-001 tiene autorización de ejecución**. **TASK-002 a TASK-006 permanecen pendientes y sin autorización de ejecución**. Este registro documental no ejecuta ninguna tarea ni acredita tareas completadas.

## 2. Problema

El sitio mezcla avisos de desarrollo con mensajes que sugieren funcionalidades disponibles. Esto puede generar expectativas de probar APIs, automatizaciones y demos que, según lo indicado, todavía están en desarrollo.

## 3. Objetivo

Comunicar con claridad el estado actual de los proyectos, conservando el posicionamiento profesional de ClaudioDev y diferenciando capacidades profesionales, funcionalidades previstas y ejemplos visuales.

## 4. Estado actual verificado

La revisión del código encontró lo siguiente:

| Ubicación | Mensajes o comportamiento actual | Ambigüedad |
|---|---|---|
| `frontend/src/app/page.tsx:35`, inicio | «Probar Labs», «APIs funcionales», «Automatizaciones reales» y «Demos interactivas». | Sugieren disponibilidad inmediata. |
| `frontend/src/app/page.tsx:111`, vista de LeadFlow | «API Preview», `GET /estado` y JSON con `"estado": "ok"`. | El JSON está escrito directamente en la página; puede interpretarse como respuesta real. |
| `frontend/src/app/page.tsx:164`, encabezado de Labs | «No te lo cuento. Pruébalo.», soluciones «construidas» y «SYSTEM ONLINE». | Sugieren ejecución y servicios activos. |
| `frontend/src/app/page.tsx:180`, tarjetas de Labs | LeadFlow figura como `IN DEVELOPMENT`; SupportAI como `PLANNED`; E-commerce se describe como próximo. | Los estados contradicen las promesas generales de disponibilidad. |
| `frontend/src/app/page.tsx:259`, consola visual | «Lab Console», «● READY» y listado estático de proyectos. | Puede parecer una consola operativa. |
| `frontend/src/app/layout.tsx:29`, metadatos | Descripción con «solutions built by Claudio». | Debe revisarse para evitar extender la misma ambigüedad a buscadores y enlaces compartidos. |

El enlace «Ver arquitectura» conduce a `#labs`; la sección revisada presenta tarjetas y una consola visual, sin contenido específico de arquitectura.

**Límite de la revisión:** estos hallazgos proceden del código local. No se verificó el sitio desplegado ni la existencia de servicios externos.

## 5. Alcance

**Incluido:**

- Revisar textos de inicio, vista de LeadFlow, Labs, tarjetas, consola visual y metadatos relacionados.
- Alinear llamadas a la acción y señales visuales con la disponibilidad real.
- Identificar expresamente ejemplos estáticos y funcionalidades previstas.
- Mantener navegación, estructura e identidad Coffee Tech.

**Excluido:**

- Implementar APIs, automatizaciones, asistentes o demos.
- Conectar servicios, ejecutar solicitudes reales o incorporar monitoreo.
- Rediseñar el sitio, añadir proyectos o comprometer fechas de entrega.
- Instalar dependencias, modificar archivos, publicar o desplegar durante la elaboración original de la especificación.

**Archivos previstos para una implementación posterior:** principalmente `frontend/src/app/page.tsx` y, si se aprueba ajustar su descripción, `frontend/src/app/layout.tsx`. El ajuste de metadatos está incluido en el plan aprobado como TASK-005, cuya ejecución permanece pendiente.

## 6. Requisitos

- **REQ-001.** Los mensajes generales deben indicar que las APIs, automatizaciones y demos del portafolio están en desarrollo o planificación y no están disponibles para probar.
- **REQ-002.** Cada proyecto debe mostrar un estado textual explícito y coherente en todas sus apariciones. Como base provisional: LeadFlow «En desarrollo»; SupportAI y E-commerce «Planificado».
- **REQ-003.** Las descripciones deben expresar las funciones pendientes como objetivos previstos, sin afirmar que ya procesan datos, automatizan tareas o atienden usuarios.
- **REQ-004.** Las llamadas a la acción deben describir lo que ofrece su destino. Propuesta: «Probar Labs» → «Explorar Labs» y «Ver arquitectura» → «Ver estado del proyecto».
- **REQ-005.** El bloque `GET /estado` debe identificarse, junto al ejemplo, como contenido estático que no ejecuta una solicitud real. Su contenido tampoco debe comunicar salud operativa actual.
- **REQ-006.** La consola debe identificarse como representación visual estática. «SYSTEM ONLINE», «READY» y los indicadores asociados deben dejar de sugerir disponibilidad o monitoreo real.
- **REQ-007.** Los metadatos deben evitar presentar las funcionalidades pendientes como soluciones ya implementadas.
- **REQ-008.** Los avisos deben ser legibles, estar próximos al contenido que califican y comunicar el estado mediante texto, sin depender exclusivamente del color.
- **REQ-009.** Deben conservarse la identidad Coffee Tech, la navegación y la adaptación a dispositivos móviles.
- **REQ-010.** La corrección debe distinguir la experiencia profesional de Claudio del estado de las demos; no debe negar capacidades profesionales ni introducir logros o integraciones sin verificar.

**Resolución aprobada de REQ-002:** se conserva el requisito original y se concreta su base provisional con `IN DEVELOPMENT — En desarrollo` para LeadFlow y `PLANNED — Planificado` para SupportAI y E-commerce.

## 7. Criterios de aceptación

- **AC-001 — REQ-001, 004.** Inicio y Labs no contienen invitaciones a ejecutar funcionalidades pendientes ni afirmaciones de disponibilidad actual. Cada enlace describe correctamente el contenido de su destino.
- **AC-002 — REQ-002, 003.** LeadFlow, SupportAI y E-commerce muestran los estados aprobados, sin contradicciones entre vista destacada, tarjetas y consola. Sus funciones pendientes se describen como previstas.
- **AC-003 — REQ-005.** Al leer el ejemplo de API se identifica inmediatamente que es estático y que no acredita una respuesta de un servicio activo.
- **AC-004 — REQ-006.** La consola declara su carácter ilustrativo y no muestra indicadores que puedan interpretarse como comprobaciones de disponibilidad.
- **AC-005 — REQ-007.** La descripción de metadatos no atribuye implementación o disponibilidad a las funcionalidades pendientes.
- **AC-006 — REQ-008, 009.** En revisión móvil y de escritorio, los estados y avisos son visibles, legibles y no quedan truncados; los enlaces conservan navegación por teclado y destinos válidos.
- **AC-007 — REQ-010.** La revisión editorial no encuentra nuevas afirmaciones de proyectos terminados, resultados comprobados o integraciones exitosas sin respaldo.

Estos criterios corresponden a la futura implementación; **no se presentan como pruebas realizadas**.

## 8. Riesgos y dependencias

- **Mensajes contradictorios:** un aviso general puede quedar desmentido por botones, ejemplos o indicadores cercanos. La revisión debe cubrir todos esos elementos.
- **Estado incorrecto:** los estados actuales del código requieren confirmación del responsable antes de consolidar el texto definitivo. Esta confirmación quedó registrada en las decisiones aprobadas.
- **Pérdida de claridad comercial:** debe mantenerse una descripción profesional de los servicios, separada de la disponibilidad de las demos.
- **Accesibilidad y espacio:** los avisos más explícitos pueden requerir ajustes menores para conservar legibilidad en móvil.
- **Dependencia editorial:** la aprobación de estados y terminología determina la redacción final. No se identifican dependencias nuevas necesarias para esta corrección.

**Supuesto de la especificación original:** ninguna de las APIs, automatizaciones o demos mencionadas está disponible públicamente para su uso, conforme a la solicitud.

## 9. Preguntas pendientes

Ninguna. Las preguntas originales quedaron resueltas por las decisiones aprobadas:

1. Se confirman LeadFlow en desarrollo y SupportAI/E-commerce planificados, con las etiquetas técnicas indicadas.
2. Se conservan el ejemplo JSON y la consola, identificándolos explícitamente como ilustrativos.
3. Se utilizan etiquetas técnicas en inglés con aclaraciones en español.

## 10. Recomendación

La especificación está **aprobada para planificación** y se relaciona con [CDF-PLAN-001](../plans/CDF-PLAN-001.md), aprobado para implementación con autorización de ejecución limitada a TASK-001. TASK-002 a TASK-006 permanecen pendientes.

La elaboración original se realizó en modo lectura, sin modificar archivos ni ejecutar comandos de escritura, pruebas, instalaciones o despliegues. El presente registro documental no acredita implementación ni resultados de pruebas.
