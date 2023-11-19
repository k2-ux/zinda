import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import React from 'react';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Animated from 'react-native-reanimated';
const width = Dimensions.get('screen').width;
const SearchBox = () => {
  const animation = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    return {
    width: animation.value == 1
      ? withTiming(300, {duration: 500})
      : withTiming(0, {duration: 500})}
  });

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Animated.View
        style={[animatedStyle,{
            height: 50,
            width: width * 0.8,
            backgroundColor: '#F2F5DE',
            borderWidth: 0.5,
            borderColor: 'gray',
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 10,
          }]}>
        <TextInput style={{width: '85%'}} placeholder="Search" />
        <TouchableOpacity onPress={()=>{
            if(animation.value==1){
                animation.value=0
            }else{
              animation.value=1
            }
          }}>
          <Image
            style={{height: 20, width: 20}}
            source={require('../../assets/search.png')}
          />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({});
