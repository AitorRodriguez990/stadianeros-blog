+++
author = "edgar"
category = "posts"
date = 2020-06-10T19:00:00Z
description = "Hoy os traemos un pequeño análisis de cómo Doom Eternal ha bajado unos 37ms de latencia gracias a su primera actualización del mes pasado. Hablaremos de la tecnología Orion y de las comparaciones que sufre cada día Stadia con las demás plataformas referidas a este tema."
draft = false
image = "/como-doom-eternal-ha-reducido-latencia-stadia.png"
imageFull = "/como-doom-eternal-ha-reducido-latencia-stadia_large.png"
tags = ["Doom Eternal", "Análisis"]
title = "¿Cómo Doom Eternal ha reducido su latencia en Stadia?"
toc = true
url = "/como-doom-eternal-ha-reducido-latencia-stadia"
+++

El 14 de mayo, un mes después de su lanzamiento, se anunció la <a class="u-anchor" href="/primera-actualizacion-doom-eternal">primera actualización</a> de <a class="u-anchor" href="/doom-eternal">Doom Eternal</a>, donde se incluían nuevas _skins_, se potenciaban los demonios y se añadían mejoras o cambios en la campaña y en el equilibrio del modo de batalla.

Sin esperarlo, los _fans_ de este videojuego, además de disfrutar de las novedades visuales, también se notaba una pequeña variación en **la latencia**. Esto a simple vista y en tiempo real casi no se nota, ya que hablamos de milisegundos. A no ser que seas un profesional con vista de lince.

_Random Noob_ subió un video a cámara lenta donde se aprecia exactamente cual es la latencia del juego en la plataforma de _Stadia_:

<div class="u-youtube">
  {{< youtube 4kztYLvOZ14 >}}
</div>

Como podéis observar el juego tarda unos **50 segundos** en iniciarse y en el momento del salto tarda unos **83ms** en ejecutarse la acción. Hay que decir que antes de este parche estaba en **120ms**, por lo que ha mejorado unos **37ms**.

¿Pero cómo se ha conseguido esto? Pues si continuáis leyendo estas líneas descubriréis la respuesta.

## La importancia de la latencia en los videojuegos

La latencia es una de las figuras **más influyentes** a la hora de valorar positiva o negativamente nuestra experiencia al jugar a un juego. Desde hace tiempo, todas las plataformas y compañías de videojuegos invierten capital y tiempo en mejorar este aspecto. Porque en muchas ocasiones de esto depende el éxito de un juego, una consola o una plataforma.

### ¿Qué es la latencia?

Así a bote pronto, podríamos decir que la latencia mide el retraso en completar el proceso de enviar una acción al servidor, éste procesarlo y devolver el resultado a tu equipo. Por ejemplo, lo que tarda el juego desde que yo pulso el botón de disparo hasta que sale la bala.

La latencia puede verse afectada por muchos motivos:

* El estado de los servidores.
* Tu conexión a Internet.
* El estado de tu equipo.
* O saturaciones en conexiones o en el propio videojuego.

## ¿Por qué _Bethesda_ ha conseguido reducir la latencia en Doom Eternal?

La mayoría de los entendidos sobre el tema y suposiciones de los usuarios más acérrimos a _Doom_, hacen referencia a la tecnología _Orion_. Aunque de momento este conjunto de técnicas aún está en su fase _beta_.

### ¿Qué es Orion?

_Orion_ es una tecnología que mejora la experiencia de un juego en _streaming_. La tecnología _Orion_ reduce la **latencia y el ancho de banda** mientras se transmite un juego, haciendo que los juegos transmitidos sean accesibles a más personas, en más áreas y con mayor calidad.

_Orion_ es una tecnología **independiente** de juegos y plataformas que optimiza los motores de juego para el _streaming_. A diferencia de los servicios de transmisión de juegos que se centran en soluciones de _hardware_ para la transmisión de juegos, _Orion_ es una solución de _software_ a nivel de motor de juego.

Integrado dentro del propio motor de juego, _Orion_ puede lograr espectaculares reducciones de latencia de hasta un 20% por _frame_, así como una reducción de hasta un 40% en el ancho de banda necesario.

