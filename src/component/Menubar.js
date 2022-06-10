import { Component } from "react";
import {Link} from "react-router-dom";
class Menubar extends Component {
    render() {
        return <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="#">Navbar</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/event">Event</Link>
      </li>
     
       
      <li className="nav-item">
        <Link className="nav-link " to="/routine">Routine</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link " to="/gallery">Gallery</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link " to="/register">Register</Link>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
        </div>;
    }
}

export default Menubar;