import { sqr_color } from './config_square_color.js';

const heading = Array.from('abcdefgh');
const table = document.createElement("table");

// create table of squares 65x65
export async function create_squares() {
  const tbody = document.createElement("tbody");
	crte_heading({tbody:tbody});

  Array.from("123456789")
    .reverse()
    .forEach((row) => {
      const tr = document.createElement("tr");
      const th = document.createElement("th");
      th.innerText = row !== "9" ? row : parseInt(row) - 1;
      tr.append(th);

      if (row !== "9") {
        tbody.append(tr);
        create_chdrn_sqrs({ tr:tr, row:row });
      }
    });
	crte_heading({tbody:tbody});
  return prs_sqrs({ tbody: tbody, id: "#boardLayout" });
}

// create 65x65 sqrs h1/c7 append to tr
function create_chdrn_sqrs({ tr, row }) {
  Array.from("12345678").reverse().forEach((NaN, i) => {
		let h = `${heading[i]}` + row;
    const td = document.createElement("td");
		td.setAttribute('id', h);
		td.style.background = sqr_color[h];
    tr.append(td);
  });
}

// render 64 sqrs into html div 
function prs_sqrs({ tbody, id }) {
  table.append(tbody);
  table.setAttribute("class", "shogi");
  document.querySelector(id).append(table);
	return table;
}

// create heading h1/h2/c7/g7 etc 
function crte_heading({ tbody }) {
	const tr = document.createElement('tr');
	const th = document.createElement('th');
	tr.append(th);

	heading.forEach(ch => {
		const td = document.createElement('th');
		td.innerText = ch;
		tr.append(td);
	});
	tbody.append(tr);
}
