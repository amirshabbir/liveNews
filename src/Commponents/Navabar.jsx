import React from "react";
import {Link} from "react-router-dom"


function Navbar(){
    return(
        <>

        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container">
    <Link className="navbar-brand text-white" to="/"><h4>News Hubs</h4></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul className="navbar-nav justify-content-end">
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/General">General</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/Business">Business</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/entertainment">Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/Health">Health</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/Science">Science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/Sports">Sports</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/Technology">Technology</Link>
        </li>
      </ul>
    </div>
  </div>
        </nav>

       
        </>
    )
};
export default Navbar;