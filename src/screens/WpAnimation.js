import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Dimensions,
  } from 'react-native';
  import React from 'react';
  import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    withTiming,
  } from 'react-native-reanimated';
  
  const { width, height } = Dimensions.get('screen');
  const AnimatedImage = Animated.createAnimatedComponent(Image);
  const AnimatedBtn = Animated.createAnimatedComponent(TouchableOpacity);
  
  const WpAnimation = () => {
    const animatedImageWidth = useSharedValue(70);
    const animatedImageHeight = useSharedValue(70);
    const animatedImageY = useSharedValue(0);
    const animatedScale = useSharedValue(0);
    const animatedCardPosition = useSharedValue(0);
    const animatedCardstyle = useAnimatedStyle(() => {
      return {
        transform: [{ translateX: animatedCardPosition.value }],
      };
    });
  
    const animatedImageStyle = useAnimatedStyle(() => {
      return {
        width: animatedImageWidth.value,
        height: animatedImageHeight.value,
        transform: [{ translateX: animatedImageY.value }],
      };
    });
    const animatedBtnStyle = useAnimatedStyle(() => {
      return {
        transform: [{ scale: animatedScale.value }],
      };
    });
  
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <AnimatedBtn
          style={[
            animatedBtnStyle,
            {
              height: 40,
              width: 40,
              justifyContent: 'center',
              alignItems: 'center',
            },
          ]}
          onPress={() => {
            animatedCardPosition.value = withSpring(0);
            animatedScale.value = withSpring(0);
            animatedImageWidth.value = withSpring(70);
            animatedImageHeight.value = withSpring(70);
            animatedImageY.value = withTiming(0, { duration: 500 });
          }}>
          <Image
            source={require('../../assets/close.png')}
            style={{
              width: 24,
              height: 24,
              marginLeft: 20,
              marginTop: 20,
            }}
          />
        </AnimatedBtn>
        <TouchableOpacity
          onPress={() => {
            if (animatedImageWidth.value === 70) {
              animatedCardPosition.value = withSpring(width);
              animatedScale.value = withSpring(1);
              animatedImageWidth.value = withSpring(200);
              animatedImageHeight.value = withSpring(200);
              animatedImageY.value = withTiming(150, { duration: 500 });
            }
          }}>
          <AnimatedImage
            source={require('../../assets/profilepic.png')}
            style={[
              animatedImageStyle,
              {
                height: 100,
                width: 100,
                marginLeft: 20,
                marginTop: 20,
                resizeMode: 'contain',
                borderRadius: 100,
              },
            ]}
          />
        </TouchableOpacity>
        <View style={{ justifyContent: 'center', alignItems: 'center' ,elevation:20}}>
          <Animated.View
            style={[
              animatedCardstyle,
              {
                backgroundColor: '#808F85',
                height: height * 0.2,
                width: width * 0.9,
                borderRadius: 20,
              },
            ]}>
            <View style={{ padding: 20 }}>
              <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold' }}>
                Kamal K
              </Text>
              <Text style={{ color: 'white', fontSize: 22}}>
                React Native Developer
              </Text>
              <Text style={{ color: 'white', fontSize: 22 }}>Kolkata</Text>
            </View>
          </Animated.View>
        </View>
      </View>
    );
  };
  
  export default WpAnimation;
  
  const styles = StyleSheet.create({});
  