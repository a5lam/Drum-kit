window.addEventListener('keydown', function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio) return;// stop function to running all together
    audio.currentTime = 0;
    audio.play();
});