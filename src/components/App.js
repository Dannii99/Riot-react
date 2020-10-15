import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../pages/home.js'
import PrimeraNoticia from '../pages/primeraNoticia.js'
import TerceraNoticia from '../pages/terceraNoticia.js'
import NotFound from '../pages/notFonund.js'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/PrimeraNoticia" component={PrimeraNoticia} />
          <Route exact path="/TerceraNoticia" component={TerceraNoticia} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;