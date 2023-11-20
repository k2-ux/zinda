import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useDarkModeContext } from '../state/DarkModeContext';
const AnimatedSwitch = () => {
  const {updateDarkMode,darkMode} = useDarkModeContext()
  const animation = useSharedValue(darkMode?150:0);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: animation.value}],
    };
  });
  const [isDay, setIsDay] = useState(darkMode?false:true);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: isDay ? 'white' : 'black',
      }}>
      {!darkMode &&     <Text
        style={{
          color: 'black',
          fontSize: 35,
          fontWeight: 'bold',
          marginBottom: 40,
        }}>
        It is day mode!
      </Text>}
      {darkMode &&
      <Text 
        style={{
          color: 'white',
          fontSize: 35,
          fontWeight: 'bold',
          marginBottom: 40,
        }}>
        it is night mode!
      </Text>
      }
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
            updateDarkMode(true)
          } else {
            animation.value = withTiming(0, {duration: 500});
            setIsDay(true);
            updateDarkMode(null)
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
