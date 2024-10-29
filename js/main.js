const navContent = document.querySelector('.nav-content')
const navBtn = document.querySelector('.burger-btn')
const allNavItems = document.querySelectorAll('.nav-content__item')
const navBtnBars = document.querySelector('.burger-btn__bars')
const allSections = document.querySelectorAll('.section')
const footerYear = document.querySelector('.footer__year')


const handleNav = () => {
	navContent.classList.toggle('nav-content--active')

    navBtnBars.classList.remove('black-bars-color')

    allNavItems.forEach(item => {
        item.addEventListener('click', () => {
            navContent.classList.remove('nav-content--active')
        })
    })

    handleNavItemAnimation ()

}

const handleNavItemAnimation = () => {
    let delayTime = 0

    allNavItems.forEach(item => {
        item.classList.toggle('nav-items-animation')
        // animation-delay: .3s;
        item.style.animationDelay = '.' + delayTime + 's';
        delayTime++;
    })
}

const handleObserver = () => {
    const currentSection = window.scrollY;

    allSections.forEach(section => {
        if (section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
            navBtnBars.classList.add('black-bars-color')
        } else if (!section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
            navBtnBars.classList.remove('black-bars-color')
        }
    })
}

const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}


handleCurrentYear();
navBtn.addEventListener('click', handleNav)
window.addEventListener('scroll', handleObserver)


