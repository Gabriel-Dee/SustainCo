import { Component } from "react";
import { Menuitems } from "./Menuitems";
import "./Navbar.css";
import { Link } from "react-router-dom";;

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  render() {
    return (
      <nav className="navbar-items">
        <h1 className="nav-logo">SustainCo</h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={ this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {Menuitems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
           <Link to="../../Routes/Loginsignup">
              <button>Sign Up</button>
            </Link>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
