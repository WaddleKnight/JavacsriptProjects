const closedFace = document.querySelector('.closed')
const openFace = document.querySelector('.open')

closedFace.addEventListener('click', function(){
    if(openFace.classList.contains('open')) {
      openFace.classList.add('active')
      closedFace.classList.remove('active')    
    }
})

openFace.addEventListener('click', function() {
    if(closedFace.classList.contains('closed')) {
        closedFace.classList.add('active')
        openFace.classList.remove('active')
    }
})