+++
author = "juanchi"
category = "posts"
date = 2020-06-27T18:00:00Z
description = "Unas líneas de código muestran la implementación de características ya conocidas por los usuarios de Stadia que según Google estaban siendo desarrolladas actualmente por su equipo. "
draft = false
image = "/un-trozo-de-codigo-desvela-family-sharing-demos-y-mas.jpg"
imageFull = "/stadia-family-sharing_large.jpg"
tags = ["Family Sharing","Crowd Play","Comunidades"]
title = "Trozo de código desvela Family Sharing, Crowd Play y Colas para jugar"
toc = true
url = "/un-trozo-de-codigo-desvela-family-sharing-demos-y-mas"
+++

Sin duda, tanto el **Family Sharing** como el **Crowd Play** suponen dos características consideradas como las innovaciones de Stadia que más puede beneficiar a la plataforma en la escena actualmente. 

Este mes, Google actualizó Stadia para <a class="u-anchor" href="/jugar-stadia-cualquier-telefono-android">permitir el uso de Stadia para todos los teléfonos Android,</a> <a class="u-anchor" href="/stadia-controles-tactiles-movil">controles táctiles en el movil</a> y <a class="u-anchor" href="/elige-resolucion-nueva-funcion-stadia">configuraciones de solución para cada dispositivo.</a> Estas actualizaciones complacieron a muchos usuarios de Stadia que no podían "jugar en cualquier lugar", debido a que no poseían un teléfono compatible.

Recientemente el youtuber y diseñador de videojuegos <a class="u-anchor" href="https://twitter.com/GemStadia?s=20" target="_blank" rel="nofollow noopener">GemStadia</a> ha publicado unas imágenes donde ha llamado la atención del público con varias líneas de código que apuntan a la próxima implementación de colas para probar un juego p, Crowd Play, comunidades y juegos compartidos. Excepto las "comunidades", todas estas han sido mencionadas anteriormente como próximos lanzamientos en Stadia, pero poder ver el código significa que actualmente se está trabajando en ellas, y podrían estar mas cerca de lo que creemos.

Este es el vídeo donde comenta sus descubrimientos sobre estas características.

<div class="u-youtube">
  {{< youtube M1yE2umdzg8 >}}
</div>

## Crowd Play

Permite los espectadores de un streaming **saltar al juego con el streamer.** Deja de ser necesario agregar a a amigos, salir de las ventanas e interrumpir la transmisión. La gente que se una, será colocada en una cola hasta que haya un espacio disponible para ellos. Se especulaba que <a class="u-anchor" href="/analisis-completo-get-packed-stadia">Geat Packed</a> se lanzaría con Crowd Play, y aunque no ocurrió, *Coat Sink* ha confirmado que aparecerá en su juego en una futura actualización.
crop
<img class="u-borderImage u-lazyload lazyload" loading="lazy" data-src="/un-trozo-de-codigo-desvela-family-sharing-demos-y-mas/code_crowdplay.png" alt="Codigo de Crowd Play" title="Codigo de Crowd Play" />

Se puede ver en la imagen que hay un par de referencias a Crowd Play.

## Family Sharing

La posibilidad de compartir tu biblioteca de juegos se ha convertido cada vez más en una prioridad por las consolas en todas las plataformas, por lo que no es de extrañar que Stadia incluya esta función. Por el momento, hay muchas preguntas sobre cómo Google va a implementarla. ¿Puedes compartir tu suscripción Pro? ¿Puedes jugar al mismo juego al mismo tiempo o tendrás que comprar varias copias? Lo que sí sabemos es que Google ha declarado que estará disponible en 2020, y es uno de sus objetivos principales.

<img class="u-borderImage u-lazyload lazyload" loading="lazy" data-src="/un-trozo-de-codigo-desvela-family-sharing-demos-y-mas/code_family.png" alt="Codigo de Family Sharing" title="Codigo de Family Sharing" />

En esta imagen, se pueden ver múltiples usos de la palabra "Family", que van seguidos de recuperaciones de ID de juego. Además, en la parte inferior de la captura de pantalla, podrá observar una "read only store" que significa *tienda de solo lectura del precio* lo que implica que los padres podrán evitar que sus hijos compren juegos, pero conservarán la capacidad de ver los precios. 

## Demos de juegos

<img class="u-borderImage u-lazyload lazyload" loading="lazy" data-src="/un-trozo-de-codigo-desvela-family-sharing-demos-y-mas/code_demo.png" alt="Codigo de Demos de Juegos" title="Codigo de Demos de Juegos" />

Fijándonos en la imagen de arriba, se ve la linea *"/queuetoplaydemo/:videoId/".* Esto indica que las personas que deseen probar un juego tendrán que entrar en una cola primero. Esto es para evitar que los juegos se vuelvan virales y causen problemas de conexión para los usuarios habituales de la plataforma. 

## Comunidades

Como especulación que presenta la comunidad de <a class="u-anchor" href="https://stadiasource.com" target="_blank" rel="nofollow noopener">Stadia Source</a>pues no hay confirmación oficial ni anuncios sobre la creacióon de comunidades. Explican que podríamos ver una característica de comunidad similar a la de *PlayStation*, donde los jugadores pueden crear grupos en torno a determinados juegos en los que los jugadores comparten capturas de pantalla, envían mensajes y organizan eventos.

<img class="u-borderImage u-lazyload lazyload" loading="lazy" data-src="/un-trozo-de-codigo-desvela-family-sharing-demos-y-mas/code_community-2.png" alt="Codigo de Comunidades" title="Codigo de Comunidades" />

Podemos concluir que los avances de Stadia en este 2020 está siendo muy positivo, así se deja ver comprobando que están cumpliendo los objetivos que se habían propuesto para este año. Hasta ahora, la única característica que nos falta es el asistente en la web, aunque ¿quién sabe sino nos lo encontraremos el mes que viene?.