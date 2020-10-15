import React from 'react'
/* import imgNovedades from '../image/Behavioral_System.jpg' */
import './css/styles.css'



class NoticiasHome extends React.Component {

  render() {
    const {img} = this.props

    return (
      <div id="destacados-recientes">
        <div class="d-flex mx-0 justify-content-center">
          <div className="novedades w-100 d-flex justify-content-center"
          style={{
            backgroundImage: `url(${img})`
          }}>
            <div className="container-1525 align-items-end d-flex">
              <div className="row w-100 justify-content-center">
                <div className="col-md-8 col-sm-8 col-9 novedad-sty box-shadow-gray px-0">
                  <div className="borde d-none d-sm-flex" />
                  <img src={img} className="w-100" alt="Behavioral_System" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NoticiasHome