const ratingContainer = document.querySelector('.rating');
const thankYouContainer = document.querySelector('.thank-you');
const btnSubmit = document.querySelector('#btn-submit');
const btnReturn = document.querySelector('#btn-return');
const rating = document.querySelector('#thank-you--rating');
const rates = document.querySelectorAll('.btn-rating');

btnSubmit.addEventListener('click', () => {
  thankYouContainer.classList.remove('hidden');
  ratingContainer.classList.add('hidden');
});
btnReturn.addEventListener('click', () => {
  thankYouContainer.classList.add('hidden');
  ratingContainer.classList.remove('hidden');
});
rates.forEach(rate => {
  rate.addEventListener('click', () => {
    rating.innerHTML = rate.innerHTML;
  });
});
