import React from 'react';
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const {height, width} = Dimensions.get('screen');
import {SvgXml} from 'react-native-svg';
import {xml} from '../components/svg.js';
const Welcome = () => {
  const navigation = useNavigation();

  const screens = [
    {name: 'Carousel', component: 'Anime Carousel'},
    {name: 'Switch', component: 'Change theme'},
    {name: 'Slider', component: 'Superhero Slides'},
    {name: 'Swipe', component: 'Swipe demo'},
    {name: 'Search', component: 'SearchBox demo'},
    {name: 'Instagram', component: 'Heart react demo'},
    {name: 'Scroll', component: 'Drag and drop'},
    {name: 'Layout', component: 'About me'},
  ];

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate(item.name)}>
      <Text style={styles.itemText}>{item.component}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SvgXml xml={xml} width={50} height={50} style={{borderRadius: 10}} />
        <Text style={styles.headerText}>
          Welcome! Take a look at the items below
        </Text>
      </View>
      <FlatList
        data={screens}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    height: height * 0.1,
    backgroundColor: '#71B48D',
    elevation: 30,
    paddingHorizontal: 5,
  },
  headerText: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  itemContainer: {
    flex: 1,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: width * 0.9,
    alignItems: 'center',
    backgroundColor: '#DBEFBC',
    marginBottom: 5,
    height: height / 8,
    borderRadius: 10,
    justifyContent: 'center',
  },
  itemText: {
    fontSize: 18,
  },
});

export default Welcome;
