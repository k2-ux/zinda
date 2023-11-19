import {FlatList, StyleSheet, Text, View,Dimensions} from 'react-native';
import React, { useState } from 'react';
import {data} from '../components/data';
import SliderItem from '../components/SliderItem';
const {width, height} = Dimensions.get('screen');

const AnimatedSliderDemo = () => {
    const [currentIndex,setCurrentIndex] = useState(0)
    const data = [
        require('../../assets/slider/slider1.png'),
        require('../../assets/slider/slider2.png'),
        require('../../assets/slider/slider3.png'),
        require('../../assets/slider/slider4.png'),
        require('../../assets/slider/slider5.png'),
      ];
      console.log('WWWWWWW',data)

  return (
    <View style={{flex: 1}}>
      <FlatList
      horizontal
      onScroll={e=> {
        const X = e.nativeEvent.contentOffset.x
        setCurrentIndex((X/width).toFixed(0))
      }}
        data={data}
        renderItem={({item, index}) => {
          return(
          <SliderItem image={item} index={index} currentIndex={currentIndex}/>)
        }}
      />
    </View>
  );
};

export default AnimatedSliderDemo;

const styles = StyleSheet.create({});
