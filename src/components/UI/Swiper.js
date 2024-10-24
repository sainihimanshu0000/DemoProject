import { FlatList, StyleSheet, View, Image, Dimensions } from 'react-native';
import React from 'react';
import { Typography } from '../Typography';
import { Fonts } from '../../../assets/fonts/fonts';
import Colours from '../../constants/Colours';
const { width } = Dimensions.get('window');

const Swiper = ({ data }) => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.bgImage} style={styles.image} />
        <View style={styles.textContainer}>
          <Typography style={styles.title} size={21} lineHeight={27} color={Colours.white}>
            {item.title}
          </Typography>
          <Typography style={styles.content} size={41} lineHeight={41} color={Colours.white}>
            {item.content}
          </Typography>
          <Typography style={styles.about} size={11} lineHeight={27} color={Colours.white}>
            {item.about}
          </Typography>
        </View>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        snapToAlignment={'center'}
      />
    </View>
  );
};

export default Swiper;

const styles = StyleSheet.create({
  slide: {
    width: width, 
    alignItems: 'center',
    borderRadius: 40,
    overflow: 'hidden',
  },
  image: {
    width: '90%', 
    height: 209, 
    borderRadius: 30,
    resizeMode: 'cover', 
  },
  textContainer: {
    position: 'absolute',
    marginLeft: 25,
    justifyContent: 'center',
    alignSelf: 'flex-start',
    width: '60%',
    height: '100%',
  },
  title: {
    fontFamily: Fonts.PoppinsBold,
  },
  content: {
    marginTop: 10,
    fontFamily: Fonts.PoppinsBold,
  },
  about: {
    marginTop: 5,
  },
});
