import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { Typography } from '../Typography';
import { Fonts } from '../../../assets/fonts/fonts';

const CityProperty = ({ data }) => {
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.slide} accessibilityLabel={`City: ${item.cityName}, Properties: ${item.totalProperty}`}>
        <View style={styles.iconContainer}>
          <Image source={item.cityImg} style={styles.cityImage} resizeMode="cover" />
        </View>
        <View style={styles.textContainer}>
          <Typography lineHeight={30} fonts={600} style={styles.text} color={"#FFFFFF"} size={20}>
            {item.cityName}
          </Typography>
          <Typography lineHeight={24} fonts={400} style={styles.subText} color={"#FFFFFF"} size={16}>
            {item.totalProperty} properties
          </Typography>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <View style={{ marginTop: 30 }}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default CityProperty;

const styles = StyleSheet.create({
  slide: {
    alignItems: 'center',
    marginHorizontal: 10,
    position: 'relative',
  },
  iconContainer: {
    height: 227,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  cityImage: {
    height: 227,
    width: 200,
    borderRadius: 30, 
    position: 'absolute',
  },
  textContainer: {
    position: 'absolute',
    bottom: 20, 
    left: 20,
    right: 20,
  },
  text: {
    fontFamily: Fonts.PoppinsBold,
    fontSize: 20,
  },
  subText: {
    fontFamily: Fonts.PoppinsRegular,
    fontSize: 16,
  },
});
