import React, { Component } from 'react';
import { render } from 'react-dom';

import './styles/scss/structure.scss';

import App from './components/App';

class Container extends Component{
    render(){
        return(
                <App />
        )
    }
}

render((
    <Container />
), document.getElementById('root'));