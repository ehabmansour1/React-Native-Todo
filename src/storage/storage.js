import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@todos';
const API_URL = 'https://dummyjson.com/todos?limit=5';

export const loadTasks = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
    return jsonValue ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error('Failed to load tasks', e);
    return [];
  }
};

export const saveTasks = async tasks => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch (e) {
    console.error('Failed to save tasks', e);
  }
};

export const fetchTasksFromAPI = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data.todos.map(todo => ({
      id: todo.id.toString(),
      title: todo.todo,
      detail: '',
      completed: todo.completed,
    }));
  } catch (e) {
    console.error('Failed to fetch tasks from API', e);
    return [];
  }
};
