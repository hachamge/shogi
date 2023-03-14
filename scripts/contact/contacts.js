function config({timeAgo, id}) {
	const img = document.createElement('h6');
	const strg = document.createElement('div');
	const time = document.createElement('h4');
	const msg = document.createElement('h4');
	const shift = document.createElement('p');
	const nme = document.createElement('h3');
	const n_strg = document.createElement('div');
	
	strg.setAttribute('class', 'contact');
	time.innerText = timeAgo;
	shift.innerText = 'knight e5';
	msg.innerText = 'perfect knight shift. chihyi return!';
	nme.innerText = 'Harrison Orne';
	n_strg.setAttribute('class', 'n_strg');
	img.setAttribute('id', 'co');

	nme.prepend(img);
	n_strg.append(img);
	n_strg.append(nme);
	
	strg.append(time);
	strg.append(n_strg);
	strg.append(msg);
	strg.append(shift);

	document.getElementById(id).append(strg);
}

config({timeAgo:'2 min ago', id: 'cont'});
config({timeAgo:'2 min ago', id: 'cont'});
config({timeAgo:'2 min ago', id: 'cont'});
config({timeAgo:'2 min ago', id: 'cont'});
config({timeAgo:'2 min ago', id: 'cont'});
config({timeAgo:'2 min ago', id: 'cont'});
