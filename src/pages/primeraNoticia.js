import React from 'react'
import Header from '../components/header.js'
import Footer from '../components/footer.js'
import NoticiasHome from '../components/noticiasHome.js'
import ContenidoHome from '../components/contenidoHome.js'

import '../components/css/styles.css'

class PrimeraNoticia extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      dataNoticiasHome: [{
        "id": 3,
        "img": "https://i.postimg.cc/WzHXkfL2/Lo-L-Thoughts.jpg",
      }],
      dataContenidoHome: [{
        "id": 1,
        "titlePrin": "IDEAS DE LOL: 28 DE AGOSTO",
        "titleSecun": "Cómo evaluamos el trabajo en jugabilidad y aspectos de misión.",
        "textPrin": "¡Hola, invocadores! Avisos de siempre: Estas publicaciones a menudo contienen información acerca del trabajo a futuro que estamos realizando (o que planeamos hacer), y no garantizamos que saldrá para el público. La naturaleza de dicho trabajo puede cambiar o, según lo que vayamos descubriendo, algunos proyectos mencionados podrían retrasarse o incluso cancelarse definitivamente. Si deseas ver un tuit cada vez que subimos una de estas publicaciones, síguenos en: https://twitter.com/RiotMeddler (en inglés).",
        "titleUno": "Cómo evaluamos el trabajo que realizamos parte 1: Jugabilidad",
        "textUno": "Hoy quise hablar acerca de algo un poco distinto y compartir algunos detalles con ustedes acerca de cómo evaluamos nuestro propio trabajo. Mi objetivo es que esto facilite el entendimiento acerca de la forma en que abordamos algunos problemas, que ofrezca más contexto en común para discusiones en el futuro, y que también sirva de información de interés general para algunos de ustedes. Esta vez vamos a tratar el tema de los equipos enfocados en la jugabilidad de juegos estilo MOBA. Las siguientes publicaciones abordarán temas como TFT, personalización/elementos estéticos, tecnología, algunos aspectos de la comercialización, la comunicación con los jugadores, etc Estas publicaciones estarán divididas, en cierto modo, por equipos; sin embargo, esta categorización no representa del todo nuestra estructura interna, ya que me concentré más en los equipos que tienen un impacto importante en los jugadores (ej. el de balance de juego) y menos en aquellos que tienen un impacto interno (ej. el de desarrollo de herramientas). Además, estas publicaciones no contendrán elementos de League of Legends que se manejan en otras partes de la organización (ej. los esports son una rama separada del equipo de LoL, y la moderación del chat la realiza un grupo multiplataforma, así como el soporte al jugador, etc.). Tampoco incluye todas aquellas cosas que registramos, sino solo los puntos clave.",
        "titleDos": "Aspectos de misión",
        "textDos": "Es posible que en las siguientes semanas comiencen a ver por ahí la frase ''aspecto de misión'', así que quisimos ofrecer algo de contexto para explicar su significado. Estamos probando un nuevo tipo de aspecto (no un nivel nuevo de aspecto o con un precio distinto) \n" + "que se podrá adquirir muy pronto. Tendrá algunas funciones nuevas con necesidades técnicas específicas. Por esta razón debemos probarla por adelantado en el entorno de pruebas. No la lanzaremos en esta versión ni en el futuro cercano, ¡pero estén atentos a las actualizaciones!",
      }],
    }
  }


  render() {
    return (
      <div>
        <Header />
        {this.state.dataNoticiasHome.map((dataNt) => {
          return (
            <NoticiasHome
              img={dataNt.img}
            />
          )
        })}

        <div id="text-content-uno" className="mt-250 mb-120 text-justify">
          <div className="d-flex mx-0 justify-content-center">
            <div className="w-100 d-flex  justify-content-center">
              <div className="container justify-content-center d-flex flex-column">
                {this.state.dataContenidoHome.map((dataCOnt) => {
                  return (
                    < ContenidoHome
                      titlePrin={dataCOnt.titlePrin}
                      titleSecun={dataCOnt.titleSecun}
                      textPrin={dataCOnt.textPrin}
                      titleUno={dataCOnt.titleUno}
                      textUno={dataCOnt.textUno}
                      titleDos={dataCOnt.titleDos}
                      textDos={dataCOnt.textDos}
                    />
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    )
  }
}

export default PrimeraNoticia