import React from 'react'
import Helmet from 'react-helmet'

import './DefaultLayout.css'

export const DefaultLayout = props => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Box Shadow Generator</title>
      <link rel="canonical" href="http://catsonis.github.io/box-shadow-generator" />
      <link
        href="https://fonts.googleapis.com/css?family=Rubik:400,500&display=swap"
        rel="stylesheet"
      />
    </Helmet>

    {props.children}
  </div>
)
