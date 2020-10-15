import React from 'react'
import './css/styles.css'

class ContenidoHome extends React.Component {

  render() {
    const { titlePrin, titleSecun, textPrin, titleUno, textUno, titleDos, textDos } = this.props

    return (

      <div>
        {/* Home1 */}
        <p className="col-md-12 fz-40 text-center fw-bold">{titlePrin}</p>
        <p className="fz-20 text-center mt-40 grey-dark">{titleSecun}</p>
        <p className="mt-95 fz-20 f-itlic">{textPrin}</p>
        <p className="mt-50 fz-30 fw-bold text-left">{titleUno}</p>
        <p className="mt-20 fz-20">{textUno}</p>
        <p className="mt-50 fz-30 fw-bold text-left">{titleDos}</p>
        <p className="mt-20 fz-20">{textDos}</p>
      </div>
    )
  }
}

export default ContenidoHome

