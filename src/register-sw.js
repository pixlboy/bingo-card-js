// Register the SW file

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('Service worker registered'))
      .catch(err => console.log('Service worker not registered ==> \n', err));
} else {
  console.log('Service workers are not supported.');
}

// Flow of service worker

// - Service worker will register
// - Service worker will install
// - Service worker will activate