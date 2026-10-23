**CDF-SPEC-002 — Claridad editorial de las fichas Labs**

- **Framework:** CDF 1.2 · SPEC-01.
- **Tipo:** Mejora editorial.
- **Estado:** APPROVED — aprobación humana mediante la instrucción CDF 1.2 — SPEC-SAVE-01.
- **Prioridad propuesta:** Media.
- **Archivo previsto:** `frontend/src/app/page.tsx`, exclusivamente dentro de las tres fichas Labs.
- **Base:** SCAN-01, decisiones humanas de esta solicitud y antecedentes CDF-SPEC-001 / CDF-PLAN-001.

Registro de aprobación: el desarrollador aprobó en SPEC-SAVE-01 los nueve requisitos, los nueve criterios de aceptación, la redacción exacta de las tres fichas y las verificaciones previstas. La aprobación de SPEC no autoriza implementación ni pruebas. Los apartados siguientes conservan el contenido de SPEC-01, incluidas las decisiones que estaban pendientes al presentarlo y su cierre histórico; esas decisiones quedan resueltas por esta aprobación.

Los identificadores REQ y AC siguientes pertenecen exclusivamente a **CDF-SPEC-002**.

**A. Problema, objetivo y estado verificado**

Las fichas actuales comunican nombre, identificador, estado y objetivo previsto, pero no explican claramente el problema del negocio que motiva cada proyecto. Esto dificulta comprender su utilidad más allá de las tecnologías mencionadas.

El objetivo es que cada ficha permita reconocer **para quién se plantea el proyecto, qué problema busca abordar y qué se pretende construir**, sin atribuirle funcionalidad operativa.

La inspección de `page.tsx` confirmó:

- Tres elementos `<article>` en una cuadrícula de una columna y tres desde `lg`.
- LeadFlow: `IN DEVELOPMENT — En desarrollo`; tecnologías previstas Python, REST API y JSON.
- SupportAI: `PLANNED — Planificado`; tecnologías previstas AI, Chatbot y Automation.
- E-commerce: `PLANNED — Planificado`; sin listado de tecnologías y con borde discontinuo.
- Cada ficha contiene actualmente un único párrafo de objetivo.

Los antecedentes documentan la corrección previa de mensajes de disponibilidad y el cierre humano de ese ciclo. Sus resultados de pruebas son históricos; no se han repetido en esta etapa.

**B. Alcance**

Incluido:

- Incorporar un problema concreto y un propósito previsto en cada ficha.
- Utilizar los textos propuestos en el apartado E, sujetos a aprobación.
- Mantener la presentación existente, permitiendo únicamente ajustes locales mínimos de separación o distribución del texto cuando sean necesarios para su legibilidad.

Excluido:

- Cambios fuera de las tres fichas, incluso dentro de `page.tsx`.
- Modificación de nombres, identificadores, estados, etiquetas o tecnologías actuales.
- Cambios en vista destacada, API Preview, Lab Console, navegación, metadatos o demás secciones.
- Funcionalidades, dependencias, rutas, backend, componentes nuevos y refactorizaciones.
- Rediseño, fechas de entrega, métricas o afirmaciones sobre resultados obtenidos.

**C. Requisitos**

