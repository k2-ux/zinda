import React, {useState} from 'react';
import {StyleSheet, View, Text, Image, FlatList} from 'react-native';
import Carousel from '../components/Carousel';

const animeCharacters = [
  {
    name: 'hellsing',
    source: require('../../assets/anime-character/hellsing.png'),
  },
  {
    name: 'fate-stay',
    source: require('../../assets/anime-character/fate-stay.png'),
  },
  {
    name: 'uchiha-sasuke',
    source: require('../../assets/anime-character/uchiha-sasuke.png'),
  },
  {
    name: 'naruto-gaara',
    source: require('../../assets/anime-character/naruto-gaara.png'),
  },
  {name: 'gaara', source: require('../../assets/anime-character/gaara.png')},
  {
    name: 'meliodas',
    source: require('../../assets/anime-character/meliodas.png'),
  },
  {
    name: 'killua-zoldyck',
    source: require('../../assets/anime-character/killua-zoldyck.png'),
  },
  {
    name: 'zamasu-black',
    source: require('../../assets/anime-character/zamasu-black.png'),
  },
  {name: 'jotaro', source: require('../../assets/anime-character/jotaro.png')},
  {
    name: 'bakugo-katsuki',
    source: require('../../assets/anime-character/bakugo-katsuki.png'),
  },
  {
    name: 'ayanami-rei',
    source: require('../../assets/anime-character/ayanami-rei.png'),
  },
  {
    name: 'midoriya-izuku',
    source: require('../../assets/anime-character/midoriya-izuku.png'),
  },
  {
    name: 'matoi-ryuko',
    source: require('../../assets/anime-character/matoi-ryuko.png'),
  },
  {
    name: 'rukia-kuchiki',
    source: require('../../assets/anime-character/rukia-kuchiki.png'),
  },
  {
    name: 'todoroki-shoto',
    source: require('../../assets/anime-character/todoroki-shoto.png'),
  },
  {
    name: 'yeager-eren',
    source: require('../../assets/anime-character/yeager-eren.png'),
  },
  {
    name: 'iii-diablo',
    source: require('../../assets/anime-character/iii-diablo.png'),
  },
  {name: 'hyouka', source: require('../../assets/anime-character/hyouka.png')},
];

const FlatListCarousel = () => {
  
  return (
    <View style={styles.container}>
     <Carousel data={animeCharacters}/>
    </View>
  );
};

export default FlatListCarousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    // backgroundColor:'yellow'
  },
  
});
