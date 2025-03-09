import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from 'react-native';

const EditTodoModal = ({visible, onClose, onSave, task}) => {
  const [title, setTitle] = useState(task.title);
  const [detail, setDetail] = useState(task.detail);

  const handleSave = () => {
    onSave({...task, title, detail});
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TouchableOpacity style={styles.backButton} onPress={onClose}>
            <Text>Exit</Text>
          </TouchableOpacity>
          <Text style={styles.modalTitle}>Edit Task</Text>
          <TextInput
            style={styles.input}
            placeholder="Title"
            value={title}
            onChangeText={setTitle}
          />
          <TextInput
            style={styles.input}
            placeholder="Detail"
            value={detail}
            onChangeText={setDetail}
          />
          <View style={styles.modalButtons}>
            <TouchableOpacity style={styles.updateButton} onPress={handleSave}>
              <Text style={styles.buttonText}>Update</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '80%',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#A394D4',
    textAlign: 'center',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  updateButton: {
    backgroundColor: '#A394D4',
    borderRadius: 5,
    padding: 12,
    alignItems: 'center',
    marginRight: 10,
  },
  cancelButton: {
    backgroundColor: '#ccc',
    borderRadius: 5,
    padding: 12,
    alignItems: 'center',
    marginLeft: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});

export default EditTodoModal;
