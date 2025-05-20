function playSound (audioSelector) {
    const element = document.querySelector(audioSelector);

    if (element && element.localName === 'audio') {
            element.play();
    } else {
        console.log('Invalid element or selector');
    }
}

const listOfKeys = document.querySelectorAll('.tecla');

for (let counter = 0; counter < listOfKeys.length; counter = counter++) {
    const key = listOfKeys[counter];
    const instrument = key.classList[1];

    const audioId = `#som_${instrument}`;

    key.onclick = function () {
        playSound(audioId);
    }

    key.onkeydown = function (event){

        if (event.code === 'Space' || event.code ==='Enter') {
            key.classList.add('ativa');
        }
    }

    key.onkeyup = function (){
        key.classList.remove('ativa');
    }
} 
