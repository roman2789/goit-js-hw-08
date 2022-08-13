import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const player = new Player('vimeo-player', {
  id: 19231868,
  width: 640,
});

const onTimeUpdate = function (data) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(data.seconds)
  );
};

player.on('timeupdate', throttle(onTimeUpdate, 1000));

const stopTime = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(stopTime);
