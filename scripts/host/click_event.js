/** reference to the entire div (host) that is clicked */
let host_info;

/** the div that is marked with the id specified
 * will be given an event listener (getHostName) that checkes when a host
 * is selected from the host container (beside nav bar) */
export function en_hostName_chk({hostDiv}) {
	hostDiv.addEventListener('click', getHostInfo);
}

/** get the entire div containing the host information */
function getHostInfo() {
	host_info = this;
	updateWhoUserIsPlayingAgainst();
}

function updateWhoUserIsPlayingAgainst() {
	const hostImage = host_info.children[0].src;
	const hostName = host_info.children[1].children[1];
	document.getElementById('playingAgainst').innerText = hostName.innerText;
	document.getElementById('playingAgainstImage').src = hostImage;
}