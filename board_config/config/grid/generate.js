import { wht_rk_grid } from './wht_rk_grid.js';
import { knght_grid } from './wht_knght_grid.js';
import { convertPointToSquare, chdrn_sqr_chk } from '../config_shft.js';

var crnt_sqr;
var crnt_sqr_color;
export const shift_grid = {};

shift_grid["rk"] = wht_rk_grid;
shift_grid["knght"] = knght_grid;

function prs_piece({ sqr }) {
  var img_str = sqr.children[0].alt.replace(".svg", "").trim();
  return img_str.substring(4, img_str.length);
}

export function rtrn_shift_grid({sqr}) {
	crnt_sqr = sqr;
  var prs_img_alt = prs_piece({ sqr: sqr });
  const grid = shift_grid[prs_img_alt];
	return grid_chk({points:grid[sqr.id]});
}

/** 
	return the sqrs that you can shift in.
	grid: represents an array of points on the board.
	sqrs that contain the same color of piece's are not included
*/
function grid_chk({points}) {
	 const chkd_points = new Array();

	 crnt_sqr_color = rtrn_sqr_color({sqr:crnt_sqr});
	 points.forEach(point => {
			if (chdrn_sqr_chk({id:point}) == true) {
				const sqr = convertPointToSquare({point:point});
				const color = rtrn_sqr_color({sqr:sqr});
				if (color !== crnt_sqr_color) chkd_points.push(point); 
			} else chkd_points.push(point);
	 });
	return chkd_points;
}

function rtrn_sqr_color({sqr}) {
	return sqr.children[0].alt.substring(0,3);
}
