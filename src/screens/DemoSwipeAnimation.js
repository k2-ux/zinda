import {Image, StyleSheet, Text, View, useAnimatedValue} from 'react-native';
import React from 'react';
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
const DemoSwipeAnimation = () => {
  const animation = useSharedValue(0);
  const gestureHandler = useAnimatedGestureHandler({
    onStart: (e, c) => {
      c.startX = animation.value;
    },
    onActive: (e, c) => {
      animation.value = e.translationX + c.startX;
    },
    onEnd: (e, c) => {
      animation.value = withSpring(0);
    },
  });
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: animation.value}],
    };
  });
  const animatedIconStyleLeft = useAnimatedStyle(() => {
    return {
      transform: [
        {scale: animation.value > 70 ? withSpring(2) : withSpring(1)},
      ],
    };
  });
  const animatedIconStyleRight = useAnimatedStyle(() => {
    return {
      transform: [
        {scale: animation.value < -105 ? withSpring(2) : withSpring(1)},
      ],
    };
  });

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <PanGestureHandler onGestureEvent={gestureHandler}>
          <Animated.View
            style={{
              backgroundColor: '#93FF96',
              width: '100%',
              height: 100,
              elevation: 5,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Animated.View
              style={[
                animatedIconStyleLeft,
                {width: 14, height: 14, marginLeft: 20},
              ]}>
              <Image
                style={[{height: '100%', width: '100%',tintColor:"white"}]}
                source={require('../../assets/archive.png')}
              />
            </Animated.View>
            <Animated.View
              style={[
                animatedIconStyleRight,
                {width: 14, height: 14, marginRight: 20},
              ]}>
              <Image
                style={[{height: '100%', width: '100%',tintColor:'white'}]}
                source={require('../../assets/archive.png')}
              />
            </Animated.View>
            <Animated.View
              style={[
                animatedStyle,
                {
                  backgroundColor: '#fff',
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                },
              ]}></Animated.View>
          </Animated.View>
        </PanGestureHandler>
      </View>
    </GestureHandlerRootView>
  );
};

export default DemoSwipeAnimation;

const styles = StyleSheet.create({});
