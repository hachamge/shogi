import { Chart } from "../../node_modules/frappe-charts/dist/frappe-charts.min.esm.js";

export function graph({ id }) {
  const data = {
    labels: ["a", "b", "c", "d", "e", "f", "g", "h"],
    datasets: [
      {
        name: "knght Data",
        type: "line",
        values: [25, 40, 30, 35, 8, 52, 17, -4],
      },
    ],
  };

  const chart = new Chart(id, {
    // or a DOM element,

    lineOptions: {
      regionFill: 1,
      hideDots: 1,
    },
    axisOptions: {
      xIsSeries: true,
      xAxisMode: "tick",
      //yAxisMode: "span"
    },
    title: "knght coordinate points",
    data: data,
    type: "axis-mixed", // or 'bar', 'line', 'scatter', 'pie', 'percentage'
    height: 250,
    colors: ["#4B0082", "#743ee2"],
  });
}
