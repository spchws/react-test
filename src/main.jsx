import React from 'react'
import ReactDOM from 'react-dom/client'
import Admin from './Admin.jsx'
import User from './User.jsx'
import Bio from './Bio.jsx'
import Home from './Home.jsx'
// import me from "./hook/me";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Bio /> */}
    {/* <Home /> */}
    {/* <Admin /> */}
    <User />
  </React.StrictMode>,
)
