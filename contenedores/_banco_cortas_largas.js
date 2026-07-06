/* Banco compartido de preguntas CORTAS y LARGAS — Contenedores (mudevops08)
   Fuente: SOLUCIONARIO.md + PDFs de Teoria/ (Docker T1-5, Kubernetes T6-10).
   Se carga desde cortas_largas_estudio.html y cortas_largas_flashcards.html.
   tipo: "corta" (respuesta breve) | "larga" (desarrollo). */
window.BANCO = [
/* ===================== CORTAS ===================== */
{tipo:"corta",tema:1,q:"¿Qué diferencia a un contenedor de una máquina virtual?",
 a:"El contenedor <strong>comparte el kernel</strong> del SO host (virtualización a nivel de sistema operativo); la VM lleva un SO invitado completo sobre un hypervisor. Por eso el contenedor es más ligero, arranca en segundos y aprovecha mejor el hardware."},
{tipo:"corta",tema:1,q:"Enumera las tecnologías del kernel en que se apoya Docker y su función.",
 a:"<strong>namespaces</strong> = aislamiento (cada contenedor su vista de recursos) · <strong>cgroups</strong> = límite/control de CPU y memoria · <strong>unionfs</strong> = filesystem por capas · <strong>libcontainer</strong> = runtime nativo que habla con el kernel."},
{tipo:"corta",tema:1,q:"¿Cómo se comunica el cliente de Docker con el demonio? ¿En qué lenguaje está escrito Docker?",
 a:"Mediante una <strong>API REST</strong> (socket Unix o TCP). Docker está escrito en <strong>Go</strong>."},
{tipo:"corta",tema:2,q:"Diferencia entre imagen y contenedor.",
 a:"La <strong>imagen</strong> es la plantilla inmutable, construida por capas. El <strong>contenedor</strong> es una instancia en ejecución de la imagen, con su capa de escritura <em>copy-on-write</em> encima."},
{tipo:"corta",tema:2,q:"CMD vs ENTRYPOINT en un Dockerfile.",
 a:"<code>ENTRYPOINT</code> fija el ejecutable que siempre corre; <code>CMD</code> da los argumentos por defecto, que se sobrescriben al pasar argumentos en <code>docker run</code>."},
{tipo:"corta",tema:2,q:"¿Para qué sirve docker commit? ¿Y ONBUILD?",
 a:"<code>docker commit</code> guarda el estado actual de un contenedor como una <strong>nueva imagen</strong>. <code>ONBUILD</code> registra un comando que se ejecutará más adelante, cuando esa imagen se use como base (<code>FROM</code>) en otra construcción."},
{tipo:"corta",tema:2,q:"¿Por qué importa el orden de las instrucciones del Dockerfile?",
 a:"Cada instrucción crea una <strong>capa cacheable</strong>. Si una capa cambia, invalida la caché de todas las siguientes; por eso se instalan primero las dependencias (que cambian poco) y se copia el código al final."},
{tipo:"corta",tema:2,q:"¿Qué comando lista las capas de una imagen? ¿Y cuál genera la imagen?",
 a:"<code>docker image history</code> lista las capas. <code>docker build</code> genera la imagen a partir del Dockerfile. Para partir de cero: <code>FROM scratch</code>."},
{tipo:"corta",tema:3,q:"Tipos de almacenamiento en Docker.",
 a:"<strong>Volumes</strong>: gestionados por Docker, persistentes y portables. <strong>Bind mounts</strong>: montan una ruta concreta del host (el host puede modificarlos). <strong>Tmpfs</strong>: en RAM, no persisten."},
{tipo:"corta",tema:3,q:"Los cuatro drivers de red de Docker.",
 a:"<strong>bridge</strong>: red privada interna por defecto de un host · <strong>host</strong>: usa la pila de red del host sin aislamiento · <strong>overlay</strong>: conecta varios hosts (Swarm) · <strong>none</strong>: sin red, aislado."},
{tipo:"corta",tema:3,q:"¿Qué hace docker cp? ¿En qué estado queda un contenedor al terminar?",
 a:"<code>docker cp</code> copia ficheros entre host y contenedor en <strong>ambos sentidos</strong>. Al finalizar su ejecución el contenedor queda en estado <strong>Exited</strong>."},
{tipo:"corta",tema:4,q:"docker export/import vs docker save/load.",
 a:"<code>export/import</code> mueve el <strong>filesystem de un CONTENEDOR</strong> a/desde un TAR (pierde capas y metadatos). <code>save/load</code> mueve una <strong>IMAGEN completa con sus capas</strong> a/desde TAR."},
{tipo:"corta",tema:4,q:"¿Qué es Docker Compose y para qué se usa?",
 a:"Herramienta para <strong>definir y levantar aplicaciones multi-contenedor</strong> con un fichero <code>docker-compose.yml</code> (secciones <code>services</code>, <code>networks</code>, <code>volumes</code>) mediante <code>docker compose up</code>."},
{tipo:"corta",tema:5,q:"Nodos manager vs worker en Swarm.",
 a:"<strong>Manager</strong>: mantienen el estado del clúster (algoritmo <em>raft</em>) y planifican tareas. <strong>Worker</strong>: solo ejecutan tareas. Se añaden con el <code>join-token</code>; <code>docker node promote</code> convierte un worker en manager."},
{tipo:"corta",tema:5,q:"Servicio replicado vs global y qué hace 'drain' en Swarm.",
 a:"<strong>Replicado</strong>: N réplicas repartidas por el clúster. <strong>Global</strong>: una tarea por nodo. Poner un nodo en <strong>drain</strong> lo saca de la planificación: las tareas replicadas se <em>replanifican</em> en otros nodos y las globales simplemente se paran."},
{tipo:"corta",tema:5,q:"¿Cómo se transmiten los objetos config y secret en Swarm?",
 a:"Ambos se transmiten entre nodos <strong>cifrados</strong>. Se añaden a un servicio existente con <code>docker service update --secret-add ...</code>."},
{tipo:"corta",tema:6,q:"Componentes del Control Plane de Kubernetes (y del nodo worker).",
 a:"Control plane: <strong>API server</strong> (punto de entrada), <strong>etcd</strong> (almacén clave-valor con el estado), <strong>Scheduler</strong> (asigna Pods a nodos) y <strong>Controller Manager</strong>. En cada nodo worker: <strong>kubelet</strong> y <strong>kube-proxy</strong>."},
{tipo:"corta",tema:6,q:"¿Qué es un Pod y qué garantiza un ReplicaSet?",
 a:"El <strong>Pod</strong> es la unidad mínima desplegable: uno o más contenedores que comparten IP, red y almacenamiento. El <strong>ReplicaSet</strong> garantiza que haya siempre el número deseado de réplicas (replanifica los Pods si cae un nodo)."},
{tipo:"corta",tema:7,q:"Labels vs Annotations.",
 a:"<strong>Labels</strong>: pares clave-valor <em>identificativos</em> que usan los selectores para agrupar/seleccionar objetos. <strong>Annotations</strong>: metadatos <em>no identificativos</em> (información extra que no se usa para seleccionar)."},
{tipo:"corta",tema:7,q:"Liveness probe vs Readiness probe.",
 a:"Si falla la <strong>liveness</strong>, K8s <em>reinicia</em> el contenedor (detecta cuelgues). Si falla la <strong>readiness</strong>, K8s lo <em>saca de los endpoints</em> del Service (deja de enviarle tráfico) sin reiniciarlo. Métodos: <code>exec</code>, <code>httpGet</code>, <code>tcpSocket</code>."},
{tipo:"corta",tema:7,q:"requests vs limits.",
 a:"<code>resources.requests</code>: mínimo garantizado que el <strong>scheduler</strong> usa para decidir el nodo. <code>resources.limits</code>: tope máximo que el contenedor puede consumir."},
{tipo:"corta",tema:7,q:"¿Qué es un Namespace y para qué sirven los selectores?",
 a:"El <strong>Namespace</strong> es una división lógica del clúster para aislar/organizar recursos (los del sistema van en <code>kube-system</code>). Los <strong>selectores</strong> filtran objetos según sus labels."},
{tipo:"corta",tema:8,q:"Tipos de Service en Kubernetes.",
 a:"<strong>ClusterIP</strong>: IP interna (solo dentro del clúster, por defecto) · <strong>NodePort</strong>: mismo puerto en la IP de cada nodo · <strong>LoadBalancer</strong>: balanceador externo del cloud · <strong>ExternalName</strong>: alias DNS (CNAME) a un servicio externo."},
{tipo:"corta",tema:8,q:"¿Qué es un Ingress? ¿Y un DaemonSet?",
 a:"<strong>Ingress</strong>: enrutamiento HTTP/L7 externo por reglas (host/path) hacia varios Services. <strong>DaemonSet</strong>: ejecuta una copia del Pod en cada nodo (o en los que casen un <code>nodeSelector</code>)."},
{tipo:"corta",tema:8,q:"¿Qué pasa con los Pods de un ReplicaSet si su nodo deja de estar operativo?",
 a:"Son <strong>replanificados automáticamente</strong> en otros nodos disponibles. Al borrar un ReplicaSet, <code>--cascade=false</code> evita que se borren sus Pods."},
{tipo:"corta",tema:9,q:"emptyDir vs hostPath.",
 a:"<strong>emptyDir</strong>: volumen efímero, se crea vacío y se borra al terminar el Pod. <strong>hostPath</strong>: monta un directorio o fichero concreto del sistema de ficheros del nodo."},
{tipo:"corta",tema:9,q:"PV, PVC y StorageClass.",
 a:"<strong>PersistentVolume (PV)</strong>: recurso del clúster que desacopla el almacenamiento del Pod. <strong>PersistentVolumeClaim (PVC)</strong>: la petición con la que un Pod reclama un PV. <strong>StorageClass</strong>: aprovisiona PV de forma <em>dinámica</em>."},
{tipo:"corta",tema:9,q:"ConfigMap vs Secret (y el 'ojo' del curso).",
 a:"Ambos inyectan configuración como variables de entorno o como volumen. El <strong>Secret</strong> se guarda en <strong>base64</strong> (codificado, no cifrado). Ambos son <em>namespaced</em>. OJO: el curso da por <strong>FALSA</strong> la afirmación «el volumen montado de un ConfigMap se actualiza automáticamente»."},
{tipo:"corta",tema:10,q:"Deployment vs StatefulSet.",
 a:"<strong>Deployment</strong>: apps sin estado; gestiona un ReplicaSet y permite rolling update y rollback. <strong>StatefulSet</strong>: apps con estado; réplicas con hostname/identidad únicos, creación/borrado ordenados y almacenamiento estable."},
{tipo:"corta",tema:10,q:"Job vs CronJob. ¿Qué campo pone tiempo límite a un Job?",
 a:"<strong>Job</strong>: ejecuta Pods hasta completar la tarea (<code>completions</code>, <code>backoffLimit</code>). <strong>CronJob</strong>: lanza Jobs de forma programada con <code>spec.schedule</code> (sintaxis cron). El tiempo límite de ejecución lo fija <code>spec.activeDeadlineSeconds</code>."},
{tipo:"corta",tema:10,q:"Comandos de rollout de un Deployment.",
 a:"<code>kubectl rollout status</code> (estado) · <code>kubectl rollout undo</code> (revertir) · <code>kubectl rollout pause</code> (pausar) · <code>kubectl scale</code> (cambiar nº de réplicas)."},
{tipo:"corta",tema:7,q:"kubectl esenciales para operar sobre Pods.",
 a:"<code>get/describe</code> (ver), <code>exec</code> (comando dentro), <code>logs</code> (registros), <code>cp</code> (copiar ficheros), <code>port-forward</code> (puerto local → Pod) y <code>apply -f</code> (aplicar manifiesto YAML)."},

/* ===================== LARGAS ===================== */
{tipo:"larga",tema:1,q:"Explica la arquitectura de Docker (cliente, demonio, registro) y qué aporta frente a las máquinas virtuales.",
 a:"<strong>Arquitectura cliente-servidor:</strong><ul>"+
 "<li><strong>Cliente</strong> (<code>docker</code>): recibe los comandos del usuario y habla con el demonio por una <strong>API REST</strong>.</li>"+
 "<li><strong>Demonio</strong> (<code>dockerd</code>): construye, ejecuta y gestiona imágenes, contenedores, redes y volúmenes.</li>"+
 "<li><strong>Registro</strong> (Docker Hub o uno privado): almacena y distribuye las imágenes (<code>pull</code>/<code>push</code>).</li></ul>"+
 "Se apoya en el kernel Linux: <em>namespaces</em> (aislamiento), <em>cgroups</em> (recursos), <em>unionfs</em> (capas).<br>"+
 "<strong>Frente a las VMs:</strong> el contenedor comparte el kernel del host en vez de arrancar un SO invitado completo → es más ligero, arranca en segundos, permite mayor densidad de aplicaciones por máquina y facilita la portabilidad («funciona igual en cualquier sitio»)."},
{tipo:"larga",tema:2,q:"Explica cómo funcionan las capas de una imagen y la caché de construcción. Da buenas prácticas para un Dockerfile eficiente.",
 a:"Una imagen es una <strong>pila de capas de solo lectura</strong>: cada instrucción del Dockerfile (<code>FROM</code>, <code>RUN</code>, <code>COPY</code>…) añade una capa. El contenedor añade encima una capa de escritura <em>copy-on-write</em>.<br>"+
 "<strong>Caché:</strong> Docker reutiliza una capa si la instrucción y su contexto no cambian. En cuanto una capa cambia, se invalidan todas las posteriores.<br>"+
 "<strong>Buenas prácticas:</strong><ul>"+
 "<li>Copiar primero el manifiesto de dependencias (<code>package.json</code>, <code>pom.xml</code>) e instalarlas <em>antes</em> de copiar el código.</li>"+
 "<li>Agrupar comandos en un solo <code>RUN</code> para reducir capas.</li>"+
 "<li>Usar imágenes base ligeras (<code>-alpine</code>) y <em>multi-stage builds</em> para no arrastrar herramientas de compilación.</li>"+
 "<li>Usar <code>.dockerignore</code> para no meter basura en el contexto.</li></ul>"},
{tipo:"larga",tema:2,q:"Escribe un Dockerfile multi-stage para una app Node (compila y deja una imagen final ligera) y explica las claves.",
 a:"<pre># etapa de build\nFROM node:20 AS build\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci                 # deps primero (mejor cache)\nCOPY . .\nRUN npm run build          # genera /app/dist\n\n# etapa final ligera\nFROM node:20-alpine\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci --omit=dev\nCOPY --from=build /app/dist ./dist\nEXPOSE 3000\nCMD [\"node\", \"dist/server.js\"]</pre>"+
 "<strong>Claves:</strong> <em>multi-stage</em> para que la imagen final no arrastre el toolchain de compilación; copiar <code>package*.json</code> antes que el código para aprovechar la caché; imagen final <code>-alpine</code>; y solo dependencias de producción (<code>--omit=dev</code>)."},
{tipo:"larga",tema:3,q:"Explica los tipos de almacenamiento y de red de Docker y cuándo usar cada uno.",
 a:"<strong>Almacenamiento:</strong><ul>"+
 "<li><strong>Volumes</strong>: gestionados por Docker, persistentes y portables → datos de producción (bases de datos).</li>"+
 "<li><strong>Bind mounts</strong>: montan una ruta concreta del host → desarrollo (montar el código y ver cambios en vivo).</li>"+
 "<li><strong>Tmpfs</strong>: en memoria RAM, no persiste → datos sensibles/temporales.</li></ul>"+
 "<strong>Redes:</strong><ul>"+
 "<li><strong>bridge</strong> (por defecto): red privada interna de un host; los contenedores se ven por nombre.</li>"+
 "<li><strong>host</strong>: el contenedor usa directamente la red del host, sin aislamiento (máximo rendimiento).</li>"+
 "<li><strong>overlay</strong>: conecta contenedores de <em>varios</em> hosts (modo Swarm).</li>"+
 "<li><strong>none</strong>: sin red, contenedor aislado.</li></ul>"+
 "Utilidades: <code>docker network connect/prune</code> para gestionar redes."},
{tipo:"larga",tema:4,q:"Explica Docker Compose: estructura del docker-compose.yml y comandos principales. Da un ejemplo con dos servicios.",
 a:"Compose describe una app <strong>multi-contenedor</strong> en YAML. Secciones raíz: <code>services</code> (cada contenedor), <code>networks</code> y <code>volumes</code>. En cada servicio: <code>image</code>/<code>build</code>, <code>ports</code>, <code>environment</code>/<code>env_file</code>, <code>volumes</code>, <code>depends_on</code>.<br>"+
 "<strong>Comandos:</strong> <code>docker compose up -d</code> (levanta), <code>build</code> (construye imágenes), <code>down</code> (para y elimina recursos), <code>logs</code>, <code>ps</code>.<br>"+
 "<pre>services:\n  web:\n    build: .\n    ports:\n      - \"8080:80\"\n    depends_on:\n      - db\n  db:\n    image: postgres:16\n    environment:\n      POSTGRES_PASSWORD: secreto\n    volumes:\n      - datos:/var/lib/postgresql/data\nvolumes:\n  datos:</pre>"},
{tipo:"larga",tema:5,q:"Explica el modo Swarm: roles de nodos, tipos de servicio, configs/secrets y stacks. Comandos clave.",
 a:"Swarm es la <strong>orquestación nativa</strong> de Docker sobre varios nodos.<ul>"+
 "<li><strong>Roles:</strong> <em>manager</em> (mantienen el estado con raft y planifican) y <em>worker</em> (ejecutan). <code>docker swarm join-token</code> para unir nodos; <code>docker node promote/drain</code>.</li>"+
 "<li><strong>Servicios:</strong> <em>replicados</em> (N réplicas) o <em>globales</em> (uno por nodo). Se escalan con <code>docker service scale</code>.</li>"+
 "<li><strong>Configs y Secrets:</strong> configuración distribuida entre nodos <strong>cifrada</strong>; los secrets para datos sensibles.</li>"+
 "<li><strong>Stacks:</strong> desplegar un <code>docker-compose.yml</code> completo en el clúster con <code>docker stack deploy --compose-file ...</code> (la sección <code>build</code> se ignora, se necesitan imágenes ya construidas).</li></ul>"},
{tipo:"larga",tema:6,q:"Describe la arquitectura de Kubernetes (control plane + nodos) y el papel de cada componente.",
 a:"<strong>Control Plane</strong> (cerebro del clúster):<ul>"+
 "<li><strong>API server</strong>: punto de entrada; toda operación pasa por su API REST.</li>"+
 "<li><strong>etcd</strong>: almacén clave-valor con el estado deseado y real del clúster.</li>"+
 "<li><strong>Scheduler</strong>: decide en qué nodo se ejecuta cada Pod (según requests, afinidades…).</li>"+
 "<li><strong>Controller Manager</strong>: bucles de control que llevan el estado real hacia el deseado (p. ej. ReplicaSet).</li></ul>"+
 "<strong>Nodos worker</strong>:<ul>"+
 "<li><strong>kubelet</strong>: agente que arranca y vigila los Pods del nodo.</li>"+
 "<li><strong>kube-proxy</strong>: gestiona las reglas de red/Services del nodo.</li>"+
 "<li><strong>Container runtime</strong>: ejecuta los contenedores.</li></ul>"+
 "El usuario interactúa con <code>kubectl</code> → API server. La unidad mínima que se programa es el <strong>Pod</strong>."},
{tipo:"larga",tema:7,q:"Explica el control de salud y de recursos de un Pod: probes (liveness/readiness/startup) y requests/limits. Ejemplo YAML.",
 a:"<strong>Probes:</strong><ul>"+
 "<li><strong>liveness</strong>: ¿sigue vivo? Si falla → K8s <em>reinicia</em> el contenedor.</li>"+
 "<li><strong>readiness</strong>: ¿listo para tráfico? Si falla → lo <em>saca de los endpoints</em> del Service (no lo reinicia).</li>"+
 "<li><strong>startup</strong>: para arranques lentos; retrasa las otras hasta que la app esté arrancada.</li></ul>"+
 "Métodos: <code>exec</code>, <code>httpGet</code>, <code>tcpSocket</code>.<br>"+
 "<strong>Recursos:</strong> <code>requests</code> = mínimo garantizado (lo usa el scheduler); <code>limits</code> = tope máximo.<br>"+
 "<pre>containers:\n- name: web\n  image: nginx:1.27\n  resources:\n    requests: { cpu: \"100m\", memory: \"128Mi\" }\n    limits:   { cpu: \"500m\", memory: \"256Mi\" }\n  readinessProbe:\n    httpGet: { path: /, port: 80 }\n  livenessProbe:\n    httpGet: { path: /healthz, port: 80 }</pre>"},
{tipo:"larga",tema:8,q:"Explica cómo se expone una aplicación en Kubernetes: tipos de Service e Ingress. Ejemplo Deployment + Service.",
 a:"<strong>Services</strong> (dan IP/nombre estable y balancean sobre los Pods que casan su <code>selector</code>):<ul>"+
 "<li><strong>ClusterIP</strong>: solo interno (por defecto).</li>"+
 "<li><strong>NodePort</strong>: abre el mismo puerto en cada nodo (acceso externo básico).</li>"+
 "<li><strong>LoadBalancer</strong>: balanceador externo del proveedor cloud.</li>"+
 "<li><strong>ExternalName</strong>: alias DNS a un servicio externo.</li></ul>"+
 "Para HTTP con rutas/dominios se pone un <strong>Ingress</strong> (L7) por delante de Services ClusterIP.<br>"+
 "<pre>apiVersion: apps/v1\nkind: Deployment\nmetadata: { name: web }\nspec:\n  replicas: 3\n  selector: { matchLabels: { app: web } }\n  template:\n    metadata: { labels: { app: web } }\n    spec:\n      containers:\n      - name: web\n        image: nginx:1.27\n        ports: [{ containerPort: 80 }]\n---\napiVersion: v1\nkind: Service\nmetadata: { name: web-svc }\nspec:\n  selector: { app: web }\n  ports: [{ port: 80, targetPort: 80 }]\n  type: ClusterIP</pre>"+
 "<strong>Clave que valora el profe:</strong> el <code>selector</code> del Service y el <code>matchLabels</code> del Deployment deben coincidir con las <em>labels</em> del Pod."},
{tipo:"larga",tema:9,q:"Explica el almacenamiento persistente en Kubernetes (volúmenes, PV/PVC, StorageClass) y la inyección de configuración (ConfigMap/Secret).",
 a:"<strong>Volúmenes en el Pod:</strong> <code>emptyDir</code> (efímero, se borra con el Pod), <code>hostPath</code> (ruta del nodo), específicos de cloud (<code>awsElasticBlockStore</code>…).<br>"+
 "<strong>Almacenamiento persistente desacoplado:</strong><ul>"+
 "<li><strong>PersistentVolume (PV)</strong>: recurso de almacenamiento del clúster, independiente del Pod.</li>"+
 "<li><strong>PersistentVolumeClaim (PVC)</strong>: la petición con la que el Pod reclama capacidad; K8s la enlaza a un PV.</li>"+
 "<li><strong>StorageClass</strong>: aprovisiona PV <em>dinámicamente</em> bajo demanda.</li></ul>"+
 "<strong>Configuración:</strong> <code>ConfigMap</code> (datos no sensibles) y <code>Secret</code> (sensibles, en base64, no cifrados). Se inyectan como variables de entorno o montados como volumen. Son <em>namespaced</em>. <strong>Ojo:</strong> el curso marca como FALSO que el volumen de un ConfigMap se actualice automáticamente al cambiarlo."},
{tipo:"larga",tema:10,q:"Explica los Deployments y el rolling update (rollout, undo, scale) y en qué se diferencian de los StatefulSets.",
 a:"El <strong>Deployment</strong> declara el estado deseado de una app <em>sin estado</em>: gestiona un <strong>ReplicaSet</strong> que mantiene N Pods.<ul>"+
 "<li>Al cambiar la imagen hace un <strong>rolling update</strong> (sustituye Pods progresivamente, sin caída).</li>"+
 "<li><code>kubectl rollout status</code> (progreso), <code>rollout undo</code> (rollback), <code>rollout pause</code>, <code>kubectl scale</code> (nº de réplicas).</li></ul>"+
 "El <strong>StatefulSet</strong> es para apps <em>con estado</em>: cada réplica tiene <strong>hostname/identidad estable</strong>, se crean y destruyen en <strong>orden</strong> y conservan su <strong>almacenamiento</strong> (un PVC por réplica). Se usa para bases de datos, colas, etc. donde la identidad importa."},
{tipo:"larga",tema:10,q:"Explica los Jobs y CronJobs de Kubernetes con un ejemplo YAML de CronJob.",
 a:"Un <strong>Job</strong> ejecuta uno o varios Pods <strong>hasta que la tarea se completa</strong> (procesos batch). Campos: <code>completions</code>, <code>parallelism</code>, <code>backoffLimit</code> (reintentos) y <code>activeDeadlineSeconds</code> (tiempo límite). La <code>restartPolicy</code> es <code>OnFailure</code> o <code>Never</code>.<br>"+
 "Un <strong>CronJob</strong> lanza Jobs de forma <strong>periódica</strong> según una expresión cron (backups, informes, limpiezas).<br>"+
 "<pre>apiVersion: batch/v1\nkind: CronJob\nmetadata: { name: backup }\nspec:\n  schedule: \"0 2 * * *\"        # cada dia a las 02:00\n  jobTemplate:\n    spec:\n      template:\n        spec:\n          restartPolicy: OnFailure\n          containers:\n          - name: backup\n            image: alpine\n            command: [\"sh\",\"-c\",\"echo haciendo backup\"]</pre>"+
 "<strong>Nota:</strong> el profe avisó de que los CronJobs pueden caer como pregunta corta."}
];
