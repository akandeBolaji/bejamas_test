import React from "react";
import { Link } from "gatsby";

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
      <div className="navbar-item">
        <Link className="navbar-text" to={data.firstLink.link}>
          {data.firstLink.name}
        </Link> 
        {active == data.firstLink.name && 
          <span className="icon">
            .
          </span>
        } 
    
      </div>
      <div className="navbar-item">
        <Link className="navbar-text" to={data.secondLink.link}>
        {data.secondLink.name}
        </Link> 
        {active == data.secondLink.name && 
          <span className="icon">
            .
          </span>
        }  
      </div>
    </div>
    <div className="my-navbar-center">
      <div className="navbar-item"><img src={data.logo} alt="logo" width="36" height="50" />
      </div>
    </div>
    <div className="navbar-end">
      <div className="navbar-item">
         <Link className="navbar-text" to={data.thirdLink.link}>
        {data.thirdLink.name}
         </Link>
         {active == data.thirdLink.name && 
          <span className="icon">
            .
          </span>
        } 
      </div>
      <div className="navbar-item">
        <Link className="navbar-text" to={data.fourthLink.link}>
        {data.fourthLink.name}
      </Link>
      {active == data.fourthLink.name && 
          <span className="icon">
            .
          </span>
        } 
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
   console.log(data);
  return <NavbarTemplate data={data} active={props.active} />;
};

export { Navbar };
