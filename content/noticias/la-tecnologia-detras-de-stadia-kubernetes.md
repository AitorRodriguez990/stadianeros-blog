+++
category = "posts"
date = 2020-04-09T05:00:00Z
description = "En la última presentación para desarrolladores que realizó Google, la Google for Games Developer Summit, mostró Kubernetes, la tecnología que mueve los juegos en Stadia."
draft = false
image = "/la-tecnologia-detras-de-stadia-kubernetes.png"
imageFull = "/la-tecnologia-detras-de-stadia-kubernetes_large.png"
tags = ["General", "Tecnología"]
title = "La tecnología detrás de Stadia: Kubernetes"
toc = true
url = "/la-tecnologia-detras-de-stadia-kubernetes"

+++
## Qué es Kubernetes

_Kubernetes_, también conocido como K8s, es el servicio que se encarga es de gestionar contenedores de programas, donde están los mínimos recursos necesarios para ejecutar un juego.

Cuando hablamos de una Instancia/Contenedor, nos referimos a una copia del juego, así como todos los recursos necesarios para que este funcione.

<img class="u-borderImage u-lazyload lazyload" loading="lazy" data-src="/la-tecnologia-detras-de-stadia-kubernetes/stadia-vulkan.jpg" alt="Stadia Vulkan" title="Stadia Vulkan" />

## Beneficios

Como toda tecnología, se utiliza puesto que aporta una serie de beneficios respecto a otras. A continuación te exponemos cuales son estos beneficios:

### Para el usuario

**Inmediatez**, es la gran baza de Stadia. **Lanzas el explorador, le das a _play_ y juegas**. Esto es así porque la instancia ya está creada y lista, sólo está esperando que le pasen los datos del usuario que va a jugar.

La salida de vídeo de una instancia, puedes trabajar con ella como si fuese vídeo final, incorporándolo a otros streams (_stream connect_) o sacándolo directamente a Youtube (_crowdplay_).

La red es una capa de _software_, esto significa que puedes configurarla como quieras. Mientras que dos instancias que están funcionando en el mismo procesador pueden ambas conectarse a un servidor, o dos instancias en dos centros diferentes podrían jugar como si estuviesen en la misma _LAN_.

### Para Stadia

Eficiencia en los centros de datos, si dos personas están jugando a un juego poco exigente, **_Kubernetes_ les gestiona la CPU y memoria que necesitan**, de esta forma muchas personas podrían estar jugando al _Spitlings_ con la misma _CPU_. 

**Asimismo pasa con las gráficas**, todas ellas están en un _pool_ y es _Kubernetes_ el que asigna a cada instancia que cantidad de gráfica u VRAM necesita. Continuando con el ejemplo, mientras que los que juegan a _Spitlings_ podrían jugar decenas sin llegar a usar al 100% de una gráfica, es posible que una o dos personas usen la totalidad de la gráfica jugando al _RDR2_.

Esto también da pie a una **mayor flexibilidad a Stadia para adaptar su servicio a la demanda** y planificar futuras actualizaciones.

<img class="u-borderImage u-lazyload lazyload" loading="lazy" data-src="/la-tecnologia-detras-de-stadia-kubernetes/cambio-de-filosofia.png" alt="Cambio de filosofía" title="Cambio de filosofía" />

### Para el desarrollador

Para el creador del juego los beneficios son muchos ahora, e infinidad en un futuro. 

Ahora mismo solo han de preparar el servicio para una configuración, no hay que adaptar los juegos, no existen diferentes versiones de _drivers_, ni memorias. Todo es lo mismo, todas las instancias son un clon de la que crean los desarrolladores, toda corren en el mismo _hardware_ virtualizado. 

Ademas, esta el tema de _suites_ de desarrollo, que en caso de Stadia son _OpenSource_, lo que facilita el trabajo a los pequeños estudios de desarrollo de juegos.

En el futuro, cuando se desarrollen juegos teniendo en cuenta esta tecnología, podremos separar un juego en sus componentes, lo que permitirá usar los recursos mas eficientemente.

## El futuro

Ahora mismo, cuando ejecutamos un juego en cualquier plataforma, esta no solo dibuja los gráficos, además administra todas la bases de datos asociadas, al juego, ademas de gestionar la IA y las físicas. Esto es conocido como _"arquitectura monolítica"_.

Pero estas **diferentes bases de datos del juego pueden ser comunes a todos**, y serian un servicio separado al que cada instancia accedería, **ahorrando memoria y tiempos de carga**. 

La parte del juego que se encargue de la **IA** podrá ser un contenedor aparte, usando un procesador dedicado a la toma de decisiones y así permitiendo **más velocidad y comportamientos más complejos**.

***

Artículo cortesía de Rubén Martínez. ¡Muchas gracias!

Referencias:

* <a class="u-anchor" href="https://www.youtube.com/watch?v=hMWjerCqRFA" target="_blank" rel="nofollow noopener">Vídeo de la GDC 2020</a>
* <a class="u-anchor" href="https://kubernetes.io/docs/home" target="_blank" rel="nofollow noopener">Documentación Kubernetes</a>
* <a class="u-anchor" href="https://docs.docker.com" target="_blank" rel="nofollow noopener">Documentación Docker</a>