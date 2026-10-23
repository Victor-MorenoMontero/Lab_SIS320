# BytePro — Landing Page de Comercio Electrónico de Hardware

> **Práctica Académica:** Lab 8 — Landing Page con Antigravity  
> **Universidad:** Universidad Mayor, Real y Pontificia San Francisco Xavier de Chuquisaca (USFX)  
> **Facultad:** Facultad de Ciencias y Tecnología  
> **Asignatura:** SIS324 — Ingeniería de Software  
> **Docente:** Ing. Ramiro Durán  
> **Grupo de Desarrollo:** G1  
> **Integrantes:**
> - Arce Vargas José Enrique *(Ing. Sistemas)*
> - Salazar Ramos Lenin Crismar *(Ing. Ciencias de la Computación)*
> - Moreno Montero Victor Ruben *(Ing. Ciencias de la Computación)*
>
> **Fecha:** Octubre 2026 • Sucre, Bolivia

---

## 1. Visión y Propósito del Proyecto

**BytePro** es una plataforma web de comercio electrónico especializada exclusivamente en la comercialización de computadores, componentes y hardware de alto rendimiento. 

El proyecto surge de la necesidad de centralizar en una única herramienta tecnológica el catálogo de productos, el inventario de existencias, los pedidos de los clientes y el seguimiento de la distribución organizada, eliminando las inconsistencias de los métodos manuales descritos en el *Documento de Visión de BytePro*.

### Línea de Productos Exclusiva (Hardware Informático)
- **Laptops:** Computadoras portátiles para desarrollo, diseño e ingeniería.
- **Computadoras de Escritorio:** Torres y workstations optimizadas para trabajo pesado y multitarea.
- **Monitores:** Pantallas IPS de alta tasa de refresco (144Hz - 165Hz) y resolución QHD/4K.
- **Teclados y Ratones:** Periféricos mecánicos ergonómicos de alta precisión y respuesta táctil.
- **Impresoras:** Equipos multifunción y sistemas de tanque continuo de tinta.
- **Componentes y Accesorios:** Tarjetas de video (GPU), memoria RAM DDR5, procesadores, discos SSD NVMe y fuentes certificadas.

> **Regla de Negocio Estricta:** BytePro **no comercializa teléfonos celulares**. La tienda se enfoca 100% en el entorno de computación y hardware.

---

## 2. Tecnologías Empleadas

El desarrollo se realizó con tecnologías web puras, ligeras y con cero dependencias externas pesadas, asegurando máxima velocidad, accesibilidad y compatibilidad nativa con **Render Static Site**:

- **HTML5 Semántico:** Marcado estructurado con encabezados jerárquicos, roles WAI-ARIA para accesibilidad y metadatos SEO.
- **CSS3 Moderno:**
  - Variables CSS (`:root`) con la paleta de identidad de BytePro (Azul Marino Profundo `#0A111E`, Azul Eléctrico/Cian `#00D2FF`, Grafito y Blanco Puro).
  - Maquetación flexible con **Flexbox** y **CSS Grid**.
  - Efectos visuales de desenfoque (*Glassmorphism*), transiciones fluidas y estados activos.
  - Diseño 100% adaptable (*responsive*) a computadoras, tabletas y teléfonos celulares.
- **JavaScript Puro (Vanilla JS):**
  - Buscador de productos en tiempo real con filtrado instantáneo.
  - Filtrado dinámico por pestañas de categorías.
  - Modal interactivo de ficha técnica completa y especificaciones detalladas.
  - Simulador de pedidos y carrito de compras demostrativo con cálculo de totales.
  - Menú de navegación responsive (botón hamburguesa).
  - Acordeón interactivo para Preguntas Frecuentes (FAQ).
  - Validación de formulario de contacto en el navegador con notificaciones tipo *Toast*.
- **Gráficos Vectoriales SVG Personalizados:** Ilustraciones vectoriales nítidas, escalables y ultra ligeras para cada categoría y producto, libres de enlaces rotos o dependencias externas.

---

## 3. Estructura del Directorio

```text
lab8_landing_page/
├── index.html                  # Punto de entrada principal (Raíz para Render)
├── .gitignore                  # Exclusiones de control de versiones Git
├── README.md                   # Documentación técnica y académica completa
├── css/
│   └── styles.css              # Estilos visuales, variables, grid y responsive
├── js/
│   └── main.js                 # Lógica interactiva, filtros, modal, carrito y FAQ
└── assets/
    └── images/                 # Gráficos vectoriales SVG de alta definición
        ├── logo-bytepro.svg
        ├── hero-hardware.svg
        ├── cat-laptops.svg
        ├── cat-desktop.svg
        ├── cat-monitors.svg
        ├── cat-peripherals.svg
        ├── cat-printers.svg
        ├── cat-components.svg
        ├── prod-laptop-zenith.svg
        ├── prod-desktop-titan.svg
        ├── prod-monitor-ultra.svg
        ├── prod-keyboard-mouse.svg
        ├── prod-printer-eco.svg
        └── prod-gpu-rtx.svg
```

---

## 4. Secciones Desarrolladas

