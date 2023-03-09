function onPasswordChange() {
  const passwordElement = document.getElementById('password');
  const confirmedPasswordElement = document.getElementById('confirm-password');
  const passwordErrorLabel = document.getElementById('password-error-label');
  if (passwordElement.value === confirmedPasswordElement.value) {
    passwordElement.classList.remove('invalid-password');
    confirmedPasswordElement.classList.remove('invalid-password');
    passwordErrorLabel.innerHTML = '';
  } else {
    passwordElement.classList.add('invalid-password');
    confirmedPasswordElement.classList.add('invalid-password');
    passwordErrorLabel.innerHTML = '* Passwords do no match';
  }
}
