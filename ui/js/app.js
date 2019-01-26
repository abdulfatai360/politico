'use strict';

const header = document.querySelector('.header');
const menuIcons = [
  document.querySelector('.bar-icon'),
  document.querySelector('.close-icon')
]

function toggleMenu() {
  header.classList.toggle('toggle-nav');
}

menuIcons.forEach(e => e.addEventListener('click', toggleMenu));
