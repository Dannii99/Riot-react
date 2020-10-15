import React from 'react'
import './css/styles.css'

class ContenidoHomeDos extends React.Component {

  render() {
    const { titlePrin, titleSecun, textPrin, titleUno, textUno, titleDos, textDos, imgUno, titleTres, textTres, titleCuatro, textCuatro, minTitle, minImg, minText } = this.props

    return (

      <div>
        {/* Home2 */}
        <p className="col-md-12 fz-40 text-center fw-bold">{titlePrin}</p>
        <p className="fz-20 text-center mt-40 grey-dark">{titleSecun}</p>
        <p className="mt-95 fz-20 f-itlic">{textPrin}</p>
        <p className="mt-50 fz-30 fw-bold text-left">{titleUno}</p>
        <p className="mt-20 fz-20">{textUno}</p>
        <p className="mt-50 fz-30 fw-bold text-left">{titleDos}</p>
        <p className="mt-20 fz-20">{textDos}</p>
        <div className="col-md-3 mt-20 px-0">
          <img className="w-100" src={imgUno} alt="fragmentos" />
        </div>
        <p className="mt-50 fz-30 fw-bold text-left">{titleTres}</p>
        <p className="mt-20 fz-20">{textTres}</p>
        <p className="mt-50 fz-30 fw-bold text-left">{titleCuatro}</p>
        <p className="mt-20 fz-20">{textCuatro}</p>
      </div>
    )
  }
}

export default ContenidoHomeDos

