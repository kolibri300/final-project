const video = document.querySelector('.made-video')
const play = document.querySelector('.made-play')
const pause = document.querySelector('.made-pause')

play.addEventListener('click', (e) => {
    if (video.paused) {
        video.play()
        pause.style.display = 'none'
    }
    else {
        video.pause()
        pause.style.display = 'flex'
    }
})