const nav = document.querySelector('nav');
const menuMobile = document.querySelector('.menu__links__mobile');
const menuMobileFullpage = document.querySelector('.menu__mobile__fullPage')
const menuLaptop = document.querySelector('.menu__links__laptop');
const menuLinks = document.querySelectorAll('.menu__mobile__fullPage ul li');

class Menu {
    static isMenuMobileOpen = false;
    static openMobileClass = 'openMobile';
    static showMenuClass = 'menu__show';
    static hideMenuClass = 'menu__hide';
    static previousScrollPosition = window.pageYOffset;

    static start() {
        this.checkMobileMenu();
        window.onresize = () => this.checkMobileMenu();
        window.onscroll = () => this.scroll();
        menuMobile.addEventListener('click', () => this.clickHamburger());
        menuLinks.forEach(link => link.addEventListener('click', () => this.clickHamburger()));
    }

    static checkMobileMenu() {
        if (window.innerWidth <= 768) {
            menuLaptop.style.display = 'none';
            menuMobile.style.display = 'flex'; 
        } else {
            menuLaptop.style.display = 'flex';
            menuMobile.style.display = 'none'; 
        }
    }
    static clickHamburger() {
        if (!this.isMenuMobileOpen) {
            menuMobile.classList.add(this.openMobileClass);
            menuMobileFullpage.classList.add(this.openMobileClass);
        } else {
            menuMobile.classList.remove(this.openMobileClass);
            menuMobileFullpage.classList.remove(this.openMobileClass);
        }
        this.isMenuMobileOpen = !this.isMenuMobileOpen;
    }
    static scroll() {
        const currentScrollPosition = window.pageYOffset;
    
        if (currentScrollPosition > this.previousScrollPosition) {
            this.hide();
        } else {
            this.show();
        }

        this.previousScrollPosition = currentScrollPosition;
    }
    static show() {
        if (nav.classList.contains(this.hideMenuClass)) {
            nav.classList.remove(this.hideMenuClass);
        }
        nav.classList.add(this.showMenuClass);
    }
    static hide() {
        if (nav.classList.contains(this.showMenuClass)) {
            nav.classList.remove(this.showMenuClass);
        }
        nav.classList.add(this.hideMenuClass);
    }
};


Menu.start();