| ID | Requisito |
|---|---|
| REQ-001 | LeadFlow debe describir la necesidad de pequeños negocios de organizar contactos sin perder oportunidades y el propósito previsto de recibir, validar y organizar prospectos mediante una API REST con Python y JSON. |
| REQ-002 | SupportAI debe describir las preguntas repetitivas que reciben los negocios y el propósito previsto de explorar un asistente de IA para orientar clientes y responder consultas frecuentes. |
| REQ-003 | E-commerce debe describir la necesidad de pequeños comercios de presentar productos y administrar información comercial digitalmente; su propósito será explorar un catálogo digital, con inventario e integraciones solo como posibilidades futuras. |
| REQ-004 | Las capacidades deben formularse como objetivos previstos o posibilidades futuras, sin afirmar disponibilidad, implementación, resultados ni fechas. |
| REQ-005 | Deben preservarse nombres, identificadores, estados bilingües y etiquetas actuales. LeadFlow conservará Python, REST API y JSON; SupportAI conservará AI, Chatbot y Automation; E-commerce continuará sin listado tecnológico. |
| REQ-006 | Cada ficha debe distinguir explícitamente «Problema» y «Propósito previsto», mediante texto visible y disponible para tecnologías de asistencia, sin exigir interacción. |
| REQ-007 | Deben conservarse Coffee Tech, orden, semántica de las fichas, encabezados, cuadrícula y diferencias visuales existentes. Solo se admitirán ajustes locales mínimos justificados por legibilidad. |
| REQ-008 | El contenido completo debe permanecer legible y accesible en móvil, tableta, escritorio y zoom al 200 %, sin recortes, superposiciones ni nuevos desbordamientos horizontales. |
| REQ-009 | El cambio debe limitarse a las tres fichas de `page.tsx`, sin modificar otros archivos, añadir funcionalidad ni alterar los elementos excluidos. |

**D. Criterios de aceptación**

| ID | Condición observable y comprobable |
|---|---|
| AC-001 | LeadFlow contiene los dos textos aprobados del apartado E e identifica pequeños negocios, organización de contactos, riesgo de perder oportunidades y propósito de API REST con Python y JSON. |
| AC-002 | SupportAI contiene los dos textos aprobados e identifica preguntas repetitivas, necesidad de eficiencia y exploración de un asistente de IA para orientación y consultas frecuentes. |
| AC-003 | E-commerce contiene los dos textos aprobados e identifica pequeños comercios, presentación de productos, administración de información y catálogo digital; inventario e integraciones figuran como posibilidades futuras. |
| AC-004 | Ninguna ficha afirma que recibe datos, responde consultas, administra catálogos o ejecuta integraciones actualmente. Los estados permanecen exactamente como están y son coherentes con consola y vista destacada. |
| AC-005 | Las tres fichas muestran «Problema» y «Propósito previsto» en orden de lectura natural, sin contenido oculto, truncado o accesible únicamente por interacción. |
| AC-006 | Nombres, identificadores, estados y tecnologías coinciden con la base previa. Se conservan colores, tipografía, bordes y cuadrícula; cualquier ajuste local tiene justificación verificable de legibilidad. |
| AC-007 | A 320, 375, 768, 1024 y 1280 px, y en una comprobación de zoom real al 200 %, los textos, estados y etiquetas se leen completos, sin superposición ni desbordamiento horizontal nuevo. Se admite mayor altura de las fichas. |
| AC-008 | El diff muestra cambios exclusivamente dentro de las tres fichas de `page.tsx`. El resto del archivo y los demás archivos permanecen intactos; no aparecen dependencias, componentes, rutas ni comportamiento nuevos. |
| AC-009 | Lint y TypeScript finalizan sin errores. Cualquier bloqueo del entorno se registra como verificación pendiente, sin declararlo resultado satisfactorio. |

**E. Textos concretos propuestos**

**LeadFlow**

> Problema: pequeños negocios reciben contactos de clientes y necesitan organizarlos para no perder oportunidades.
>
> Propósito previsto: desarrollar un sistema para recibir, validar y organizar prospectos mediante una API REST con Python y JSON.

Estado conservado: **IN DEVELOPMENT — En desarrollo**.

**SupportAI**

> Problema: los negocios reciben preguntas repetitivas y necesitan responder de forma más eficiente.
>
> Propósito previsto: explorar un asistente de IA que ayude a orientar clientes y responder consultas frecuentes.

Estado conservado: **PLANNED — Planificado**.

**E-commerce**

> Problema: pequeños comercios necesitan presentar productos y administrar su información comercial digitalmente.
>
> Propósito previsto: explorar un catálogo digital, con posibilidades futuras de inventario e integraciones.

Estado conservado: **PLANNED — Planificado**.

Estos textos sustituyen las descripciones actuales. No se propone añadir botones, promesas de disponibilidad ni nuevos listados tecnológicos.

**F. Riesgos, supuestos y dependencias**

