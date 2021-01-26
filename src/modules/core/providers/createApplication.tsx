import React from 'react'
import { render } from 'react-dom'

import { Application } from '../components/RootComponent'

export function createApplication() {
  function run() {
    render(<Application />, document.querySelector('#app'))
  }

  return {
    run,
  }
}
