# LLAJTATTOO - Figma Design Spec v2 (MCP + User Corrections)

## HOMEPAGE FRAME: 1445x6387px

### 1. NAVBAR (y=0-106, white bg)
- logo.png left
- Links: Inicio(#999 active), Estilos, Artistas, Únete, Blog — Inter 32px/400w #000 — CENTERED in nav
- Search "Buscar estilo" Inter 20px/500w #999 at FAR RIGHT — icon NOT overlapping text, proper spacing
- Layout: logo | links (center) | search (right) with justify-between

### 2. HERO (y=245-841, white bg)
- Box tipo GLASS: solo bordes laterales e inferior visibles (border-left, border-right, border-bottom)
- LEFT: "Bienvenido a nuestra comunidad" David Libre 70px/700w #000
- LEFT: Description (Inter 20px/400w #000, justified)
- NO HAY BOTONES en el hero
- RIGHT: spider-hero.png image

### 3. ARTISTAS DEL MES (y=878-1600, white bg)
- NO hay 3 puntos/dots
- SOLO 3 ARTISTAS (no 4)
- El TERCER artista debe estar visualmente MAS ABAJO (staggered/offset)
- "Artistas del mes" David Libre 70px/700w #000 CENTER
- Subtitle "Los artistas más destacados..." Inter 16px/400w #000 CENTER — NO centrado actualmente
- Cada artista:
  - Foto circular (Profe Tattoo.png, Don Juan Caballero.png, Black Kitty.png)
  - Nombre (David Libre 20px/700w #000): "Fabian Morales\nPROFE TATTOO"
  - Botón "Ver Perfil" (David Libre 16px/500w #fff on #101a24)
  - SEPARACIÓN vertical entre nombre, alias y botón (están muy pegados)

### 4. NOTICIAS (y=1644-2367)
- FONDO: #f2f2f2 (NO negro)
- "Noticias" David Libre 70px/700w CENTER
- Subtitle: "Descubre las últimas tendencias..." Inter 24px/400w CENTER (más pequeño que ahora)
- SELECTOR de imágenes tipo pills:
  - Por defecto la PRIMERA pill desde la izquierda sale ACTIVA con ancho completo
  - Al clickear otra pill, la anterior se hace menos ancha con animación (desplazamiento)
  - Las pills NO tienen border color
  - Animación: la pill activa se agranda mientras las demás se contraen
- Botón "Ingresar" — MÁS GRANDE que el actual, como en el Figma (David Libre 16px/500w #fff on #101a24)

### 5. CTA CARDS (y=2527-3115)
- 3 cards con TAMAÑOS INDIVIDUALES del Figma (no iguales):
  - Card 1: 419x582px
  - Card 2: 356x533px
  - Card 3: 389x587px
- Mismo tamaño de fuente que Figma (David Libre 32px/700w #fff para títulos)
- Paddings: Padding interno adecuado, no pegados a los bordes

### 6. EXPLORAR ESTILOS (y=3223-4230, white bg)
- "Explorar por estilos" David Libre 70px/700w #000
- Grid 3x2 de cards negros (280x421px c/u) CENTRADO en la página
- Card: imagen de estilo + "Estilo" (Inter 24px/700w #fff) + nombre (Inter 16px/400w #fff)
- Botón "INGRESAR" (Inter 16px/700w #000 on #dcdcdc) — como FRANJA, no hasta el bottom del card

### 7. 3 PASOS (y=4332-5184, BLACK bg #000)
- Altura: 852px — MÁS ALTA que la actual
- "Sigue estos tres pasos..." DEBAJO del título "Tu próximo tatuaje en 3 pasos"
  - Orden: Título → Subtítulo → Cards (NO subtítulo arriba del título)
- "Tu próximo tatuaje en 3 pasos" David Libre 70px/700w #fff
- "Sigue estos tres pasos para realizarte un tatuaje" Inter 20px/400w #fff — DEBAJO del título
- 3 cards blancas con iconos SVG del Figma:
  - EXPLORA: icono lupa/búsqueda (Search_alt_fill)
  - AGENDA: icono calendario/escritorio (Desk_fill)
  - TATÚATE: icono edición/lápiz (Edit_fill)
  - Textos EXACTOS del Figma, no inventados
  - La card del CENTRO (AGENDA) debe estar MÁS ABAJO que las otras dos (staggered)
- Card del EXPLORA: 409x241px (más alta que las otras)
- Card de AGENDA: 409x207px (en el centro, más abajo)
- Card de TATÚATE: 409x207px

### 8. CALIFICACIÓN (y=5330-5595)
- Rectangle 340: #f3f3f3, 747x486px con DROP SHADOW
- MÁS ALTA que la actual
- "CALIFICA LA PÁGINA" David Libre 50px/700w #000 CENTER
- Caja negra (456x108px) CENTRADA con "¿ Quedaste satisfecho con los resultados de busqueda?" David Libre 20px/700w #fff
- 5 estrellas (62x62px c/u): vacías #a7a7a7, llenas #000000

### 9. FOOTER (y=6080-6387, white bg)
- Como en el Figma:
  - footer-logo.png + "Bienvenido a nuestra comunidad de Tatuadores de Cochabamba Bolivia" Inter 16px/400w #5c6674
  - Logo circular de Instagram + "Instagram", WhatsApp, Tik tok
  - "Navigation" Inter 12px/700w #000 + links: Inicio, Estilos, Artistas, Únete, Blog
  - "REDES SOCIALES" Inter 12px/700w #000 + iconos sociales
  - Caja negra (244x123px) con botón "ÚNETE" (David Libre 24px/500w #000 on white)
  - Línea separadora
  - "© 2025 Llajtattoo | All Rights Reserved. Design by Blackitty" Inter 20px/700w #000
  - "Terms of Service" Inter 20px/500w #000
  - "Privacity Policity" Inter 20px/500w #000

### 10. IMÁGENES DE FONDO
- Usar imágenes de public/images/assets/ integradas en los fondos:
  - tattoo-background.png como textura de fondo en secciones
  - dragon-in-black.png, flowers-in-black.png en secciones oscuras
  - flower.png, cacao.png, branch.png como decoración

## COLORES EXACTOS:
- #ffffff, #000000, #101a24, #5c6674, #999999, #f3f3f3, #dcdcdc, #f62b8d, #a7a7a7, #f2f2f2

## FONTS (Google Fonts):
- David Libre: 70px, 50px, 32px, 24px, 20px, 16px (weights 400-700)
- Inter: 36px, 32px, 24px, 20px, 16px, 12px (weights 400-700)

## REACT ISLANDS:
- StarRating.tsx: 5 estrellas (62x62px), hover scale 1.1, fill #000/#a7a7a7
- StyleAccordion.tsx: 12 estilos expandibles (para página /estilos)
- NewsPills.tsx: selector de imágenes tipo pills con animación (primera activa ancha, al click se contrae y se agranda la nueva)

## PÁGINAS: index.astro, estilos.astro, artistas.astro, unete.astro, blog.astro