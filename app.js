/* ==========================================================
   LA CHEESEQUERIE — CONFIGURACIÓN
   Cambia aquí vuestros datos. No hace falta tocar nada más.
   ========================================================== */
const CONFIG = {
  whatsapp: '212600000000',           // Número de WhatsApp en formato internacional, sin + ni espacios
  whatsappDisplay: '+212 [NUMÉRO]',   // Cómo se ve el número en la web
  instagram: 'lacheesequerie',        // Cuenta de Instagram (sin @)
  address: '[ADRESSE]',
  maxToppings: 3,                     // x: máximo de toppings por tarta
  toppingPrice: 15,                   // y: precio en MAD de cada topping
  deliveryFee: 20,                    // gastos de entrega en MAD (0 = gratis)
  minHoursAhead: 24,                  // antelación mínima del pedido (horas)
  featured: 'pistache',               // tarta destacada ("coup de cœur")
  // Precio en MAD de la tarta entera (único formato que se puede encargar)
  flavors: [
    { id: 'basque',    price: 300, photo: 'assets/basque.jpg' },
    { id: 'classique', price: 280, photo: 'assets/classique.jpg' },
    { id: 'lotus',     price: 320, photo: 'assets/lotus.jpg' },
    { id: 'pistache',  price: 350, photo: 'assets/pistache.jpg' }
  ],
  toppings: [
    { id: 'rouges',        group: 'cremes', color: '#9E1F37' },
    { id: 'cremeLotus',    group: 'cremes', color: '#C98A45' },
    { id: 'cremePistache', group: 'cremes', color: '#A9BD73' },
    { id: 'caramel',       group: 'cremes', color: '#D99A3E' },
    { id: 'chocolat',      group: 'cremes', color: '#4A2C20' },
    { id: 'chocoBlanc',    group: 'cremes', color: '#F4EBD8' },
    { id: 'miel',          group: 'cremes', color: '#E8C15A' },
    { id: 'pistache',      group: 'croq',   color: '#5E7A2E' },
    { id: 'oreo',          group: 'croq',   color: '#222222' },
    { id: 'biscuitLotus',  group: 'croq',   color: '#A8672A' },
    { id: 'kinder',        group: 'croq',   color: '#7B4A2A' }
  ]
};

