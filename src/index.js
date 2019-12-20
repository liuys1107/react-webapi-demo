import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/app.tsx'

const root = document.getElementById('root')

if (process.env.NODE_ENV !== 'production') {
  import('react-axe').then(axe => {
    const reactAxe = axe.default
    reactAxe(React, ReactDOM, 3000)
    ReactDOM.render(<App />, root)
  })
} else {
  ReactDOM.render(<App />, root)
}
