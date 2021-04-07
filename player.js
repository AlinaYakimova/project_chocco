let player = document.getElementById("video");
const playerContainer = $('.player');

player.onloadeddata = function () {

  $(".player__start-pause, .video").click(e => {
    e.preventDefault();

    if (playerContainer.hasClass("paused")) {

      onPlayerStateChange("pause");
    } else {

      onPlayerStateChange("play");
    }

    console.log(e);
  });

  $(".player__playback").click(e => {
    const bar = $(e.currentTarget);
    const clickedPosition = e.originalEvent.layerX;
    const newButtonPositionPercent = (clickedPosition / bar.width()) * 100;
    const newPlaybackPositionSec = (player.duration / 100) * newButtonPositionPercent;

    $(".player__playback-button").css({
      left: `${newButtonPositionPercent}%`
    });

    player.currentTime = newPlaybackPositionSec;
  });
};

$(".player__volume").click(e => {
  const barVol = $(e.currentTarget);
  const clickedPositionVol = e.originalEvent.layerX;
  console.log(clickedPositionVol);
  const newButtonPositionVolumePercent = (clickedPositionVol / barVol.width()) * 100;

  $(".player__volume-button").css({
    left: `${newButtonPositionVolumePercent}%`
  });
  player.volume = newButtonPositionVolumePercent / 100;
  console.log(newButtonPositionVolumePercent);
});

let currentVolume;
$(".player__sound").click(e => {
  e.preventDefault();
  let soundOnOff = $(".player__sound");
  if (player.volume !== 0) {
    currentVolume = player.volume
  };

  if (soundOnOff.hasClass("muteOff")) {
    player.volume = currentVolume;
    soundOnOff.removeClass("muteOff");

  } else {
    soundOnOff.addClass("muteOff");
    player.volume = 0;
  }
  $(".player__volume-button").css({
    left: `${player.volume * 100}%`
  });
});

let interval;
const onPlayerStateChange = event => {
  switch (event) {
    case "play":
      player.play();
      playerContainer.addClass("active");
      playerContainer.addClass("paused");

      interval = setInterval(() => {
        const completedSec = player.currentTime;
        const completedPercent = (completedSec / durationSec) * 100;
    
        $(".player__playback-button").css({
          left: `${completedPercent}%`
        });
      }, 1000);
      break;

    case "pause":
      player.pause();
      playerContainer.removeClass("active");
      playerContainer.removeClass("paused");

      if (typeof interval !== "underfined") {
        clearInterval(interval);
      }
      break;
  }
  
  const durationSec = player.duration;

}



// let player = document.getElementById('video');
// const playerContainer = $('.player');

// $(document).ready(function () {
//   let player = document.getElementById('video');
//   console.log(player.duration);
// })
// let eventsInit = () => {
//   console.log("player", player);

//   $(".player__start-pause").click(e => {
//     e.preventDefault();

//     if (playerContainer.hasClass("paused")) {

//       onPlayerStateChange("pause");
//     } else {

//       onPlayerStateChange("play");
//     }

//     console.log(e);
//   });

//  

//   

//   $(".player__wrapper").click(e => {

//     if (playerContainer.hasClass("paused")) {
//       onPlayerStateChange("pause");
//     } else {
//       onPlayerStateChange("play");
//     }
//      console.log(e);
//   });
// }

// const formatTime = timeSec => {
//   const roundTime = Math.round(timeSec);

//   const minutes = addZero(Math.floor(roundTime / 60));
//   const seconds = addZero(roundTime - minutes * 60);

//   function addZero(num) {
//     return num < 10 ? `0${num}` : num;
//   }

//   return `${minutes}:${seconds}`;
// }

// const onPlayerReady = () => {
//   
// }



// function onYouTubeIframeAPIReady() {
//   player = new YT.Player("yt-player", {
//     height: "405",
//     width: "660",
//     videoId: "teA9bCE-III",
//     events: {
//       onReady: onPlayerReady,
//       onStateChange: onPlayerStateChange
//     },
//     playerVars: {
//       controls: 0,
//       disablekb: 0,
//       showinfo: 0,
//       rel: 0,
//       autoplay: 0,
//       modestbranding: 0
//     }
//   });
// }

// eventsInit();