const pop3mp3 = 'SUQzBAAAAAABBlRYWFgAAAASAAADbWFqb3JfYnJhbmQAaXNvbQBUWFhYAAAAEwAAA21pbm9yX3ZlcnNpb24ANTEyAFRYWFgAAAAgAAADY29tcGF0aWJsZV9icmFuZHMAaXNvbWlzbzJtcDQxAFRTU0UAAAAPAAADTGF2ZjU3LjcxLjEwMAAAAAAAAAAAAAAA//tQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAABuAAA94AAGCAoLDQ8QEhQXGRocHh8hIyQmKisvNDc6PEJGSVFVWFxfYmZqbXF3e36BhYiLjpGUmp2goqWnqayusLW3ubu9v8DCxMbJy8zO0NHT1dbY293f4OLk5efp6u7w8fP19vj6/P4AAAAATGF2YzU3Ljg5AAAAAAAAAAAAAAAAJATAAAAAAAAAPeBbzkyuAAAAAAAAAAAAAAAAAAAAAP/7EGQAD/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABExBTUUzLjk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQZCIP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTkuNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xBkRA/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45OS41VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EGRmD/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQZIgP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTkuNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xBkqg/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45OS41VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EGTMD/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQZN2P8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTkuNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xBk3Y/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45OS41VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EGTdj/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQZN2P8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTkuNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xBk3Y/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45OS41VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EGTdj/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQZN2P8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTkuNVVVVVVVVVVVVVVVVVVVVVVV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VVVVVVVVVVX/+xBk+AnxHynLUAossAAADSAAAAEElL8pgDTrAAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7IGT1gPFcMEnIBypgAAANIAAAAQV0wStAIEnAAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+yBk+IjxdDBK0AgqcAAADSAAAAEEdL8owATqwAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQZP4I8QAcS1ABOoAAAA0gAAABBAzBMaAUS4AAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xBk6I/wqRRKsAAQ8AAADSAAAAEAAAH+AAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EGTdj/AAAH+AAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV';
    
const stoa = (s) => {
  const ret = new Array(s.length);
  for (let i = 0; i < s.length; i++)
    ret[i] = s.charCodeAt(i);
  return ret;
}

class SoundPlayer {
  constructor() {
    this.contextAudio = new (window.AudioContext || window.webkitAudioContext)();
    const dec = stoa(atob(pop3mp3));
    const array = new ArrayBuffer(dec.length);
    const view = new Uint8Array(array);
    view.set(dec);
    this.gainNode = this.contextAudio.createGain();
    this.contextAudio.decodeAudioData(array, (buffer) => {
      this.notif = buffer;
    }, err => console.error('Error decoding audio', err));
  }

  play() {
    console.log('SoundPlayer play ' + volume);
    const source = this.contextAudio.createBufferSource();
    source.buffer = this.notif;
    source.connect(this.gainNode);
    this.gainNode.connect(this.contextAudio.destination);
    source.start(0);
  }

  setVolume(volume) {
    this.gainNode.gain.value = volume;
  }
}

class Clock {

  constructor() {
    this.soundPlayer = new SoundPlayer();
    this.enable = false;
    this.interval = 0;
    this.startTime = 0;
    this.elapsedTime = 0;
    this.clockElement = document.querySelector('#clock');
    this.stageContainer = document.querySelector('#stage');
    this.buttonElement = document.querySelector('#btnStart');
    this.buttonIconElement = document.querySelector('#btnStartIcon');
    this.buttonMinus = document.querySelector('#minus');
    this.buttonMinus.addEventListener('click', _ => this.decreaseStage());
    this.buttonPlus = document.querySelector('#plus');
    this.buttonPlus.addEventListener('click', _ => this.increaseStage());
    this.volume = document.querySelector('#volume');
    const slider = noUiSlider.create(this.volume, {
      animate: true,
      animationDuration: 300,
      start: [100],
      connect: true,
      range: {
        'min': 0,
        'max': 100
      },
      behaviour: 'tap-drag',
      
    });
    slider.on('set', e => {
      this.soundPlayer.setVolume(parseInt(e[0]) / 100);
    } );
    this.stage = 1;
    this.stageDuration = 15000;
    this.stageMax = 27;
    this.renderStage();
    this.renderClock();
  }

