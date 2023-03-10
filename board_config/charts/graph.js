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
			{
        name: "rook Data",
        type: "line",
        values: [20, 15, 10, 22, 8, 40, 33, -4],
      }
    ],
  };

  const chart = new Chart(id, {
    lineOptions: rtrn_lineOptions(),
    axisOptions: {
      xIsSeries: true,
      xAxisMode: "tick",
    },
    title: "knght coordinate points",
    data: data,
    type: "axis-mixed", // or 'bar', 'line', 'scatter', 'pie', 'percentage'
    height: 250,
    colors: ["#4B0082", "#FFD700"],
  });
}

function rtrn_lineOptions() {
	return {
		regionFill: 1,
		hideDots: 1,
		heatline: 1,
	};
}