| Tipo | Consideración |
|---|---|
| Riesgo visual | El texto adicional aumentará la altura y puede producir diferencias entre fichas. Se verificará el contenido completo, especialmente cerca del salto a tres columnas. |
| Riesgo editorial | Inventario e integraciones podrían interpretarse como alcance comprometido. Debe conservarse la expresión «posibilidades futuras». |
| Riesgo de alcance | Ajustes visuales amplios convertirían la mejora editorial en un rediseño. Cualquier necesidad que exceda ajustes locales mínimos deberá volver a revisión humana. |
| Supuesto aprobado | Los problemas, destinatarios y propósitos proceden de las decisiones humanas de esta solicitud; no se presentan como investigación de usuarios realizada. |
| Dependencia | Aprobación de esta redacción y autorización posterior de implementación y TEST. No se requieren paquetes nuevos. |
| Entorno | TypeScript puede depender de tipos generados de Next.js; build puede requerir acceso a fuentes externas. Si faltan recursos, se informará el bloqueo. |

**G. Matriz de trazabilidad**

| Requisito | Criterios |
|---|---|
| REQ-001 | AC-001 |
| REQ-002 | AC-002 |
| REQ-003 | AC-003 |
| REQ-004 | AC-001, AC-002, AC-003, AC-004 |
| REQ-005 | AC-004, AC-006 |
| REQ-006 | AC-005 |
| REQ-007 | AC-006, AC-007 |
| REQ-008 | AC-005, AC-007 |
| REQ-009 | AC-008, AC-009 |

**H. Verificaciones previstas para TEST**

Todas quedan **pendientes de ejecución y autorización posterior**.

| Verificación | Evidencia prevista |
|---|---|
| Revisión editorial | Comparación de cada ficha con los textos aprobados; comprobación de estados, tecnologías y ausencia de afirmaciones operativas. |
| Revisión de alcance | Diff respecto a la base de implementación y estado Git; comprobación de que solo cambian las tres fichas. |
| Lint | `npm run lint` desde `frontend/`, con resultado y código de salida. |
| TypeScript | Compilador local con `--noEmit --incremental false`, sin descargar herramientas. Si faltan tipos generados, registrar el bloqueo. |
| Responsive | Inspección de las tres fichas completas a 320, 375, 768, 1024 y 1280 px, con capturas y mediciones de desbordamiento. |
| Zoom y accesibilidad | Zoom real al 200 %, orden de lectura, texto completo, contraste conservado y ausencia de nuevos elementos enfocables. |
| Regresión acotada | Comprobar navegación hacia Labs, presentación contigua y conservación de los avisos de API Preview y Lab Console. |

**Permisos adicionales:** la autorización actual no permite ejecutar esas verificaciones. Iniciar un servidor o realizar un build requerirá autorización posterior porque puede generar archivos en `.next` y tipos. La revisión en navegador también deberá autorizarse para TEST, indicando la instancia local que se revisará. Un sitio desplegado que no contenga el cambio no servirá como evidencia de esta implementación.

Build queda como comprobación adicional propuesta si el plan la considera necesaria o si se requieren tipos generados; no sustituye la revisión visual. No se instalarán dependencias para resolver bloqueos automáticamente.

**I. Decisiones pendientes y recomendación**

No quedan preguntas esenciales sobre problema, destinatarios o estados. Falta aprobar:

1. La redacción exacta del apartado E y su presentación como «Problema» y «Propósito previsto».
2. Los requisitos, criterios y verificaciones propuestos.

La especificación está **lista para revisión y aprobación como base de PLAN**. Su aprobación no autoriza por sí sola implementación ni ejecución de TEST.

La pausa corresponde al Skill [feature-spec](C:/Users/Claudio/Documents/Desarrollo/claudiodev.com/.agents/skills/feature-spec/SKILL.md), que indica: “Wait for explicit approval before implementation”, y a tu instrucción de detener esta etapa para revisión humana.

No creé ni modifiqué archivos; no ejecuté lint, TypeScript, build, servidor, instalaciones ni operaciones de staging, commit o push.
