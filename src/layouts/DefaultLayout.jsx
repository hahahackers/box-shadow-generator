import React from 'react'
import Helmet from 'react-helmet'

import './DefaultLayout.css'

export const DefaultLayout = props => (
  <div>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css?family=Rubik:400,500&display=swap"
        rel="stylesheet"
      />
    </Helmet>

    {props.children}
  </div>
)
