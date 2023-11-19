import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useCallback} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from 'react-native-reanimated';
import {
  GestureHandlerRootView,
  NativeViewGestureHandler,
  TapGestureHandler,
} from 'react-native-gesture-handler';
const {height, width} = Dimensions.get('screen');
const InstagramAnimation = () => {
  const ImageComponent = Animated.createAnimatedComponent(Image);
  const scale = useSharedValue(0);
  const doubleTap = useCallback(() => {
    scale.value = withSpring(1, undefined, isFinished => {
      if (isFinished) {
        scale.value = withDelay(100, withSpring(0));
      }
    });
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: Math.max(scale.value, 0)}],
    };
  });

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <TapGestureHandler
          numberOfTaps={2}
          maxDelayMs={250}
          onActivated={doubleTap}>
          <Animated.View>
            <ImageBackground
              style={{
                height: height,
                width: width,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              source={require('../../assets/josep-martins-nAsdr5DC2Ss-unsplash.png')}>
              <ImageComponent
                style={[
                  {height: height / 9, width: width / 4},
                  animatedStyle,
                ]}
                source={require('../../assets/heart.png')}
              />
            </ImageBackground>
          </Animated.View>
        </TapGestureHandler>
      </View>
    </GestureHandlerRootView>
  );
};

export default InstagramAnimation;

const styles = StyleSheet.create({});
