const ConcludeButton = () => {

        const concludeButton = document.createElement('button');

        concludeButton.classList.add('check-button');
        concludeButton.innerText = 'finish';

        concludeButton.addEventListener('click', finsishTask);

        return concludeButton;
    }



    const finsishTask = (event) => {
        const concludeButton = event.target;

        const taskFinished = concludeButton.parentElement;

        taskFinished.classList.toggle('done');
    }

export default ConcludeButton;