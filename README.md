# La Cheesequerie · Web

Web de La Cheesequerie (Tánger). Está en francés por defecto, con opción de cambiar a español, y es totalmente responsive: ordenador, tablet y móvil.

Incluye carta con fotos, tarta destacada, carta de toppings, configurador de pedidos con carrito, envío del pedido por WhatsApp y animaciones al hacer scroll. No necesita servidor, así que funciona directamente en GitHub Pages.

## Archivos

```
index.html          Estructura de la página
styles.css          Marca, animaciones y versiones tablet/móvil
app.js              Configuración, textos FR/ES, pedidos y WhatsApp
assets/             Mascota y fotos de las tartas
.nojekyll           Hace que GitHub Pages publique los archivos tal cual
```

## Subir a GitHub y publicar

```bash
cd la-cheesequerie
git init
git add .
git commit -m "Web La Cheesequerie"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/la-cheesequerie.git
git push -u origin main
```

Después, en el repositorio, ve a **Settings → Pages**, elige la rama **main** y la carpeta **/ (root)**, y pulsa **Save**. En uno o dos minutos la web estará en `https://TU-USUARIO.github.io/la-cheesequerie/`.

Para usar un dominio propio, escríbelo en **Settings → Pages → Custom domain** y activa **Enforce HTTPS**.

## Qué cambiar antes de publicar

Todo está al principio de `app.js`, en el bloque `CONFIG`:

- `whatsapp`: vuestro número en formato internacional, sin `+` ni espacios. Ejemplo: `212612345678`.
- `whatsappDisplay`, `instagram` y `address`.
- `flavors`: el precio de la tarta entera de cada sabor y su foto.
- `maxToppings` (la **x**) y `toppingPrice` (la **y**, en MAD).
- `deliveryFee` y `minHoursAhead` (24 h por defecto).
- `featured`: la tarta que sale como "coup de cœur".

Los horarios entre corchetes están en el bloque `I18N` del mismo archivo, en los dos idiomas.

### Fotos

Para cambiar una foto, sustituye el archivo en `assets/` manteniendo el mismo nombre. Funcionan mejor en vertical 4:5, por ejemplo 1000 × 1250 px.

### Mapa de Google

En Google Maps, busca la tienda y pulsa **Compartir → Insertar un mapa → Copiar HTML**. En `index.html`, sustituye el contenido del bloque `<div class="map lc-rv">` por ese `<iframe>`.

## Cómo funcionan los pedidos

El cliente elige sabor, toppings y cantidad, y rellena nombre, teléfono, fecha y hora. La fecha tiene que ser con al menos 24 h de antelación. Si pide entrega a domicilio, también rellena la dirección.

Al confirmar se abre WhatsApp con el pedido completo ya escrito, con el total, y el cliente solo tiene que enviarlo. No hace falta servidor ni pagar cuotas.

## Animaciones

Las animaciones ligadas al scroll funcionan en Chrome, Edge y Safari reciente. En Firefox se usa una versión alternativa con apariciones suaves. Si el visitante tiene activada la opción de reducir movimiento, se desactivan.
