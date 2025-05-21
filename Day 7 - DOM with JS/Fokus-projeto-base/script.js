const html = document.querySelector('html');
const focusButton = document.querySelector('.app__card-button--foco');
const tinyButton = document.querySelector('.app__card-button--curto');
const longButton = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const title = document.querySelector('.app__title');
const buttons = document.querySelectorAll('.app__card-button');
const startPauseButton = document.querySelector('#start-pause');
const musicInput = document.querySelector('#alternar-musica');
const playOrPauseButton = document.querySelector('#start-pause span');
const playOrPauseButtonIcon = document.querySelector(".app__card-primary-butto_icon")
const stopwatch = document.querySelector('#timer');

const music = new Audio('/sons/luna-rise-part-one.mp3');
const beep = new Audio('/sons/beep.mp3')
const play = new Audio('/sons/play.wav')
const pause = new Audio('/sons/pause.mp3')

let elapsedTimeInSeconds = 1500;
let intervalId = null;

music.loop = true;

musicInput.addEventListener('change', () => {
    if(music.paused) {
        music.play();
    } else {
        music.pause();
    }
});

focusButton.addEventListener('click', () => {
    elapsedTimeInSeconds = 1500;
    changeContext('foco');
    focusButton.classList.add('active');
});

tinyButton.addEventListener('click', () => {
    elapsedTimeInSeconds = 300;
    changeContext('descanso-curto');
    tinyButton.classList.add('active');
});

longButton.addEventListener('click', () => {
    elapsedTimeInSeconds = 900;
    changeContext('descanso-longo');
    longButton.classList.add('active');
});

function changeContext (context) {
    showTime();
    buttons.forEach(function (context){
        context.classList.remove('active');
    });
    html.setAttribute('data-contexto', context);
    banner.setAttribute('src', `/imagens/${context}.png`);
    switch (context) {
        case "foco":
            title.innerHTML = `Optimize your productivity,<br>
                <strong class="app__title-strong">dive into what matters.</strong>`
            break;
        case "descanso-curto":
            title.innerHTML = `How about a breather?<br>
                <strong class="app__title-strong">Take a short break.</strong>`
            break;
        case "descanso-longo":
            title.innerHTML = `Time to come back to the surface.<br>
                <strong class="app__title-strong">Take a long break.</strong>`
        default:
            break;
    }
}

const countdown = () => {
    if(elapsedTimeInSeconds <= 0){
        beep.play();
        alert('Take a break!');
        reset();
        return
    }
    elapsedTimeInSeconds -= 1;
    showTime();
}

startPauseButton.addEventListener('click', startOrStop);

function startOrStop() {
    if (intervalId) {
        pause.play();
        reset();
        return
    }
    play.play();
    intervalId = setInterval(countdown, 1000);
    playOrPauseButton.textContent = "Pause";
    playOrPauseButtonIcon.setAttribute('src', `/imagens/pause.png`);
}

function reset () {
    clearInterval(intervalId);
    playOrPauseButton.textContent = "Start"
    playOrPauseButtonIcon.setAttribute('src', `/imagens/play_arrow.png`)
    intervalId = null;
}

function showTime() {
    const time = new Date(elapsedTimeInSeconds * 1000);
    const formatedTime = time.toLocaleTimeString('pt-Br', {minute: '2-digit', second: '2-digit'});
    stopwatch.innerHTML = `${formatedTime}`;
}

showTime()