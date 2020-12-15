import React from 'react';
import {View, StyleSheet} from 'react-native';
import FloatingButton from './src/components/FloatingButton';

const App = () => {
  return (
    <View style={style.container}>
      <FloatingButton containerStyle={style.fab} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  fab: {
    right: 200,
  },
});

export default App;
