
//variables
const video = document.querySelector("video");
const transcript = document.querySelectorAll(".transcript");

//eventlistener to keep track of the change in time in video
video.addEventListener("timeupdate",function time_update() {
  //loop going through the transcript
  for(let i=0; i<transcript.length; i+=1){
    //get data-start attribute
    let start = transcript[i].getAttribute("data-start");
    //get data-end attribute
    let end = transcript[i].getAttribute("data-end");
    //style the text when current time is between start and end
    if ( start<=video.currentTime && video.currentTime<=end) {
        transcript[i].style.color = "#C8432F";
    }else{
        transcript[i].style.color = "#D6CEAF";
    }

    //eventlistener for going to specific time in video when transcript is clicked
    transcript[i].addEventListener("click", function(e) {
      let start = e.target.getAttribute("data-start");
      video.currentTime = start;
      video.play();
    }, false);

  }
});
