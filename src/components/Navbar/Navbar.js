import React from "react";
import { Link } from "gatsby";
import {
  FaCircle
} from 'react-icons/fa';
 
import "./styles.scss";

export const NavbarTemplate = ({ data, active }) => (
  <nav className="navbar my-navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
        <div onClick={handleClick} className="navbar-burger burger" data-target="my-navbar-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
         <img className="navbar-center" src={data.logo} alt="logo" width="36" height="50" />
    </div>
    <div id="my-navbar-menu" className="navbar-menu ">
    <div className="navbar-start">
      <div className="mynavbar-item navbar-item">
      <div className="mynavbar-test">
      <FaCircle className={"mymobile " + (active === data.firstLink.name ? 'mynavbar-icon' : 'hidden')} />
        <Link className="navbar-text" to={data.firstLink.link}>
          {data.firstLink.name}
        </Link>
         <FaCircle className={"mydesktop " + (active === data.firstLink.name ? 'mynavbar-icon' : 'hidden')} />
        </div>
      </div>
      <div className="mynavbar-item navbar-item"> 
      <div className="mynavbar-test">
      <FaCircle className={"mymobile " + (active === data.secondLink.name ? 'mynavbar-icon' : 'hidden')} />
        <Link className="navbar-text" to={data.secondLink.link}>
          {data.secondLink.name}
        </Link>
        <FaCircle className={"mydesktop " +  (active === data.secondLink.name ? 'mynavbar-icon' : 'hidden')} />
        </div>
      </div>
    </div>
    <div className="my-navbar-center">
      <div className="navbar-item"><img src={data.logo} alt="logo" width="36" height="50" />
      </div>
    </div>
    <div className="navbar-end">
      <div className="mynavbar-item navbar-item">
      <div className="mynavbar-test">
      <FaCircle className={"mymobile " + (active === data.thirdLink.name ? 'mynavbar-icon' : 'hidden')} />
        <Link className="navbar-text" to={data.thirdLink.link}>
          {data.thirdLink.name}
        </Link>
        <FaCircle className={"mydesktop " + (active === data.thirdLink.name ? 'mynavbar-icon' : 'hidden')} />
        </div>
      </div>
      <div className="mynavbar-item navbar-item">
      <div className="mynavbar-test">
      <FaCircle className={"mymobile " + (active === data.fourthLink.name ? 'mynavbar-icon' : 'hidden')} />
        <Link className="navbar-text" to={data.fourthLink.link}>
          {data.fourthLink.name}
        </Link>
        <FaCircle className={"mydesktop " + (active === data.fourthLink.name ? 'mynavbar-icon' : 'hidden')} />
        </div>
      </div>
    </div>
  </div>
  </nav>
);


const handleClick = e => {
  document.querySelector('.navbar-burger').classList.toggle('is-active');
  document.querySelector('#my-navbar-menu').classList.toggle('is-active');
}



const Navbar = props => {
  if (!props.data) {
    return null;
  }
  const data = props.data.edges[0].node.frontmatter;
  return <NavbarTemplate data={data} active={props.active} />;
};

export { Navbar };
