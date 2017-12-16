var dirs = document.getElementsByClassName('is-directory');

[].forEach.call(dirs, function(dir) {
  dir.addEventListener('click', function (el) {
    toggleDir(el);
  });
});

function toggleDir(el) {
  console.log(el);
  el.target.parentNode.classList.toggle('is-open');
}
