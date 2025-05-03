function togglePlay() {
    const video = document.getElementById('myVideo');
    const vidbutton = document.getElementsByClassName("play-button")[0];
    if (video.paused) {
        video.play();
        vidbutton.style.display = "none";
    } else {
        video.pause();
    }
}          
function toggleDisplay(){
    const vidbutton = document.getElementsByClassName("play-button");
    if (vidbutton.style.display){
        vidbutton.style.display = "flex";
    } else{
        vidbutton.style.display = "none";
    }
}