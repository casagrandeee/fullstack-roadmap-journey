const API_URL = 'http://localhost:3010/tasks';

const form = document.getElementById('task-form');
const titleInput = document.getElementById('title');
const categoryInput = document.getElementById('category');
const statusInput = document.getElementById('status');

const pendingList = document.getElementById('pending-tasks');
const completedList = document.getElementById('completed-tasks');

//Render tasks by status
function renderTasks(tasks) {
    pendingList.innerHTML = "";
    completedList.innerHTML = "";

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${task.title}</strong> <em>(${task.category})</em>
          <div class="actions">
            ${task.status === "pending" ? `<button class="done-btn" data-id="${task.id}">✔ Done</button>` : ""}
            <button class="delete-btn" data-id="${task.id}">🗑 Delete</button>
          </div>`;

        if (task.status === 'pending') {
            pendingList.appendChild(li);
        } else if (task.status === 'completed') {
            completedList.appendChild(li);
        }
    });

    document.querySelectorAll('.done-btn').forEach(button => {
        button.addEventListener('click', () => {
            const id = button.dataset.id;

            fetch(`${API_URL}/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ status: "completed" })
            })
                .then(res => res.json())
                .then(() => loadTasks());
        });
    });

    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', () => {
            const id = button.dataset.id;

            fetch(`${API_URL}/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(() => loadTasks());
        });
    });
}

// Load tasks on page load
function loadTasks() {
    fetch(API_URL)
        .then(res => res.json())
        .then(data => renderTasks(data))
        .catch(err => console.error('Error loading tasks:', err));
}

// Handle form submit
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const newTask = {
        title: titleInput.value,
        category: categoryInput.value,
        status: statusInput.value
    };

    fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTask)
    })
    .then(res => res.json())
    .then(() => {
        form.reset();
        loadTasks();
        })
    .catch(err => console.error('Error adding task:', err));
});





// Initial load
document.addEventListener('DOMContentLoaded', loadTasks);