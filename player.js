let player = document.querySelector(".video");
const playerContainer = $('.player');

let eventsInit = () => {
  $(".player__start-pause").click(e => {
    e.preventDefault();

    if (playerContainer.hasClass("paused")) {
      player.pause();
      onPlayerStateChange("pause");
    } else {
      player.play();
      onPlayerStateChange("play");
      console.log(e);
    }
  });

  $(".player__playback").click(e => {
    const bar = $(e.currentTarget);
    const clickedPosition = e.originalEvent.layerX;
    const newButtonPositionPercent = (clickedPosition / bar.width()) * 100;
    const newPlaybackPositionSec = (player.getDuration() / 100) * newButtonPositionPercent;

    $(".player__playback-button").css({
      left: `${newButtonPositionPercent}%`
    });

    player.seekTo(newPlaybackPositionSec);
  });

  $(".player__volume").click(e => {
    const barVol = $(e.currentTarget);
    const clickedPositionVol = e.originalEvent.layerX;
    const newButtonPositionVolumePercent = (clickedPositionVol / barVol.width()) * 100;

    $(".player__volume-button").css({
      left: `${newButtonPositionVolumePercent}%`
    });
    player.setVolume(newButtonPositionVolumePercent);
    console.log(newButtonPositionVolumePercent);
  });

  $(".player__sound").click(e => {
    e.preventDefault();
    let soundOnOff = $(".player__sound");

    if (soundOnOff.hasClass("muteOff")) {
      player.unMute();
      soundOnOff.removeClass("muteOff");
    } else {
      soundOnOff.addClass("muteOff");
      player.mute();
    }
  });

  $(".player__splash").click(e => {
    if (playerContainer.hasClass("paused")) {
      player.pause();
      onPlayerStateChange("pause");
    } else {
      player.play();
      onPlayerStateChange("play");
      console.log(e);
    }
  });
}

// const formatTime = timeSec => {
//   const roundTime = Math.round(timeSec);

//   const minutes = addZero(Math.floor(roundTime / 60));
//   const seconds = addZero(roundTime - minutes * 60);

//   function addZero(num) {
//     return num < 10 ? `0${num}` : num;
//   }

//   return `${minutes}:${seconds}`;
// }

const onPlayerReady = () => {
  let interval;
  const durationSec = player.getDuration();

  $(".player__duration-estimate").text(formatTime(durationSec));

  if (typeof interval !== "underfined") {
    clearInterval(interval);
  }

  interval = setInterval(() => {
    const completedSec = player.getCurrentTime();
    const completedPercent = (completedSec / durationSec) * 100;

    $(".player__playback-button").css({
      left: `${completedPercent}%`
    });

    $(".player__duration-completed").text(formatTime(completedSec));
  }, 1000);
}

const onPlayerStateChange = event => {
  /*
   -1 (воспроизведение видео не начато)
   0 (воспроизведение видео завершено)
   1 (воспроизведение)
   2 (пауза)
   3 (буферизация)
   5 (видео подают реплики).
 */
  switch (event.data) {
    case 1:
      playerContainer.addClass("active");
      playerContainer.addClass("paused");
      break;

    case 2:
      playerContainer.removeClass("active");
      playerContainer.removeClass("paused");
      break;
  }

}

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

eventsInit();