# Profund

[English](README.md) · [Română](README.ro.md) · [Français](README.fr.md) · [Italiano](README.it.md) · **Español** · [Português](README.pt.md) · [Deutsch](README.de.md) · [Magyar](README.hu.md)

**Versión:** 1.2.0 · **Última actualización:** 2026-10-19

Idiomas de la interfaz: **Română, English, Français, Italiano, Español, Português (PT), Deutsch, Magyar**

Un juego de preguntas «trade-free» (sin trueque comercial) para conversaciones con sentido — #FaraVorbeGoale (#SinPalabrasVacías).

**Aplicación en línea:** https://chiuta.github.io/Profund/

![Captura de pantalla](screenshot.png)

## Qué es

Profund es un juego de 150 cartas con preguntas que abren conversaciones, en un único archivo HTML. El texto de la aplicación lo describe como una adaptación rumana / inglesa / francesa a partir de deepcards.org, un proyecto del ecosistema TROM. Se puede jugar en línea (cartas que se dan la vuelta al pulsarlas) o sin conexión, con cartas impresas.

## Funciones

- Interfaz en 8 idiomas (botones RO / EN / FR / IT / ES / PT / DE / HU); las 150 preguntas existen en rumano, inglés y francés (los demás idiomas muestran la versión en inglés).
- Presentación: qué es el juego, sus tres ideas y qué podría pasar.
- Cuatro modos de juego descritos: «Ia & Răspunde» (Toma y responde, 2–6 personas), «Ghicește» (Adivina, 2–6), «Declanșator de conversații» (Detonante de conversaciones, 4–20), «FărăRăspuns – TreciLaAcțiune» (Sin respuesta – Pasa a la acción, 2–10).
- Juego en línea: las preguntas van en bloques de 10; pulsas una carta para darle la vuelta. Botones «Carte la întâmplare» (Carta al azar), «Amestecă pachetul» (Barajar el mazo), «Următoarea carte» (Siguiente carta).
- Jugadores (opcional, solo en memoria): escribes los nombres separados por comas y cada carta robada muestra, por turnos, quién responde.
- Atajos de teclado en la zona «Joacă online» (Jugar en línea): `Espacio` o `→` = siguiente carta, `R` = carta al azar, `S` = barajar (no se activan fuera de la zona de juego ni en los campos de texto).
- Favoritos y temporizador (en la zona «Joacă online»): «♡ Păstrează cartea» (Guardar la carta) marca la carta robada, y «Descarcă favoritele (text)» (Descargar los favoritos (texto)) guarda la lista como `profund-favorite.txt`; los favoritos existen solo en memoria, hasta que se recarga la página. El temporizador opcional (30 / 60 / 120 s) arranca con cada carta robada y muestra «Timpul a expirat.» (Se acabó el tiempo.) al final (sin sonido). Textos en RO / EN / FR.
- Juego sin conexión: «Printează cărțile (PDF)» (Imprimir las cartas (PDF); 150 cartas, 3 por fila, listas para recortar) y «Descarcă întrebările (text)» (Descargar las preguntas (texto)).
- Formulario de contacto que prepara un correo electrónico (mailto) para el autor.

## Guía de uso

1. Elige el idioma con los botones RO / EN / FR / IT / ES / PT / DE / HU de la parte superior.
2. Lee la sección «Moduri de joc» (Modos de juego) y elige uno.
3. En «Joacă online» pulsa «Carte la întâmplare» para una carta, «Amestecă pachetul» para barajar y luego «Următoarea carte». Cuando se acabe el mazo, baraja de nuevo.
4. Para el juego físico, en «Joacă offline» pulsa «Printează cărțile (PDF)», elige «Guardar como PDF» o imprime, y luego recorta las cartas.
5. «Descarcă întrebările (text)» guarda las preguntas en un archivo de texto.
6. En «Contact» rellenas el nombre, el correo, el asunto y el mensaje y pulsas «Trimite mesajul» (Enviar el mensaje): se abre tu cliente de correo con un mensaje para alexio@trom.tf (la aplicación no tiene servidor).

