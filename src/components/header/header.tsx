import React, { useContext } from 'react';
import { AppContext } from '../../contexts/app.context';

const Header = () => {
  const appContext = useContext(AppContext);
  
  return <nav className="navbar navbar-expand-md fixed-top bg-white">
    <div className="container">
        <a className="navbar-brand title" href="#">
            Rally Health India
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
            aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">


            </ul>
            <form className="form-inline mt-2 mt-md-0">
                {appContext.user ? <li className="dropdown profileCTA">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                        aria-expanded="false">Profile <span className="caret"></span></a>
                    <ul className="dropdown-menu" aria-labelledby="about-us">
                        <li><a href="#">Settings</a></li>
                        <li><a href="/login">Logout</a></li>
                    </ul>
                </li> : <></> }
            </form>
        </div>
    </div>
  </nav>;
}

export default Header;
