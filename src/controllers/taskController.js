const tasks = [];

const getAllTasks = (req, res) => {
    res.status(200).json(tasks);
};

const createTask = (req, res) => {
    const { title, description } = req.body;
    const newTask = {
        id: tasks.length + 1,
        title,
        description,
        completed: false
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
};

const getTask = (req, res) => {
    const { id } = req.params;
    const task = tasks.find(task => task.id == id);
    if (!task) {
        return res.status(404).json({ message: 'Tarefa não encontrada' });
    }
    res.status(200).json(task);
};

const updateTask = (req, res) => {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    const task = tasks.find(task => task.id == id);
    if (!task) {
        return res.status(404).json({ message: 'Tarefa não encontrada' });
    }
    task.title = title || task.title;
    task.description = description || task.description;
    task.completed = completed !== undefined ? completed : task.completed;
    res.status(200).json(task);
};

const deleteTask = (req, res) => {
    const { id } = req.params;
    const taskIndex = tasks.findIndex(task => task.id == id);
    if (taskIndex === -1) {
        return res.status(404).json({ message: 'Tarefa não encontrada' });
    }
    tasks.splice(taskIndex, 1);
    res.status(204).send();
};

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
};
