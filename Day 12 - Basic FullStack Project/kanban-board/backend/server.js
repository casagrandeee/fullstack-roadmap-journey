require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3010;

app.use(cors());
app.use(express.json());

let tasks = [];

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.post('/tasks', (req, res) => {
    const { title, category, status } = req.body;

    const newTask = {
        id: tasks.length + 1,
        title,
        category,
        status
    };

    tasks.push(newTask);
    res.status(201).json(newTask);
});

app.patch('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const { status } = req.body;

    const task = tasks.find(t => t.id === taskId);
    if (task) {
        task.status = status;
        return res.json(task);
    }

    res.status(404).json({ error: 'Task not found' });
});

app.delete('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const index = tasks.findIndex(t => t.id === taskId);

    if (index !== -1) {
        const deleted = tasks.splice(index, 1);
        return res.json(deleted[0]);
    }

    res.status(404).json({ error: 'Task not found' });
});

app.listen(PORT, () => {
    console.log(`Kanban API running at http://localhost:${PORT}`);
})

