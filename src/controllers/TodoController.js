import uuid from 'react-native-uuid';
import TodoModel from '../models/TodoModel';
import {loadTasks, saveTasks, fetchTasksFromAPI} from '../storage/storage';

class TodoController {
  constructor(setter) {
    this.setter = setter;
    this.loadTasks();
  }

  async loadTasks() {
    try {
      let tasks = await loadTasks();

      if (tasks.length === 0) {
        tasks = await fetchTasksFromAPI();
        await saveTasks(tasks);
      }

      this.setter(
        tasks.map(
          task =>
            new TodoModel(task.id, task.title, task.detail, task.completed),
        ),
      );
    } catch (e) {
      console.error('Failed to load tasks', e);
    }
  }

  addTask(title, detail) {
    const newTask = new TodoModel(uuid.v4(), title, detail, false);
    this.setter(prevTasks => {
      const newTasks = [...prevTasks, newTask];
      saveTasks(newTasks);
      return newTasks;
    });
  }

  deleteTask(id) {
    this.setter(prevTasks => {
      const newTasks = prevTasks.filter(task => task.id !== id);
      saveTasks(newTasks);
      return newTasks;
    });
  }

  toggleTaskCompletion(id) {
    this.setter(prevTasks => {
      const newTasks = prevTasks.map(task =>
        task.id === id ? {...task, completed: !task.completed} : task,
      );
      saveTasks(newTasks);
      return newTasks;
    });
  }

  updateTask(updatedTask) {
    this.setter(prevTasks => {
      const newTasks = prevTasks.map(task =>
        task.id === updatedTask.id ? updatedTask : task,
      );
      saveTasks(newTasks);
      return newTasks;
    });
  }
}

export default TodoController;
