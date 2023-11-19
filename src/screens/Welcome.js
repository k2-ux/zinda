import React from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {
  const navigation = useNavigation();

  const screens = [
    { name: 'Carousel', component: 'FlatListCarousel' },
    { name: 'Layout', component: 'WpAnimation' },
    { name: 'Switch', component: 'AnimatedSwitch' },
    { name: 'Slider', component: 'AnimatedSliderDemo' },
    { name: 'Swipe', component: 'DemoSwipeAnimation' },
    { name: 'Search', component: 'SearchBox' },
    { name: 'Instagram', component: 'InstagramAnimation' },
    { name: 'Scroll', component: 'ScrollAnimation' },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate(item.name)}
    >
      <Text style={styles.itemText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={screens}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  itemContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 18,
  },
});

export default Welcome;
