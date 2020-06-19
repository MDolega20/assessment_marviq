import React, {useState, useEffect} from 'react';
import { Switch, Route, NavLink} from 'react-router-dom';
// import PropTypes from 'prop-types';

const Machine = (props) => {
    let {MACHINE} = props.machineData;

    return <>{MACHINE}</br></>;
}

const Machines = () => {
    const [machines, setMachines] = useState([]);

    useEffect(() => {
        let data = require('./input.json')
        setMachines(data)
    }, [])

    const machines_r = machines.map((machineData) => {
        return <Machine machineData={machineData} />;
    });

    return <>{
        machines.map((machineData) => {
            return <Machine machineData={machineData} />;
        })
    }</>;
}
const Main = () => {

    return (
        <main className="main">
           <Machines />
        </main>
    );
};

export default Main;