/* ---------------- Textos FR / ES ---------------- */
const I18N = {
  fr: {
    announce: 'Gâteaux entiers sur commande, 24 h à l’avance · Retrait en boutique ou livraison à Tanger',
    navFlavors: 'Nos cheesecakes', navOrder: 'Commander', navShop: 'La boutique', navContact: 'Contact', cartBtn: 'Ma commande',
    eyebrow: 'Cheesecakes artisanales · Tanger',
    h1a: 'Cuites chez nous,', h1b: 'à deux pas de chez vous.',
    lead: 'Quatre recettes : la basque, la classique, la Lotus et la pistache. Commandez votre gâteau entier 24 h à l’avance, avec les toppings de votre choix, en ligne ou sur WhatsApp.',
    ctaOrder: 'Commander maintenant', ctaWa: 'Commander sur WhatsApp',
    badgeTop: 'À la carte', badge: '4 saveurs',
    marquee: 'Basque ✦ Classique ✦ Lotus ✦ Pistache ✦ Basque ✦ Classique ✦ Lotus ✦ Pistache ✦',
    marquee2: 'Cuites chez nous ✦ Faites à Tanger ✦ Cuites chez nous ✦ Faites à Tanger ✦',
    flavorsEyebrow: 'Notre carte', flavorsTitle: 'Quatre cheesecakes, une obsession',
    entiere: 'Gâteau entier', avail: 'Sur commande · 24 h', choose: 'Choisir cette saveur',
    spotEyebrow: 'Le coup de cœur de la maison',
    spotText: 'Une crème de pistache généreuse sur un cheesecake crémeux et une base de biscuit. À compléter avec vos toppings préférés.',
    spotCta: 'Je la veux',
    topEyebrow: 'Les toppings', topTitle: 'Un topping, et tout change.', topLead: 'Jusqu’à {x} par gâteau, +{y} MAD chacun.',
    grpCremes: 'Crèmes & nappages', grpCroq: 'Croquants',
    fill: 'Cuites chez nous, à Tanger. Commandées la veille, partagées le lendemain.', fillLabel: 'Notre promesse',
    orderEyebrow: 'Commande en ligne · 24 h à l’avance', orderTitle: 'Composez votre cheesecake',
    step1: '1. La saveur', step3: '2. Les toppings', step4: 'Quantité', noTopping: 'Sans topping',
    toppingHint: 'Jusqu’à {x} toppings · +{y} MAD chacun', toppingCount: '{n}/{x} choisis',
    add: 'Ajouter', entiereNote: 'Uniquement des gâteaux entiers, à commander au moins 24 h à l’avance.',
    cartTitle: 'Votre commande', items: 'articles',
    empty: 'Votre commande est vide. Composez votre cheesecake juste à côté.',
    modeLabel: 'Mode de retrait', pickup: 'Retrait en boutique', delivery: 'Livraison à domicile',
    name: 'Nom', namePh: 'Votre nom', phone: 'Téléphone (WhatsApp)', time: 'Date et heure (24 h minimum)',
    address: 'Adresse à Tanger', addressPh: 'Quartier, rue, numéro',
    subtotal: 'Sous-total', deliveryFee: 'Livraison', free: 'Offerte', total: 'Total',
    confirm: 'Confirmer la commande', sendWa: 'Envoyer par WhatsApp',
    payNote: 'Votre commande s’ouvre dans WhatsApp, prête à envoyer. Paiement en espèces ou par carte au retrait ou à la livraison.',
    placedTitle: 'Commande prête !',
    placedText: 'Envoyez le message dans WhatsApp : nous vous confirmons l’heure dans quelques minutes. Merci d’avoir choisi La Cheesequerie.',
    again: 'Passer une autre commande', remove1: 'Retirer un', add1: 'Ajouter un',
    errName: 'Indiquez votre nom et votre téléphone.', errAddr: 'Indiquez votre adresse de livraison.',
    errTime: 'Choisissez une date et une heure au moins 24 h à l’avance.',
    howTitle: 'Commander, c’est simple',
    s1t: 'Choisissez votre saveur', s1: 'Basque, classique, Lotus ou pistache, en gâteau entier.',
    s2t: 'Ajoutez vos toppings', s2: 'Personnalisez votre gâteau avec les toppings de votre choix.',
    s3t: 'Retrait ou livraison', s3: 'Commandez 24 h à l’avance et récupérez-le en boutique ou recevez-le chez vous, à Tanger.',
    waTitle: 'Un anniversaire, un mariage, une commande spéciale ?',
    waText: 'Écrivez-nous sur WhatsApp et nous préparons votre gâteau sur mesure.', waCta: 'Écrivez-nous',
    shopEyebrow: 'Venez nous voir', shopTitle: 'La boutique', addrLabel: 'Adresse', city: 'Tanger, Maroc',
    hoursLabel: 'Horaires', hoursVal: '[JOURS] · [HORAIRES]', closed: '[JOUR] : fermé',
    map: '[Carte Google ou photo de la façade]',
    footer: 'Cheesecakes cuites chez nous, à Tanger', floatCta: 'Commander mon gâteau',
    waHello: 'Bonjour La Cheesequerie, je souhaite commander :', waPickup: 'Retrait en boutique', waDelivery: 'Livraison à domicile',
    waName: 'Nom', waPhone: 'Téléphone', waTime: 'Pour le', waAddr: 'Adresse',
    desc: {
      basque: 'Dessus caramélisé et cœur fondant, cuite sans base.',
      classique: 'La recette traditionnelle, sur une base de biscuit.',
      lotus: 'Crème Lotus sur une base de biscuit classique.',
      pistache: 'Crème de pistache sur une base de biscuit.'
    },
    flav: { basque: 'Basque', classique: 'Classique', lotus: 'Lotus', pistache: 'Pistache' },
    top: { rouges: 'Confiture de fruits rouges', cremeLotus: 'Crème Lotus', cremePistache: 'Crème de pistache', pistache: 'Pistache concassée', caramel: 'Caramel', miel: 'Miel & amandes', chocolat: 'Crème de chocolat', chocoBlanc: 'Crème de chocolat blanc', oreo: 'Biscuit Oreo', biscuitLotus: 'Biscuit Lotus', kinder: 'Kinder concassé' }
  },
  es: {
    announce: 'Tartas enteras por encargo, con 24 h de antelación · Recogida en tienda o entrega en Tánger',
    navFlavors: 'Nuestras tartas', navOrder: 'Pedir', navShop: 'La tienda', navContact: 'Contacto', cartBtn: 'Mi pedido',
    eyebrow: 'Cheesecakes artesanas · Tánger',
    h1a: 'Horneadas aquí mismo,', h1b: 'a dos pasos de ti.',
    lead: 'Cuatro recetas: la vasca, la clásica, la de Lotus y la de pistacho. Encarga tu tarta entera con 24 h de antelación y con los toppings que quieras, online o por WhatsApp.',
    ctaOrder: 'Hacer mi pedido', ctaWa: 'Pedir por WhatsApp',
    badgeTop: 'En la carta', badge: '4 sabores',
    marquee: 'Vasca ✦ Clásica ✦ Lotus ✦ Pistacho ✦ Vasca ✦ Clásica ✦ Lotus ✦ Pistacho ✦',
    marquee2: 'Horneadas en nuestra tienda ✦ Hechas en Tánger ✦ Horneadas en nuestra tienda ✦ Hechas en Tánger ✦',
    flavorsEyebrow: 'Nuestra carta', flavorsTitle: 'Cuatro cheesecakes, una obsesión',
    entiere: 'Tarta entera', avail: 'Por encargo · 24 h', choose: 'Elegir este sabor',
    spotEyebrow: 'La favorita de la casa',
    spotText: 'Crema de pistacho generosa sobre un cheesecake cremoso con base de galleta. Complétala con tus toppings favoritos.',
    spotCta: 'La quiero',
    topEyebrow: 'Los toppings', topTitle: 'Un topping, y todo cambia.', topLead: 'Hasta {x} por tarta, +{y} MAD cada uno.',
    grpCremes: 'Cremas y salsas', grpCroq: 'Crujientes',
    fill: 'Horneadas en nuestra tienda de Tánger. Encargadas hoy, compartidas mañana.', fillLabel: 'Nuestra promesa',
    orderEyebrow: 'Pedido online · 24 h de antelación', orderTitle: 'Crea tu cheesecake',
    step1: '1. El sabor', step3: '2. Los toppings', step4: 'Cantidad', noTopping: 'Sin topping',
    toppingHint: 'Hasta {x} toppings · +{y} MAD cada uno', toppingCount: '{n}/{x} elegidos',
    add: 'Añadir', entiereNote: 'Solo tartas enteras, a encargar con al menos 24 h de antelación.',
    cartTitle: 'Tu pedido', items: 'artículos',
    empty: 'Tu pedido está vacío. Crea tu cheesecake aquí al lado.',
    modeLabel: 'Cómo lo quieres', pickup: 'Recoger en tienda', delivery: 'Entrega a domicilio',
    name: 'Nombre', namePh: 'Tu nombre', phone: 'Teléfono (WhatsApp)', time: 'Fecha y hora (mínimo 24 h)',
    address: 'Dirección en Tánger', addressPh: 'Barrio, calle, número',
    subtotal: 'Subtotal', deliveryFee: 'Entrega', free: 'Gratis', total: 'Total',
    confirm: 'Confirmar pedido', sendWa: 'Enviar por WhatsApp',
    payNote: 'Tu pedido se abre en WhatsApp, listo para enviar. Pago en efectivo o tarjeta al recoger o al recibir.',
    placedTitle: '¡Pedido listo!',
    placedText: 'Envía el mensaje en WhatsApp: te confirmamos la hora en unos minutos. Gracias por elegir La Cheesequerie.',
    again: 'Hacer otro pedido', remove1: 'Quitar uno', add1: 'Añadir uno',
    errName: 'Indica tu nombre y tu teléfono.', errAddr: 'Indica tu dirección de entrega.',
    errTime: 'Elige una fecha y hora con al menos 24 h de antelación.',
    howTitle: 'Pedir es muy fácil',
    s1t: 'Elige tu sabor', s1: 'Vasca, clásica, Lotus o pistacho, en tarta entera.',
    s2t: 'Añade tus toppings', s2: 'Personaliza tu tarta con los toppings que prefieras.',
    s3t: 'Recogida o entrega', s3: 'Encárgala con 24 h de antelación y recógela en la tienda o recíbela en casa, en Tánger.',
    waTitle: '¿Un cumpleaños, una boda, un encargo especial?',
    waText: 'Escríbenos por WhatsApp y preparamos tu tarta a medida.', waCta: 'Escríbenos',
    shopEyebrow: 'Visítanos', shopTitle: 'La tienda', addrLabel: 'Dirección', city: 'Tánger, Marruecos',
    hoursLabel: 'Horario', hoursVal: '[DÍAS] · [HORARIO]', closed: '[DÍA]: cerrado',
    map: '[Mapa de Google o foto de la fachada]',
    footer: 'Cheesecakes horneadas en nuestra tienda de Tánger', floatCta: 'Encargar mi tarta',
    waHello: 'Hola La Cheesequerie, quiero hacer un pedido:', waPickup: 'Recogida en tienda', waDelivery: 'Entrega a domicilio',
    waName: 'Nombre', waPhone: 'Teléfono', waTime: 'Para el', waAddr: 'Dirección',
    desc: {
      basque: 'Superficie tostada y centro cremoso, horneada sin base.',
      classique: 'La receta tradicional, con base de galleta.',
      lotus: 'Crema de Lotus sobre una base de galleta normal.',
      pistache: 'Crema de pistacho sobre una base de galleta.'
    },
    flav: { basque: 'Vasca', classique: 'Clásica', lotus: 'Lotus', pistache: 'Pistacho' },
    top: { rouges: 'Mermelada de frutos rojos', cremeLotus: 'Crema de Lotus', cremePistache: 'Crema de pistacho', pistache: 'Pistacho troceado', caramel: 'Caramelo', miel: 'Miel y almendras', chocolat: 'Crema de chocolate', chocoBlanc: 'Crema de chocolate blanco', oreo: 'Galleta Oreo', biscuitLotus: 'Galleta Lotus', kinder: 'Kinder triturado' }
  }
};

