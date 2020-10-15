import React from 'react'
import iconNot from '../image/favicon-riot.png'

const NotFound = () => (
  <div className="hv-100 notf bg-black-header">
    <div className="w-100 d-flex align-items-center justify-content-center">
      <img src={iconNot} className="px-3" />
    </div>
    <div className="row  d-flex align-items-center justify-content-center white">
      <h3 className="not-error mr-3">Error</h3>
      <h1 className="not-404">404</h1>
    </div>

    {/* <h2 className="pageNot mt-2">PAGE NOT FOUND</h2> */}
  </div>
)

export default NotFound