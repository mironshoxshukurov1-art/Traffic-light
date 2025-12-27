let i = 0;
let red = document.querySelector('.red');
let yellow = document.querySelector('.yellow');
let green = document.querySelector('.green');

function removeActive() {
    red.classList.remove('active');
    yellow.classList.remove('active');
    green.classList.remove('active');
}

setInterval(() => {
    if (i < 30) {
        console.log('Red', i);
        removeActive();
        red.classList.add('active');
        red.querySelector('p').textContent = 30 - i;
        yellow.querySelector('p').textContent = '';
        green.querySelector('p').textContent = '';
    } else if (i < 40) {
        console.log('Yellow', i);
        removeActive();
        yellow.classList.add('active');
        red.querySelector('p').textContent = '';
        yellow.querySelector('p').textContent = 40 - i;
        green.querySelector('p').textContent = '';
    } else {
        console.log('Green', i);
        removeActive();
        green.classList.add('active');
        red.querySelector('p').textContent = '';
        yellow.querySelector('p').textContent = '';
        green.querySelector('p').textContent = 70 - i;

        if (i == 69) i = -1;
    }
    i++;
}, 1000);