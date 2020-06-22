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
    [uiControls, setUiControls] = useState({
        numbers: false,
        percentage: false,
        randomTemp: false,
        unitsTemp: true
    }),
    round = (type, value) => {
        setUiControls(prevState => ({
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
    },
    chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }

    return <div class="machines_item">
        <div class="machines_item_name">
            <h2>{MACHINE}</h2>
        </div>
        <div class="machines_item_details">
            <div class="machines_item_details_row">
                <div>
                    <h4>Machine name</h4>
                    <p>{MACHINE}</p>
                </div>
                <div className="machines_item_control">
                    <h4>Controls</h4>
                    <div>
                    {
                        isRunning ? 
                        <button onClick={() => controlMachine(machineId, false)} style={{background: "red"}}>Stop</button> : 
                        <button onClick={() => controlMachine(machineId, true)} style={{background: "green"}}>Start</button>
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
                    <p style={{color: machineStatusColor}}>{uiControls.randomTemp ? temperature: temperatureRange} { uiControls.unitsTemp ? "°C" : "" }</p>
                </div>
            </div>
            <div class="machines_item_details_row">
                <div>
                    <h4>Uptime</h4>
                    <p>{uptime} sec</p>
                </div>
                <div>
                    <h4>Downtime</h4>
                    <p>{downtime} sec</p>
                </div>
            </div>
            <div class="machines_item_details_row">
                <div>
                    <h4>Scrap procentage</h4>
                    <p>{uiControls.percentage ? (SCRAP_PERCENTAGE * 100).toFixed() : SCRAP_PERCENTAGE * 100} %</p>
                </div>
                <div>
                    <h4>Downtime percentage</h4>
                    <p>{uiControls.percentage ? (DOWNTIME_PERCENTAGE * 100).toFixed() : DOWNTIME_PERCENTAGE * 100} %</p>
                </div>
            </div>
            <div class="machines_item_details_row">
                <div>
                    <h4>Net production</h4>
                    <p>{uiControls.numbers ? (PRODUCTION).toFixed() : PRODUCTION}</p>
                </div>
                <div>
                    <h4>Net production without scrap</h4>
                    <p>{uiControls.numbers ? (PRODUCTION - PRODUCTION * SCRAP_PERCENTAGE).toFixed() : PRODUCTION - PRODUCTION * SCRAP_PERCENTAGE}</p>
                </div>
            </div>
            <div>
                <h4>Overall Equipment Efficiency</h4>
                <p>{uiControls.percentage ? (OEE * 100).toFixed() : OEE * 100} %</p>
            </div>
        </div>
        <div class="machines_item_chart">
            <h3>Net production</h3>
            <Line data={chartData} maintainAspectRatio={false} height="210px" responsive={false} options={chartOptions}/>
        </div>
        <div class="machines_item_ui_c">
            <h4>User interface switches</h4>
            <div>
                <label>
                    <input type="checkbox" checked={uiControls.percentage} onChange={(c) => round("percentage", c.target.checked)}/>
                    <p>round procents</p>
                </label>
                <label>
                    <input type="checkbox" checked={uiControls.numbers} onChange={(c) => round("numbers", c.target.checked)}/>
                    <p>round production</p>
                </label>
                <label>
                    <input type="checkbox" checked={uiControls.randomTemp} onChange={(c) => round("randomTemp", c.target.checked)}/>
                    <p>random temperature</p>
                </label>
                <label>
                    <input type="checkbox" checked={uiControls.unitsTemp} onChange={(c) => round("unitsTemp", c.target.checked)}/>
                    <p>temperature units</p>
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
        let data = require('./input_1.json'), // as 1
        data2 = require('./input_2.json'), // as 2
        data3 = require('./input_3.json'); // as 3

        data.forEach((machine, index) => {
            let {H0,H1,H2,H3,H4,H5,H6,H7,H8,H9,H10,H11,H12,H13,H14,H15,H16,H17,H18,H19,H20,H21,H22,H23} = machine;

            machine.machineId = index

            machine.isRunning = true
            machine.uptime = 0
            machine.downtime = 0

            machine.productionPerHour = [H0,H1,H2,H3,H4,H5,H6,H7,H8,H9,H10,H11,H12,H13,H14,H15,H16,H17,H18,H19,H20,H21,H22,H23]

            machine.productionPerHourWithoutScrap = [];
            // calculate real production without scrap
            machine.productionPerHour.forEach((p) => {machine.productionPerHourWithoutScrap.push(p - p * machine.SCRAP_PERCENTAGE)});

            const getRandomTemperature = (min, max) => {
                return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
            }

            // set status 
            for (var d in data2){
                if (data2.hasOwnProperty(d)) {
                    if(d === machine.MACHINE){
                        machine.machineStatus = data2[d]
                        machine.machineStatusName = data2[d].split("/")[0]
                        machine.machineStatusColor = data2[d].split("/")[1]

                        switch (machine.machineStatus) {
                            case "good/green":
                                machine.temperatureRange = "default"
                                machine.temperature = getRandomTemperature(0,84)
                                break;
                            case "warning/orange":
                                machine.temperatureRange = "85-100"
                                machine.temperature = getRandomTemperature(85,100)
                                break;
                            case "fatal/red":
                                machine.temperatureRange = "100+"
                                machine.temperature = getRandomTemperature(101,150)
                                break;
                            default:
                                break;
                        }
                    }
                }
            }

            // machine.temperature = null

            // set ooc
            data3.forEach((d3, index3) => {
                if(index3 === index){
                    machine.PERFORMANCE = d3.PERFORMANCE;
                    machine.AVAILABILITY = d3.AVAILABILITY;
                    machine.QUALITY = d3.QUALITY;
                    machine.OEE = d3.OEE;
                }
            });          

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