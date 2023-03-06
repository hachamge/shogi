import { rtrn_shift_grid } from "./grid/generate.js";

var prv_sqr;
var sqrsTo_hght;
var crnt_sqr_point;
const sqr_shft = {};
const shft_audio = document.getElementById("shft");
const erase_audio = document.getElementById("erase");
const hght = "rgba(13, 114, 228, 0.7) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset";

export function en_sqr_hght() {
  if (chdrn_sqr_chk({ id: this.id })) {
  	crnt_sqr_point = this.id;
  	prv_sqr = convertPointToSquare({point:this.id});
		undo_en_sqr_hght();
 		hght_sqrs(); 
	}
}

function convertPointToSquare({point}) {
	return document.getElementById(point);
}

function undo_en_sqr_hght() {
	prv_sqr.removeEventListener("click", en_sqr_hght);
}

// remove the previous event handler(s) on each hght 
function hght_sqrs() {
  const grid_search = prv_sqr.children[0].alt.replace(".svg", "").trim();
  sqrsTo_hght = rtrn_shift_grid({piece: grid_search, point: crnt_sqr_point});

	sqrsTo_hght.forEach((point) => {
    const sqr = document.getElementById(point);
    sqr.style.boxShadow = hght;
    sqr.removeEventListener("click", en_sqr_hght);
    sqr.addEventListener("click", en_chk);
  });
}

// chk if there is any pn in sqr thru:id
export function chdrn_sqr_chk({ id }) {
  const sqr = document.getElementById(id);
  if (sqr) return sqr.children[0] instanceof HTMLImageElement ? true : false;
}

// en the hghting in sqr
export function en_sqr_chk({ id }) {
  const sqr = document.getElementById(id);
  if (sqr !== null) sqr.addEventListener("click", en_sqr_hght);
}

// rm hght in previously hght sqrs
function un_hght_sqrs() {
  sqrsTo_hght.forEach((point) => {
    const sqr = document.getElementById(point);
    sqr.style.boxShadow = "none";
    sqr.addEventListener("click", en_sqr_hght);
  });
}

// en the shfting in highlighted sqrs'
function en_chk() {
  un_hght_sqrs();
  erase({ nxt_shft: this.id });
}

// erase pn in prv sqr into nxt_sqr
function erase({ nxt_shft }) {
  const nxt = convertPointToSquare({point:nxt_shft}); 

  if (chdrn_sqr_chk({ id: nxt_shft }) === true) {
    re_shft_erase({nxt_sqr: nxt});
  } else re_shft({nxt_sqr: nxt});
}

// rm pn in nxt_sqr once shfted
function re_shft_erase({ nxt_sqr }) {
  erase_audio.play();
  nxt_sqr.children[0].src = prv_sqr.children[0].src;
  nxt_sqr.children[0].alt = prv_sqr.children[0].alt;
  prv_sqr.children[0].remove();
  un_en_chk();
}

// shft pn in prv sqr into the nxt_sqr
function re_shft({ nxt_sqr }) {
  shft_audio.play();
  nxt_sqr.append(prv_sqr.children[0]);
  un_en_chk();
}

// discard highligting on prv_sqr
function un_en_chk() {
  sqrsTo_hght.forEach((point) => {
    const sqr = convertPointToSquare({point:point});
    sqr.removeEventListener("click", en_chk);
  });
}
