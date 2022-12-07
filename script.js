const playSong = function(e) {
  if (notes.classList.contains('silent')) {
    nessieSong.play();
    notes.classList.toggle('silent');
  } else {
    nessieSong.pause();
    notes.classList.toggle('silent');
  }
}

let phonograph = document.getElementById('phonograph');
let notes = document.getElementById('notes');
let nessieSong = document.getElementById('nessieSong');
nessieSong.loop = true;
phonograph.addEventListener('click', playSong);