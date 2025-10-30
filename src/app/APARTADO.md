# Guía de estilo para el apartado

Este documento describe el apartado principal de la aplicación y muestra ejemplos de uso de las clases CSS/SCSS definidas en `app.component.scss`.

El objetivo es ofrecer una guía simple y visualmente agradable sin cambiar excesivamente la estructura actual de la app.

---

## Estructura recomendada

Usa un contenedor principal que centralice el contenido y aplique el fondo general:

```html
<div class="contenedor-principal">
  <header class="encabezado">Mi aplicación</header>

  <main class="contenido">
    <!-- Contenido de la página aquí -->
  </main>

  <footer class="pie-pagina">© 2025 Mi App</footer>
</div>
```

---

## Componentes y ejemplos

### Tarjeta (tarjeta)

Una tarjeta para agrupar información con efecto hover:

```html
<section class="tarjeta">
  <h3>Título de la tarjeta</h3>
  <p>Descripción breve que explica el contenido de esta tarjeta.</p>
  <button class="boton-principal">Acción</button>
</section>
```

### Formulario simple

```html
<form>
  <div class="grupo-formulario">
    <label class="etiqueta-campo">Nombre</label>
    <input class="campo-entrada" type="text" placeholder="Escribe tu nombre" />
  </div>

  <div class="grupo-formulario">
    <label class="etiqueta-campo">Correo</label>
    <input class="campo-entrada" type="email" placeholder="usuario@ejemplo.com" />
  </div>

  <button class="boton-principal">Enviar</button>
</form>
```

### Lista de elementos

```html
<ul class="lista">
  <li class="elemento-lista">Elemento 1 <span>Acción</span></li>
  <li class="elemento-lista">Elemento 2 <span>Acción</span></li>
  <li class="elemento-lista">Elemento 3 <span>Acción</span></li>
</ul>
```

### Alertas

```html
<div class="alerta exito">Operación realizada con éxito.</div>
<div class="alerta error">Ha ocurrido un error.</div>
<div class="alerta info">Información importante.</div>
```

---

## Recomendaciones

- Mantén los nombres de clases en español tal como están para facilitar la lectura.
- Usa variantes (`.exito`, `.error`) para estados visuales.
- Para Ionic components, puedes aplicar las clases a `ion-card`, `ion-list`, `ion-button`, etc., o envolver componentes nativos con `div` y clases propias.

---

## Notas finales

Este documento pretende ser una guía rápida y no obliga a reemplazar componentes ya existentes en Ionic. Si quieres, puedo generar ejemplos específicos por página (por ejemplo `home.page.html`) o convertir las clases para que se apliquen directamente a componentes `ion-*` si lo prefieres.
