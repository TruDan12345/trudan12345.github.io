const button = document.querySelector('#themeButton');
const body = document.querySelector('body');
const buttonIcon = document.querySelector('#themeButton .fas');
const bottomRightCircle = document.getElementById('bottomRightCircle');

// Check if the user has set a theme preference before and set the theme accordingly
if (localStorage.getItem('theme') === 'dark') {
  setDarkTheme();
} else if (localStorage.getItem('theme') === 'light') {
  setLightTheme();
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  setDarkTheme();
} else {
  setLightTheme();
}

// Check for changes in the device theme and update the theme accordingly
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
  if (event.matches) {
    setDarkTheme();
  } else {
    setLightTheme();
  }
});

function setDarkTheme() {
  body.classList.remove('light-mode');
  body.classList.add('dark-mode');
  button.classList.remove('light-mode');
  button.classList.add('dark-mode');
  buttonIcon.classList.remove('fa-moon');
  buttonIcon.classList.add('fa-sun');
  buttonIcon.style.color = 'rgb(254, 211, 76)';
  body.style.transition = 'background-color 0.5s ease-in-out';
  body.style.backgroundColor = 'rgb(37, 42, 53)';
  button.style.backgroundColor = 'rgb(37, 42, 53)';
  bottomRightCircle.style.backgroundColor = 'rgb(37, 42, 53)'; // Update Send Button color
  localStorage.setItem('theme', 'dark'); // Save the theme preference to localStorage
  document.querySelector('.search-bar').style.backgroundColor = 'black';
}

function setLightTheme() {
  body.classList.remove('dark-mode');
  body.classList.add('light-mode');
  button.classList.remove('dark-mode');
  button.classList.add('light-mode');
  buttonIcon.classList.remove('fa-sun');
  buttonIcon.classList.add('fa-moon');
  buttonIcon.style.color = 'rgb(128, 89, 221)';
  body.style.transition = 'background-color 0.5s ease-in-out';
  body.style.backgroundColor = 'rgb(242, 242, 242)';
  button.style.backgroundColor = 'rgb(241, 241, 241)';
  bottomRightCircle.style.backgroundColor = 'rgb(241, 241, 241)'; // Update Send Button color
  localStorage.setItem('theme', 'light'); // Save the theme preference to localStorage
  document.querySelector('.search-bar').style.backgroundColor = 'white';
}

button.addEventListener('click', () => {
  if (body.classList.contains('dark-mode')) {
    setLightTheme();
  } else {
    setDarkTheme();
  }
});
