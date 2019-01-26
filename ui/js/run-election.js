'use strict';

const offices = [
  {
    id: 1,
    type: 'Federal',
    name: 'President'
  },
  {
    id: 2,
    type: 'Legislative',
    name: 'Senate'
  },
  {
    id: 3,
    type: 'Legislative',
    name: 'House of Representative'
  },
  {
    id: 4,
    type: 'State',
    name: 'Governor'
  },
  {
    id: 5,
    type: 'Local Government',
    name: 'Council Chairman'
  },
  {
    id: 6,
    type: 'Local Government',
    name: 'Councillor'
  },
];

const eoiForm = document.querySelector('.eoi-form');
const {officeType, officeName} = eoiForm;

function populateOfficeNameSelect() {
  clearOfficeNameSelect();
  offices
    .filter(o => o.type == officeType.value)
    .forEach(o => {
      const html = document.createElement('option');
      html.text = o.name;
      officeName.add(html, null)
    })
}

// https://stackoverflow.com/questions/3364493/how-do-i-clear-all-options-in-a-dropdown-box
function clearOfficeNameSelect() {
  // for (const elem of officeName.options) officeName.remove(0);
  const len = officeName.options.length;
  for (let i = len - 1; i >= 1; i--) {
    officeName.remove(i)
  }
}

officeType.addEventListener('change', populateOfficeNameSelect);
