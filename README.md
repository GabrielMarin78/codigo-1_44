*** Proyecto desarrolado por Gabriel Johan Marín Salas ***
*** Trabajo de la Unidad 1 de la materia Aplicaciones Web ***
*** Universidad Politécnica Salesiana ***
*** gmarins@est.ups.edu.ec ***

Repositorio GitHub: https://github.com/GabrielMarin78/codigo-1_44.git


CinePlus - Aplicación Web de Películas

Descripción

CinePlus es una aplicación web interactiva que permite a los usuarios consultar películas en cartelera, ver detalles, reproducir tráilers, rentar películas y contactar con el servicio.

El proyecto está desarrollado utilizando HTML, CSS, JavaScript, jQuery y Bootstrap, aplicando principios de diseño responsivo y buenas prácticas de interfaz de usuario.



Funcionalidades Implementadas

Catálogo de Películas

- Carga dinámica de películas desde archivo JSON (peliculas.json)
- Visualización de las películas en tarjetas con: imagen, título, géneros y precio dinámico (Estreno / Normal)
- Badge automático según fecha de estreno



Tráilers en Modal

- Botón “Tráiler” en cada tarjeta de película
- Reproducción en modal Bootstrap



Sistema de Reseñas

- Carga de reseñas desde archivo JSON
- Visualización por película
- Calificación con estrellas (íconos)



Renta de Películas

- Selección de múltiples películas
- Cálculo automático del total según los días de renta
- Validación de campos del formulario
- Modal de resumen antes de confirmar la renta
- Modal final de confirmación
- Redirección automática al inicio



Formulario de Contacto

- Validación personalizada: Campos obligatorios, email válido y mensaje entre 20 y 50 caracteres
- Mensajes de error dinámicos
- Modal de confirmación
- Redirección automática al inicio



Experiencia de Usuario

- Alerta de bienvenida (por una sola vez)
- Animaciones al cargar películas (fade/entrada progresiva)
- Interfaz moderna tipo app



Diseño y Estética

- Tema visual personalizado
- Uso de Google Fonts (Poppins)
- Botones estilizados y consistentes
- Tarjetas con efectos hover
- Espaciado optimizado (padding/margin)



Diseño Responsivo

- Grid adaptable (Bootstrap)
- Navbar con menú hamburguesa
- Menú overlay en móviles
- Botones adaptables (flex-wrap)
- Imágenes fluidas
- Compatible con móviles, tablets y escritorio



Navegación

- Navbar presente en todas las páginas
- Resaltado de página activa
- Navegación entre las páginas



Tecnologías Utilizadas

- HTML
- CSS
- JavaScript
- jQuery
- Bootstrap
- JSON (manejo de datos)



Estructura del Proyecto

CinePlus/
│
├── index.html
├── pages/
│   ├── detalle.html
│   ├── renta.html
│   └── contacto.html
│
├── css/
│   └── style.css
│
├── js/
│   └── app.js
│
├── data/
│   ├── peliculas.json
│   └── reseñas.json
│
└── img/



Instrucciones de Uso

1. Clonar o descargar el proyecto
2. Abrir index.html en el navegador
3. Navegar entre las secciones:
    - Ver películas
    - Consultar detalles
    - Ver tráilers
    - Rentar películas
    - Enviar mensajes



Posibles Mejoras Futuras

- Persistencia con backend
- Autenticación de usuarios
- Carrito de compras real
