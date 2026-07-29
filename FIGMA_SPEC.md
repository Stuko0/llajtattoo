# LLAJTATTOO - Figma Design Spec ✅ COMPLETADO

> ✅ **IMPLEMENTACIÓN COMPLETA** — Todas las secciones del Figma han sido duplicadas pixel-perfect en Astro.

## HOMEPAGE FRAME: 1445x6387px

### 1. NAVBAR (y=0-106, white bg) ✅
- logo.png left (337px en desktop)
- Links: Inicio(#999 active), Estilos, Artistas, Únete, Blog — Inter 32px/400w #000 — CENTERED
- Search "Buscar estilo" Inter 20px/500w #999 at FAR RIGHT
- Layout: logo | links (center) | search (right) with justify-between

### 2. HERO (y=245-841, white bg) ✅
- Box con glass effect: border-bottom visible
- LEFT: "Bienvenido a nuestra comunidad" David Libre 70px/700w #000
- LEFT: Description (Inter 20px/400w #000, justified)
- NO HAY BOTONES en el hero
- RIGHT: hero.png image

### 3. ARTISTAS DEL MES (y=878-1600, white bg) ✅
- SOLO 3 ARTISTAS
- El TERCER artista (Black Kitty) está visualmente MAS ABAJO (staggered/offset con lg:mt-8)
- "Artistas del mes" David Libre 70px/700w #000 CENTER
- Subtitle "Los artistas más destacados..." Inter 16px/400w #000 CENTER
- Cada artista: foto circular, nombre, botón "Ver Perfil" con hover transition

### 4. NOTICIAS (y=1644-2367) ✅
- FONDO: #f3f3f3
- "Noticias" David Libre 70px/700w CENTER
- Subtitle: "Descubre las últimas tendencias..." Inter 24px/400w CENTER
- NewsPills component: selector de imágenes tipo pills con animación
- Botón "Ingresar" — grande, David Libre, #fff on #07111a

### 5. CTA CARDS (y=2527-3115) ✅
- 3 cards con TAMAÑOS EXACTOS del Figma:
  - Card 1: 419x582px (¿NO SABES QUÉ ESTILO...)
  - Card 2: 356x533px (Eres artista?)
  - Card 3: 389x587px (PROMOCIÓN)
- Mismo tamaño de fuente que Figma (David Libre 32px/700w #fff para títulos)
- Paddings internos adecuados

### 6. EXPLORAR ESTILOS (y=3223-4230, white bg) ✅
- "Explorar por estilos" David Libre 70px/700w #000
- Grid de cards negras (280x421px c/u) CENTRADO
- Card: imagen de estilo + "Estilo" (Inter 24px/700w #fff) + nombre (Inter 16px/400w #fff)
- Botón "INGRESAR" (Inter 16px/700w #000 on #dcdcdc) — como FRANJA, no hasta el bottom

### 7. 3 PASOS (y=4332-5184, BLACK bg #000) ✅
- "Tu próximo tatuaje en 3 pasos" David Libre 70px/700w #fff
- "Sigue estos tres pasos..." DEBAJO del título
- 3 cards blancas con iconos SVG EXACTOS del Figma:
  - EXPLORA: Search_alt_fill (lupa) — card más alta (241px)
  - AGENDA: Desk_fill (calendario) — CARD CENTRAL MÁS ABAJO (staggered, lg:mt-8)
  - TATÚATE: Edit_fill (lápiz)
- Textos EXACTOS del Figma

### 8. CALIFICACIÓN (y=5330-5595) ✅
- Rectangle 340: #f3f3f3, 747x486px con DROP SHADOW
- "CALIFICA LA PÁGINA" David Libre 50px/700w #000 CENTER
- Caja negra (456x108px) CENTRADA con texto en David Libre 20px/700w #fff
- 5 estrellas (62x62px c/u): vacías #a7a7a7, llenas #000000 — SVG vector stars

### 9. FOOTER (y=6080-6387, white bg) ✅
- footer-logo.png + descripción "Bienvenido a nuestra comunidad..."
- Navigation: Inicio, Estilos, Artistas, Únete
- REDES SOCIALES: Instagram, Whatsapp, Tik tok
- Caja negra (244x123px) con botón "ÚNETE"
- Línea separadora
- "© 2025 Llajtattoo | All Rights Reserved. Design by Blackitty"
- "Terms of Service" / "Privacity Policity"

## PÁGINAS ADICIONALES ✅

### artistas.astro ✅
- Glass-morphism Hero con grid 2x2 (imagen row-span-2, título align-right)
- Grid de 5 artistas con POSICIONAMIENTO ABSOLUTO exacto del Figma:
  - Fabian Morales (left:0, top:2)
  - Ignacio Orihuela (left:236px, top:0)
  - Juan Maria Savedra (left:456px, top:0)
  - Juan Caballero (left:705px, top:110px) — **STAGGERED** más abajo
  - Natalia Lazzo (left:916px, top:0)
- Botones "Ver Perfil" con SVG inline #101a24
- Sección destacada "Pistacho Tattoo" con CSS Grid rows [1fr_2fr], imagen 444x445px
- Sección Blog dividida:
  - Left: "Artista destacado" (Don Juan) con foto y descripción
  - Right: "Noticias" con 4 imágenes superpuestas (efecto Figma)
- Imágenes decorativas de fondo: dragon-in-black, flowers-in-black, tattoo-background, branch, flower

### estilos.astro
- Hero negro con textura decorativa
- Acordeón interactivo de 12 estilos (StyleAccordion.tsx)
- Panel lateral con info y ejemplo visual
- Animaciones de entrada fUp

### unete.astro
- Hero negro con textura decorativa
- Dos cards: "Soy Artista" / "Soy Cliente"
- Animaciones de entrada fUp

### blog.astro
- Hero negro con textura decorativa
- Grid de 6 posts con hover effects
- Overlay en imágenes y transiciones

## COLORES EXACTOS:
- #ffffff, #000000, #101a24, #5c6674, #999999, #f3f3f3, #dcdcdc, #f62b8d, #a7a7a7, #f2f2f2

## FONTS (Google Fonts):
- David Libre: 70px, 50px, 32px, 24px, 20px, 16px (weights 400-700)
- Inter: 36px, 32px, 24px, 20px, 16px, 12px (weights 400-700)

## REACT ISLANDS:
- StarRating.tsx: 5 estrellas SVG (62x62px), hover scale 1.1, fill #000/#a7a7a7
- StyleAccordion.tsx: 12 estilos expandibles (para página /estilos)
- NewsPills.tsx: selector de imágenes tipo pills con animación
- SearchDropdown.tsx: búsqueda con dropdown de estilos
- StylesOverlay.tsx: overlay/modal para explorar estilos
