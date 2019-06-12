const navbar = [...document.getElementsByTagName('nav')][0];
const buttons = [...navbar.getElementsByClassName('bigbutton')];

console.log(buttons);

function clicky() {
  [...navbar.getElementsByClassName('active')][0].classList.toggle('active');
  this.classList.toggle('active');
}

buttons.forEach(function(element, index) {
  element.onclick = clicky;
});
