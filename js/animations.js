/*  GSAP Animations */

window.addEventListener('load', () => {
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
});