  increaseStage() {
    this.stage = Math.min(this.stage + 1, this.stageMax);
    this.renderStage();
    this.renderClock();
  }

  decreaseStage() {
    this.stage = Math.max(this.stage - 1, 1);
    this.renderStage();
    this.renderClock();
  }

  start() {        
    this.startTime = Date.now();
    this.enable = true;
    this.interval = setInterval(_ => this.tick(), 100);
    this.renderStage();
    this.buttonIconElement.innerHTML = 'alarm_off';
  }

  stop() {
    clearInterval(this.interval);
    this.startTime = 0;
    this.enable = false;
    this.buttonIconElement.innerHTML = 'alarm_on';
    this.renderClock();
  }

  renderStage() {
    this.stageContainer.innerHTML = this.stage + '/' + this.stageMax;
  }

  renderClock() {
    this.elapsedTime = new Date(Date.now() - (this.startTime || Date.now()));
    const remainingTime = new Date(this.getStageDuration() - this.elapsedTime.valueOf());
    let totalRemainingTime = 0;
    for (let i = this.stage; i <= this.stageMax; i++) {
      totalRemainingTime += this.getStageDuration(i);
    }
    totalRemainingTime = new Date(totalRemainingTime - this.elapsedTime.valueOf());
    this.clockElement.innerHTML = '<div class="mainClock"><span class="sup small">Stage </span>' +
                                    remainingTime.getMinutes().toString().padStart(2, '0') + ':' + 
                                    remainingTime.getSeconds().toString().padStart(2, '0') + '.' + 
                                    Math.floor(remainingTime.getMilliseconds() / 100) + 
                                  '</div><div class="remaining"><span class="sup">Total </span>' +
                                    (totalRemainingTime.getHours() - 1).toString().padStart(2, '0') + ':' + 
                                    totalRemainingTime.getMinutes().toString().padStart(2, '0') + ':' + 
                                    totalRemainingTime.getSeconds().toString().padStart(2, '0') + '.' + 
                                    Math.floor(totalRemainingTime.getMilliseconds() / 100) +
                                  '</div>';
  }

  tick() {
    this.renderClock();
    if (this.elapsedTime >= this.getStageDuration()) {
      this.stop();
      this.increaseStage();
      this.soundPlayer.play();
      setTimeout(_ => this.soundPlayer.play(), 200);
      setTimeout(_ => this.soundPlayer.play(), 400);
    }

  }

  getStageDuration(stage) {
    return (stage || this.stage) * this.stageDuration;
  }
}

class App {

  constructor() {
    this.clock = new Clock();
    this.buttonElement = document.querySelector('#btnStart')
    this.buttonElement.addEventListener('click', e => this.buttonClick(e));
  }

  buttonClick(e) {
    if (this.clock.enable) {
      this.clock.stop();
    }
    else {
      this.clock.start();
    }
  }
}

// //
// // Bootstrap
// //
// let app;
// new Promise((resolve, reject) => {
//   if (
//     document.readyState === "complete" ||
//     document.readyState !== "loading" && !document.documentElement.doScroll
//   ) {
//     resolve();
//   }
//   else {
//     document.addEventListener("DOMContentLoaded", resolve);
//   }
// })
// .then(_ => {
//   if ('serviceWorker' in navigator) {
//     return navigator.serviceWorker.register('/service-worker.js');
//   }
//   else {
//     throw new Error('ServiceWorker is unavailable');
//   }
// })
// .then(registration => {
//   console.info('ServiceWorker registration successful!');
//   app = new App();
// })
// .catch(e => {
//   console.error('ServiceWorker registration failed: ', err);
// });
