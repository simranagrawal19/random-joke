const jokeText = document.querySelector('.joke-text');
const jokeBtn = document.querySelector('.btn');
jokeBtn.addEventListener('click', getJoke);
getJoke();

function getJoke() {
    fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
        const joke = data.joke;
        jokeText.innerHTML = joke;
    });
}