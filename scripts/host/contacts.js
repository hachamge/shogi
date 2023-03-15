export class host {
  // id referes to div_id
  constructor(img, timeAgo, nme, msg, shift, id) {
    this.id = id;
    this.img = img;
    this.nme = nme;
    this.msg = msg;
    this.shift = shift;
    this.timeAgo = timeAgo;
		this.tagsTo_create = {img:'img', timeAgo: 'h3', nme:'h2', msg: 'h3', shft: 'p', div:'div'};
  }

  config_tagsTo_create() {
    for (const tag in this.tagsTo_create) {
      const html_tg = document.createElement(this.tagsTo_create[tag]);
      this.tagsTo_create[tag] = html_tg;
    }
    this.init_tags_created();
    this.appendTo_div();
    this.append({ id: this.id });
  }

  init_tags_created() {
    this.tagsTo_create["img"].src = this.img;
    this.tagsTo_create["nme"].innerText = this.nme;
    this.tagsTo_create["msg"].innerText = this.msg;
    this.tagsTo_create["shft"].innerText = this.shift;
    this.tagsTo_create["timeAgo"].innerText = this.timeAgo;
    this.tagsTo_create["img"].setAttribute('loading', 'lazy');
  }

  appendTo_div() {
    for (const tag in this.tagsTo_create) {
      if (this.tagsTo_create[tag] instanceof HTMLImageElement) continue;
      else if (this.tagsTo_create[tag] instanceof HTMLDivElement) continue;
      else this.tagsTo_create["div"].append(this.tagsTo_create[tag]);
    }
    this.tagsTo_create["div"].setAttribute("id", "host_info");
  }

  append({ id }) {
    const host = document.createElement("div");
    host.append(this.tagsTo_create["img"]);
    host.append(this.tagsTo_create["div"]);
    host.setAttribute("class", "host");
    console.log(host);
    document.getElementById(id).append(host);
  }
} // #endif

const cll = new host(
  "../../svg/beach.jpg",
  "2 min ago",
  "Harrison Orne",
  "perfect knight move",
  "knight e5",
  "ht"
);

const cll2 = new host(
  "../../svg/flower.jpg",
  "5 min ago",
  "Steffen Holm",
  "shift into h3",
  "rook h5",
  "ht"
);
cll.config_tagsTo_create();
cll2.config_tagsTo_create();
