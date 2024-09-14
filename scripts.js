const video = document.getElementById('video');
const playPauseButton = document.getElementById('playPause');
const progress = document.getElementById('progress');
const currentTime = document.getElementById('currentTime');
const duration = document.getElementById('duration');
const volumeButton = document.getElementById('volume');
const fullscreenButton = document.getElementById('fullscreen');

let isPlaying = false;

playPauseButton.addEventListener('click', () => {
    if (isPlaying) {
        video.pause();
        playPauseButton.textContent = 'Play';
    } else {
        video.play();
        playPauseButton.textContent = 'Pause';
    }
    isPlaying = !isPlaying;
});

video.addEventListener('timeupdate', () => {
    const value = (video.currentTime / video.duration) * 100;
    progress.value = value;
    currentTime.textContent = formatTime(video.currentTime);
    duration.textContent = formatTime(video.duration);
});

progress.addEventListener('input', () => {
    const value = progress.value * video.duration / 100;
    video.currentTime = value;
});

volumeButton.addEventListener('click', () => {
    if (video.muted) {
        video.muted = false;
        volumeButton.textContent = 'Mute';
    } else {
        video.muted = true;
        volumeButton.textContent = 'Unmute';
    }
});

fullscreenButton.addEventListener('click', () => {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    }
});

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}
