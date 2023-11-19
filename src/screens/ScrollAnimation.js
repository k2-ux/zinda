import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  interpolate,
  interpolateColor,
  useAnimatedGestureHandler
} from 'react-native-reanimated';
import {
  GestureHandlerRootView,
  NativeViewGestureHandler,
  PanGestureHandler,
} from 'react-native-gesture-handler';
const ScrollAnimation = () => {
  const [clicked, setClicked] = useState(false);
  const animation = useSharedValue(1);
  const x= useSharedValue(0)
  const y = useSharedValue(0)
  const gestureHandler = useAnimatedGestureHandler({

    onStart:(e,c)=>{
      c.startX= x.value,
      c.startY = y.value
    },
    onActive:(e,c)=>{
      x.value = e.translationX + c.startX;
      y.value = e.translationY + c.startY
    },
    onEnd:(e,c)=>{
      x.value =withTiming(0,{duration:1000}) ,
      y.value =withTiming(0,{duration:1000})
    }})
  const animatedStyle = useAnimatedStyle(() => {
    
    const width = interpolate(animation.value, [1, 0], [100, 200]);
    const backgroundColor = interpolateColor(
      animation.value,
      [1, 0],
      ['#ffd97d', '#ff9b85'],
      
    );
   
    
    return {
      // transform :[{rotate: `${animation.value}deg`}]:
      transform:[{translateX:x.value},{translateY:y.value}],
      height: width,
      width: width,
      backgroundColor: backgroundColor,
    };
})
  return (
    <GestureHandlerRootView style={{flex:1}}>
      
        <View style={styles.container}>
          <PanGestureHandler onGestureEvent={gestureHandler}>
          <Animated.View style={[styles.block, animatedStyle]}></Animated.View>
          </PanGestureHandler>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              if (clicked) animation.value = withTiming(1, {duration: 1000});
              else {
                animation.value = withTiming(0, {duration: 1000});
              }
              setClicked(!clicked);
              // withTiming(100,{duration:50})
            }}>
            <Text style={styles.title}>Start animation</Text>
          </TouchableOpacity>
        </View>
      
        </GestureHandlerRootView>

  );
};

export default ScrollAnimation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  block: {
    // width: 200,
    // height: 200,
    borderRadius: 200,
    backgroundColor: '#98DFAF',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    // marginTop: 40,
    position: 'absolute',
    bottom: 100,
    backgroundColor: '#6C809A',
    borderRadius: 10,
    height: 50,
  },
  title: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
});
