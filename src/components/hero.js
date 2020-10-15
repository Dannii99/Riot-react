import React from 'react'
import imgHero from '../image/hero-2.jpeg'

function Hero(props) {
  return (
    <div className="container-fluid hero d-flex align-items-center w-100">
      <div className="container-alt container">
        <div className="row align-items-center">
          <div className="col-md-12 col-lg-6">
            <p className="fz-100 f-itlic white">FINAL LLA</p>
            <p className="fz-20 col-12 col-sm-12 col-md-12 col-lg-10 mt-27 white text-justify">Tendremos toda una semana de contenidos preparándonos para la Final entre All Knights y Rainbow7, ¡no te pierdas los detalles!</p>
          </div>
          <div className="col-md-12 col-lg-6">
            <img src={imgHero} className="w-100 br-withe" />
          </div>
        </div>
      </div>
    </div>
  )

}

export default Hero