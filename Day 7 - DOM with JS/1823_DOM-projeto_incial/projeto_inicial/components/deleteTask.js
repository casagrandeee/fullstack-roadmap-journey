const DeleteButton = () => {

        const deleteButton = document.createElement('button');
        
        deleteButton.innerText = 'delete';
        deleteButton.addEventListener('click', deleteTask);

        return deleteButton;
    }

    const deleteTask = (event) => {
        const deleteButton = event.target;

        const taskFinished = deleteButton.parentElement;

        taskFinished.remove();

        return deleteButton;
    }

export default DeleteButton