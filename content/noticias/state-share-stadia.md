+++
author = "juanchi"
category = "posts"
date = 2020-07-11T12:30:00Z
description = "La función de State Share consiste en permitir a los jugadores poder entrar y jugar a lo que están viendo en los vídeos y capturas de pantalla compartidos a través de enlaces o YouTube."
draft = false
image = "/state-share-stadia.png"
imageFull = "/state-share-stadia_large.png"
tags = ["State Share", "Funcionalidades"]
title = "State Share, ¿jugar instantáneamente?"
toc = true
url = "/state-share-stadia"
+++

La iniciativa de Google de cambiar tanto la forma en la que actualmente se juega en consolas físicas, como añadir nuevas características enfocadas a una mayor interacción entre jugadores. Desde creadores de contenido y espectadores hasta miembros de una familia o amigos con <a class="u-anchor" href="/stadia-family-sharing">la capacidad de poder compartir todos los juegos y funcionalidades en diferentes cuentas.</a> 

Uno de los puntos a favor de Stadia es que todo **está conectado e integrado en los servidores de Google**, de modo que se puede eliminar la barrera entre espectador y jugador simplemente con solo un click.

Destacan entre estas características de Stadia la conocida como State Share. 

## ¿Qué es State Share?

State Share es una invitación a un juego para jugar con el host. Probablemente te preguntes ¿por qué esto es diferente de una invitación normal a un juego?. Esto no es una invitación a una partida por parte del juego que dependa del juego en cuestión o del framework. State Share permite la **creación un hipervínculo** que puede ser compartido permitiendo a los jugadores invitados poder saltar y jugar a lo que ven en los videos y capturas compartidos a través de Youtube u otras plataformas.

Otra diferencia es que State Share proporciona **un enlace permanente** a un punto, lugar o progreso dentro del juego. Puedes abrir el enlace en cualquier dispositivo que sea compatible con Stadia. Puede hacerlo porque, a diferencia de un juego que se ejecuta simultáneamente en consola y en los servidores de juegos, la instancia del juego se encuentra en la nube.

## ¿Cómo funciona?

Actualmente State Share permite transferir los datos del **estado del juego** a Stadia durante la sesión de juego. Stadia grabará estos estados como un video, una captura de pantalla o una transmisión en vivo creada a través de la plataforma para posteriormente jugar desde ese punto. 

<img class="u-borderImage u-lazyload lazyload" loading="lazy" data-src="/state-share-stadia/chart__1_.png" alt="Tabla de estados State Share" title="Tabla de estados State Share" />

En la imagen podemos observar una tabla que explica el funcionamiento de los estados.
* Por un lado encontramos **setState()** que corresponde con el comienzo del estado.
* **clearState()** funciona como un *reset* o limpieza de memoria de un estado.

Cuando el jugador elige compartir los medios, se le pide el consentimiento para incluir sus **estados de juego** en los medios compartidos. Si se da el consentimiento, los espectadores verán un botón junto a los medios que les permite jugar la experiencia que ven. Si haces click en el botón serás llevados a Stadia para jugar al juego asociado con el estado establecido por el host. Stadia lanzará el juego en este estado y ya será posible jugar con tus amigos o creadores de contenido favoritos.

Puedes **crear una cantidad casi infinita de "estados" guardados,** lo que significa que tampoco estás limitado por el punto de guardado tradicional. El progreso se basa en un enlace en lugar de datos guardados en una unidad física como puede ser en *PlayStation4* o *Xbox One*.

## ¿Cómo mejora esto la experiencia de juego?

Supongamos que has llegado a cierta parte del juego y no puedes vencer a ese jefe final o superar un nivel difícil. Con State Share puedes compartir ese punto exacto del juego con un amigo y hacer que lo intente por ti.

Para los streamers en directo en *YouTube* y *Twitch*, la posibilidad de compartir niveles y contenidos en tiempo real podría ser una forma de aumentar la interacción de los fans y dejar retos a los espectadores y suscriptores al mismo tiempo. Todos los participantes de la sesión de juego avanzan en el juego en tiempo real con el mismo progreso, logros o historia completada.

En esta etapa inicial, casi ningún título de Stadia ha aprovechado esta posibilidad de Stadia excepto un reciente lanzamiento.

## Crayta y State Share

Crayta se ha construido en torno a State Share para que puedas compartir cualquier construcción mundialmente. Esto se ha manifestado en el nivel y la construcción del mundo pero podría ampliarse fácilmente a otros títulos a medida que Stadia mejore.

En la actualidad, sólo este juego apoya el State Share, aunque se esperan más juegos a medida que avance la plataforma, pero cabe destacar que los desarrolladores pueden añadir la función incluso en títulos más antiguos si así lo desean.

La creación de un enlace variará de un título a otro. Dentro de *Crayta* puedes abrir el menú del juego y hacer clic en la pestaña "Crear". Desde aquí puedes simplemente crear o introducir un "Enlace a compartir" para unirte o compartir un estado del juego.

El vínculo en sí mismo consistirá en el título del juego y ocho personajes aleatorios. Por ejemplo:

> _”https://launch.crayta.com/NK5NQZ5Q”_

Al hacer clic en el enlace se abrirá Crayta y se lanzará directamente al mapa y al modo de juego compartidos por el host.

En caso de tener dudas puedes ver más información <a class="u-anchor" href="https://stadia.dev/blog/the-magic-of-state-share-explained/" target="_blank" rel="nofollow noopener">en la página de Stadia.</a> ¿Y tú que piensas de State Share?.
