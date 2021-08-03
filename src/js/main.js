videoPlayStop = function playStopFirst(){
  let videoBlockMobile = event.currentTarget.parentNode.parentNode.parentNode;
  let video = videoBlockMobile.querySelector('.mp4');
  let play = videoBlockMobile.querySelector('.videoPlay');
  let pause = videoBlockMobile.querySelector('.videoStop');
  let videoHover = videoBlockMobile.querySelector('.videoHover')
  videoHover.style.opacity = '0';
  if(!video.classList.contains('click')) {
    play.style.display = 'none';
    pause.style.display = 'block';
    video.classList.add('click');
    video.play();
  }
  else {
    play.style.display = 'flex';
    pause.style.display = 'none';
    video.classList.remove('click') ;
    video.pause();
  }
}