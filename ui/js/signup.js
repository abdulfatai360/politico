'use strict';

const signupForm = document.querySelector('.signup-form');

function toggleAdminField() {
  const { adminCheck, signupFormBtn } = signupForm;
 
  if (adminCheck.checked) {
    signupFormBtn.textContent = 'Sign Up as Admin';
    signupForm.classList.add('admin-user');
  } else {
    signupFormBtn.textContent = 'Sign Up'
    signupForm.classList.remove('admin-user');
  }
}

signupForm.adminCheck.addEventListener('change', toggleAdminField);
