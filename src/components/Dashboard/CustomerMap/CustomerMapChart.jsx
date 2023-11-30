import React from 'react'
import { Chart } from "react-google-charts";
import { useSnapshot } from 'valtio'
import state from '../../../proxyState/store';


const CustomerMapChart = () => {
    const snap = useSnapshot(state)
    const data = [
        ["", "Customers", "Sales", "Profit"],
        ["Jan", 1000, 400, 200],
        ["Feb", 1170, 460, 250],
        ["Mar", 660, 1120, 300],
        ["Apirl", 1030, 540, 350],
        ["May", 1030, 940, 650],
        ["June", 1030, 8240, 3250],
        ["July", 1030, 3420, 3550],
        ["August", 1030, 5840, 3250],
        ["September", 1030, 7540, 2350],
        ["October", 1030, 6240, 6210],
        ["November", 1030, 5420, 4350],
        ["December", 1030, 5540, 2450],
    ];
    const data2 = [
        ["", "Customers", "Sales", "Profit"],
        ["Mon", 100, 400, 200],
        ["Tue", 170, 460, 250],
        ["Wed", 60, 120, 300],
        ["Thur", 130, 540, 350],
        ["Fri", 100, 40, 650],
        ["Sat", 100, 820, 250],
        ["Sun", 130, 320, 550],
    ];
    const data3 = [
        ["", "Customers", "Sales", "Profit"],
        ["12pm", 100, 400, 200],
        ["2pm", 170, 460, 250],
        ["4pm", 60, 120, 300],
        ["6pm", 130, 540, 350],
        ["8pm", 100, 40, 650],
        ["10pm", 110, 80, 250],
        ["12pm", 120, 340, 550],
        ["12am", 160, 330, 550],
        ["2am", 130, 320, 550],
        ["4am", 130, 320, 550],
        ["8am", 130, 320, 550],
        ["10am", 130, 320, 550],
    ];


    return (
        <>
        <div className='sm:block hidden'>
        <Chart
            style={{ marginTop: 40 }}
            chartType="Bar"
            width="100%"
            height="400px"
            data={snap.customerFilterCriteria === "monthly" ? data : "" || snap.customerFilterCriteria === "weekly" ? data2 : "" || snap.customerFilterCriteria === "today" ? data3 : ""}
            options={{
                colors: ["#EA7A9A", "#FECACA", "#a2ffb6"],
            }}
        />
        </div>
        <div className="sm:hidden">
        <Chart
            style={{ marginTop: 40 }}
            chartType="Bar"
            width="100%"
            height="400px"
            data={snap.customerFilterCriteria === "monthly" ? data : "" || snap.customerFilterCriteria === "weekly" ? data2 : "" || snap.customerFilterCriteria === "today" ? data3 : ""}
            options={{
                colors: ["#EA7A9A", "#FECACA", "#a2ffb6"],
            }}
        />
        </div>
        </>
    )
}

export default CustomerMapChart