/* ---------------- Estado ---------------- */
const store = {
  get(k, d) { try { const v = localStorage.getItem('lc_' + k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem('lc_' + k, JSON.stringify(v)); } catch (e) {} }
};
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const flavorById = (id) => CONFIG.flavors.find((f) => f.id === id);
const toppingById = (id) => CONFIG.toppings.find((x) => x.id === id);

const state = {
  lang: store.get('lang', 'fr'),
  flavor: 'basque', toppings: [], qty: 1,
  cart: store.get('cart3', []).filter((l) => l && flavorById(l.flavor) && Array.isArray(l.toppings)),
  mode: 'retrait', placed: false
};
if (!I18N[state.lang]) state.lang = 'fr';

const t = () => I18N[state.lang];
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const waUrl = (text) => 'https://wa.me/' + CONFIG.whatsapp + (text ? '?text=' + encodeURIComponent(text) : '');
const unitPrice = (l) => flavorById(l.flavor).price + l.toppings.length * CONFIG.toppingPrice;
const saveCart = () => store.set('cart3', state.cart);
const fill = (s) => s.replace('{x}', CONFIG.maxToppings).replace('{y}', CONFIG.toppingPrice);

/* ---------------- Render ---------------- */
function renderStatic() {
  const d = t();
  document.documentElement.lang = state.lang;
  $$('[data-i18n]').forEach((el) => { const v = d[el.dataset.i18n]; if (typeof v === 'string') el.textContent = v; });
  $$('[data-i18n-ph]').forEach((el) => { el.placeholder = d[el.dataset.i18nPh]; });
  $$('[data-i18n-aria]').forEach((el) => { el.setAttribute('aria-label', d[el.dataset.i18nAria]); });
  $$('[data-lang]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === state.lang)));
  $$('.js-wa').forEach((a) => { a.href = waUrl(); });
  $$('.js-wa-number').forEach((el) => { el.textContent = CONFIG.whatsappDisplay; });
  $$('.js-insta').forEach((a) => { a.href = 'https://instagram.com/' + CONFIG.instagram; a.textContent = '@' + CONFIG.instagram; });
  $$('.js-address').forEach((el) => { el.textContent = CONFIG.address; });
  $('#year').textContent = new Date().getFullYear();

  // Carta
  $('#flavorCards').innerHTML = CONFIG.flavors.map((f, i) => `
    <div class="flavor-cell lc-rv${i % 4 === 1 ? ' lc-d2' : i % 4 >= 2 ? ' lc-d3' : ''}">
      <article class="flavor">
        <div class="flavor-photo">
          <div class="lc-zoom"><img class="lc-par" src="${f.photo}" alt="${esc(d.flav[f.id])} · cheesecake" loading="lazy"></div>
          <span class="pill"><svg width="14" height="14" viewBox="0 0 40 40" aria-hidden="true"><path d="M20 2 C22 14 26 18 38 20 C26 22 22 26 20 38 C18 26 14 22 2 20 C14 18 18 14 20 2Z" fill="#E8A93A"/></svg>${esc(d.avail)}</span>
        </div>
        <div class="flavor-body">
          <div class="flavor-top"><h3>${esc(d.flav[f.id])}</h3><span>${f.price} MAD</span></div>
          <p>${esc(d.desc[f.id])}</p>
          <a href="#commande" class="btn lc-btn" data-pick="${f.id}">${esc(d.choose)}</a>
        </div>
      </article>
    </div>`).join('');

  // Destacada
  const sp = flavorById(CONFIG.featured);
  $('#spotName').textContent = d.flav[sp.id];
  $('#spotPrice').textContent = sp.price + ' MAD';
  $('#spotImg').src = sp.photo; $('#spotImg').alt = d.flav[sp.id];
  $('.spot [data-pick]').dataset.pick = sp.id;

  // Toppings
  $('#topLead').textContent = fill(d.topLead);
  $('#toppingGroups').innerHTML = [['cremes', d.grpCremes], ['croq', d.grpCroq]].map((g, gi) => `
    <div class="lc-rv${gi ? ' lc-d2' : ''}">
      <h3>${esc(g[1])}</h3>
      <ul>${CONFIG.toppings.filter((x) => x.group === g[0]).map((x) => `
        <li class="lc-row"><span class="name"><span class="dot" style="background:${x.color}"></span>${esc(d.top[x.id])}</span><span class="price">+${CONFIG.toppingPrice} MAD</span></li>`).join('')}
      </ul>
    </div>`).join('');

  observeReveal(document);
}

let lastPreview = '';
function renderConfigurator() {
  const d = t();
  const cur = flavorById(state.flavor);
  const max = CONFIG.maxToppings;
  const sel = state.toppings.slice(0, max);
  const full = sel.length >= max;

  $('#flavorOpts').innerHTML = CONFIG.flavors.map((f) =>
    `<button type="button" class="opt" data-flavor="${f.id}" aria-pressed="${f.id === state.flavor}"><span>${esc(d.flav[f.id])}</span><span>${f.price} MAD</span></button>`).join('');

  $('#toppingHint').textContent = fill(d.toppingHint);
  $('#toppingCount').textContent = d.toppingCount.replace('{n}', sel.length).replace('{x}', max);
  $('#toppingChips').innerHTML = CONFIG.toppings.map((tp) => {
    const on = sel.includes(tp.id);
    return `<button type="button" class="chip" data-topping="${tp.id}" aria-pressed="${on}"${!on && full ? ' disabled' : ''}><i style="background:${tp.color}"></i>${esc(d.top[tp.id])}</button>`;
  }).join('');

  const img = $('#previewImg');
  if (lastPreview !== cur.photo) {
    img.src = cur.photo; lastPreview = cur.photo;
    img.classList.remove('lc-swap'); void img.offsetWidth; img.classList.add('lc-swap');
  }
  img.alt = d.flav[cur.id];
  $('#previewTitle').textContent = d.flav[cur.id] + ' · ' + d.entiere;
  $('#previewSub').textContent = sel.length ? sel.map((id) => d.top[id]).join(', ') : d.noTopping;
  $('#qty').textContent = state.qty;
  $('#addToCart').textContent = d.add + ' · ' + unitPrice({ flavor: state.flavor, toppings: sel }) * state.qty + ' MAD';
}

function cartTotals() {
  const subtotal = state.cart.reduce((a, l) => a + unitPrice(l) * l.qty, 0);
  const delivery = state.mode === 'livraison' && subtotal > 0 ? CONFIG.deliveryFee : 0;
  return { subtotal, delivery, total: subtotal + delivery, count: state.cart.reduce((a, l) => a + l.qty, 0) };
}

function renderCart() {
  const d = t();
  const tot = cartTotals();
  $$('.js-count').forEach((el) => { el.textContent = tot.count; });
  $('#cartPlaced').hidden = !state.placed;
  $('#cartEmpty').hidden = state.placed || state.cart.length > 0;
  $('#cartForm').hidden = state.placed || state.cart.length === 0;
  $('#cartLines').innerHTML = state.cart.map((l, i) => {
    const u = unitPrice(l);
    const tops = l.toppings.length ? `<span class="line-tops">+ ${esc(l.toppings.map((id) => d.top[id]).join(', '))}</span>` : '';
    return `<li><div class="line-info"><span class="line-name">${esc(d.flav[l.flavor])} · ${esc(d.entiere)}</span>${tops}
      <span class="line-price">${l.qty} × ${u} MAD = ${u * l.qty} MAD</span></div>
      <div class="line-qty"><button type="button" data-line="${i}" data-delta="-1" aria-label="${esc(d.remove1)}">−</button><span>${l.qty}</span>
      <button type="button" data-line="${i}" data-delta="1" aria-label="${esc(d.add1)}">+</button></div></li>`;
  }).join('');
  $$('.mode button').forEach((b) => b.setAttribute('aria-checked', String(b.dataset.mode === state.mode)));
  const delivery = state.mode === 'livraison';
  $('#addrField').hidden = !delivery;
  $('#subtotal').textContent = tot.subtotal + ' MAD';
  $('#delivery').textContent = delivery ? tot.delivery + ' MAD' : d.free;
  $('#total').textContent = tot.total + ' MAD';
}

function setMinDate() {
  const m = new Date(Date.now() + CONFIG.minHoursAhead * 3600e3);
  m.setMinutes(Math.ceil(m.getMinutes() / 15) * 15, 0, 0);
  const p = (n) => String(n).padStart(2, '0');
  $('#fTime').min = m.getFullYear() + '-' + p(m.getMonth() + 1) + '-' + p(m.getDate()) + 'T' + p(m.getHours()) + ':' + p(m.getMinutes());
}
function renderAll() { renderStatic(); renderConfigurator(); renderCart(); setMinDate(); }

/* ---------------- Interacciones ---------------- */
const nav = $('.nav'), burger = $('#burger');
function closeMenu() { nav.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); }

document.addEventListener('click', (e) => {
  if (e.target.closest('.nav-links a')) closeMenu();
  const b = e.target.closest('button, a[data-pick]');
  if (!b) return;
  if (b.id === 'burger') { const open = !nav.classList.contains('open'); nav.classList.toggle('open', open); burger.setAttribute('aria-expanded', String(open)); return; }
  if (b.dataset.lang) { state.lang = b.dataset.lang; store.set('lang', state.lang); renderAll(); return; }
  if (b.dataset.pick) { state.flavor = b.dataset.pick; renderConfigurator(); return; }
  if (b.dataset.flavor) { state.flavor = b.dataset.flavor; renderConfigurator(); return; }
  if (b.dataset.topping) {
    const id = b.dataset.topping;
    state.toppings = state.toppings.includes(id) ? state.toppings.filter((x) => x !== id) : state.toppings.concat(id).slice(0, CONFIG.maxToppings);
    renderConfigurator(); return;
  }
  if (b.dataset.line) {
    const i = Number(b.dataset.line); const q = state.cart[i].qty + Number(b.dataset.delta);
    if (q <= 0) state.cart.splice(i, 1); else state.cart[i].qty = q;
    saveCart(); renderCart(); return;
  }
  if (b.dataset.mode) { state.mode = b.dataset.mode; renderCart(); return; }
  if (b.id === 'qtyInc') { state.qty += 1; renderConfigurator(); return; }
  if (b.id === 'qtyDec') { state.qty = Math.max(1, state.qty - 1); renderConfigurator(); return; }
  if (b.id === 'addToCart') {
    const draft = { flavor: state.flavor, toppings: state.toppings.slice(0, CONFIG.maxToppings), qty: state.qty };
    const key = (l) => l.flavor + '|' + l.toppings.slice().sort().join(',');
    const found = state.cart.find((l) => key(l) === key(draft));
    if (found) found.qty += draft.qty; else state.cart.push(draft);
    state.qty = 1; state.placed = false; saveCart(); renderConfigurator(); renderCart();
    $('#cart').animate([{ transform: 'scale(1)' }, { transform: 'scale(1.02)' }, { transform: 'scale(1)' }], { duration: 300 });
    if (window.innerWidth <= 1180) $('#cart').scrollIntoView({ behavior: 'smooth', block: 'start' });
    return;
  }
  if (b.id === 'reset') { state.placed = false; state.cart = []; saveCart(); renderCart(); }
});
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && nav.classList.contains('open')) { closeMenu(); burger.focus(); } });

