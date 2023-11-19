import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
const AnimatedSwitch = () => {
  const animation = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: animation.value}],
    };
  });
  const [isDay, setIsDay] = useState(true);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: isDay ? 'white' : 'black',
      }}>
      {/* {isDay &&     <Text
        style={{
          color: 'black',
          fontSize: 35,
          fontWeight: 'bold',
          marginBottom: 40,
        }}>
        দিনে শ্বশুর
      </Text>}
      {!isDay &&
      <Text 
        style={{
          color: 'white',
          fontSize: 35,
          fontWeight: 'bold',
          marginBottom: 40,
        }}>
        রাতে অসুর
      </Text>
      } */}
      <TouchableOpacity
        style={{
          width: 200,
          height: 50,
          borderRadius: 30,
          borderWidth: 1,
          flexDirection: 'row',
          borderColor: isDay ? 'black' : 'white',
          alignItems: 'center',
          paddingHorizontal: 5,
          backgroundColor: isDay ? 'white' : 'black',
        }}
        onPress={() => {
          if (animation.value == 0) {
            animation.value = withTiming(150, {duration: 500});
            setIsDay(false);
          } else {
            animation.value = withTiming(0, {duration: 500});
            setIsDay(true);
          }
        }}>
        <Animated.View
          style={[animatedStyle, {width: 40, height: 40, borderRadius: 20}]}>
          <Image
            source={
              isDay
                ? require('../../assets/day.png')
                : require('../../assets/night.png')
            }
            style={[{width: '100%', height: '100%'}]}
          />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

export default AnimatedSwitch;

const styles = StyleSheet.create({});
