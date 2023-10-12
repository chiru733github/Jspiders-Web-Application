let timetag=document.querySelector("#time");
setInterval(indian_time,100);
function indian_time()
{
	let dateobj = new Date();
	currentTime = dateobj.toLocaleTimeString();
	timetag.innerHTML=currentTime;
}