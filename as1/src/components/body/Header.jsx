import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import PropTypes from 'prop-types';

import logo from '../../img/logo_1.png';

const HeaderItem = () => {
    return <div className="header">
        <div className="header_title">
            <img src={logo} alt="logo"/>
        </div>
        <div className="header_logo">
            <div className="squere"></div>
        </div>
    </div>;
},
Header = () => {        
        return(
            <header id="header">
                <Switch>
                    <Route
                        path="/"
                        component={() => <HeaderItem />}
                    />
                </Switch>
            </header>
        )
}
  
export default Header;