import React, {useState, useEffect} from 'react';
import { Line } from 'react-chartjs-2';

const Machine = (props) => {
    const {MACHINE, 
        DATETIME_FROM,
        DATETIME_TO,
        SCRAP_PERCENTAGE,
        DOWNTIME_PERCENTAGE,
        PRODUCTION,
        isRunning,
        uptime,
        downtime,
        productionPerHourWithoutScrap,
        productionPerHour,
        machineId,
        machineStatus,
        machineStatusName,
        machineStatusColor,
        temperatureRange,
        temperature,
        PERFORMANCE,
        AVAILABILITY,
        QUALITY,
        OEE
    } = props.machineData,
    {controlMachine} = props,
    [rounds, setRound] = useState({
        numbers: false,
        percentage: false
    }),
    round = (type, value) => {
        setRound(prevState => ({
            ...prevState,
            [type]: value
          }));
    };

    let chartData = {
        datasets: [{
            label: 'Production without scrap',
            data: productionPerHourWithoutScrap,
            backgroundColor: "#81F4E1"
        },{
            label: 'Production',
            data: productionPerHour,
            backgroundColor: "#56CBF9",
            hidden: true
        }],
        labels: Array.from(Array(24), (_, i) => i + 1)
    }

    return <div class="machines_item">
        <div class="machines_item_name">
            <h2>{MACHINE}</h2>
        </div>
        <div class="machines_item_details">
            {/* <h3>Details</h3> */}
            <div class="machines_item_details_row">
                <div>
                    <h4>Machine name</h4>
                    <p>{MACHINE}</p>
                </div>
                <div className="machines_item_control">
                    <h4>Controls</h4>
                    <div>
                    {
                        isRunning ? <button onClick={() => controlMachine(machineId, false)}>Stop</button> : <button onClick={() => controlMachine(machineId, true)}>Start</button>
                    }
                    </div>
                </div>
            </div>
            <div class="machines_item_details_row">
                <div>
                    <h4>Status</h4>
                    <p style={{color: machineStatusColor}}>{isRunning ? "running" : "stopped"}</p>
                </div>
                <div>
                    <h4>Temperature</h4>
                    <p style={{color: machineStatusColor}}>{temperatureRange}</p>
                </div>
            </div>
            <div class="machines_item_details_row">
                <div>
                    <h4>Uptime</h4>
                    <p>{uptime}</p>
                </div>
                <div>
                    <h4>Downtime</h4>
                    <p>{downtime}</p>
                </div>
            </div>
            {/* <div>
                <h4>Datetime</h4>
                <p>form {DATETIME_FROM} </p>
                <p>to {DATETIME_TO}</p>
            </div> */}
            <div class="machines_item_details_row">
                <div>
                    <h4>Scrap procentage</h4>
                    <p>{rounds.percentage ? (SCRAP_PERCENTAGE * 100).toFixed() : SCRAP_PERCENTAGE * 100} %</p>
                </div>
                <div>
                    <h4>Downtime percentage</h4>
                    <p>{rounds.percentage ? (DOWNTIME_PERCENTAGE * 100).toFixed() : DOWNTIME_PERCENTAGE * 100} %</p>
                </div>
            </div>
            <div class="machines_item_details_row">
                <div>
                    <h4>Net production</h4>
                    <p>{rounds.numbers ? (PRODUCTION).toFixed() : PRODUCTION}</p>
                </div>
                <div>
                    <h4>Net production without scrap</h4>
                    <p>{rounds.numbers ? (PRODUCTION - PRODUCTION * SCRAP_PERCENTAGE).toFixed() : PRODUCTION - PRODUCTION * SCRAP_PERCENTAGE}</p>
                </div>
            </div>
            <div>
                <h4>Overall Equipment Efficiency</h4>
                <p>{rounds.percentage ? (OEE * 100).toFixed() : OEE * 100} %</p>
            </div>
        </div>
        <div class="machines_item_chart">
            <h3>Net production</h3>
            <Line data={chartData} height="200px" />
        </div>
        <div class="machines_item_ui_c">
            <h4>User interface switches</h4>
            <div>
                <label>
                    <input type="checkbox" checked={rounds.percentage} onChange={(c) => round("percentage", c.target.checked)}/>
                    <p>round procents</p>
                </label>
                <label>
                    <input type="checkbox" checked={rounds.numbers} onChange={(c) => round("numbers", c.target.checked)}/>
                    <p>round production</p>
                </label>
            </div>
        </div>
    </div>;
}