1. **Barra de Navegación (Header):**
   - Logotipo de BytePro con emblema de microchip tecnológico.
   - Enlaces de salto suave: *Inicio*, *Categorías*, *Productos*, *Beneficios*, *Nosotros*, *Reseñas*, *Contacto*.
   - Botón interactivo de Carrito/Pedido con contador dinámico.
   - Botón CTA de acceso directo al catálogo.
   - Menú móvil desplegable accesible (hamburguesa).
2. **Hero Principal:**
   - Titular de referencia: *“Tecnología que impulsa tus ideas”*.
   - Subtítulo comercial enfocado en hardware informático.
   - Botones duales de llamada a la acción (*Explorar Productos* y *Conocer la Tienda*).
   - Composición visual de workstation de computación sin teléfonos celulares.
3. **Métricas de Confianza:**
   - 6 Categorías especializadas, inventario centralizado, alto rendimiento y soporte técnico.
4. **Categorías de Hardware:**
   - 6 tarjetas visuales interactivas que activan el filtro automático en el catálogo.
5. **Catálogo de Productos Destacados:**
   - 6 productos de muestra con nombre, especificaciones breves, precio en bolivianos (Bs.) y botón para abrir la ficha técnica.
   - Barra de búsqueda interactiva y filtros por pestañas.
   - Aviso ético de datos demostrativos para fines académicos.
6. **Beneficios de Comprar en BytePro:**
   - Ventajas reales y honestas basadas en la visión del negocio (catálogo especializado, información técnica clara, usabilidad y atención).
7. **Sobre BytePro & Visión del Negocio:**
   - Explicación del proyecto universitario USFX, centralización de operaciones y roles del sistema.
8. **Módulo de Interacción entre Clientes (RF08 / Sección 4.8):**
   - Reseñas de compradores con valoraciones de 5 estrellas fomentando la comunidad de usuarios.
9. **Preguntas Frecuentes (FAQ):**
   - Acordeón interactivo con respuestas clave de stock, compatibilidad y alcance.
10. **Contacto & Asesoramiento:**
    - Formulario con validación JS en vivo y canales de atención de Sucre, Bolivia.
11. **Footer Completo:**
    - Créditos a la Facultad de Ciencias y Tecnología (USFX), Grupo G1 y botón flotante *Volver arriba*.

---

## 5. Instrucciones de Ejecución Local

Para visualizar la página en tu computadora local:

### Opción A (Directa):
1. Navega hasta la carpeta del proyecto `lab8_landing_page/`.
2. Haz doble clic en el archivo `index.html`. Se abrirá en tu navegador web predeterminado.

### Opción B (Con servidor local de desarrollo Node.js o Live Server):
Si tienes instalado Node.js, puedes ejecutar un servidor estático rápido:
```bash
# Con npx serve
npx serve .

# O con python si está disponible
python -m http.server 3000
```
Luego abre `http://localhost:3000` en tu navegador.

---

## 6. Guía para Subir el Proyecto a GitHub

Siguiendo las pautas del documento *Subir el proyecto a GitHub*:

1. **Crear el repositorio en GitHub:**
   - Entra a [https://github.com](https://github.com) e inicia sesión.
   - Haz clic en el botón **`+`** (esquina superior derecha) y selecciona **New repository**.
   - Nombre sugerido: `bytepro-landing-page` o `lab8_landing_page`.
   - Selecciona **Public**.
   - *Nota:* No marques "Add a README file", ".gitignore" ni "license" ya que el proyecto ya los tiene generados localmente.
   - Haz clic en **Create repository**.

2. **Ejecutar los siguientes comandos en la terminal desde la carpeta del proyecto:**
   ```bash
   git init
   git add .
   git commit -m "Primer commit: subiendo landing page BytePro Lab 8"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/TU-REPOSITORIO.git
   git push -u origin main
   ```
   *(Reemplaza `TU-USUARIO/TU-REPOSITORIO` por la URL de tu repositorio recién creado)*.

---

## 7. Guía para Desplegar en Render (Static Site)

Siguiendo las instrucciones del documento *Desplegar en Render*:

1. **Iniciar sesión en Render:**
   - Ingresa a [https://dashboard.render.com](https://dashboard.render.com) e inicia sesión con tu cuenta de GitHub.
2. **Crear un nuevo servicio:**
   - Haz clic en el botón azul **New +** (esquina superior derecha).
   - Selecciona **Static Site** (diseñado para páginas HTML, CSS y JS sin backend).
3. **Conectar el repositorio:**
   - En la sección *Connect a repository*, selecciona el repositorio `bytepro-landing-page`.
4. **Configurar el despliegue:**
   - **Name:** `bytepro-landing` *(formará la URL gratuita: `bytepro-landing.onrender.com`)*.
   - **Branch:** `main`.
   - **Build Command:** Dejar en blanco (o `echo "HTML puro sin compilación"`).
   - **Publish Directory:** `.` *(un punto, para indicar que `index.html` está en la raíz)*.
5. **Desplegar:**
   - Selecciona el plan **Free (Gratuito)**.
   - Haz clic en **Create Static Site**.
   - Render procesará el despliegue y mostrará el mensaje *Your service is live*, proporcionándote tu enlace público HTTPS `.onrender.com`.
