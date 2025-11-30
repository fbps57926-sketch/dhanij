// Password login: 'adminjawa'
const PASSWORD = 'adminjawa';

const loginForm = document.getElementById('login-form');
const loginError = document.getElementById('login-error');
const loginContainer = document.getElementById('login-container');
const app = document.getElementById('app');

loginForm.onsubmit = function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;
  if (!username || password !== PASSWORD) {
    loginError.textContent = "Username atau password salah!";
    return;
  }
  localStorage.setItem('isLoggedIn', '1');
  showApp();
};

function showApp() {
  loginContainer.style.display = 'none';
  app.style.display = 'block';
  showPage('home');
}

function showPage(page) {
  document.querySelectorAll('.page').forEach(el => el.style.display = 'none');
  document.getElementById(page).style.display = 'block';
}

function logout() {
  localStorage.removeItem('isLoggedIn');
  app.style.display = 'none';
  loginContainer.style.display = 'block';
  loginForm.reset();
  loginError.textContent = '';
}

// Auto-login check
if (localStorage.getItem('isLoggedIn')) {
  showApp();
}