import React from 'react'
import './css/styles.css'

class NoticiasPrincipal extends React.Component {

  render() {
    const { img, title, titleDos,  titleTres, titleCuatro, titleCinco, descriptionUno, descriptionDos, descriptionTres, descriptionCuatro, descriptionCinco, descriptionSeis } = this.props

    return (

      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-5 mt-4">
          <img src={img} className="w-100" />
        </div>

        <div className="col-lg-7 col-md-12 mt-4">
          <p className="fz-25 col-12 mmt-40">{title}</p>
          <p className="fz-20 text-justify mt-2 col-12">{descriptionUno}</p>
          <p className="fz-20 text-justify mt-2 col-12">{descriptionDos}</p>
          <p className="fz-25 col-12 mmt-40 mt-2">{titleDos}</p>
          <p className="fz-20 text-justify mt-2 col-12">{descriptionTres}</p>
          <p className="fz-25 col-12 mmt-40 mt-2">{titleTres}</p>
          <p className="fz-20 text-justify mt-2 col-12">{descriptionCuatro}</p>
          <p className="fz-25 col-12 mmt-40 mt-2">{titleCuatro}</p>
          <p className="fz-20 text-justify mt-2 col-12">{descriptionCinco}</p>
          <p className="fz-25 col-12 mmt-40 mt-2">{titleCinco}</p>
          <p className="fz-20 text-justify mt-2 col-12">{descriptionSeis}</p>
        </div>

      </div>
    )
  }
}

export default NoticiasPrincipal