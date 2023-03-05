import { wht_rk_grid } from "./wht_rk_grid.js";
import { wht_knght_grid } from "./wht_knght_grid.js";

export const shift_grid = {};
shift_grid["wht_rk"] = wht_rk_grid;
shift_grid["wht_knght"] = wht_knght_grid;

export function rtrn_shift_grid({ piece, point }) {
  const grid = shift_grid[piece];
  return grid[point];
}
