import React from 'react'
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'

import { BoxShadowGenerator } from '$/box-shadow'
import { GradientsPage } from '$/gradients'
import { NumberConversionPage } from '$/number-conversion'

import { Menu } from './Menu'

export const Application = () => (
  <HashRouter>
    <Menu />
    <Switch>
      <Route exact path="/">
        <Redirect to="/box-shadow" />
      </Route>

      <Route path="/box-shadow">
        <BoxShadowGenerator />
      </Route>

      <Route path="/gradients">
        <GradientsPage />
      </Route>

      <Route path="/number-conversion">
        <NumberConversionPage />
      </Route>
    </Switch>
  </HashRouter>
)
