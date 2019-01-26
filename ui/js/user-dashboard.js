'use strict';

// On toggling between tabs
const userDashboard = document.querySelector('.main-user-dashboard');
const tabLinks = document.querySelectorAll('.tab-links-list__item');

function toggleTab(e) {

  if (e.target.classList.contains('parties-list-tab')) {
    userDashboard.classList.add('show-parties-list');
    userDashboard.classList.remove('show-votes-history');
  }

  if (e.target.classList.contains('votes-history-tab')) {
    userDashboard.classList.add('show-votes-history');
    userDashboard.classList.remove('show-parties-list');
  }
}

tabLinks.forEach(tabLink => {
  tabLink.addEventListener('click', toggleTab);
});

// On window load
userDashboard.classList.add('show-parties-list');