$('#cartForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const d = t();
  const name = $('#fName').value.trim(), phone = $('#fPhone').value.trim();
  const time = $('#fTime').value, addr = $('#fAddr').value.trim();
  const err = $('#formError');
  const fail = (m) => { err.textContent = m; err.hidden = false; err.scrollIntoView({ behavior: 'smooth', block: 'center' }); };
  if (!name || !phone) return fail(d.errName);
  if (state.mode === 'livraison' && !addr) return fail(d.errAddr);
  if (!time || new Date(time).getTime() < Date.now() + CONFIG.minHoursAhead * 3600e3 - 60e3) return fail(d.errTime);
  err.hidden = true;
  const tot = cartTotals();
  const lines = state.cart.map((l) => '• ' + l.qty + ' × ' + d.flav[l.flavor] + ' (' + d.entiere + ')' +
    (l.toppings.length ? ' + ' + l.toppings.map((id) => d.top[id]).join(', ') : '') + ' = ' + unitPrice(l) * l.qty + ' MAD');
  const when = new Date(time).toLocaleString(state.lang === 'fr' ? 'fr-FR' : 'es-ES', { dateStyle: 'full', timeStyle: 'short' });
  const msg = [d.waHello, ...lines, '', d.total + ' : ' + tot.total + ' MAD',
    state.mode === 'livraison' ? d.waDelivery + ' — ' + d.waAddr + ' : ' + addr : d.waPickup,
    d.waTime + ' : ' + when, d.waName + ' : ' + name, d.waPhone + ' : ' + phone].join('\n');
  window.open(waUrl(msg), '_blank', 'noopener');
  state.placed = true; state.cart = []; saveCart(); renderCart();
});

