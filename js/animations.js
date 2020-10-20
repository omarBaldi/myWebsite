/*  GSAP Animations */

window.addEventListener('load', () => {
    animateIntro();
    setTimeout(() => {
        animateNavbar();
        animateAboutSection();
    }, 3000);
    animateScrollDown();
});


function animateIntro() {
    const introPage = document.querySelector('.intro__page');
    const imgIntro = document.querySelector('.intro__page img');
    const textIntro = document.querySelector('.intro__page h3');

    TweenMax.to(imgIntro, 4, { opacity: 1, });
    TweenMax.to(textIntro, 4, { opacity: 1 });

    setTimeout(() => { 
        TweenMax.to(imgIntro, 0.7, { opacity: 0, display: "none" });
        TweenMax.to(textIntro, 0.7, {opacity: 0, display: "none" });
        TweenMax.to(introPage, 2, { scaleY: 0, height: '100%', ease: "circ.out" });
    }, 3000);
};

function animateNavbar() {

    gsap.from('.menu__logo img', { x: -100, duration: 2.5, opacity: 0 });

    const menuLaptopLinks = document.querySelectorAll('.menu__links__laptop ul li');
    let startNumber = 400;

    if (window.innerWidth <= 768) {
        //to do
    } else {
        menuLaptopLinks.forEach(link => {
            gsap.from(link, { x: startNumber, duration: 3, opacity: 0 });
            startNumber += 100;
        });
    }
};

function animateAboutSection() {

    gsap.from('.about__textContainer', { x: -1200, duration: 3, opacity: 0 });
    gsap.from('.about__imgContainer', { y: -1200, duration: 3, opacity: 0 });
    gsap.from('.about__container .side__vertical__text', { y: -1200, duration: 3, opacity: 0 });
};

function animateScrollDown() {

    const projectIntroText = document.querySelector('.projects__intro');

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: projectIntroText,
            start: "bottom center",
        }
    });

    tl.from(projectIntroText, { x: -200, opacity: 0, duration: 1.2});

   
    const projects = document.querySelectorAll('.project');
    projects.forEach((project, index) => {

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: project,
                start: "top center",
            }
        });

        if (index % 2 == 0) {
            tl.from(project, { x: 200, opacity: 0, duration: 1.2});
        } else {
            tl.from(project, { x: -200, opacity: 0, duration: 1.2});
        }

    });
}

