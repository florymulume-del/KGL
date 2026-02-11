const loginTab = document.getElementById('loginTab');
const signupTab = document.getElementById('signupTab');
const nameField = document.getElementById('nameField');
const submitBtn = document.getElementById('submitBtn');
const forgotLink = document.getElementById('forgotLink');

loginTab.onclick = () => {
  loginTab.classList.add('active');
  signupTab.classList.remove('active');
  nameField.classList.add('hidden');
  forgotLink.style.display = 'inline';
  submitBtn.textContent = 'Login';
};
signupTab.onclick = () => {
  signupTab.classList.add('active');
  loginTab.classList.remove('active');

  nameField.classList.remove('hidden');
  forgotLink.style.display = 'none';
  submitBtn.textContent = 'Create Account';
};

// procurement form 

