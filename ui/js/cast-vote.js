'use strict';

// On toggling between tabs
const ballot = document.querySelector('.main-cast-vote');
const tabLinks = document.querySelectorAll('.tab-links__item');

function toggleTab(e) {

  if (e.target.classList.contains('federal-tab')) {
    ballot.classList.add('show-federal-ballot');
    ballot.classList.remove('show-legislative-ballot');
    ballot.classList.remove('show-state-ballot');
    ballot.classList.remove('show-lg-ballot');
  }

  if (e.target.classList.contains('legislative-tab')) {
    ballot.classList.add('show-legislative-ballot');
    ballot.classList.remove('show-federal-ballot');
    ballot.classList.remove('show-state-ballot');
    ballot.classList.remove('show-lg-ballot');
  }

  if (e.target.classList.contains('state-tab')) {
    ballot.classList.add('show-state-ballot');
    ballot.classList.remove('show-federal-ballot');
    ballot.classList.remove('show-legislative-ballot');
    ballot.classList.remove('show-lg-ballot');
  }

  if (e.target.classList.contains('lg-tab')) {
    ballot.classList.add('show-lg-ballot');
    ballot.classList.remove('show-federal-ballot');
    ballot.classList.remove('show-legislative-ballot');
    ballot.classList.remove('show-state-ballot');
  }
}

tabLinks.forEach(tabLink => {
  tabLink.addEventListener('click', toggleTab);
});

// On window load
ballot.classList.add('show-federal-ballot');

// Voting core logic
function getRadioBtnsAndForm(officeName) {
  const form = document.querySelector(
    `.ballot-${officeName} form`
  );

  let radioBtns = document.querySelectorAll(
    `.ballot-${officeName} input`
  );

  const submitVoteBtn = document.querySelector(
    `.ballot-${officeName} .submit-vote-btn`
  );

  const clrVoteBtn = document.querySelector(
    `.ballot-${officeName} .clr-vote-btn`
  );

  if (radioBtns.length) radioBtns = Array.from(radioBtns);
  else radioBtns = [radioBtns];
  
  return { form, radioBtns, submitVoteBtn, clrVoteBtn };
}

function checkSelectedCandidate(officeName) {
  const btnsArr = getRadioBtnsAndForm(officeName).radioBtns;
  const selectedRadio = btnsArr.find(el => el.checked);
  highlightSelectedCandidate(selectedRadio, btnsArr);
}

function highlightSelectedCandidate(radioSelect, radioArr) {
  radioArr.forEach(el => {
    if (el === radioSelect) el.parentElement.classList.add('selected');
    else el.parentElement.classList.remove('selected');
  })
}

function recordVoteSelection(officeName) {

  const el = getRadioBtnsAndForm(officeName).radioBtns.find(el => {
    return el.checked;
  })

  return {
    office: officeName,
    candidateVoted: el.value
  }
}

function clearVoteSelection(officeName) {
  getRadioBtnsAndForm(officeName).radioBtns.forEach(el => {
    el.checked = false;
    el.parentElement.classList.remove('selected');
  });
}

/* Event listener for President Office */
getRadioBtnsAndForm('president').radioBtns.forEach(el => el.addEventListener(
  'change', () => checkSelectedCandidate('president')
));
getRadioBtnsAndForm('president').clrVoteBtn.addEventListener(
  'click', () => clearVoteSelection('president')
);
getRadioBtnsAndForm('president').submitVoteBtn.addEventListener(
  'click', () => console.log(recordVoteSelection('president'))
);

/* Event listener for Senate Office */
getRadioBtnsAndForm('senate').radioBtns.forEach(e => e.addEventListener(
  'change', () => checkSelectedCandidate('senate')
));
getRadioBtnsAndForm('senate').clrVoteBtn.addEventListener(
  'click', () => clearVoteSelection('senate')
);
getRadioBtnsAndForm('senate').submitVoteBtn.addEventListener(
  'click', () => console.log(recordVoteSelection('senate'))
);

/* Event listener for HOR Office */
getRadioBtnsAndForm('hor').radioBtns.forEach(el => el.addEventListener(
  'change', () => checkSelectedCandidate('hor')
));
getRadioBtnsAndForm('hor').clrVoteBtn.addEventListener(
  'click', () => clearVoteSelection('hor')
);
getRadioBtnsAndForm('hor').submitVoteBtn.addEventListener(
  'click', () => console.log(recordVoteSelection('hor'))
);

