import { en_sqr_hght } from "./config_shft.js";
const sqr_grid = {};
//drk
sqr_grid["a8"] = "drk_rk.svg";
sqr_grid["b8"] = "drk_knght.svg";
sqr_grid["c8"] = "drk_bishop.svg";
sqr_grid["d8"] = "drk_queen.svg";
sqr_grid["e8"] = "drk_kng.svg";
sqr_grid["f8"] = "drk_bishop.svg";
sqr_grid["g8"] = "drk_knght.svg";
sqr_grid["h8"] = "drk_rk.svg";

sqr_grid["a7"] = "drk_pn.svg";
sqr_grid["b7"] = "drk_pn.svg";
sqr_grid["c7"] = "drk_pn.svg";
sqr_grid["d7"] = "drk_pn.svg";
sqr_grid["e7"] = "drk_pn.svg";
sqr_grid["f7"] = "drk_pn.svg";
sqr_grid["g7"] = "drk_pn.svg";
sqr_grid["h7"] = "drk_pn.svg";

//wht
sqr_grid["a2"] = "wht_pn.svg";
sqr_grid["b2"] = "wht_pn.svg";
sqr_grid["c2"] = "wht_pn.svg";
sqr_grid["d2"] = "wht_pn.svg";
sqr_grid["e2"] = "wht_pn.svg";
sqr_grid["f2"] = "wht_pn.svg";
sqr_grid["g2"] = "wht_pn.svg";
sqr_grid["h2"] = "wht_pn.svg";

sqr_grid["a1"] = "wht_rk.svg";
sqr_grid["b1"] = "wht_knght.svg";
sqr_grid["c1"] = "wht_bishop.svg";
sqr_grid["d1"] = "wht_queen.svg";
sqr_grid["e1"] = "wht_kng.svg";
sqr_grid["f1"] = "wht_bishop.svg";
sqr_grid["g1"] = "wht_knght.svg";
sqr_grid["h1"] = "wht_rk.svg";

// print knght/kng into the grid
export async function prnt_grid() {
  for (let key in sqr_grid) {
    const img = document.createElement("img");
    img.src = `../../svg/${sqr_grid[key]}`;
    img.alt = sqr_grid[key];
    document.getElementById(key).append(img);
  }
}

export function en_sqr_chkng() {
  const sqrs = document.getElementsByTagName("td");

  for (const sqr in sqrs)
    if (sqrs[sqr] instanceof HTMLElement)
      sqrs[sqr].addEventListener("click", en_sqr_hght);
}
