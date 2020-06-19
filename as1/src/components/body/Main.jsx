import React from 'react';
import { Switch, Route, NavLink} from 'react-router-dom'; //Redirect maybe for errors
// import PropTypes from 'prop-types';

import Home from './pages/Home';
import DetailSales from './pages/DetailSales';
import MassSales from './pages/MassSales';
import Contact from './pages/Contact';
import Error from './pages/Error';

const NavItem = (props) => {
    const {name, path, alignRight, mobile} = props.dataItem;

    let classAdditional = alignRight ? " main_nav_item--right" : "";
    classAdditional = mobile ? " main_nav_item--mobile mobile" : "";

    return <div className={"main_nav_item"+classAdditional}>
         <NavLink to={path} exact={path === "/" ? true : false} className="main_nav_item_content" activeClassName="main_nav_item_content--active">{name}</NavLink>
    </div>;
},
Nav = () => {
    let bookmarks = [
        {
            path: "/glowna",
            name: "strona główna"
        },
        {
            path: "/detal",
            name: "cennik detaliczny"
        },
        {
            path: "/hurt",
            name: "cennik hurtowy"
        },
        // {
        //     path: "/o_nas",
        //     name: "o nas",
        //     alignRight: true
        // },
        {
            path: "/kontakt",
            name: "kontakt",
            alignRight: true,
            mobile: true
        },
        {
            path: "/kontakt",
            name: "skontaktuj się",
            alignRight: true,
        },
    ],
    items1 = bookmarks.map((dataItem,i) => {
        if(dataItem.alignRight !== true || dataItem.mobile === true)
            return <NavItem key={`${dataItem.name}_${i}`} dataItem={dataItem} />;
        else
            return false;
    }),
    items2 = bookmarks.map((dataItem,i) => {
        if(dataItem.alignRight === true)
            return <NavItem key={`${dataItem.name}_${i}`} dataItem={dataItem} />;
        else
            return false;
    });
    

    return <nav className="main_nav">
        <div>
            {items1}
        </div>
        <div>
            {items2}
        </div>
    </nav>;
},
Main = () => {
    // let currentUrl = window.location.pathname;

    // if (currentUrl === "/") {
    //     return <Redirect to="/glowna" />;
    // }

    return (
        <main className="main">
            <Nav />
            <Switch>
                <Route exact path="/" component={() => <Home />} />
                <Route exact path="/glowna" component={() => <Home />} />
                <Route exact path="/detal" component={() => <DetailSales />} />
                <Route exact path="/hurt" component={() => <MassSales />} />
                <Route exact path="/kontakt" component={() => <Contact />} />
                <Route path="/*" component={() => <Error error={{code: 404}} />} />
            </Switch>
        </main>
    );
};

export default Main;