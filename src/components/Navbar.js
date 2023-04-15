import React from 'react'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">
        TextEditor
      </a>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
      
            <ul className="dropdown-menu">
            </ul>
         
          <li className="nav-item">
            <a className="nav-link active" href="/">Contact Us</a>
          </li>
          
        </ul>
        <form className="d-flex" role="search">
          {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
          <button className="btn btn-outline-primary mx-2" type="submit">Login</button>
          <button className="btn btn-outline-primary" type="submit">Sign Up</button>
        </form>
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} mx-2`}>
  <input className="form-check-input"style={{cursor:'pointer'}} onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label"  htmlFor="flexSwitchCheckDefault">Enable {props.mode==='light'?'dark':'light'} mode</label>
</div>
      </div>
    </div>
  </nav>
  )
}
