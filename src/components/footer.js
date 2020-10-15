import React from 'react'
import './css/styles.css'
import riotIcon from '../image/riot.png'
import facebook from '../image/facebook.svg'
import twitter from '../image/twitter.svg'
import instagram from '../image/instagram.svg'
import youtube from '../image/youtube.svg'
import gol from '../image/pegi-eu.png'
import usk from '../image/usk-12.png'


function Footer(props) {
  return (
    <div id="footer" className="justify-content-center d-flex bg-black-header cont-footer">
      <div className="container align-items-center d-flex">
        <div className="row w-100 justify-content-center align-items-center flex-column mx-0">
          <div className="pt-60 col-md-6 col-sm-6 col-7">
            <img className="w-100" src={riotIcon} alt="Riot" />
          </div>

          <div className="d-flex pt-50 container-479 justify-content-between">
            <div className="px-10">
              <a className="d-flex justify-content-center " href="https://www.facebook.com/LeagueofLegendsES/" target="_blank">
                <img src={facebook} className=" tm-icon colr_gris" />
              </a>
            </div>
            <div className="px-10">
              <a className="d-flex justify-content-center" href="https://www.youtube.com/LeagueofLegendsES" target="_blank">
              <img src={youtube} className=" tm-icon colr_gris" />
              </a>
            </div>
            <div className="px-10">
              <a className="d-flex justify-content-center" href="https://twitter.com/lol_es" target="_blank">
              <img src={twitter} className=" tm-icon colr_gris" />
              </a>
            </div>
            <div className="px-10">
              <a className="d-flex justify-content-center" href="https://www.instagram.com/leagueoflegends/" target="_blank">
              <img src={instagram} className=" tm-icon colr_gris" />
              </a>
            </div>
          </div>

          <div className="pt-50 fz-20 text-center grey-footer container-1176 mx-10 col-md-11 col-sm-11 col-10">
            <p>TM &amp; © 2020 Riot Games, INC. Todos los derechos reservados. Riot Games, League o Legends y PvP.net son
              marcas comerciales o marcas registradas de riot Games, Inc.</p>
          </div>

          <div className="row d-flex container-756 justify-content-center pt-30">
            <div className="col-md-4 px-10 text-underline fz-20 gray-footer text-center">
              <a href="#" className="gray-footer grey-footer">política de privacidad</a>
            </div>
            <div className="col-md-4 px-10 text-underline fz-20 gray-footer text-center">
              <a href="#" className="gray-footer grey-footer">Términos de uso</a>
            </div>
            <div className="col-md-4 px-10 text-underline fz-20 text-center">
              <a href="#" className="gray-footer grey-footer">Políticas de cookies</a>
            </div>
          </div>

          <div className="col-7 col-sm-8 col-md-4 pt-30 pb-40 container-258 justify-content-between d-flex">
            <div>
              <img src={gol} className="pegi" alt="pegi-eu" />
            </div>
            <div>
              <img src={usk} className="usk" alt="usk-12" />
            </div>
          </div>

        </div>
      </div>
    </div>
  )

}

export default Footer