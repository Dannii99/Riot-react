import React from 'react'
import Header from '../components/header.js'
import Footer from '../components/footer.js'
import Hero from '../components/hero.js'
import NoticiasPrincipal from '../components/noticias-principales.js'
import Destacados from '../components/destacados.js'
import NoticiasHome from '../components/noticiasHome.js'
import ContenidoHome from '../components/contenidoHome.js'
import ContenidoHomeDos from '../components/contenidoHomeDos.js'
import MinHome from '../components/minHome.js'
import '../components/css/styles.css'

class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [{
        "id": 1,
        "img": "https://i.postimg.cc/KYSpfVKj/maxresdefault.jpg",
        "title": "LEAGUE OF LEGENDS",
        "descriptionUno": "League of Legends (también conocido por sus siglas LoL) es un videojuego del género multijugador de arena de batalla en línea (MOBA) y deporte electrónico el cual fue desarrollado por Riot Games para Microsoft Windows y OS X. En un principio los servidores estaban alojados en la empresa GOA y fue vendida a la empresa china Tencent Holdings Limited.",
        "descriptionDos": "El juego fue diseñado para el sistema operativo Microsoft Windows y lanzaron una beta para OS X dejando al poco tiempo el proyecto de lado. Esta beta ha sido mejorada por parte de usuarios del juego, haciendo posible jugar a una versión actualizada de League of Legends."
      }, {
        "id": 2,
        "img": "https://i.postimg.cc/2y8KvZ1x/Grieta-Del-Invocador.jpg",
        "title": "GRIETA DEL INVOCADOR",
        "descriptionUno": "El objetivo de La Grieta del Invocador es simple: destruir el nexo enemigo. Para llegar a ello, los campeones deben atravesar las diferentes lineas o carriles (lanes) donde combatirán contra los campeones enemigos para destruir las torretas, dos por linea (cuatro por linea en total), hasta llegar a la base enemiga. La fuerza de las torretas crece según su cercanía al nexo.",
        "descriptionDos": "En el mapa existen 3 líneas: top (la linea de arriba), mid (la línea del medio) y bot (la línea de abajo); además de la jungla.",
        "titleDos": "TOP",
        "descriptionTres": "En esta línea puede ir tanto un jugador como dos. La línea de top es perfecta para personajes como los siguientes: Personajes con muy buena resistencia,por ejemplo: Garen, Poppy, Maokai. Personajes con buen daño ya sea físico o mágico, por ejemplo: Jax, Darius, Kennen",
        "titleTres": "MID",
        "descriptionCuatro": "La línea de mid es la más solitaria del mapa. En esta línea los jugadores se enfrentan en un uno contra uno. Los personajes con mucho daño mágico son perfectos para línea. por ejemplo: Veigar, Katarina, Azir",
        "titleCuatro": "BOT",
        "descriptionCinco": "Bot es la línea mas cooperativa de las tres. Depende de dos personajes en específico. Es necesario un personaje con mucho daño físico que se encargue de matar a los rivales. por ejemplo: Jinx, Kalista, Jhin También se necesita el personaje soporte que ayude al de daño protegiendo o ayudando a matar. Por ejemplo: Janna, Taric, Braum",
        "titleCinco": "JG",
        "descriptionSeis": "La jungla esta llena de oscuridad y monstruos para matar. El territorio de la jungla es perfecto para esconderse en la maleza y atacar a los rivales en una línea desde la maleza por sorpresa. Personajes de aguante son perfectos para la jungla ya que podrán matar monstruos tranquilos y tener mas posibilidades de supervivencia. Por ejemplo: Volibear, Zac, Rengar Personajes con buen daño (ya sea físico o mágico) son buenos para la jungla ya que podrán atacar mejor a los enemigos en las emboscadas y matar monstruos mas rápido. Por ejemplo: Warwick, Maestro Yi, Evelynn",
      }],

      dataDestacados: [{
        "id": 1,
        "link": "/PrimeraNoticia",
        "img": "https://i.postimg.cc/WzHXkfL2/Lo-L-Thoughts.jpg",
        "title": "DEV",
        "descriptionUno": "Ideas de lol: 28 de agosto",
        "descriptionDos": "Como evaluamos el trabajo",
      }, {
        "id": 2,
        "img": "https://i.postimg.cc/43QP53k2/Samira.jpg",
        "title": "Actualizaciones",
        "descriptionUno": "Tráiler de Samira",
        "descriptionDos": "Como evaluamos el trabajo",
      }, {
        "id": 3,
        "link": "/TerceraNoticia",
        "img": "https://i.postimg.cc/L5C0V8fF/ashe.jpg",
        "title": "CONDUCTA",
        "descriptionUno": "Código de conducta",
        "descriptionDos": "Valores de la comunidad",
      }, {
        "id": 4,
        "img": "https://i.postimg.cc/MTtsWp9f/LOL-PROMOART-13.jpg",
        "title": " VERSIÓN 10.18",
        "descriptionUno": "Versió en brevessss",
        "descriptionDos": "¡Uno para todos!",
      }],

      dataNoticiasHome: [{
        "id": 1,
        "img": "https://i.postimg.cc/c4zbg60Q/Behavioral-System.jpg",
      }],
      dataNoticiasHome2: [{
        "id": 2,
        "img": "https://i.postimg.cc/k4Mchd7J/tft-fates-pass-banner.jpg",
      }],

      dataContenidoHome: [{
        "id": 1,
        "titlePrin": "NOVEDADES (09/2020)",
        "titleSecun": "Anunciamos los cambios que implementaremos durante las próximas versiones.",
        "textPrin": "¡Buenas! Nuevo mes, nuevas novedades. Nuestros objetivos actuales no han cambiado desde el mes pasado (podéis leer más sobre el tema aquí) y, hoy, nos centraremos más en experimentos y cambios individuales que tenemos planeados para este año. Hace poco, lanzamos y analizamos algunos cambios para la detección y el castigo de los sacrificios intencionados y de la inactividad, así que echemos un vistazo a los resultados y hablemos más detalladamente de los siguientes experimentos que hemos diseñado.",
        "titleUno": "Detección y castigo de intentar perder a propósito y de la inactividad",
        "textUno": "¡Buenas! Nuevo mes, nuevas novedades. Nuestros objetivos actuales no han cambiado desde el mes pasado (podéis leer más sobre el tema aquí) y, hoy, nos centraremos más en experimentos y cambios individuales que tenemos planeados para este año. Hace poco, lanzamos y analizamos algunos cambios para la detección y el castigo de los sacrificios intencionados y de la inactividad, así que echemos un vistazo a los resultados y hablemos más detalladamente de los siguientes experimentos que hemos diseñado.",
        "titleDos": "Rendición anticipada",
        "textDos": "Cuando empezamos a mejorar nuestros sistemas de detección, también nos centramos en da r con estrategias de mitigación para disminuir la frustración que conllevan las partidas en las que sabemos que alguien ha abandonado la partida o permanece inactivo. Cuando ocurre, la forma más rápida de mejorar dicha experiencia es hacer que podáis salir de esa partida lo antes posible. Para ello, vamos a actualizar el sistema de rendición para que tenga en cuenta a los jugadores inactivos de vuestro equipo. Cuando se detecte un jugador inactivo, reiniciaremos el enfriamiento de la rendición y avisaremos de ello a todo el equipo, lo que os permitirá volver a proponer una rendición inmediatamente. Además, podréis rendiros antes en las partidas con un jugador inactivo. Si queréis seguir jugando o esperar a que vuelva el jugador en cuestión, seguiréis pudiendo hacerlo. No obstante, si preferís pasar a la siguiente partida, lo entendemos y queremos que os resulte tan fácil como sea posible. Nos aseguraremos de seguir de cerca estos cambios para evaluar sus posibles impactos negativos en la experiencia de juego, como un porcentaje mayor de rendiciones o un abuso de ellas por parte de los grupos prediseñados.",
      }],

      dataContenidoHome2: [{
        "id": 2,
        "titlePrin": "EL PASE DE TFT: DESTINOS Y MÁS",
        "titleSecun": "Todo lo que necesitáis saber sobre el pase de Destinos, las mini leyendas y las arenas de TFT: Destinos.",
        "textPrin": "Teamfight Tactics: Destinos llegará pronto y, por supuesto, traerá consigo un montón de formas nuevas de presumir. Preparaos para una nueva serie de minileyendas inspiradas en dragones, arenas ubicadas en Jonia que reaccionan de acuerdo con el estado del tablero y escandalosas nuevas chispas. Por último, vamos a presentaros el sistema de fragmentos de estrella, una forma alternativa de subir a vuestras minileyendas de nivel. ¡Vamos al lío!",
        "titleUno": "Fragmentos de estrella",
        "textUno": "A partir de Destinos, podréis subir el nivel de vuestras minileyendas comprando fragmentos de estrella. Si queréis conseguir la versión de 3 estrellas de vuestra minileyenda favorita, esta será la forma de lograrlo. En cambio, si lo que queréis es seguir aumentando vuestra colección, los huevos seguirán siendo la mejor opción para vosotros. Aquí os explicamos cómo funcionan:",
        "titleDos": "Rendición anticipada",
        "textDos": "Cuando empezamos a mejorar nuestros sistemas de detección, también nos centramos en da r con estrategias de mitigación para disminuir la frustración que conllevan las partidas en las que sabemos que alguien ha abandonado la partida o permanece inactivo. Cuando ocurre, la forma más rápida de mejorar dicha experiencia es hacer que podáis salir de esa partida lo antes posible. Para ello, vamos a actualizar el sistema de rendición para que tenga en cuenta a los jugadores inactivos de vuestro equipo. Cuando se detecte un jugador inactivo, reiniciaremos el enfriamiento de la rendición y avisaremos de ello a todo el equipo, lo que os permitirá volver a proponer una rendición inmediatamente. Además, podréis rendiros antes en las partidas con un jugador inactivo. Si queréis seguir jugando o esperar a que vuelva el jugador en cuestión, seguiréis pudiendo hacerlo. No obstante, si preferís pasar a la siguiente partida, lo entendemos y queremos que os resulte tan fácil como sea posible. Nos aseguraremos de seguir de cerca estos cambios para evaluar sus posibles impactos negativos en la experiencia de juego, como un porcentaje mayor de rendiciones o un abuso de ellas por parte de los grupos prediseñados.",
        "imgUno": "https://i.postimg.cc/wvzPqPHZ/28-25-Star-Shards.png",
        "titleTres": "Conseguir fragmentos de estrella",
        "textTres": "Los fragmentos de estrella estarán disponibles en la tienda y mediante el pase+ de Destinos. Conseguiréis un total de 300 fragmentos de estrella con el pase. Los fragmentos de estrella estarán disponibles en paquetes a partir de 625 RP. Dicho paquete básico contará con suficientes estrellas como para aumentar el nivel de la mayoría de minileyendas una vez. También dispondréis de paquetes más grandes, que contienen fragmentos de estrella adicionales por si os habéis comprometido con aumentar vuestra colección. Seguimos investigando otras formas de comprar o adquirir fragmentos de estrella, pero llegarán en futuras actualizaciones.",
        "titleCuatro": "Utilizar fragmentos de estrella",
        "textCuatro": "Después de adquirir unos cuantos fragmentos de estrella, dirigíos a las selecciones, donde escogéis normalmente a vuestra minileyenda. Si seleccionáis una minileyenda que se pueda mejorar, haced clic sobre ella y los poros que hacen funcionar la tienda se encargarán del resto. Tened en cuenta que dichas mejoras no son reembolsables, así que ¡aseguraos de utilizarlas sabiamente! Harán falta 100 fragmentos de estrellapara mejorar minileyendas raras (como Pingu caballero) y minileyendas del pase+ (como Topo excavador astronauta y Alargéntea guardián de las estrellas) y pasarlas de 2 a 3 estrellas; 125 fragmentos de estrella para mejorar minileyendas épicas (como Caballero extrapicante); y 150 fragmentos de estrella para mejorar minileyendas legendarias (como Señor de los cuervos).",
      }],
      dataMinContenidoHome: [{
        "id": 1,
        "minTitle": "Ao Shin",
        "minImg": "https://i.postimg.cc/vHTKZ5FY/Copy-of-Ao-Shin-Classic-Tier3.jpg",
        "minText": "Un descendiente del linaje de dragones de la tormenta. Ao Shin es un guardián de la tormenta, y esgrime dos poderosas armas: la suavidad de la lluvia y la ferocidad de los rayos y truenos.",
      }, {
        "id": 2,
        "minTitle": "Pachonc",
        "minImg": "https://i.postimg.cc/t4Vmhy48/Copy-of-Choncc-Classic-Tier3.jpg",
        "minText": "Al ser un cachorro, Pachonc siempre tiene hambre y sueño. Aunque lo caracteriza una naturaleza apacible, Pachonc puede adquirir un poder feroz si lo provocan... o si lo tientan con los bocadillos adecuados.",
      }, {
        "id": 3,
        "minTitle": "Umbra",
        "minImg": "https://i.postimg.cc/zD0MN0Q2/Copy-of-Umbra-Classic-Tier3.jpg",
        "minText": "Umbra, un dragón sombrío, parece cauto y reservado al principio. Sin embargo, si un mortal se gana su confianza, se muestra cariñoso y con una dedicación absoluta que lo lleva a conjurar a las sombras y a las llamas para defender a sus aliados.",
      }]
    }
  }
  render() {
    return (
      <div>
        <Header />
        <Hero />
        <div className="container-1800 container" id="noticias">
          <div className="row w-100 jc-between mt-95 mb-40 mx-0">

            <div className="lol-inicio col-md-8 px-0">
              <p className="fz-40 black mt-40 mb-40 fw-bold f-itlic"> YA CONOCES LEAGUE OF LEGENDS? </p>
              {this.state.data.map((dataUNO) => {
                return (
                  <NoticiasPrincipal
                    img={dataUNO.img}
                    title={dataUNO.title}
                    descriptionUno={dataUNO.descriptionUno}
                    descriptionDos={dataUNO.descriptionDos}
                    titleDos={dataUNO.titleDos}
                    descriptionTres={dataUNO.descriptionTres}
                    titleTres={dataUNO.titleTres}
                    descriptionCuatro={dataUNO.descriptionCuatro}
                    titleCuatro={dataUNO.titleCuatro}
                    descriptionCinco={dataUNO.descriptionCinco}
                    titleCinco={dataUNO.titleCinco}
                    descriptionSeis={dataUNO.descriptionSeis}
                  />
                );
              })}
            </div>

            <div id="min-destacados" className="d-flex justify-content-center col-md-4 col-sm-12 col-xs-12">
              <div className="col-md-12 mini-noticias d-flex flex-column align-items-center">
                <p className="fz-40 black mt-40 mb-40 fw-bold f-itlic"> Destacados </p>
                {this.state.dataDestacados.map((DestacadosU) => {
                  return (
                    <Destacados
                      link={DestacadosU.link}
                      img={DestacadosU.img}
                      title={DestacadosU.title}
                      descriptionUno={DestacadosU.descriptionUno}
                      descriptionDos={DestacadosU.descriptionDos}
                    />
                  );
                })}

              </div>
            </div>
            <p class="container-alt container col-md-12 fz-40 fw-bold mt-95 mb-40 f-itlic">
              Destacados Mas Recientes</p>
          </div>
        </div>
        {this.state.dataNoticiasHome.map((noticiassHome) => {
          return (
            <NoticiasHome
              img={noticiassHome.img}
            />
          );
        })}

        <div id="text-content-uno" className="mt-250 mb-120 text-justify">
          <div className="d-flex mx-0 justify-content-center">
            <div className="w-100 d-flex  justify-content-center">
              <div className="container justify-content-center d-flex flex-column">

                {this.state.dataContenidoHome.map((Home1) => {
                  return (
                    <ContenidoHome
                      titlePrin={Home1.titlePrin}
                      titleSecun={Home1.titleSecun}
                      textPrin={Home1.textPrin}
                      titleUno={Home1.titleUno}
                      textUno={Home1.textUno}
                      titleDos={Home1.titleDos}
                      textDos={Home1.textDos}

                    />
                  );
                })}

              </div>
            </div>
          </div>
        </div>

        {this.state.dataNoticiasHome2.map((noticiassHome2) => {
          return (
            <NoticiasHome
              img={noticiassHome2.img}
            />
          );
        })}

        <div id="text-content-uno" className="mt-250 mb-120 text-justify">
          <div className="d-flex mx-0 justify-content-center">
            <div className="w-100 d-flex  justify-content-center">
              <div className="container justify-content-center d-flex flex-column">


                {this.state.dataContenidoHome2.map((Home2) => {
                  return (
                    <ContenidoHomeDos
                      titlePrin={Home2.titlePrin}
                      titleSecun={Home2.titleSecun}
                      textPrin={Home2.textPrin}
                      titleUno={Home2.titleUno}
                      textUno={Home2.textUno}
                      titleDos={Home2.titleDos}
                      textDos={Home2.textDos}
                      imgUno={Home2.imgUno}
                      titleTres={Home2.titleTres}
                      textTres={Home2.textTres}
                      titleCuatro={Home2.titleCuatro}
                      textCuatro={Home2.textCuatro}
                    />
                  );
                })}

                {this.state.dataMinContenidoHome.map((minHome) => {
                  return (
                    <MinHome
                      minTitle={minHome.minTitle}
                      minImg={minHome.minImg}
                      minText={minHome.minText}
                    />
                  );
                })}

              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )}
}

export default Home