/* ---------------- Botón flotante: aparece al bajar, se oculta al llegar a la tienda ---------------- */
const floatCta = $('#floatCta');
let nearEnd = false;
function updateFloat() {
  const show = window.scrollY > 700 && !nearEnd;
  floatCta.classList.toggle('show', show);
}
if ('IntersectionObserver' in window) {
  new IntersectionObserver((entries) => { nearEnd = entries.some((en) => en.isIntersecting); updateFloat(); }, { threshold: 0 })
    .observe($('#boutique'));
}
addEventListener('scroll', updateFloat, { passive: true });

/* ---------------- Alternativa sin scroll-timeline (Firefox) ---------------- */
const hasSDA = window.CSS && CSS.supports && CSS.supports('animation-timeline: view()');
let io = null;
if (!hasSDA) {
  document.documentElement.classList.add('no-sda');
  if ('IntersectionObserver' in window) {
    io = new IntersectionObserver((entries) => entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    }), { threshold: 0.12 });
  }
  const bar = $('.lc-bar');
  const onScroll = () => {
    const h = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = 'scaleX(' + (h > 0 ? scrollY / h : 0) + ')';
  };
  addEventListener('scroll', onScroll, { passive: true }); onScroll();
}
function observeReveal(root) {
  if (hasSDA) return;
  $$('.lc-rv, .lc-sl, .lc-peek, .how', root).forEach((el) => {
    if (el.classList.contains('in')) return;
    if (io) io.observe(el); else el.classList.add('in');
  });
}

renderAll();
updateFloat();
