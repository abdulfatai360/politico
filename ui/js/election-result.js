'use strict';

// On toggling between tabs
const electionResult = document.querySelector('.main-election-result');
const tabLinks = document.querySelectorAll('.tab-links__item');

function toggleTab(e) {

  if (e.target.classList.contains('federal-tab')) {
    electionResult.classList.add('show-federal-result');
    electionResult.classList.remove('show-legislative-result');
    electionResult.classList.remove('show-state-result');
    electionResult.classList.remove('show-lg-result');
  }

  if (e.target.classList.contains('legislative-tab')) {
    electionResult.classList.add('show-legislative-result');
    electionResult.classList.remove('show-federal-result');
    electionResult.classList.remove('show-state-result');
    electionResult.classList.remove('show-lg-result');
  }

  if (e.target.classList.contains('state-tab')) {
    electionResult.classList.add('show-state-result');
    electionResult.classList.remove('show-federal-result');
    electionResult.classList.remove('show-legislative-result');
    electionResult.classList.remove('show-lg-result');
  }

  if (e.target.classList.contains('lg-tab')) {
    electionResult.classList.add('show-lg-result');
    electionResult.classList.remove('show-federal-result');
    electionResult.classList.remove('show-legislative-result');
    electionResult.classList.remove('show-state-result');
  }
}

tabLinks.forEach(tabLink => {
  tabLink.addEventListener('click', toggleTab);
});

// On window load
electionResult.classList.add('show-federal-result');