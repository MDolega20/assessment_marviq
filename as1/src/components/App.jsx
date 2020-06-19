import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Body from './Body';

class App extends Component{
    render(){
        return(
            <Router>
                <Body />
            </Router>
        );
    }
}


export default App;