import { wht_rk_grid } from "./wht_rk_grid.js";
import { knght_grid } from "./wht_knght_grid.js";

export const shift_grid = {};
shift_grid["rk"] = wht_rk_grid;
shift_grid["knght"] = knght_grid;

function prs_piece({ sqr }) {
  var img_str = sqr.children[0].alt.replace(".svg", "").trim();
  return img_str.substring(4, img_str.length);
}

export function rtrn_shift_grid({ sqr }) {
  var prs_img_alt = prs_piece({ sqr: sqr });
  const grid = shift_grid[prs_img_alt];
  return grid[sqr.id];
}
