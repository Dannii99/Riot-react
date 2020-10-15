import React from 'react'
import './css/styles.css'

class MinHome extends React.Component {

  render() {
    const { minTitle, minImg, minText } = this.props

    return (

      <div>
        <p className="mt-50 fz-25 fw-bold text-left">{minTitle}</p>
        <div className="row">
          <div className="col-md-3 mt-20">
            <img className="w-100" src={minImg} alt="min" />
          </div>
          <div class="mt-20 col-md-9">
            <p class="fz-20">{minText}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default MinHome

