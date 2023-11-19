import React, {useState} from 'react';
import {
  View,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Text,
  Dimensions,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import Animated, {useAnimatedStyle, useSharedValue, withTiming} from 'react-native-reanimated';
const {height, width} = Dimensions.get('screen');
// const AnimatedImage = Animated.createAnimatedComponent(Modal);
export default Carousel = ({data}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const animatedScale = useSharedValue(1);
  const animatedRotation = useSharedValue(0)
  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex > 0 ? prevIndex - 6 : 12));
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex =>
      prevIndex < data.length - 6 ? prevIndex + 6 : 0,
    );
  };


  const animatedItemStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { scale: animatedScale.value },
        { rotate: `${animatedRotation.value}deg` },
      ],
    };
  });

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.carouselItem}
      onPress={() => {
        setSelectedItem(item);
        setModalVisible(true);
        animatedRotation.value = withTiming(360,{duration:500})
        animatedScale.value=withTiming(1.05,{duration:250})
      }}>
      <Image source={item.source} style={[styles.image,]} />
      <Text style={styles.characterName}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderPaginationDots = () => (
    <View style={styles.paginationDots}>
      {[...Array(3)].map((_, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.dot,
            {backgroundColor: index === currentIndex / 6 ? 'red' : 'gray'},
          ]}
          onPress={() => setCurrentIndex(index * 6)}
        />
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      <Modal transparent={true} visible={modalVisible}>
        <Animated.View style={[{flex: 1, justifyContent: 'center', alignItems: 'center'},animatedItemStyle]}>
          {/* Semi-transparent background overlay */}
          <View
            style={{
              ...StyleSheet.absoluteFill,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}
          />

          {/* Close button at the top right corner */}
          <TouchableOpacity
            onPress={() => {
              animatedRotation.value = withTiming(-360,{duration:250})
              animatedScale.value=withTiming(1,{duration:500})
              setModalVisible(false);
              setSelectedItem(null)
             
            }}
            style={{
              position: 'absolute',
              top: 20,
              right: 20,
              zIndex: 1, // Ensure the close button is above the overlay
            }}>
            <Image
              style={{height: 40, width: 40}}
              source={require('../../assets/close.png')}
            />
          </TouchableOpacity>

          {/* Display selected item if available */}
          {selectedItem && (
            <View style={{backgroundColor: 'white', padding: 20}}>
              <Image
                style={{height: 300, width: 300}}
                source={selectedItem.source}
              />
            </View>
          )}
        </Animated.View>
      </Modal>

      <View
        style={{
          flex: 1,
          marginTop: width * 0.6,
          paddingRight: 20,
          paddingLeft: 20,
        }}>
        <FlatList
          style={{flex: 1}}
          // contentContainerStyle={{ justifyContent:'center' }}
          data={data.slice(currentIndex, currentIndex + 6)}
          renderItem={renderItem}
          keyExtractor={item => item.name}
          numColumns={3}
        />
      </View>
      <View style={styles.paginationContainer}>{renderPaginationDots()}</View>
      <TouchableOpacity style={styles.arrowLeft} onPress={handlePrev}>
        <Text style={{fontSize: 30, fontWeight: 400}}>{'<'}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.arrowRight} onPress={handleNext}>
        <Text style={{fontSize: 30, fontWeight: 400}}>{'>'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // backgroundColor: 'blue',
  },
  carouselItem: {
    flex: 1,
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
    flexGrow: 0.5, // Add this line
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  characterName: {
    marginTop: 8,
    textAlign: 'center',
  },
  arrowLeft: {
    position: 'absolute',
    left: 5,
    top: '50%',
    color: 'red',
  },
  arrowRight: {
    position: 'absolute',
    right: 5,
    top: '50%',
    color: 'red',
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  paginationDots: {
    flexDirection: 'row',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 4,
  },
});
