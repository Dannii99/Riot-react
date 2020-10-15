import React from 'react'
import './css/styles.css'
import riotIcon from '../image/riot.png'
import { Link } from 'react-router-dom'

function Header(props) {
  return (
    <div className="container-fluid bg-black-header" id="header">
      <div className="container-alt container justify-content-between d-flex py-3 align-items-center px-0">
        <Link to="/home">
        <img src={riotIcon} className="img-header" />
        </Link>
        <a href="https://signup.lan.leagueoflegends.com/es/signup/index" target="_blank"><button className=" bg-red-button py-13 px-36 br-radius-20 br-none btn-jugar white fz-20">JUGAR AHORA!!</button></a>
      </div>
    </div>
  )

}

export default Header