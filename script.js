//typing animation

var typed = new Typed("#t-text", {
    strings: ["Front-end Web developer", "Photographer"],
    // strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
    typeSpeed: 100,
    loop: true,
  });

//Humberger menu

const icon = document.querySelector('.icon');
const ul = document.querySelector('#ul');
// const profile = document.querySelector('.profile')

icon.addEventListener('click', () => {
  if (ul.style.display === 'none' || ul.style.display === '') {
    ul.style.display = 'block';
    // profile.style.display = "none"
  } else {
    ul.style.display = 'none';
    // profile.style.display = "flex"
  }
});

