import React from "react";
import { Chart } from "react-google-charts";
import { useSnapshot } from 'valtio';
import state from "../../../proxyState/store";

export const filterDataRevenue = [{
  filterCriteria: "today",
  data: [["today", "Revenue"],
  ["6am", 2430],
  ["12am", 660],
  ["6pm", 1170],
  ["12pm", 1000],
  ]
}, {
  filterCriteria: "weekly",
  data: [["Weekly", "Revenue"],
  ["Mon", 1000],
  ["Tue", 1170],
  ["Wed", 660],
  ["Thu", 1030],
  ["Fri", 431],
  ["Sat", 2221],
  ["Sun", 4551],
]
}, {
  filterCriteria: "monthly",
  data: [["Montly", "Revenue"],
  ["Jan", 1000],
  ["Feb", 4170],
  ["Mar", 660],
  ["Apirl", 1030],
  ["May", 4030],
  ["Jun", 7030],
  ["July", 7730],
  ["Sep", 2730],
  ["Oct", 7730],
  ["Nov", 12730],
  ["Dec", 51730],
]
}]

const ChartRevenue = () => {
  const snap = useSnapshot(state)
  const currentFilterCriteria = snap.revenueFilterCriteria
  const options = {
    curveType: "function",
    legend: { position: "bottom" },
    colors: ["#EA7A9A"],
    intervals: { style: "area" },

  };

  return (
    <div>
      <Chart
        chartType="LineChart"
        width={"100%"}
        height={"350px"}
        
        data={filterDataRevenue.filter(data => data.filterCriteria === currentFilterCriteria)[0].data}
        options={options}
      />
    </div>
  )
}

export default ChartRevenue
