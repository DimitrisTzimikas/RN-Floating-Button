import React from 'react';
import {AppRegistry, View, Text, StyleSheet} from 'react-native';
import {name as appName} from './app.json';
import FloatingButton from './src/FloatingButton';
import ActionButton from './src/actionButton/ActionButton';

const App = () => {
  return (
    <View style={style.container}>
      <FloatingButton containerStyle={style.fab} />
      <ActionButton
        active={false}
        useNativeFeedback={false}
        fixNativeFeedbackRadius={true}>
        <ActionButton.Item
          key={12}
          useNativeFeedback={false}
          fixNativeFeedbackRadius={true}
          title={'ok'}>
          <Text>test ok!</Text>
        </ActionButton.Item>
      </ActionButton>
    </View>
  );
};

const style = StyleSheet.create({
  container: {flex: 1, alignItems: 'center'},
  fab: {right: 200},
});

AppRegistry.registerComponent(appName, () => App);
