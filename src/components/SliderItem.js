import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Animated,{ useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { useEffect } from 'react';
const {width, height} = Dimensions.get('screen');
const SliderItem = ({image,index,currentIndex}) => {
    const animation = useSharedValue(0)
    useEffect(() => {
    animation.value= currentIndex
      
    }, [currentIndex])
    const animatedStyle = useAnimatedStyle(()=>{
        return {
            transform:[{scale:animation.value==index?withSpring(1):withSpring(0.5)}]
        }
    })
  return (
    <Animated.View
      style={[animatedStyle,{
        width: width - 40,
        height: height,
        justifyContent: 'center',
        alignItems: 'center',
      }]}>
      <Image style={{height: '30%', width: "70%"}} source={image} />
    </Animated.View>
  );
};

export default SliderItem;

const styles = StyleSheet.create({});
