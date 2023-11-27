import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ResetStyle from './styles/ResetStyle.jsx'
import { GlobalStyle } from './styles/GlobalStyle.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Profiler>
    <GlobalStyle/>
    <ResetStyle/>
    <App />
  </React.Profiler>,
)
