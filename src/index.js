import React from 'react'
import ReactDom from 'react-dom'


import 'bootstrap/dist/css/bootstrap.css'
import './global.css'
import App from './component/App'

const container = document.getElementById('root')

ReactDom.render(<App />, container)