## Privacidad y red

- Local: solo se conserva el idioma elegido, en `localStorage` (clave `profund_lang`).
- Red: no he encontrado llamadas `fetch`, ni scripts o fuentes externos (las fuentes están integradas en el archivo). El texto de la aplicación afirma «sin dinero, sin datos».
- Los enlaces del pie de página y los de apoyo (deepcards.org, tiotrom.com, trade-free.org, Buy Me a Coffee) se abren solo si los pulsas.
- El formulario de contacto no envía datos a través de un servidor; usa `mailto:`.

## Ejecución local / sin conexión

Descarga `index.html` y ábrelo en un navegador; funciona sin internet (los enlaces externos necesitan conexión).

## Historial / Changelog

### 1.1.0 — 2026-10-14
- Copia de seguridad y etiquetado de datos (fff-kit).

### 12 de octubre de 2026 (v1.0.0)
- 1.0.0 — 2026-10-12: la versión y la fecha de la última actualización se muestran en la aplicación

### 11 de octubre de 2026 (tercera entrada)
- Corregido el título del modo en inglés: «LetGuess» → «Guess» (como «Ghicește» en rumano y «Devine» en francés).
- Favoritos (descargables como texto) y temporizador opcional por carta, en 3 idiomas.

### 11 de octubre de 2026 (segunda entrada)
- CSP: `script-src` con hash en lugar de `'unsafe-inline'` (ya no hay atributos `on*` en línea).
- Campo opcional «Jugadores» (la fila de quien responde en la carta robada) y atajos de teclado; textos nuevos en RO / EN / FR.

### 11 de octubre de 2026
- Accesibilidad: contenido envuelto en <main>, selector de idioma como <nav> etiquetado (axe: 0 violaciones).
- Los botones RO / EN / FR ya no usan atributos `onclick` en línea (escuchadores de eventos).

## Licencia

Licencia MIT — véase el archivo LICENSE

## Derechos y atribución

- **Parte del autor:** el código de la aplicación y la contribución original (la adaptación, las traducciones RO/EN/FR, la interfaz). La licencia MIT de la cabecera de `index.html` y de `LICENSE` se aplica **solo** a esta parte.
- **Parte de terceros:** las preguntas están adaptadas del juego de cartas [deepcards.org](https://deepcards.org/) (un proyecto del ecosistema TROM; la aplicación lo indica en el subtítulo y en el pie de página). Los originales siguen siendo de sus titulares; **la licencia MIT no los cubre**. Los derechos sobre los materiales de terceros pertenecen a sus titulares. La licencia de los originales no está verificada en este repositorio.
- **Rectificación / retirada:** si eres titular de derechos o una persona mencionada y deseas una corrección o la retirada, escribe a alexio@trom.tf; respondemos en 7 días.
- El aviso también es visible en la aplicación (pie de página, RO / EN / FR).

**SIN RESOLVER (solo el autor):** confirmar que tiene (o ha obtenido) el derecho a publicar las preguntas adaptadas de esta forma, o indicar la licencia de los originales de deepcards.org.

## Autor

Alexio — Alexandru-Ionuț Chiuță, contacto: alexio@trom.tf. La aplicación lo menciona como voluntario de TROM.

## English summary

Profund ("Deep") is a single-file trade-free question card game (150 cards) for meaningful conversations, in Romanian, English and French. It offers four ways to play, an optional (memory-only) player list that shows whose turn it is to answer, keyboard shortcuts, an online card deck, print-to-PDF cards and a text download. Only the chosen language is stored in localStorage; no external requests were found, and the contact form uses mailto. Adapted from deepcards.org. The MIT License applies only to the code and the author's original contribution; the original questions remain with their rightsholders. Rectification/withdrawal requests: alexio@trom.tf (reply within 7 days).
