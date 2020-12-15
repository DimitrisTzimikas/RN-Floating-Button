import {StyleSheet} from 'react-native';

const WHITE = '#fff';
const RED = '#f02a4b';
const MAIN_BUTTON_IMAGE_SIZE = 25;
const FLOATING_BUTTONS_IMAGE_SIZE = 20;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 80,
    right: 50,
  },
  button: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
    /*iOS*/
    shadowRadius: 10,
    shadowColor: RED,
    shadowOpacity: 0.3,
    shadowOffset: {height: 10},
  },
  menu: {
    backgroundColor: RED,
  },
  secondary: {
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
    backgroundColor: WHITE,
  },
});

export {
  styles,
  WHITE,
  RED,
  MAIN_BUTTON_IMAGE_SIZE,
  FLOATING_BUTTONS_IMAGE_SIZE,
};
