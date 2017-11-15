/*this will be the countdown bar*/

/*working on burger bar here*/
var burger = document.getElementsByClassName('dropbtn');
var bar = document.getElementsByClassName('dropdown-content');

burger.addEventListener('click', function() {
  if (bar.classList.contains('is-hidden')) {
    bar.classList.remove('is-hidden')
  } else {
    bar.classList.add('is-hidden')
  }
})
