import React from 'react'
import { render } from 'react-dom'
import '@babel/polyfill'

import App from './App'
import './styles.css'

const renderApp = Component => render(<Component />, document.getElementById('root'))

renderApp(App)

if (module.hot) {
  module.hot.accept('./App', () => renderApp(App))
}
