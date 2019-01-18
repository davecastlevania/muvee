import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Nav from '../Nav/Nav'
import Display from '../Display/Display'
import Details from '../Details/Details'
import Search from '../Search/Search'


const Main = () => (
  <div>
    <Nav />
    <main>
      <Switch>
        <Route exact path='/search' component={Search}/>
        <Route path='/movies/:id' component={Details}/>
      </Switch>
    </main>
  </div>
  )

export default Main;
