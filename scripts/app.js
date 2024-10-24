const container = document.querySelector('.container');
const movieTitle = document.querySelector('.userInputTitle');
const moviePosterUrl = document.querySelector('.userInputPosterUrl');
const btn = document.querySelector('.button');
const movieTitleToDisplay = document.querySelector('.favoriteMovieTitle');

let titleInStorage = localStorage.getItem('title');
let imageUrlStorage = localStorage.getItem('imageUrl');

if (titleInStorage && imageUrlStorage) {
  movieTitleToDisplay.textContent = titleInStorage;
  container.style.backgroundImage = `url(${imageUrlStorage})`;
}

btn.addEventListener('click', () => {
  let movieTitleInput = movieTitle.value;
  let posterUrlInput = moviePosterUrl.value;
  localStorage.setItem('title', movieTitleInput);
  localStorage.setItem('imageUrl', posterUrlInput);
  movieTitleToDisplay.textContent = movieTitleInput;
  container.style.backgroundImage = `linear-gradient(rgba(127, 127, 168, 0.658), rgba(119, 99, 99, 0.733)), url('${posterUrlInput}')`;
  
  movieTitle.value = '';
  moviePosterUrl = '';
});
