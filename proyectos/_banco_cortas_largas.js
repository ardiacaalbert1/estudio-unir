/* Banco compartido de preguntas CORTAS y LARGAS — Proyectos (mudevops06)
   Fuente: las 30 preguntas cortas oficiales del profe (Estudio/PreparacionProfe/)
   depuradas en Apuntes/Proyectos_Preguntas_Cortas_Notion.md contra los PDFs de Teoria/
   y los matices dictados en la clase de examen (guia_profesor.html).
   Se carga desde cortas_largas_estudio.html.
   tipo:  "corta" (~8 líneas) | "larga" ("1 cara" o "24 líneas").
   bloque: 1 Ágil/Lean/fundamentos · 2 Scrum · 3 Kanban/priorización · 4 DevOps/CI-CD.
   n = número de la pregunta en el banco oficial del profe (1..30). */
window.BLOQUES = {
  1:"Ágil, Lean y fundamentos",
  2:"Scrum",
  3:"Kanban y priorización",
  4:"DevOps y CI/CD"
};
window.BANCO = [

/* =============== BLOQUE 1 — Ágil, Lean y fundamentos =============== */
{tipo:"corta",bloque:1,n:1,ext:"8 líneas",q:"Explica la filosofía Lean y su objetivo.",
 a:"<p>Filosofía nacida en la producción de <strong>Toyota</strong> que busca entregar el <strong>máximo valor al cliente con el mínimo desperdicio</strong>. Su objetivo es <strong>eliminar todo lo que no aporta valor</strong> (esperas, retrabajo, inventario, sobreproducción) y <strong>mejorar el flujo de forma continua</strong>.</p>"+
   "<p>Se apoya en: identificar el <strong>valor desde la óptica del cliente</strong>, trabajar con <strong>sistemas pull</strong>, buscar la <strong>calidad a la primera</strong> y aplicar la <strong>mejora continua (kaizen)</strong>. En software se traduce en ciclos cortos, decisiones tardías y entrega rápida.</p>"+
   "<div class='ej'>Un equipo detecta que las historias se acumulan esperando validación del cliente (desperdicio de \"espera\"); introduce revisiones cortas semanales para que el trabajo fluya sin pararse.</div>"+
   "<div class='mz'>Lean = valor cliente/calidad · eliminar desperdicios · mejora continua · <strong>procesos pull</strong> · flexibilidad · relación <strong>a largo plazo con proveedores</strong>.</div>"},

{tipo:"corta",bloque:1,n:4,ext:"8 líneas",q:"Explica el concepto de MVP y su utilidad.",
 a:"<p>El <strong>MVP (producto mínimo viable)</strong> es la versión más <strong>sencilla</strong> de un producto que <strong>ya aporta valor</strong> y se puede poner en manos de <strong>usuarios reales</strong>.</p>"+
   "<p>Su utilidad es <strong>validar hipótesis y aprender del mercado</strong> con el menor esfuerzo posible, antes de invertir en funcionalidades que quizá nadie use. Permite obtener <strong>feedback temprano</strong>, <strong>reducir el riesgo</strong> y orientar el desarrollo según <strong>datos reales</strong> en lugar de suposiciones.</p>"+
   "<div class='ej'>En vez de construir toda una tienda online, se lanza solo el catálogo + carrito + un método de pago, se mide si la gente compra y luego se decide qué añadir.</div>"},

{tipo:"corta",bloque:1,n:5,ext:"8 líneas",q:"Explica qué es una historia de usuario.",
 a:"<p>Descripción <strong>breve</strong> de una funcionalidad <strong>desde el punto de vista de quien la usa</strong>. Sigue el formato <strong>«Como [rol], quiero [funcionalidad], para [beneficio]»</strong>.</p>"+
   "<p>No es una especificación cerrada, sino una <strong>invitación a conversar</strong> y aclarar detalles. Se acompaña de <strong>criterios de aceptación</strong> que definen cuándo está terminada. Conviene que cumpla <strong>INVEST</strong>: <strong>I</strong>ndependiente, <strong>N</strong>egociable, <strong>V</strong>aliosa, <strong>E</strong>stimable, <strong>S</strong>mall (pequeña) y <strong>T</strong>estable.</p>"+
   "<div class='ej'><em>\"Como cliente registrado, quiero recuperar mi contraseña por correo, para volver a entrar sin llamar a soporte.\"</em> Criterio: el enlace caduca en 15 min.</div>"+
   "<div class='mz'><strong>Clave de examen:</strong> si nombras <strong>INVEST</strong> y das el formato completo, ya rascas puntos aunque el resto flojee.</div>"},

{tipo:"corta",bloque:1,n:6,ext:"8 líneas",q:"Explica los valores del Manifiesto Ágil.",
 a:"<p>Son <strong>cuatro</strong>: <strong>individuos e interacciones</strong> sobre procesos y herramientas; <strong>software funcionando</strong> sobre documentación extensa; <strong>colaboración con el cliente</strong> sobre negociación contractual; y <strong>respuesta al cambio</strong> sobre seguir un plan.</p>"+
   "<p>No <strong>niegan</strong> el valor de los elementos de la derecha, pero <strong>priorizan los de la izquierda</strong>. De estos cuatro valores se derivan los <strong>doce principios ágiles</strong>.</p>"+
   "<div class='mz'>El Manifiesto tiene <strong>4 valores (filosofía) y 12 principios</strong>, y <strong>se preguntan por separado</strong>. No los mezcles.</div>"},

{tipo:"corta",bloque:1,n:12,ext:"8 líneas",q:"Describe qué es SDLC (Software Development Life Cycle).",
 a:"<p>El <strong>ciclo de vida del desarrollo de software</strong> es el <strong>conjunto de fases y modelos</strong> que organizan cómo se desarrolla un sistema, desde el análisis de requisitos hasta el mantenimiento.</p>"+
   "<p>Incluye etapas como <strong>requisitos, diseño, implementación, pruebas, despliegue y mantenimiento</strong>. No existe un único modelo válido: <strong>cascada, incremental, espiral o ágil</strong> son formas distintas de recorrer ese ciclo según el proyecto.</p>"+
   "<div class='mz'><strong>Definición literal del profe:</strong> SDLC = <em>\"Conjunto de modelos para el desarrollo de software\"</em>. Esa formulación es la que da por buena la plantilla.</div>"},

{tipo:"corta",bloque:1,n:29,ext:"8 líneas",q:"Explica el modelo en cascada (Waterfall) y sus limitaciones frente a lo ágil.",
 a:"<p>Modelo de desarrollo <strong>secuencial</strong>: cada fase (requisitos → diseño → implementación → pruebas → mantenimiento) <strong>empieza al terminar la anterior</strong>. Funciona cuando los <strong>requisitos son estables y bien conocidos</strong>.</p>"+
   "<p><strong>Limitaciones frente a lo ágil:</strong> el cliente ve el resultado <strong>muy tarde</strong>, los <strong>cambios son caros</strong> y difíciles de incorporar, y los errores detectados al final obligan a <strong>rehacer mucho trabajo</strong>.</p>"+
   "<div class='ej'>Un sistema contable con normativa fija encaja en cascada; una app de producto en un mercado cambiante, no.</div>"+
   "<div class='mz'>La planificación <strong>ágil es iterativa</strong>; cuidado con el distractor que dice <em>\"la tradicional es incremental\"</em> (falso).</div>"},

{tipo:"corta",bloque:1,n:27,ext:"8 líneas",q:"¿Qué es un roadmap de producto y para qué sirve?",
 a:"<p>Representación <strong>visual y a alto nivel</strong> de la <strong>evolución prevista del producto</strong> en el tiempo, con sus <strong>grandes objetivos y entregas</strong>.</p>"+
   "<p>Sirve para <strong>comunicar la dirección</strong> a los interesados, <strong>alinear al equipo</strong> y orientar las <strong>decisiones de prioridad</strong>. No es un plan cerrado: se <strong>ajusta según el feedback</strong> y los cambios del mercado. Se sitúa <strong>por encima del backlog y de los sprints</strong>.</p>"+
   "<div class='mz'><strong>Definición del profe:</strong> roadmap = <em>\"mapa visual claro\"</em> de la evolución del producto.</div>"},

/* =============== BLOQUE 2 — Scrum =============== */
{tipo:"corta",bloque:2,n:10,ext:"8 líneas",q:"Explica en qué se basa Scrum y el concepto de aprendizaje empírico.",
 a:"<p>Scrum se basa en el <strong>empirismo</strong>: el <strong>conocimiento surge de la experiencia</strong> y las decisiones se toman sobre <strong>lo observado</strong>. Se apoya en <strong>tres pilares: transparencia, inspección y adaptación</strong>.</p>"+
   "<p>El equipo entrega <strong>incrementos en ciclos cortos (Sprints)</strong> y, al inspeccionar el resultado, <strong>ajusta el producto y el proceso</strong>. Así se <strong>aprende haciendo</strong> y se reduce el riesgo frente a los planes cerrados de largo plazo.</p>"+
   "<div class='ej'>Tras el primer sprint el cliente prueba el incremento y pide reordenar prioridades; el equipo adapta el backlog en lugar de seguir un plan de hace 6 meses.</div>"},

{tipo:"corta",bloque:2,n:17,ext:"8 líneas",q:"Describe qué es un Sprint y cuál es su objetivo.",
 a:"<p><strong>Iteración de duración fija</strong> (habitualmente de <strong>1 a 4 semanas</strong>) en la que el equipo Scrum produce un <strong>incremento de producto terminado y potencialmente entregable</strong>. Es el <strong>contenedor</strong> del resto de eventos: planificación, Scrum diario, revisión y retrospectiva.</p>"+
   "<p>Su objetivo es <strong>entregar valor de forma regular y predecible</strong>, manteniendo un <strong>ritmo sostenible</strong> y permitiendo <strong>inspeccionar y adaptar</strong> al final de cada ciclo.</p>"+
   "<div class='mz'><strong>Trampa de examen:</strong> el Sprint <strong>no es \"una fase\"</strong> del proyecto; es el <strong>contenedor de los eventos</strong>. Es <em>\"lo más importante que tenemos en Scrum\"</em>.</div>"},

{tipo:"corta",bloque:2,n:3,ext:"8 líneas",q:"Explica el concepto de Product Backlog en Scrum.",
 a:"<p><strong>Lista ordenada y única</strong> de todo lo que el producto podría necesitar: <strong>funcionalidades, mejoras y correcciones</strong>. Es responsabilidad del <strong>Product Owner</strong>, que la <strong>prioriza según el valor</strong> para el negocio y el cliente.</p>"+
   "<p>Está <strong>viva</strong>: se <strong>refina y reordena</strong> de forma continua. Los elementos más prioritarios están <strong>más detallados</strong> y los de largo plazo, <strong>más generales</strong>. De ella se <strong>seleccionan los elementos</strong> que entran en cada Sprint.</p>"},

{tipo:"larga",bloque:2,n:16,ext:"24 líneas",q:"¿Qué es el Product Backlog? ¿Para qué sirve? Dibuja un esquema con un ejemplo.",
 a:"<p>Lista <strong>ordenada y única</strong> de todo lo que el producto necesita, gestionada por el <strong>Product Owner</strong>. Sirve para <strong>priorizar por valor</strong> y <strong>alimentar cada Sprint</strong>. Los elementos superiores están <strong>listos y detallados</strong>; los inferiores, <strong>más generales</strong> hasta que se refinan.</p>"+
   "<p><strong>Esquema en texto</strong> (recuerda: <em>no se puede dibujar</em>, se describe de mayor a menor prioridad):</p>"+
   "<table><tr><th>Prioridad</th><th>Elemento</th><th>Detalle</th></tr>"+
   "<tr><td>Alta</td><td>Registro y login</td><td>Muy detallada, lista para el sprint</td></tr>"+
   "<tr><td>Alta</td><td>Carrito de compra</td><td>Detallada</td></tr>"+
   "<tr><td>Media</td><td>Pasarela de pago</td><td>Medio detalle</td></tr>"+
   "<tr><td>Baja</td><td>Recomendaciones de productos</td><td>Poco detallada, a refinar</td></tr></table>"+
   "<div class='ej'>Se lee de arriba (lo que entra ya al sprint) hacia abajo (lo que aún es una idea general).</div>"},

{tipo:"corta",bloque:2,n:18,ext:"8 líneas",q:"¿Qué es el Sprint Backlog y en qué se diferencia del Product Backlog?",
 a:"<p>Conjunto de elementos del Product Backlog <strong>seleccionados para el Sprint</strong>, junto con el <strong>plan para entregarlos</strong> y el <strong>objetivo del Sprint</strong>. Lo <strong>gestionan los desarrolladores</strong> y refleja el trabajo concreto del ciclo en curso.</p>"+
   "<p>Se <strong>diferencia</strong> del Product Backlog en que este recoge <strong>todo lo que el producto podría necesitar a largo plazo</strong>, mientras que el Sprint Backlog <strong>solo contiene lo comprometido para el Sprint actual</strong> y es <strong>mucho más detallado</strong>.</p>"+
   "<div class='mz'><strong>Quién decide cuántos elementos entran al sprint = los desarrolladores</strong> (hacen el planning poker y conocen su velocidad), <strong>no el Product Owner</strong>.</div>"},

{tipo:"corta",bloque:2,n:19,ext:"8 líneas",q:"Explica los tres roles (responsabilidades) del marco Scrum.",
 a:"<ul><li><strong>Product Owner:</strong> <strong>maximiza el valor</strong> del producto; <strong>gestiona y prioriza</strong> el Product Backlog.</li>"+
   "<li><strong>Scrum Master:</strong> <strong>facilita</strong> el marco, ayuda al equipo a <strong>autoorganizarse</strong> y <strong>elimina impedimentos</strong>.</li>"+
   "<li><strong>Desarrolladores:</strong> <strong>construyen el incremento</strong> y <strong>deciden cómo</strong> realizar el trabajo del Sprint.</li></ul>"+
   "<p>Juntos forman un equipo <strong>pequeño, autogestionado y multifuncional</strong>, con responsabilidades distintas pero un objetivo común.</p>"+
   "<div class='mz'>El Scrum Master <strong>asegura</strong> (no delega) la ejecución de los eventos; es \"líder\" solo en sentido <strong>organizacional</strong>, <strong>nunca técnico ni único</strong>. Son <strong>3 roles</strong> y el equipo total es de <strong>3 a 9 personas</strong>.</div>"},

{tipo:"corta",bloque:2,n:20,ext:"8 líneas",q:"¿Qué es la Definición de Terminado (Definition of Done)?",
 a:"<p><strong>Acuerdo del equipo</strong> sobre las condiciones que debe cumplir un incremento para considerarse <strong>realmente terminado</strong>: código <strong>probado, revisado, integrado y documentado</strong>, entre otras.</p>"+
   "<p>Sirve para <strong>garantizar una calidad común y compartida</strong>, <strong>evitar ambigüedad</strong> sobre qué está hecho y asegurar que cada incremento es <strong>potencialmente entregable</strong>. Es <strong>transversal</strong> a todas las historias del producto (a diferencia de los criterios de aceptación, que son por historia).</p>"},

{tipo:"corta",bloque:2,n:21,ext:"8 líneas",q:"¿En qué consiste el Sprint Planning y qué resultados produce?",
 a:"<p>Reunión que <strong>abre el Sprint</strong>. El equipo <strong>define el objetivo del Sprint</strong>, <strong>selecciona</strong> del Product Backlog los elementos que abordará y elabora un <strong>plan</strong>, normalmente <strong>descomponiendo las historias en tareas</strong>.</p>"+
   "<p>Participan <strong>Product Owner, Scrum Master y desarrolladores</strong>. El <strong>resultado</strong> es el <strong>Sprint Backlog</strong> y un <strong>objetivo claro</strong> que guía el ciclo.</p>"+
   "<div class='mz'><strong>Trampa dictada en clase:</strong> en el test <em>\"una actividad clave del Sprint Planning es…\"</em> las opciones <strong>B y C son idénticas</strong> (<em>descomponer historias en tareas</em>) → <strong>marca la B</strong>.</div>"},

{tipo:"corta",bloque:2,n:22,ext:"8 líneas",q:"¿Qué es el Daily Scrum y cuál es su propósito?",
 a:"<p>Reunión <strong>breve diaria, máximo 15 minutos</strong>, en la que <strong>los desarrolladores se sincronizan</strong>. Revisan el <strong>avance hacia el objetivo del Sprint</strong>, detectan <strong>impedimentos</strong> y ajustan el <strong>plan del día</strong>.</p>"+
   "<p><strong>No es un informe de estado a un jefe</strong>, sino una <strong>coordinación del propio equipo</strong>. Ayuda a mantener el <strong>foco y la transparencia</strong> y a <strong>reaccionar pronto</strong> ante los problemas.</p>"+
   "<div class='mz'><strong>Dato fijo:</strong> Daily = <strong>15 min</strong>. Suele caer tal cual.</div>"},

{tipo:"larga",bloque:2,n:8,ext:"24 líneas",q:"¿Cuándo y qué se hace en la Retrospectiva? ¿Para qué sirve? ¿Una o varias?",
 a:"<p>Se celebra <strong>al final de cada Sprint</strong>, <strong>después de la revisión</strong> y <strong>antes de planificar el siguiente</strong>. El equipo analiza <strong>cómo ha trabajado</strong>: qué ha ido bien, qué ha fallado y qué <strong>acciones de mejora</strong> aplicar.</p>"+
   "<p>Sirve para <strong>inspeccionar y adaptar el proceso</strong> (no el producto) y reforzar la <strong>mejora continua</strong>. <strong>Hay una por Sprint</strong>, así que a lo largo del proyecto se celebran <strong>varias</strong>. Conviene que salga un <strong>compromiso de mejora concreto y medible</strong>.</p>"+
   "<div class='ej'><em>\"A partir de ahora ninguna tarea pasa a 'Hecho' sin revisión de un segundo desarrollador\"</em>.</div>"+
   "<div class='mz'><strong>Clave:</strong> Retrospectiva = <strong>proceso</strong>; Sprint Review = <strong>producto</strong>. No las confundas.</div>"},

{tipo:"corta",bloque:2,n:11,ext:"8 líneas",q:"Explica cómo evaluar una iteración.",
 a:"<p>Se valora si se ha <strong>cumplido el objetivo del Sprint</strong> y si el incremento cumple la <strong>Definición de Terminado</strong>. Sirven la <strong>Sprint Review</strong> (se muestra el incremento al cliente y se recoge feedback) y herramientas como el <strong>burndown chart</strong> o el <strong>tablero</strong>, que reflejan el avance y los bloqueos.</p>"+
   "<p>También se mide el <strong>trabajo completado (velocidad)</strong> y la <strong>calidad</strong>. La <strong>retrospectiva</strong>, por su parte, evalúa el <strong>proceso</strong> de trabajo del equipo.</p>"+
   "<div class='mz'>La <strong>Sprint Review</strong> inspecciona el incremento y adapta el backlog con los interesados. El <strong>refinamiento del backlog NO es un evento Scrum</strong> como tal (pregunta trampa).</div>"},

{tipo:"corta",bloque:2,n:9,ext:"8 líneas",q:"Describe el burndown chart.",
 a:"<p>Gráfico que muestra el <strong>trabajo pendiente frente al tiempo</strong> dentro de un Sprint o entrega. En el eje <strong>vertical (Y)</strong> va el <strong>trabajo restante</strong> (en puntos o tareas) y en el <strong>horizontal (X)</strong>, el <strong>tiempo</strong>.</p>"+
   "<p>Una <strong>línea ideal</strong> desciende de forma uniforme hasta <strong>cero</strong> y la <strong>línea real</strong> refleja el avance verdadero. Si la real queda <strong>por encima</strong> de la ideal → <strong>retraso</strong>; si queda <strong>por debajo</strong> → se va <strong>adelantado</strong>. Ayuda a <strong>prever</strong> si se cumplirá el objetivo.</p>"+
   "<div class='mz'>En el <strong>burndown, eje Y = trabajo pendiente</strong> (real por encima = retraso). No lo confundas con el <strong>burnup</strong>, que muestra el <strong>trabajo completado acumulado</strong>.</div>"},

{tipo:"corta",bloque:2,n:13,ext:"8 líneas",q:"Explica el valor ganado en ágil.",
 a:"<p>Mide el <strong>valor realmente entregado</strong> en función de las <strong>funcionalidades completadas y aceptadas</strong>, <strong>no del esfuerzo</strong> invertido. Solo cuenta el trabajo <strong>terminado</strong> que cumple la <strong>Definición de Terminado</strong>.</p>"+
   "<p>Permite evaluar el <strong>progreso real</strong> del proyecto y compararlo con lo previsto, <strong>evitando dar por avanzado un trabajo a medias</strong>. Ofrece una visión <strong>más fiable</strong> que medir horas o tareas iniciadas.</p>"},

{tipo:"corta",bloque:2,n:23,ext:"8 líneas",q:"¿Qué es la velocidad (velocity) de un equipo ágil y para qué se usa?",
 a:"<p>Cantidad de trabajo, medida en <strong>puntos de historia</strong>, que un equipo <strong>completa de media por Sprint</strong>. Se calcula con los <strong>datos de sprints anteriores</strong>.</p>"+
   "<p>Se usa para <strong>estimar cuánto podrá abarcar</strong> en los próximos sprints y <strong>prever fechas de entrega</strong>. Es una <strong>métrica interna y relativa</strong> a cada equipo; <strong>no</strong> debe usarse para <strong>comparar equipos</strong> ni como <strong>objetivo de presión</strong>.</p>"+
   "<div class='mz'><strong>Métricas que caen juntas:</strong> <strong>Velocidad</strong> = puntos completados por sprint · <strong>Tiempo de ciclo</strong> = de empezar a terminar una tarea.</div>"},

{tipo:"corta",bloque:2,n:28,ext:"8 líneas",q:"Explica la estimación con puntos de historia y el planning poker.",
 a:"<p>Los <strong>puntos de historia</strong> estiman el <strong>esfuerzo y la complejidad relativa</strong> de una historia, <strong>no las horas exactas</strong>. Se asignan <strong>comparando</strong> unas historias con otras.</p>"+
   "<p>El <strong>planning poker</strong> es una <strong>estimación por consenso</strong>: cada miembro elige <strong>en privado</strong> una carta con su valor, se muestran <strong>a la vez</strong> y, si hay <strong>discrepancia</strong>, se <strong>debate y se vuelve a votar</strong>. Aprovecha el <strong>criterio de todo el equipo</strong> y <strong>reduce el sesgo</strong> de una sola persona.</p>"+
   "<div class='ej'>Una historia de \"login social\" recibe cartas 3-3-8; el que dijo 8 explica un riesgo con OAuth, se debate y acaban consensuando un 5.</div>"},

/* =============== BLOQUE 3 — Kanban y priorización =============== */
{tipo:"corta",bloque:3,n:7,ext:"8 líneas",q:"Explica cómo funciona Kanban.",
 a:"<p>Método de <strong>gestión visual</strong> del trabajo basado en un <strong>tablero con columnas</strong> que representan los <strong>estados del proceso</strong> (p. ej. pendiente, en curso, hecho). Cada tarea es una <strong>tarjeta</strong> que avanza de columna en columna.</p>"+
   "<p>Se <strong>limita el trabajo en curso (WIP)</strong> en cada estado para <strong>evitar la saturación</strong> y <strong>detectar cuellos de botella</strong>. Es un <strong>flujo continuo</strong>, <strong>sin iteraciones fijas</strong>, centrado en la <strong>entrega constante</strong> y la <strong>mejora del flujo</strong>.</p>"},

{tipo:"larga",bloque:3,n:14,ext:"1 cara",q:"Características de Kanban + tablero de ejemplo con 5 estados.",
 a:"<p>Kanban: <strong>visualiza el trabajo</strong>, <strong>limita el WIP</strong>, <strong>gestiona el flujo</strong>, <strong>hace explícitas las reglas</strong> del proceso y busca la <strong>mejora continua</strong>. <strong>No usa iteraciones de duración fija</strong>.</p>"+
   "<p><strong>Tablero de ejemplo</strong> (descrito con texto — mínimo 5 columnas, cada una con su WIP):</p>"+
   "<table><tr><th>Columna</th><th>WIP</th><th>Qué contiene</th></tr>"+
   "<tr><td>Pendiente</td><td>(WIP 8)</td><td>Tareas priorizadas por hacer</td></tr>"+
   "<tr><td>En curso</td><td>(WIP 3)</td><td>En desarrollo activo</td></tr>"+
   "<tr><td>En revisión</td><td>(WIP 2)</td><td>Revisión de código</td></tr>"+
   "<tr><td>En pruebas</td><td>(WIP 2)</td><td>Testing / QA</td></tr>"+
   "<tr><td>Hecho</td><td>—</td><td>Cumple la Definición de Terminado</td></tr></table>"+
   "<p>Cada tarjeta avanza <strong>de izquierda a derecha</strong>; si una columna <strong>llega a su WIP</strong>, se <strong>termina</strong> algo antes de empezar lo nuevo → así se ven los <strong>cuellos de botella</strong>.</p>"+
   "<div class='mz'>El <strong>WIP = nº máximo de tareas en curso por columna</strong>; limitarlo <strong>mejora el flujo y revela cuellos de botella</strong>. En el examen el tablero necesita <strong>mínimo 5 columnas</strong> y poner el <strong>(WIP n)</strong> en cada una.</div>"},

{tipo:"corta",bloque:3,n:26,ext:"8 líneas",q:"Explica la técnica de priorización MoSCoW.",
 a:"<p>Clasifica los requisitos en <strong>cuatro categorías</strong>:</p>"+
   "<ul><li><strong>Must</strong> — imprescindibles, sin ellos la entrega no sirve.</li>"+
   "<li><strong>Should</strong> — importantes pero no críticos.</li>"+
   "<li><strong>Could</strong> — deseables si hay margen.</li>"+
   "<li><strong>Won't</strong> — fuera del alcance de <strong>esta</strong> entrega.</li></ul>"+
   "<p>Ayuda a <strong>centrar el esfuerzo</strong> en lo que aporta valor y a <strong>negociar el alcance</strong> con los interesados cuando el <strong>tiempo o los recursos</strong> son limitados.</p>"+
   "<div class='ej'>Replanificación: llega un requisito nuevo del cliente vía Product Owner → entra como <strong>Must</strong>, y un \"Could\" pasa a \"Won't\" porque el cambio <strong>aporta más valor</strong>.</div>"},

{tipo:"larga",bloque:3,n:2,ext:"1 cara",q:"¿Cómo combinarías Scrum y Kanban? Pon un ejemplo.",
 a:"<p>Combinándolos en lo que se conoce como <strong>Scrumban</strong>: se mantiene la <strong>estructura de Scrum</strong> (sprints, roles y eventos) y se <strong>añade el tablero Kanban con límites de WIP</strong> para <strong>visualizar y controlar el flujo</strong> dentro del sprint.</p>"+
   "<p>Encaja cuando el equipo quiere la <strong>cadencia y los objetivos de Scrum</strong> pero sufre <strong>cuellos de botella o trabajo no planificado</strong>.</p>"+
   "<div class='ej'>Un equipo de <strong>soporte</strong> planifica un sprint de 2 semanas, pero atiende las <strong>incidencias urgentes en un carril Kanban</strong> con límite de tareas, de modo que <strong>no rompan la planificación</strong>.</div>"},

/* =============== BLOQUE 4 — DevOps y CI/CD =============== */
{tipo:"larga",bloque:4,n:15,ext:"1 cara",q:"Similitudes y diferencias entre Ágil y DevOps + ejemplo complementario.",
 a:"<p><strong>Coinciden</strong> en buscar <strong>entregas frecuentes, ciclos cortos, automatización y mejora continua</strong>. Se <strong>diferencian</strong> en el <strong>alcance</strong>: <strong>ágil</strong> se centra en <strong>cómo el equipo planifica y construye</strong> el producto, mientras que <strong>DevOps</strong> abarca <strong>todo el camino hasta producción</strong>, uniendo <strong>desarrollo y operaciones</strong>.</p>"+
   "<p>Son <strong>complementarios</strong>.</p>"+
   "<div class='ej'>Una empresa usa <strong>Scrum</strong> para planificar y desarrollar en sprints, y <strong>DevOps</strong> con <strong>CI/CD</strong> para llevar cada incremento a producción de forma <strong>automática y fiable</strong>.</div>"+
   "<div class='mz'><em>\"DevOps <strong>complementa</strong> a Agile\"</em> — no lo sustituye.</div>"},

{tipo:"corta",bloque:4,n:24,ext:"8 líneas",q:"¿Qué es la integración continua (CI) y qué ventajas aporta?",
 a:"<p>Práctica de <strong>integrar los cambios de código en un repositorio común de forma frecuente</strong>, lanzando <strong>automáticamente la compilación y las pruebas</strong>.</p>"+
   "<p>Permite <strong>detectar errores pronto</strong>, <strong>reducir los conflictos de integración</strong> y mantener el código <strong>siempre estable</strong>. Aporta <strong>confianza para entregar con rapidez</strong> y es la <strong>base</strong> sobre la que se apoya la entrega continua.</p>"+
   "<div class='ej'>Cada <code>push</code> dispara el pipeline que compila y pasa los tests; si algo rompe, el equipo lo ve en minutos, no al final del sprint.</div>"},

{tipo:"corta",bloque:4,n:25,ext:"8 líneas",q:"Diferencia entre entrega continua y despliegue continuo (CD).",
 a:"<ul><li><strong>Entrega continua:</strong> cada cambio que <strong>supera las pruebas</strong> queda <strong>listo y validado</strong> para pasar a producción, <strong>pero el paso final lo decide una persona</strong> (un botón).</li>"+
   "<li><strong>Despliegue continuo:</strong> ese <strong>último paso también se automatiza</strong>, de modo que <strong>todo cambio que supera el pipeline llega a producción sin intervención manual</strong>.</li></ul>"+
   "<p><strong>Ambos</strong> se apoyan en la <strong>integración continua</strong>.</p>"+
   "<div class='mz'><strong>Truco:</strong> entrega continua = <em>\"listo para desplegar\"</em> (decisión humana); despliegue continuo = <em>\"desplegado solo\"</em> (sin humano).</div>"},

{tipo:"corta",bloque:4,n:30,ext:"8 líneas",q:"¿Qué aporta la cultura DevOps a una organización?",
 a:"<p>Una <strong>forma de trabajar</strong> en la que <strong>desarrollo y operaciones colaboran</strong> con un <strong>objetivo común</strong>, en lugar de funcionar como <strong>compartimentos separados</strong> (rompe los silos).</p>"+
   "<p>Fomenta la <strong>automatización</strong>, la <strong>responsabilidad compartida</strong> sobre el producto en producción, la <strong>medición continua</strong> y el <strong>aprendizaje a partir de los fallos</strong>. El resultado: software <strong>más rápido, con más calidad y mayor estabilidad</strong>.</p>"},

/* =============== DESARROLLO (venían del simulacro) =============== */
{tipo:"desarrollo",bloque:2,ext:"desarrollo",q:"Explica la diferencia entre Burndown y Burnup y qué aporta el segundo.",
 a:"<p>Ambos muestran el progreso de un sprint o release. El <strong>Burndown</strong> dibuja el <em>trabajo restante</em> bajando hacia cero. El <strong>Burnup</strong> dibuja el <em>trabajo completado</em> subiendo y añade una segunda línea con el <em>alcance total</em>.</p>"+
   "<p>Su ventaja: como separa «hecho» de «alcance», si la línea de alcance sube se detecta el <em>scope creep</em> (entró trabajo nuevo), algo que el burndown esconde porque mezcla ambos efectos en una sola curva.</p>"},

{tipo:"desarrollo",bloque:2,ext:"desarrollo",q:"Enumera y describe brevemente los 3 roles, 3 artefactos y los eventos de Scrum.",
 a:"<p><strong>Roles:</strong> Product Owner (gestiona y prioriza el Product Backlog, maximiza valor), Scrum Master (facilita el proceso, elimina impedimentos), Developers (crean el incremento).</p>"+
   "<p><strong>Artefactos:</strong> Product Backlog (lista priorizada de todo lo deseado), Sprint Backlog (lo elegido para el sprint + plan), Incremento (resultado utilizable).</p>"+
   "<p><strong>Eventos:</strong> el Sprint (contenedor) y dentro: Sprint Planning (qué y cómo), Daily Scrum (sincronización diaria de 15'), Sprint Review (inspección del incremento con interesados) y Retrospective (mejora del proceso).</p>"},

{tipo:"desarrollo",bloque:2,ext:"desarrollo",q:"¿Por qué es clave la colaboración cliente–equipo en Scrum y qué pasa si falla?",
 a:"<p>Scrum es empírico: se inspecciona y adapta con feedback frecuente del cliente (en la Review y a través del PO). Si el cliente no colabora, el equipo prioriza y construye sobre suposiciones, el Product Backlog deja de reflejar el valor real y se entrega algo que no se ajusta a la necesidad.</p>"+
   "<p>La <strong>no colaboración cliente–equipo</strong> es uno de los errores típicos de aplicación de Scrum: rompe el bucle inspección-adaptación y convierte el método ágil en un mini-cascada encubierto.</p>"+
   "<div class='mz'>Error clásico que marca el profe.</div>"},

{tipo:"desarrollo",bloque:3,ext:"desarrollo",q:"¿Qué son los límites WIP en Kanban y qué problema resuelven?",
 a:"<p>Son un tope al número de tarjetas que pueden estar simultáneamente en una columna/etapa. Resuelven la sobrecarga y el multitasking: al no poder «empujar» más trabajo del límite, el equipo termina lo empezado antes de empezar lo nuevo (sistema <em>pull</em>).</p>"+
   "<p>Efectos: baja el <em>lead time</em>, mejora el flujo y los cuellos de botella se hacen visibles (la columna se llena justo antes de la etapa lenta).</p>"},

/* =============== CASOS PRÁCTICOS (venían del simulacro) =============== */
{tipo:"caso",bloque:3,ext:"caso práctico",q:"CASO 1 · Un equipo de soporte quiere visualizar su flujo (analizar → desarrollar → probar → desplegar) y dejar de empezar más de lo que termina. (a) Diseña un tablero Kanban de 5 columnas. (b) ¿Dónde y por qué pondrías límites WIP?",
 a:"<p><strong>(a) Tablero de 5 columnas</strong> (con WIP entre paréntesis):</p>"+
   "<table><tr><th>Por hacer</th><th>En análisis (3)</th><th>En desarrollo (3)</th><th>En pruebas (2)</th><th>Hecho</th></tr>"+
   "<tr><td>backlog priorizado</td><td>refinando</td><td>codificando</td><td>QA/validación</td><td>desplegado</td></tr></table>"+
   "<p>Conviene desdoblar las columnas de trabajo activo en «haciendo / hecho» (p. ej. <em>En desarrollo: en curso | listo</em>) para ver lo que espera a la siguiente etapa.</p>"+
   "<p><strong>(b) Límites WIP</strong> en las columnas de trabajo activo (análisis, desarrollo, pruebas), <em>no</em> en «Por hacer» ni «Hecho». Motivo: forzar el sistema <em>pull</em> (solo se tira nueva tarea si hay hueco), reducir el multitasking y revelar el cuello de botella: si «En pruebas (2)» se llena y bloquea a desarrollo, el límite ha hecho visible que QA es el cuello de botella.</p>"},

{tipo:"caso",bloque:2,ext:"caso práctico",q:"CASO 2 · Arranca un producto nuevo. El PO tiene un Product Backlog con historias estimadas; el equipo tiene una velocidad histórica de ~20 puntos/sprint de 2 semanas. (a) ¿Cómo pasarías del Product Backlog al Sprint Backlog en la Sprint Planning? (b) ¿Qué es la Definición de Hecho y por qué importa?",
 a:"<p><strong>(a) Sprint Planning:</strong></p>"+
   "<ul><li>El PO presenta las historias <em>priorizadas</em> y se acuerda un <strong>Objetivo del Sprint</strong>.</li>"+
   "<li>El equipo toma de arriba del Product Backlog las historias que caben en su capacidad (~20 puntos), no más: esas pasan al <strong>Sprint Backlog</strong>.</li>"+
   "<li>El equipo descompone cada historia en <em>tareas</em> y planifica el «cómo». El Sprint Backlog = historias seleccionadas + plan + objetivo.</li>"+
   "<li>Compromiso realista basado en velocidad, no en deseos del cliente.</li></ul>"+
   "<p><strong>(b) Definición de Hecho (DoD):</strong> criterios de calidad que toda historia debe cumplir para considerarse «terminada» (código revisado, pruebas pasando, integrado, documentado, desplegable). Importa porque crea una noción <em>compartida</em> y objetiva de «hecho», evita el trabajo medio terminado que se arrastra entre sprints y garantiza que el incremento sea realmente utilizable.</p>"}

];
