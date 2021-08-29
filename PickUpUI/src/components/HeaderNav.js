import React from 'react';
import '../styles/HeaderNav.css'
import '../styles/body.css'

export const HeaderNav = () => {

    return (
   <div>
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" ></meta>
    </head>
    <header>
      <div className="navbar-header">
                  
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a className="waves-effect waves-light btn green" href=''>LogIn</a></li>
            <li><a className="waves-effect waves-light btn green" href="">Contact</a></li>
          </ul>
                  
         </div>
    </header>
    </div>
    );
  }
export default HeaderNav;