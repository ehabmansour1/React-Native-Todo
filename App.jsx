import React from 'react';
import {View, StyleSheet} from 'react-native';
import TodoScreen from './src/views/ToDoScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <TodoScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E0F8',
  },
});

export default App;
