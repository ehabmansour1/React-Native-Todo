import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import AddTodoModal from '../components/AddTodoModal';
import EditTodoModal from '../components/EditTodoModal';
import TodoItem from '../components/TodoItem';
import TodoController from '../controllers/TodoController';

type Task = {
  id: string;
  title: string;
  detail: string;
  completed: boolean;
};

const TodoScreen = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isAddTaskModalVisible, setAddTaskModalVisible] = useState(false);
  const [isEditTaskModalVisible, setEditTaskModalVisible] = useState(false);
  const [editTask, setEditTask] = useState<Task | null>(null);
  const [completedTasksVisible, setCompletedTasksVisible] = useState(false);

  const [todoController] = useState(() => new TodoController(setTasks));

  const addTask = (title: string, detail: string) => {
    todoController.addTask(title, detail);
    setAddTaskModalVisible(false);
  };

  const deleteTask = (id: string) => {
    todoController.deleteTask(id);
  };

  const toggleTaskCompletion = (id: string) => {
    todoController.toggleTaskCompletion(id);
  };

  const openEditTaskModal = (task: Task) => {
    setEditTask(task);
    setEditTaskModalVisible(true);
  };

  const saveEditTask = (updatedTask: Task) => {
    todoController.updateTask(updatedTask);
    setEditTaskModalVisible(false);
    setEditTask(null);
  };

  const getTasksToDisplay = () => {
    return completedTasksVisible ? tasks.filter(task => task.completed) : tasks;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>TODO APP</Text>
      </View>

      <FlatList
        data={getTasksToDisplay()}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TodoItem
            task={item}
            onEdit={openEditTaskModal}
            onDelete={deleteTask}
            onToggle={toggleTaskCompletion}
          />
        )}
        style={styles.taskList}
      />

      <TouchableOpacity
        style={styles.addTaskButton}
        onPress={() => setAddTaskModalVisible(true)}>
        <Text>Add</Text>
      </TouchableOpacity>

      <View style={styles.bottomNavigation}>
        <TouchableOpacity onPress={() => setCompletedTasksVisible(false)}>
          <Text style={styles.bottomNavLink}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCompletedTasksVisible(true)}>
          <Text style={styles.bottomNavLink}>Completed</Text>
        </TouchableOpacity>
      </View>

      <AddTodoModal
        visible={isAddTaskModalVisible}
        onClose={() => setAddTaskModalVisible(false)}
        onAdd={addTask}
      />

      {editTask && (
        <EditTodoModal
          visible={isEditTaskModalVisible}
          onClose={() => setEditTaskModalVisible(false)}
          onSave={saveEditTask}
          task={editTask}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E0F8',
  },
  header: {
    backgroundColor: '#A394D4',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  taskList: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  addTaskButton: {
    backgroundColor: '#A394D4',
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 70,
    right: 20,
    elevation: 5,
  },
  bottomNavigation: {
    backgroundColor: '#A394D4',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  bottomNavLink: {
    color: 'white',
    fontSize: 18,
  },
});

export default TodoScreen;
