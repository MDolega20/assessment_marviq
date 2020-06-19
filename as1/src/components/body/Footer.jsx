import React from 'react';
import { NavLink } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
// import ReactTooltip from 'react-tooltip';
// import PropTypes from 'prop-types';

const FooterContainer = () => {
    let bookmarks1 = [
        // {
        //     path: "/kontakt",
        //     name: "kontakt"
        // },
        {
            path: "/lokalizacje",
            name: "lokalizacje"
        },
        {
            path: "/godziny",
            name: "godziny otwarcia"
        }
    ],
    bookmarks2=[
        {
            path: "/kontakt",
            name: "zgłoś błąd"
        },
        {
            path: "/regulamin",
            name: "regulamin"
        },
        {
            path: "/politykaprywatności",
            name: "polityka prywatności"
        }
    ],
    items1 = bookmarks1.map((dataItem,i) => {
        return <NavLink key={`key_zdvsdzbsdb_${i}`} to={dataItem.path} exact={dataItem.path === "/" ? true : false} className="nav_item_content" activeClassName="_nav_item_content--active">{dataItem.name}</NavLink>;
    }),
    items2 = bookmarks2.map((dataItem,i) => {
        return <NavLink key={`key_zdvsdzbsdb_${i}`} to={dataItem.path} exact={dataItem.path === "/" ? true : false} className="nav_item_content" activeClassName="_nav_item_content--active">{dataItem.name}</NavLink>;
    });
    
    return (
        <div className="footer">
            <div className="footer_col">
                <div className="footer_col_row"><p>Signum 2019. Wszystkie prawa zastrzeżone.</p></div>
                <div className="footer_col_row">
                    {/* <p>Strona zaprojektowana i wykonana przez <a href="https://dolega.me">dolega.me</a> oraz Rafała D.</p> */}
                </div>
            </div>
            <div className="footer_col">
                <div className="footer_col_row">
                    <nav>
                        {items1}
                    </nav>
                </div>
                <div className="footer_col_row">
                    <nav>
                        {items2}
                    </nav>
                </div>
            </div>
        </div>
    )
},
Footer = () => {
    return (
        <footer>
            <Switch>
                <Route
                    path="/"
                    component={() => <FooterContainer />}
                />
            </Switch>
        </footer>
    )
}

export default Footer;