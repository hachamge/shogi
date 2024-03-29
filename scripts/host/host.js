import { ago } from './timeAgo.js';
import { en_hostName_chk } from './click_event.js';

export class host {
  // id referes to div_id
  constructor(img, timeAgo, nme, msg, shift, id) {
    this.id = id;
    this.img = img;
    this.nme = nme;
    this.msg = msg;
    this.shift = shift;
    this.timeAgo = timeAgo;
    this.timeStamp = timeAgo;
		this.tagsTo_create = {img:'img', timeAgo: 'h3', nme:'h2', msg: 'h3', shft: 'p', div:'div'};
		this.config_tagsTo_create();
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
    this.tagsTo_create["timeAgo"].innerText = ago(this.timeAgo);
    this.tagsTo_create["img"].setAttribute('loading', 'lazy');
  }
/** insert the timeAgo, image and message into container: host_info*/
  appendTo_div() {
    for (const tag in this.tagsTo_create) {
      if (this.tagsTo_create[tag] instanceof HTMLImageElement) continue;
      else if (this.tagsTo_create[tag] instanceof HTMLDivElement) continue;
      else this.tagsTo_create["div"].append(this.tagsTo_create[tag]);
    }
    this.tagsTo_create["div"].setAttribute("id", "host_info");
  }

/** insert the host_info div along with the profile picture.
 the id is used to insert the container div (host) into the div that
 is labeled by the id that is passed in.*/
  append({ id }) {
    const host = document.createElement("div");
    host.append(this.tagsTo_create["img"]);
    host.append(this.tagsTo_create["div"]);
    host.setAttribute("class", "host");
    document.getElementById(id).append(host);
    en_hostName_chk({hostDiv:host});
    this.enableRepeatedUpdateOfTimeStamp();
  }

  //update the timestamp every (5 seconds)
  enableRepeatedUpdateOfTimeStamp() {
    setInterval(()=> {
      this.tagsTo_create['timeAgo'].innerText = ago(this.timeStamp);
    }, 5000);
  }
} // #endif

const hosts = ['Harrison Orne', 'Steffen Holm', 'Oeau Eaue', 'Vilsinn Volu',
  'Skald Olberta', 'Guaue Furhe'
  ];
hosts.forEach((name, index) => {
  const cll = new host(
    "../../svg/flower.jpg",
    new Date(),
    name,
    'hate the knight?',
    'knight c' + index,
    'host'
    );
})
/*
const cll = new host(
  "../../svg/beach.jpg",
  "2 min ago",
  "Harrison Orne",
  "perfect knight move",
  "knight e5",
  "host"
);

const cll2 = new host(
  "../../svg/flower.jpg",
  "5 min ago",
  "Steffen Holm",
  "shift into h3",
  "rook h5",
  "host"
);

const cll3 = new host(
  "../../svg/beach.jpg",
  "1 hr ago",
  "Chihyi Oeau",
  "blunder shifting rook",
  "king e7",
  "host"
);

const cll4 = new host(
  "../../svg/flower.jpg",
  "1 sec ago",
  "Ragnar Lorikq",
  "return bishop to c9",
  "queen e5",
  "host"
);

const cll5 = new host(
  "../../svg/beach.jpg",
  "2 hr ago",
  "Kyvsif Zyivtek",
  "check in 1 min?",
  "knight c5",
  "host"
);

const cll6 = new host(
  "../../svg/beach.jpg",
  "2 day ago",
  "Voytek Syvio",
  "hate the knight!",
  "rook c5",
  "host"
);
*/

