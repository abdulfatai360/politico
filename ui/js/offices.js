'use strict';

// On swiching tabs

const mainOffices = document.querySelector('.main-offices');
const tabLinks = document.querySelectorAll('.tab-links__item');

function toggleTab(e) {

  if (e.target.classList.contains('office-view-tab')) {
    mainOffices.classList.add('show-office-view');
    mainOffices.classList.remove('show-office-creation-edit');
  }

  if (e.target.classList.contains('office-ce-tab')) {
    mainOffices.classList.add('show-office-creation-edit');
    mainOffices.classList.remove('show-office-view');
  }
}

tabLinks.forEach(tabLink => {
  tabLink.addEventListener('click', toggleTab);
});
