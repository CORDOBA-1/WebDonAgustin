# Estructura de Archivos CSS

Esta carpeta contiene todos los archivos CSS organizados por secciones para mejor mantenimiento y organización del código.

## Archivos CSS

### 📁 **Configuración Base**
- **`variables.css`** - Variables CSS globales (colores, fuentes, etc.)
- **`reset.css`** - Reset CSS y estilos base del sitio
- **`main.css`** - Archivo principal que importa todos los demás archivos

### 📁 **Layout y Estructura**
- **`layout.css`** - Estilos de layout general y secciones base
- **`navigation.css`** - Estilos de la navegación principal

### 📁 **Secciones de Contenido**
- **`hero.css`** - Sección de inicio/hero con scroll indicator
- **`aberturas.css`** - Sección de aberturas con grid y animaciones
- **`corralon.css`** - Sección del corralón
- **`muebles.css`** - Sección de muebles con efectos especiales
- **`obras.css`** - Sección de obras realizadas
- **`contacto.css`** - Sección de contacto con información
- **`faq.css`** - Sección de preguntas frecuentes con categorías

### 📁 **Efectos y Utilidades**
- **`animations.css`** - Todas las animaciones y keyframes
- **`responsive.css`** - Media queries y estilos responsive

## Uso

Para usar estos estilos, simplemente incluye el archivo principal en tu HTML:

```html
<link rel="stylesheet" href="assets/css/main.css">
```

El archivo `main.css` importa automáticamente todos los demás archivos CSS en el orden correcto.

## Estructura de Importación

```css
/* Variables y configuración base */
@import url('variables.css');
@import url('reset.css');

/* Layout y estructura */
@import url('layout.css');
@import url('navigation.css');

/* Secciones específicas */
@import url('hero.css');
@import url('aberturas.css');
@import url('corralon.css');
@import url('muebles.css');
@import url('obras.css');
@import url('contacto.css');
@import url('faq.css');

/* Efectos y animaciones */
@import url('animations.css');

/* Responsive design */
@import url('responsive.css');
```

## Ventajas de esta Organización

1. **Mantenibilidad** - Cada sección tiene su propio archivo
2. **Legibilidad** - Fácil de encontrar y editar estilos específicos
3. **Reutilización** - Archivos pueden ser reutilizados en otros proyectos
4. **Colaboración** - Múltiples desarrolladores pueden trabajar en paralelo
5. **Performance** - Archivos más pequeños y organizados
6. **Debugging** - Más fácil identificar problemas en secciones específicas

## Modificaciones

Para modificar estilos:

1. **Variables globales** → Editar `variables.css`
2. **Estilos de navegación** → Editar `navigation.css`
3. **Sección específica** → Editar el archivo correspondiente
4. **Responsive** → Editar `responsive.css`
5. **Animaciones** → Editar `animations.css`

## Paleta de Colores

Las variables de color están definidas en `variables.css`:

```css
:root {
    --rojo: #E74C3C;
    --rojo-suave: #FADBD8;
    --madera-oscura: #8B4513;
    --madera-betas: rgba(193, 154, 107, 0.8);
    --aluminio-oscuro: #A9A9A9;
    --vidrio: rgba(173, 216, 230, 0.8);
    --ladrillo: #D2691E;
    --cemento: #B0B0B0;
    --whatsapp-verde: #25D366;
    --whatsapp-blanco: #FFFFFF;
    --gris-oscuro: #333333;
    --gris-medio: #777777;
    --gris-claro: #F5F5F5;
    --blanco: #FFFFFF;
    --negro: #000000;
}
```
