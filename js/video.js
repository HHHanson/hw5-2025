var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
video=this.document.querySelector("#player1");
video.autoplay=false;
console.log("Autoplay is set to "+video.autoplay);
video.loop=false;
console.log("Loop is set to "+video.loop);
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML=video.volume*100+"%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down Video");
	video.playbackRate*=0.9;
	console.log("Speed is "+video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up Video");
	video.playbackRate/=0.9;
	console.log("Speed is "+video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead Video");
	if (video.currentTime+10<video.duration){
		video.currentTime+=10;
	}
	else{
		video.currentTime=0;
	}
	console.log("Current location is "+video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted==false){
		video.muted=true;
		document.querySelector("#mute").innerHTML="Unmute";
		console.log("Video Muted");
	}
	else{
		video.muted=false;
		document.querySelector("#mute").innerHTML="Mute";
		console.log("Video Unmuted");
	}
});

document.querySelector("#slider").addEventListener("input", function () {
    console.log("Volume Changed");
    video.volume = this.value / 100;
    document.querySelector("#volume").innerHTML = this.value + "%";
});

document.querySelector("#vintage").addEventListener("click", function () {
    console.log("Old School");
    video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function () {
    console.log("Original");
    video.classList.remove("oldSchool");
});


