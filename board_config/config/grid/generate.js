import { wht_rk_grid } from "./wht_rk_grid.js";
import { knght_grid } from "./wht_knght_grid.js";

export const shift_grid = {};
shift_grid["wht_rk"] = wht_rk_grid;
shift_grid["knght"] = knght_grid;

function prs_piece({piece}) {
	 return piece.substring(4, piece.length);
}

export function rtrn_shift_grid({ piece, point }) {
	piece = prs_piece({piece:piece});
  const grid = shift_grid[piece];
  return grid[point];
}

