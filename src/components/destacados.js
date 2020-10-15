import React from 'react'
import './css/styles.css'
import { Link } from 'react-router-dom'

class Destacados extends React.Component {

  render() {
    const { img, title, descriptionUno, descriptionDos, link } = this.props

    return (

      <div className="w-100 d-flex justify-content-center">
        <Link to={link} className="w-100 justify-content-center d-flex">
          <div className="col-sm-8 col-md-12 mb-40 scale">
            <div className="row noticia-uno d-flex justify-content-center align-items-center over-hidden">
              <div className="col-lg-6 col-md-10 col-sm-11 col-11 col-custom mx-10 my-10 lol-uno box-shadow-white"
                style={{
                  backgroundImage: `url(${img})`
                }}
              ></div>
              <div className="col-lg-5 col-md-10 col-sm-10 col-9 col-custom overflow-hidden">
                <div className="fz-20 mt-18 grey-lith">{title}</div>
                <div className="fz-30 fw-bold mt-2">{descriptionUno}</div>
                <div className="fz-20 mt-2 mb-18 black">{descriptionDos}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>

    )
  }
}

export default Destacados

