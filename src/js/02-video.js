import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

const onTimeUpdate = function (data) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(data.seconds)
  );
};

player.on('timeupdate', throttle(onTimeUpdate, 1000));

const stopTime = localStorage.getItem('videoplayer-current-time');

stopTime && player.setCurrentTime(stopTime);

localStorage.removeItem('videoplayer-current-time');
