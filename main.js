let progressBar = document.querySelector('.progress-bar')

window.addEventListener('scroll',()=>{
    let scrollTop = window.scrollY
    let docHeight = document.body.clientHeight
    let winHeight = window.innerHeight
    let scrollPercent = Math.round((scrollTop/(docHeight-winHeight))*100)
    progressBar.style.width = `${scrollPercent}%`
})