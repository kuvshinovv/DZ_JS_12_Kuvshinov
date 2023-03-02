
const data = JSON.parse(dataInfo);

const videoEl = document.querySelector('.video');

const playButton = document.querySelector('.fa-play');
const pauseButton = document.querySelector('.fa-pause');
const stopButton = document.querySelector('.fa-stop');
const forwardButton = document.querySelector('.fa-forward');
const backwardButton = document.querySelector('.fa-backward');
const videotrackEl = document.querySelector('.video-track');
const timingEl = document.querySelector('.timeline');
const volumeEl = document.querySelector('.volume');
const currentTimeEl = document.querySelector('.CURRENT_TIME');
const contentAll = document.querySelector('.content');



playButton.addEventListener('click', function (e) {
    videoEl.play();
    videoEl.volume = 0.2; 
});

pauseButton.addEventListener('click', function (e) {
    videoEl.pause();
});

stopButton.addEventListener('click', function (e) {
    videoEl.pause();
    videoEl.currentTime = 0;
});

backwardButton.addEventListener('click', function (e) {
    videoEl.currentTime -= 2 ;
});

forwardButton.addEventListener('click', function (e) {
    videoEl.currentTime += 2 ;
});

setInterval(function () {
    let currentTime = (Math.round(parseFloat(videoEl.currentTime)*100)/100);
    let duration = (Math.round(parseFloat(videoEl.duration)*100)/100);
    
    document.querySelector('.CURRENT_TIME').textContent = currentTime;
    document.querySelector('.durationALL').textContent = duration;
    timingEl.value = videoEl.currentTime / videoEl.duration * 100;

}, 10);

volumeEl.addEventListener('input', function (e) {
    videoEl.volume = volumeEl.value;
});

timingEl.addEventListener('input', function (e) {
    videoEl.currentTime = timingEl.value / 100 * videoEl.duration
});



    const contentPlayList = document.createElement('div');
    contentPlayList.classList.add('PlayList');
    contentAll.appendChild(contentPlayList); 

    videoEl.setAttribute('src', './img/SnoopDogg.mp4')





    data.playList.forEach(element => {

    const contentPlayListitems = document.createElement('div');
    contentPlayListitems.classList.add('PlayListitems');
    contentPlayList.appendChild(contentPlayListitems); 

    const videoPlayListitems = document.createElement('video');
    videoPlayListitems.classList.add('videoPlayListitems');
    videoPlayListitems.setAttribute('src', element.video)
    contentPlayListitems.appendChild(videoPlayListitems); 

    const contentPlayListitemsName = document.createElement('p');
    contentPlayListitemsName.classList.add('playListitemsname');
    contentPlayListitemsName.innerText = element.name;
    contentPlayListitems.appendChild(contentPlayListitemsName); 





    contentPlayListitems.addEventListener('click', function (e) {
        let selectedvideo = element.video;
        videoEl.setAttribute('src', element.video)
    });

    console.log(element.name);
});















