import React from 'react'
import Header from '../components/header.js'
import Footer from '../components/footer.js'
import NoticiasHome from '../components/noticiasHome.js'
import ImgCarrucelUno from '../image/carruselUno.jpg'
import ImgCarrucelDos from '../image/carruselDos.jpg'
import ImgCarrucelTres from '../image/Behavioral_System.jpg'
import '../components/css/styles.css'

class TerceraNoticia extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      dataNoticiasHome: [{
        "id": 3,
        "img": "https://i.postimg.cc/L5C0V8fF/ashe.jpg",
      }]
    }
  }


  render() {
    return (
      <div>
        <Header />
        {this.state.dataNoticiasHome.map((datat3) => {
          return (
            <NoticiasHome
              img={datat3.img}
            />
          )
        })}

        <div id="text-content-uno" classNameName="mt-250 mb-120 t-justify">
          <div classNameName="d-flex mx-0 justify-content-center">
            <div classNameName="w-100 d-flex justify-content-center">
              <div classNameName="container justify-content-center d-flex flex-column">
                <div classNameName="col-md-12 fz-40 text-center fw-bold">CÓDIGO DE CONDUCTA DE LEAGUE OF LEGENDS</div>
                <p classNameName="fz-20 text-center mt-40 black">
                  A medida que construimos League of Legends junto con nuestra comunidad a nivel mundial, te
                  pedimos que aceptes las
                  expectativas que se describen a continuación. Este Código de conducta de League of Legends es un
                  complemento de los <u> <a classNameName="subrayado" target="_blank" href="https://www.riotgames.com/es-419/terms-of-service-LATAM">
                    Términos de uso de Riot Games</a> </u>, los que debes aceptar antes de acceder a cualquier juego de Riot.</p>

                <p classNameName="mt-50 fz-30 fw-bold text-left"> Valores de la comunidad</p>


                <div id="carouselExampleIndicators" classNameName="carousel slide" data-ride="carousel">
                  <ol classNameName="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" classNameName="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                  </ol>
                  <div classNameName="carousel-inner">
                    <div classNameName="carousel-item active">
                      <img src={ImgCarrucelUno} classNameNameName="w-100" />
                    </div>
                    <div classNameName="carousel-item">
                      <img src={ImgCarrucelDos} classNameNameName="w-100" />
                    </div>
                    <div classNameName="carousel-item">
                      <img src={ImgCarrucelTres} classNameNameName="w-100" />
                    </div>
                  </div>
                  <a classNameName="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span classNameName="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span classNameName="sr-only">Previous</span>
                  </a>
                  <a classNameName="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span classNameName="carousel-control-next-icon" aria-hidden="true"></span>
                    <span classNameName="sr-only">Next</span>
                  </a>
                </div>










                <p classNameName="mt-50 fz-30 fw-bold text-left"> Compromiso con la competencia </p>

                <p classNameName="mt-20 fz-20 f-itlic">
                  League of Legends es una experiencia emocionante y competitiva en la que todos vienen a ganar.
                  Para que cada partida sea
                  significativa, debe haber condiciones justas para todos los jugadores. Creemos que para lograr
                  esas condiciones, las
                  partidas deben estar libres de trampas, de mal uso de sistemas de juego y de acosos y
                  comportamientos que eviten que
                 <strong>cualquier</strong> miembro de la comunidad dé lo mejor al jugar.</p>

                <p classNameName="mt-20 fz-20 f-itlic">
                  El hecho de que vengas a ganar no quiere decir que debes restringirte únicamente al metajuego.
                  Es válido probar algo
                  nuevo, siempre y cuando sigas apoyando a tu equipo y hagas un esfuerzo por ganar. Ten en cuenta
                  que esto se extiende a
                  tus compañeros de equipo. Dales la oportunidad a los demás aunque no te agrade su estilo de
                  juego y concéntrense en
                  ganar como equipo</p>

                <p classNameName="mt-20 fz-20 f-itlic">
                  Si un jugador constantemente incumple este compromiso con la competencia, tomaremos acciones
                  para proteger al resto de
                  la comunidad e invitaremos a ese jugador a reformar su comportamiento. Como tal, nuestras
                  advertencias y penalizaciones
                  buscan resolver aspectos específicos del mal comportamiento, no repartir castigos ni
                  restricciones excesivos.</p>

                <p classNameName="mt-50 fz-30 fw-bold text-left">
                  Ganar como equipo</p>

                <p classNameName="mt-20 fz-20 f-itlic">
                  La esencia de League of Legends está en la cooperación como equipo. Lograr el éxito como equipo
                  significa apoyar a tus
                  compañeros de tal forma que puedan dar lo mejor al jugar. Es decir, crear un ambiente
                  respetuoso, justo y comprometido
                  con la victoria, incluso cuando las cosas se pongan difíciles. Señalar los errores, discutir
                  sobre cómo deberían jugar
                  los compañeros del equipo o sabotear la partida cuando ya la diste por perdida no son
                  comportamientos aceptables.</p>

                <p classNameName="mt-20 fz-20 f-itlic">
                  Te mereces poder jugar cada partida sin malos comportamientos, acosos y abusos. Los demás
                  jugadores merecen lo mismo.
                  Somos un equipo y solo conseguimos la victoria si ganamos juntos.</p>

                <p classNameName="mt-50 fz-30 fw-bold text-left">
                  El poder de actuar con responsabilidad</p>

                <p classNameName="mt-20 fz-20">
                  Riot tiene la responsabilidad de otorgarte las herramientas para protegerte a ti, a tu
                  experiencia de juego y a tu
                  cuenta. A cambio, te damos el poder para que te hagas responsable de las decisiones que tomas al
                  interactuar con otros
                  jugadores y con terceros.</p>

                <p classNameName="mt-20 fz-20">
                  Todos los sistemas de comunicación de LoL se pueden activar o desactivar según lo necesites. Si
                  vas a reportar acoso o
                  abuso, hazlo a través de los sistemas dentro del juego o del equipo de soporte al jugador. Esto
                  no solo nos ayuda como
                  comunidad a tomar acciones sobre el mal comportamiento específico con el que te encontraste,
                  sino también nos ayuda a
                  mejorar nuestra habilidad para identificar en automático y prevenir ese tipo de comportamiento
                  en el futuro.</p>

                <p className="mt-20 fz-20">
                  Te pedimos que estés al pendiente de la información que compartes con aplicaciones y sitios de
                  terceros.</p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    )
  }
}

export default TerceraNoticia