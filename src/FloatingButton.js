import React from 'react';
import {View, Animated, TouchableWithoutFeedback} from 'react-native';
import PropTypes from 'prop-types';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {
  styles,
  WHITE,
  RED,
  MAIN_BUTTON_IMAGE_SIZE,
  FLOATING_BUTTONS_IMAGE_SIZE,
} from './FloatingButton.style';

const FloatingButton = props => {
  const animation = new Animated.Value(0);

  const toggleMenu = () => {
    const toValue = this.open ? 0 : 1;

    Animated.spring(animation, {
      toValue,
      friction: 5,
    }).start();

    this.open = !this.open;
  };

  const pinStyle = {
    transform: [
      {scale: animation},
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -60],
        }),
      },
    ],
  };

  const thumbStyle = {
    transform: [
      {scale: animation},
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -120],
        }),
      },
    ],
  };

  const heartStyle = {
    transform: [
      {scale: animation},
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -180],
        }),
      },
    ],
  };

  const rotation = {
    transform: [
      {
        rotate: animation.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '45deg'],
        }),
      },
    ],
  };

  const opacity = animation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 0, 1],
  });

  return (
    <View style={[styles.container, props.containerStyle]}>
      <TouchableWithoutFeedback>
        <Animated.View
          style={[styles.button, styles.secondary, heartStyle, opacity]}>
          <AntDesign
            name="hearto"
            size={FLOATING_BUTTONS_IMAGE_SIZE}
            color={RED}
          />
        </Animated.View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback>
        <Animated.View
          style={[styles.button, styles.secondary, thumbStyle, opacity]}>
          <Entypo
            name="thumbs-up"
            size={FLOATING_BUTTONS_IMAGE_SIZE}
            color={RED}
          />
        </Animated.View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback>
        <Animated.View
          style={[styles.button, styles.secondary, pinStyle, opacity]}>
          <Entypo
            name="location-pin"
            size={FLOATING_BUTTONS_IMAGE_SIZE}
            color={RED}
          />
        </Animated.View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={toggleMenu}>
        <Animated.View style={[styles.button, styles.menu, rotation]}>
          <AntDesign name="plus" size={MAIN_BUTTON_IMAGE_SIZE} color={WHITE} />
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

FloatingButton.propTypes = {
  containerStyle: PropTypes.any,
};

export default FloatingButton;
