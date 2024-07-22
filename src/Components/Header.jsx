import React from 'react'
import "./Style.css"

const Header = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container px-lg-5">
    <a className="navbar-brand" href="/">Shoes Shop</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
    <div className="navbar-collapse collapse show" id="navbarSupportedContent" style={{}}>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item"><a className="nav-link" aria-current="page" href="#!">Home</a></li>
        <li className="nav-item"><a className="nav-link active" href="#!">Shop</a></li>
        <li className="nav-item"><a className="nav-link" href="#!">Contact</a></li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header