import util from './util';

util.init();

const primaryHeader = select('.primary-header');
const menuToggler = select('.nav-toggler');
const mobileMenu = select('.nav-menu');
const subNavToggler = select('.subnav');

if (menuToggler) {
  menuToggler.addEventListener('click', () => {
    mobileMenu.classList.toggle('show')
  })
}

if (subNavToggler) {
  subNavToggler.addEventListener('click', function (e) {
    this.classList.toggle('active')
  })
}

let prevScrollposition = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPosition = window.pageYOffset;
  if (prevScrollposition > currentScrollPosition) {
    primaryHeader.style.top = "0";
  } else {
    primaryHeader.style.top = "-64px";
  }
  prevScrollposition = currentScrollPosition;
}
