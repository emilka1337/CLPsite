let daysLeft = 1;
let hoursLeft = 23;
let minutesLeft = 59;

function tick() {
    let timer = document.querySelector('.clocks p');

    let daysLeftStr = daysLeft.toString();
    let hoursLeftStr = hoursLeft.toString();
    let minutesLeftStr = minutesLeft.toString();

    [daysLeftStr, hoursLeftStr, minutesLeftStr] = [daysLeftStr, hoursLeftStr, minutesLeftStr].map(item => item.length == 1 ? `0${item}` : `${item}`);

    timer.innerHTML = `<span>${daysLeftStr[0] ?? 0}</span><span>${daysLeftStr[1]}</span>:<span>${hoursLeftStr[0] ?? 0}</span><span>${hoursLeftStr[1]}</span>:<span>${minutesLeftStr[0] ?? 0}</span><span>${minutesLeftStr[1]}</span>`;

    minutesLeft--;

    if (minutesLeft == 0) {
        hoursLeft--;
        minutesLeft = 59;
    }
    if (hoursLeft == 0) {
        daysLeft--;
        hoursLeft = 23;
    }
}

tick();

setInterval(function() {
    tick();
}, 1000 * 60);

document.querySelector('.banner .close button').addEventListener('click', () => {
    document.querySelector('.banner').style.display = 'none';
});

document.querySelector('.show-banner').addEventListener("click", function() {
    document.querySelector('.banner').style.display = 'flex';
});