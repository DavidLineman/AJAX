const JOKE_URL = 'https://api.chucknorris.io/jokes/random;'

const promise = fetch(JOKE_URL);
const jokes = document.querySelector('.jokes');

promise
  .then(function (response) {
    const processingPromise = response.json();
    return processingPromise;
  })
  .then(function (processedPromise) {
    const joke = document.createElement('h2');
    joke.innerHTML = processedPromise.value;
    jokes.appendChild(joke);
  });

