import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const TodoItem = ({task, onEdit, onDelete, onToggle}) => {
  return (
    <View style={[styles.taskItem, task.completed && styles.completedTask]}>
      <View style={styles.taskContent}>
        <Text style={styles.taskTitle}>{task.title}</Text>
        {task.detail ? (
          <Text style={styles.taskDetail}>{task.detail}</Text>
        ) : null}
      </View>
      <View style={styles.taskActions}>
        <TouchableOpacity
          onPress={() => onEdit(task)}
          style={[styles.actionButton, styles.editButton]}>
          <Text style={styles.actionText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onDelete(task.id)}
          style={[styles.actionButton, styles.deleteButton]}>
          <Text style={styles.actionText}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onToggle(task.id)}
          style={[styles.actionButton, styles.toggleButton]}>
          <Text style={styles.actionText}>
            {task.completed ? 'Undo' : 'Done'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  taskItem: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  completedTask: {
    backgroundColor: '#D4EDDA',
  },
  taskContent: {
    marginBottom: 10,
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  taskDetail: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  taskActions: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 10,
  },
  actionButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFF',
  },
  editButton: {
    backgroundColor: '#A394D4',
  },
  deleteButton: {
    backgroundColor: '#FF6B6B',
  },
  toggleButton: {
    backgroundColor: '#4CAF50',
  },
});

export default TodoItem;
