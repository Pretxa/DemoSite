document.addEventListener("DOMContentLoaded", function() {


    var audio = document.getElementById('audioplayer');
    var hasAlreadyClicked = false;
  
    function startAudio() {
      if (hasAlreadyClicked == false) {
        audio.play();
        audio.volume = 0.5;
        document.removeEventListener('click', startAudio);
        hasAlreadyClicked = true;
      }
    }
  
    document.addEventListener('click', startAudio);















})




























    