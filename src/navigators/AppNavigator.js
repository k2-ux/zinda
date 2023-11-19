import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScrollAnimation from '../screens/ScrollAnimation';
import InstagramAnimation from '../screens/InstagramAnimation';
import {SearchBar} from 'react-native-screens';
import SearchBox from '../screens/SearchBox';
import DemoSwipeAnimation from '../screens/DemoSwipeAnimation';
import AnimatedSliderDemo from '../screens/AnimatedSliderDemo';
import AnimatedSwitch from '../screens/AnimatedSwitch';
import WpAnimation from '../screens/WpAnimation';
import FlatListCarousel from '../screens/FlatListCarousel';
import Welcome from '../screens/Welcome';
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
       <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="Carousel"
        component={FlatListCarousel}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="Layout"
        component={WpAnimation}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="Switch"
        component={AnimatedSwitch}
        options={{headerShown: false}}
      />
         <Stack.Screen
        name="Slider"
        component={AnimatedSliderDemo}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="Swipe"
        component={DemoSwipeAnimation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Search"
        component={SearchBox}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Instagram"
        component={InstagramAnimation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Scroll"
        component={ScrollAnimation}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
