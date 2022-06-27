let closee = document.querySelector(".close");
closee.addEventListener("click", function () {
  document.querySelector(".messenger-container").style.display = "none";
});

let participants = document.querySelector(".group-part");
let chatting = document.querySelector(".chat-msg");

participants.addEventListener("click", function () {
  document.querySelector(".messenger-container").style.display = "flex";
  document.querySelector(".sender").style.display = "none";
  document.querySelector(".peoplee").style.display = "block";
  document.querySelector(".send-msg-section").style.marginTop = "3px";
});

chatting.addEventListener("click", function () {
  document.querySelector(".messenger-container").style.display = "flex";
  document.querySelector(".peoplee").style.display = "none";
  document.querySelector(".sender").style.display = "block";
  document.querySelector(".send-msg-section").style.marginTop = "123%";
  // document.querySelector('.sender').style.display='block';
});




let videoElem = document.getElementById("video");
      let btnElm = document.querySelector(".camera");
      let isPlaying = !!videoElem.srcObject;
      function cameraonoff() {
        if (!isPlaying) {
          cameraon();
        } else {
          cameraoff();
        }
      }

      function cameraon() {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
          navigator.mediaDevices
            .getUserMedia({
              video: true
            })
            .then(function (stream) {
              videoElem.srcObject = stream;
              videoElem.play();
            })
            .then(() => {
              isPlaying = true;
             
            });
        }
      }

      function cameraoff() {
        const stream = videoElem.srcObject;
        if (stream) {
          const tracks = stream.getTracks();

          tracks.forEach(function (track) {
            track.stop();
          });

          videoElem.srcObject = null;
          isPlaying = false;
          
        }
      }
