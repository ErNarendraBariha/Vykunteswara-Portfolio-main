var typed = new Typed(".text",{
    strings:["Coder Data Aspirant"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})
const sr = ScrollReveal({
    origin: 'top',
    distance: '70px',
    duration: 2000,
    reset: true     
})
console.log(sr);
sr.reveal('.about h2',{ delay:100 } );
// sr.reveal('.btn-box',{delay:200})

