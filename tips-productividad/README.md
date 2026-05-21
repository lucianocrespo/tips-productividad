¿Qué hace la aplicación?
Esta es una aplicación interactiva construida con React que busca ayudar a los usuarios a mejorar su organización personal. Sus características principales son:
•	Visualización aleatoria: Muestra un tip de productividad al azar de una lista predefinida, asegurando que no se repita el mismo tip dos veces seguidas al avanzar.
•	Sistema de votación: Permite al usuario votar ("dar me gusta") al tip que se está mostrando en pantalla.
•	Ranking en tiempo real: Calcula y muestra en una sección separada cuál es el tip que acumula la mayor cantidad de votos. Si aún no hay votos, informa al usuario.
•	Reinicio de métricas: Incluye un botón para resetear todos los contadores de votos a cero y volver a empezar.

¿Cómo se ejecuta?
1.	Si no tenes “Node.js” instalado en tu computadora. Anda a https://nodejs.org/ e instalalo.
2.	Andá a la carpeta del proyecto, dale segundo clic y selecciona “Abrir en Terminal”.
3.	Instalá las dependencias necesarias ejecutando el siguiente comando: “npm install”.
4.	Ahí mismo, ejecuta el comando “npm run dev”.
5.	Ahora te aparece un link, mantené “Ctrl” y dale clic, ahí se abrirá la página.

Conceptos de React utilizados
En el jsx:
•	Componentes Funcionales: Toda la lógica y la interfaz gráfica están encapsuladas en un componente funcional principal (`App`).
•	Manejo de Estado (`useState`): Se utilizó para controlar qué tip se muestra en pantalla actualmente y para almacenar el array de objetos con los tips y sus respectivos votos.
•	Inmutabilidad del Estado: Se aplicaron buenas prácticas para actualizar el estado sin mutarlo directamente, utilizando el “spread operator” (`...`) y métodos de arreglos como `.map()` para crear copias de los objetos antes de sobreescribirlos.
•	Renderizado Condicional: Se utilizó el operador ternario (`condicion ? A : B`) para determinar qué mostrar en la sección del tip más votado (el mensaje de "Todavía no hay votos" o el tip ganador).
•	Manejo de Eventos: Uso del atributo `onClick` para conectar la interfaz con las funciones lógicas (`handleClick`, `handleVoto`, `handleReset`).
En el css:
•	Flexbox (`display: flex`): Muy utilizado para el diseño general. En el `body` se usó para centrar la aplicación vertical y horizontalmente en la pantalla, y en los contenedores (`.botones`, `p`) para alinear elementos internos y gestionar los espacios (mediante `gap`).
•	Diseño Responsivo (`@media queries`): Implementación de puntos de quiebre (breakpoints) para adaptar tamaños de fuente, márgenes y disposición de botones (cambiando a `flex-direction: column`) en pantallas de dispositivos móviles (hasta 480px).
•	Pseudo-clases (`:first-child`, `:last-child`): Aplicadas para darle estilos específicos e independientes a los botones dentro de un mismo contenedor sin necesidad de llenarlos de clases adicionales.
•	Interactividad y Animaciones (`:hover`, `:active`): Uso de estados interactivos junto con `transition` y `transform: translateY` para crear un efecto visual de "presionado" y elevación fluida cuando el usuario interactúa con los botones.
•	Efectos visuales avanzados: Implementación de fondos degradados (`linear-gradient`), sombras difuminadas (`box-shadow`, `text-shadow`) y reseteo global del modelo de caja (`box-sizing: border-box`) para asegurar consistencia en las medidas.
