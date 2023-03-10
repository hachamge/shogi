import { Chart } from '../../node_modules/frappe-charts/dist/frappe-charts.min.esm.js';

export class coordinate_graph {
	constructor (id) {
		this.id = id;
		this.graphs = new Array();
		this.pieces = ['knght', 'kng', 'rook', 'bishop', 'queen', 'pawn'];
	} 

	// datalist of pieces kngnt/kng .. 
	selection () {
		const dl = document.createElement('datalist');
		this.pieces.forEach(piece => {
				const op = document.createElement('option');
				op.setAttribute('value', piece);
				dl.append(op); 
		});
		dl.setAttribute('id', 'coordinate_graph#1');
		return dl;
	} 

	// create container: graph, datalist 
	 async create_container () {
		const time = document.createElement('p');
		const div = document.createElement('div');
		const graph = document.createElement('div');
	 	const input = document.createElement('input');

		graph.setAttribute('id', this.id);
		time.innerHTML = 'updated 2 min ago';
		div.setAttribute('class', 'coordinate_graph');
		input.setAttribute('list', 'coordinate_graph#1');

		const dl = await this.selection(); 
		div.append(time);
		div.append(dl);
		div.append(graph);
		div.prepend(input);
		this.graphs.push(div);
		document.querySelector('.shogi').append(div);
		this.graph({id:'#graph'});
	}

	graph({id}) {
		const data = {
    labels: ["a", "b", "c", "d",
        "e", "f", "g", "h"
    ],
    datasets: [
        {
            name: "knght Data", type: "line",
            values: [25, 40, 30, 35, 8, 52, 17, -4]
        },
    ]
}

const chart = new Chart(id, {  // or a DOM element,
    
		lineOptions: {
			regionFill: 1,
			hideDots: 1
		},
    title: "knght coordinate points",
    data: data,
    type: 'axis-mixed', // or 'bar', 'line', 'scatter', 'pie', 'percentage'
    height: 250,
    colors: ['#4B0082', '#743ee2']
})
	}
}
