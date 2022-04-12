var video = document.querySelector("#player1");
video.autoplay = false;
video.loop = false;
window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});


document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video");
	video.playbackRate *= 0.95;
	console.log(video.playbackRate)
});


document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up video");
	video.playbackRate /= 0.95;
	console.log(video.playbackRate)
});


document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead");
	video.currentTime += 15;
	if (video.currentTime >= video.duration){
		video.currentTime = 0;
	}
	console.log(video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("mute video");
	if (video.muted === false) {
		video.muted = true;
 }
 else {
	video.muted = false};
});



document.querySelector("#slider").addEventListener("click", function() {
	console.log("change volume with slider");
	video.volume = this.value /100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
	console.log(video.volume);
	// change volume; changing text to match
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.
	console.log("Use oldSchool class");
});

document.querySelector("#orig").addEventListener("click", function() {
	// video.
	console.log("revert to original");
});



