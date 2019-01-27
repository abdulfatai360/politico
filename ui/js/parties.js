'use strict';

// Sample data
const parties = [
  {
    id: 1,
    name: 'Peoples Democratic Party',
    acronym: 'PDP',
    hqAddress: 'Wadata Plaza, Michael Okpara Way, Wuse Zone 5, Abuja, FCT',
    logoUrl: '../img/pdp-logo.png'
  },
  {
    id: 2,
    name: 'All Progressive Congress',
    acronym: 'APC',
    hqAddress: '40 Blantyre Street, off Adetokunbo Ademola Street, Wuse II, Abuja, FCT',
    logoUrl: '../img/apc-logo.png'
  }
];

// Content generation from data

const mainParties = document.querySelector('.main-parties');
const partyQuickViewTemplate = document.querySelector('.table-template');

function generatePartyQuickViewContent(party) {
  let template = partyQuickViewTemplate.innerHTML;

  template = template.replace('{{id}}', party.id);
  template = template.replace('{{name}}', party.name);
  template = template.replace('{{acronym}}', party.acronym);

  return template;
}

function renderPartyQuickViewContent() {
  let htmlStr = '';
  for (const party of parties) {
    htmlStr += generatePartyQuickViewContent(party)
  }

  document.querySelector('.party-quick-view__table tbody')
    .innerHTML = htmlStr;
}

// On window load

renderPartyQuickViewContent();

// On swiching tabs

const tabLinks = document.querySelectorAll('.tab-links__item');

function toggleTab(e) {

  if (e.target.classList.contains('party-qv-tab')) {
    mainParties.classList.add('show-party-quick-view');
    mainParties.classList.remove('show-party-creation-edit');
    // document.querySelector('.form-party').reset();
  }

  if (e.target.classList.contains('party-ce-tab')) {
    mainParties.classList.add('show-party-creation-edit');
    mainParties.classList.remove('show-party-quick-view');
  }
}

tabLinks.forEach(tabLink => {
  tabLink.addEventListener('click', toggleTab);
});

// On viewing each party detail

const partyLogoContainer = document.querySelector('.party-detail__logo');
const partyFullViewTemplate = document.querySelector('.party-detail__template');
const partyQuickViewTable = document.querySelector('.party-quick-view__table');

function generatePartyFullViewContent(party) {
  let template = partyFullViewTemplate.innerHTML;

  template = template.replace('{{name}}', party.name);
  template = template.replace('{{acronym}}', party.acronym);
  template = template.replace('{{hqAddress}}', party.hqAddress);

  partyLogoContainer.style.cssText = `/*css*/
    background: url(${party.logoUrl}) no-repeat center;
  `;

  return template;
}

function showPartyFullView(e) {
  if (e.target.classList.contains('name')) {
    const intParty = e.target;
    const party = parties.find(el => el.name == intParty.textContent);
    document.querySelector('.party-detail__content')
      .innerHTML = generatePartyFullViewContent(party);
    
    mainParties.classList.add('show-party-full-view');
  }
}

function closePartyFullView() {
  mainParties.classList.remove('show-party-full-view');
}

partyQuickViewTable.addEventListener('click', showPartyFullView);
document.querySelector('.party-detail__close-icon')
  .addEventListener('click', closePartyFullView );
