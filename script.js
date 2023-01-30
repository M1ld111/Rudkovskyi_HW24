const btn = document.getElementById('1');
const img = document.getElementsByClassName('img')[0];



function random() {
    return Math.round(Math.floor(Math.random() * 9)+1);
}

btn.addEventListener('click', () => {
    img.src = `./images/${random()}.jpg`;
});