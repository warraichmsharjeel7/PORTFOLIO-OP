/*========toggle icon navbar=========*/
let menuicon = document.querySelector('#menuicon');
let navbar = document.querySelector('.navbar');

menuicon.onclick = () => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*========theme toggle functionality=========*/
const themeToggleBtn = document.querySelector('#theme-toggle');
const themeIcon = document.querySelector('#theme-icon');

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');

    if (document.body.classList.contains('light-theme')) {
        themeIcon.classList.remove('bx-moon');
        themeIcon.classList.add('bx-sun');
    } else {
        themeIcon.classList.remove('bx-sun');
        themeIcon.classList.add('bx-moon');
    }
});

/*========scroll section active link=========*/
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                let targetLink = document.querySelector('header nav a[href*=' + id + ']');
                if (targetLink) {
                    targetLink.classList.add('active');
                }
            });
        };
    });
    
    // sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*======remove toggle icon and navbar when click navbar link (scroll)====*/
    menuicon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*========scroll reveal=========*/
ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.homecontent, .heading', { origin: 'top' });
ScrollReveal().reveal('.homeimg, .servicescontainer, .portfoliobox, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.homecontent h1, .aboutimg', { origin: 'left' });
ScrollReveal().reveal('.homecontent p, .aboutcontent', { origin: 'right' });

/*========typed js=========*/
const typed = new Typed('.multipletext', {
    strings: ['Frontend Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});