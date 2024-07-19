const introEl = document.querySelector('#introButton')
const projectEl = document.querySelector('#projectsButton')
const contactEl = document.querySelector('#contactButton')
const introSection = document.querySelector('#introduction')
const projectSection = document.querySelector('#projects')
const contactSection = document.querySelector('#contact')
const scroll = document.querySelector('#scrollToTop')


introEl.addEventListener('click',()=>{
    document.body.scrollIntoView()
})

projectEl.addEventListener('click',()=>{
    projectSection.scrollIntoView()
})
contactEl.addEventListener('click',()=>{
    contactSection.scrollIntoView()
})

window.addEventListener('scroll',()=>{
    if (window.scrollY <=20){
        scroll.style.display ="none"
    }
    else{
        scroll.style.display ="flex"
    }
    
})

scroll.addEventListener('click',()=>{
    document.body.scrollIntoView()
})