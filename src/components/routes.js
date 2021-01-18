import React from 'react';

import Aboutme from './aboutme'
import CV from './resume'
import Projects from './projects'
import Background from './background'

import { Switch, Route } from 'react-router-dom';

const Main = () => (
    <Switch>
        <Route exact path="/ReactPortfolio" component={Background} />
        <Route path="/aboutme" component={Aboutme} />
        <Route path="/projects" component={Projects} />
    </Switch>
)

/*  <Route path="/CV" component={CV} />   */

export default Main;