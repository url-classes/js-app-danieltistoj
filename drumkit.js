import './style.css'

document.addEventListener('keydown', function(e){
    const key = e.key
    const audio = document.querySelector(`audio[data-key="${key}"]`)
    const keyEl = document.querySelector(`drumkit__key[data-key="${key}]`)
    if(!audio) return
        audio.currentTime = 0
        audio.play()
        keyEl.classList.add('playing')
})