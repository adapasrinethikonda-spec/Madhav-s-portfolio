document.querySelectorAll('.video-wrap').forEach(function(wrap){
  var video=wrap.querySelector('video'),btn=wrap.querySelector('.play-btn');
  btn.addEventListener('click',function(){video.play();});
  video.addEventListener('play',function(){
    wrap.classList.add('playing');
    document.querySelectorAll('video').forEach(function(v){if(v!==video)v.pause();});
  });
  video.addEventListener('ended',function(){wrap.classList.remove('playing');});
});
