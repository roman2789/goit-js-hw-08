import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

const storageKey = 'videoplayer-current-time';

const onTimeUpdate = function (data) {
  localStorage.setItem(storageKey, JSON.stringify(data.seconds));
};

player.on('timeupdate', throttle(onTimeUpdate, 1000));

const stopTime = localStorage.getItem(storageKey);

stopTime && player.setCurrentTime(stopTime);

localStorage.removeItem(storageKey);