Para más información sobre este tema o si queréis probar esta tecnología podéis visitar el apartado oficial de <a class="u-anchor" href="https://bethesda.net/en/game/orion" target="_blank" rel="nofollow noopener">Orion</a> dentro de la web de _Bethseda_.

## Comparación de latencia en Doom Eternal entre Xbox One y Stadia

En _Xbox One_ tiene unos **94ms** de retraso y en **83ms** en _Stadia_. No hemos podido comparar con más plataformas, porque el tema de la latencia va de la mano con los _frames_ por segundo que acepta la consola o la plataforma. Antes del parche de actualización en _Stadia_ tenía un retraso de 120ms. Es un cambio bastante importante.

Hay que tener en cuenta y que mucha gente no sabe, que cuanto más aumenta la velocidad de fotogramas (fps) menor es el retraso de entrada. Hay casos de juegos en _Stadia_ donde tienen un mayor _fps_ que en las consolas y esto puede ser suficiente para compensar la latencia añadida de la red. Pongamos un ejemplo de esto, para entenderlo mejor:

<a class="u-anchor" href="/red-dead-redemption-2">Red Dead Redemption 2</a> en Stadia podemos disfrutarlo en 60fps y en algunas consolas a 30fps. Esto lo que hace es que en _Stadia_ va a una velocidad de unos 50ms más rápido que en _Xbox One_. Esto permite una menor latencia porque un _frame_ de retraso es sólo la mitad de tiempo en _Stadia_.

Sin embargo, la peculiaridad de _Doom Eternal_ es que “corre” a la **misma velocidad** tanto en _Xbox One_ como en la plataforma de _streaming_ de _Google_.

## ¿Y si comparamos la latencia en un PC con Stadia?

Aquí ya entramos en terreno pedregoso, ya que los ordenadores de hoy en día son muy potentes, por lo que hace que, de momento, _Stadia_ pierda en este aspecto. Sin embargo, la “pérdida” no es tan significativa.

Siguiendo con el caso anterior, _RDR2_ en PC tiene una velocidad de respuesta de entre 25 y 29ms más rápido que en _Stadia_. Esta mejoría en la celeridad se debe a varios factores, entre ellos los siguientes:

* El PC tiene un menor retraso debido a que no tiene que atravesar la red.
* El _hardware_ local siempre tendrá el potencial para conseguir más rapidez, teniendo en cuenta que el desarrollo del juego fueran iguales tanto en ordenadores como en plataformas de juegos en la nube.

## La importancia de renderizar a 120fps y la latencia negativa son la clave para Stadia

Todos estos problemas y diferencias se solucionarían muy rápido. Implementando de una vez por todas juegos a **120ps** y desarrollar con claridad el aspecto de la **latencia negativa**.

Desde el nacimiento de la plataforma de _Google_ ya se habló de desarrollar juegos en la nube en 120 _frames_ por segundo. Aunque no sería una cosa inmediata, ya que en su día _Madj Bakar_ vicepresidente de ingeniería de la compañía dijo lo siguiente:

> _”Al final, en un año o dos tendremos juegos que funcionen más rápidamente y que se sientan más fluidos que los que hay actualmente con hardware local, sin importar lo potente que sea el hardware que los mueva”_

Otra de las características innovadoras en el universo de los videojuegos fue la insunuación de que _Stadia_ utilizaría la famosa _”Negative Latency”_ que se define como un _buffer_ de grandes dimensiones que podrá impulsar los FPS de los juegos en el lado de los servidores, y que evitará la ralentización de los juegos incluso aunque la conexión no sea buena.

Además se añadiría un algoritmo que predecirá los botones que pulsará el jugador a continuación gracias al _”machine learning”_, para compensar la latencia.

Si a estos tres conceptos le sumas una conexión de fibra óptica de alta velocidad, puede que en un futuro _Stadia_ sea mucho más competente y mejore las prestaciones de los ordenadores e incluso la de las consolas de última generación. Pero habrá que esperar, ya que, a día de hoy, no tenemos noticia alguna de cómo va el proceso de implementar estas tecnologías a la plataforma.

Fuente: <a class="u-anchor" href="https://www.reddit.com/r/Stadia/comments/gzpu8b/lets_talk_about_how_doom_eternal_managed_to/" target="_blank" rel="nofollow noopener">Let's talk about how Doom Eternal managed to reduce the latency so much</a>.
