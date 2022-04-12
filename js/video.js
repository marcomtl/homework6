var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});


document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video");
	video.playbackRate *= 0.95;
});


document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up video");
	video.playbackRate /= 0.95;
});


document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead");
	video.currentTime += 15;
	if (video.currentTime >= video.duration){
		video.currentTime = 0;
	}
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("mute video");
	video.muted = true
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log("change volume with slider");
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Use oldSchool class");
});

document.querySelector("#original").addEventListener("click", function() {
	console.log("revert to original");
});