const Machines = () => {
    const [machines, setMachines] = useState([]);
    const controlMachine = (machineId, value) => {
        // value // true = start | false = stop
        console.log("Turning " + (value ? "on" : "off") + " machine with id "+machineId)
        let machinesNew = [...machines];
        machinesNew[machineId].isRunning = value;
        
        setMachines(machinesNew);
    }

    useEffect(() => {
        let data = require('./input_1.json'),
        data2 = require('./input_2.json'),
        data3 = require('./input_3.json');

        data.forEach((machine, index) => {
            let {H0,H1,H2,H3,H4,H5,H6,H7,H8,H9,H10,H11,H12,H13,H14,H15,H16,H17,H18,H19,H20,H21,H22,H23} = machine;

            machine.machineId = index

            machine.isRunning = true
            machine.uptime = 0
            machine.downtime = 0

            machine.productionPerHour = [H0,H1,H2,H3,H4,H5,H6,H7,H8,H9,H10,H11,H12,H13,H14,H15,H16,H17,H18,H19,H20,H21,H22,H23]

            machine.productionPerHourWithoutScrap = [];

            machine.productionPerHour.forEach((p) => {machine.productionPerHourWithoutScrap.push(p - p * machine.SCRAP_PERCENTAGE)});

            for (var d in data2){
                if (data2.hasOwnProperty(d)) {
                    if(d === machine.MACHINE){
                        machine.machineStatus = data2[d]
                        machine.machineStatusName = data2[d].split("/")[0]
                        machine.machineStatusColor = data2[d].split("/")[1]

                        switch (machine.machineStatus) {
                            case "good/green":
                                machine.temperatureRange = "default"
                                break;
                            case "warning/orange":
                                machine.temperatureRange = "85-100"
                                break;
                            case "fatal/red":
                                machine.temperatureRange = "100+"
                                break;
                            default:
                                break;
                        }
                    }
                }
            }

            machine.temperature = null

            // An OEE is a percentage calculated by multiplying 3 percentages:

            // Performance% = actual gross production / norm gross production * 100%
            // Availability% = actual uptime / norm uptime * 100%
            // Quality% = (actual gross production - actual scrap) / actual gross production * 100% 

            data3.forEach((d3, index3) => {
                if(index3 === index){
                    machine.PERFORMANCE = d3.PERFORMANCE;
                    machine.AVAILABILITY = d3.AVAILABILITY;
                    machine.QUALITY = d3.QUALITY;
                    machine.OEE = d3.OEE;
                }
            });

            // machine.roundPercentage = false
            // machine.roundNumbers = false
            

            data[index] = machine;
        });
        
        setMachines(data)
    }, [])

    // useEffect(() => {
    //     let newMachines = [];
    //     setTimeout(() => {
    //         machines.forEach((machine, index) => {
    //             machine.machineId = index;
    
    //             if (machine.isRunning){
    //                 machine.uptime += 1;
    //             }else{
    //                 machine.downtime += 1;
    //             }
    
    //             newMachines[index] = machine;
    //         });
    //     }, 1000);
        
        
        
    //     setMachines(newMachines)
    //   }, []);

    return <div class="machines">{
        machines.map((machineData, index) => {
            return <Machine 
                machineData={machineData} 
                key={"machine_"+index} 
                controlMachine={(machineId, value) => controlMachine(machineId, value)}
            />;
        })
    }</div>;
}
const Main = () => {

    return (
        <main className="main">
           <Machines />
        </main>
    );
};

export default Main;