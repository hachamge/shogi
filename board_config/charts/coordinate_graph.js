import { graph } from "./graph.js";

export class coordinate_graph {
  constructor(id) {
    this.id = id;
    this.graph = graph;
    this.graphs = new Array();
    this.pieces = ["knght", "kng", "rook", "bishop", "queen", "pawn"];
  }

  // datalist of pieces kngnt/kng ..
  selection() {
    const dl = document.createElement("datalist");
    this.pieces.forEach((piece) => {
      const op = document.createElement("option");
      op.setAttribute("value", piece);
      dl.append(op);
    });
    dl.setAttribute("id", "coordinate_graph#1");
    return dl;
  }

  // create container: graph, datalist
  async create_container() {
    const time = document.createElement("p");
    const div = document.createElement("div");
    const graph = document.createElement("div");
    const input = document.createElement("input");

    graph.setAttribute("id", this.id);
    input.setAttribute("value", "knight");
    time.innerHTML = "updated 2 min ago";
    div.setAttribute("class", "coordinate_graph");
    input.setAttribute("list", "coordinate_graph#1");

    const dl = await this.selection();
    div.append(time);
    div.append(dl);
    div.append(graph);
    div.prepend(input);
    this.graphs.push(div);
    document.querySelector(".shogi").append(div);
    this.graph({ id: `#${this.id}` });
  }
}
