import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, FlatList, Dimensions, ScrollView } from 'react-native';
import SvgIcon from '../SvgIcon';
import { Typography } from '../Typography';
import { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import Colours from '../../constants/Colours';



const { width } = Dimensions.get('window');

const PropertyCard = ({ data, handlePropertyLiked, likedProperty }) => {
  const [activeIndex, setActiveIndex] = useState([]);
  console.log('====================================');
  console.log(activeIndex);
  console.log('====================================');
  useEffect(() => {

    const initialActiveIndices = data.map(item => ({ id: item.id, index: 0 }));
    setActiveIndex(initialActiveIndices);
  }, []);
  const handleScroll = (event, itemId) => {
    const scrollPosition = event?.nativeEvent?.contentOffset.x;
    const index = Math.round(scrollPosition / (width-20));
    setActiveIndex((prevActiveIndex) => {
      const updatedIndices = prevActiveIndex.filter(item => item.id !== itemId);
      return [...updatedIndices, { id: itemId, index }];
    });
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.cardContainer}>
        <View style={styles.discountBadge}>
          <Typography style={styles.discountText} size={12} lineHeight={18} color={Colours.white}>
            {item.discount.label}
          </Typography>
        </View>
        <TouchableOpacity
          style={styles.heartIcon}
          onPress={() => { handlePropertyLiked(item); }}
        >
          <SvgIcon
            name="heart"
            color={likedProperty.includes(item.id) ? Colours.discountRed : Colours.white}
          />
        </TouchableOpacity>

        <FlatList
          data={item.gallery}
          keyExtractor={(galleryItem, index) => index.toString()}
          horizontal
          pagingEnabled
          onScroll={(e) => handleScroll(e, item?.id)}
          scrollEventThrottle={16}
          renderItem={({ item: galleryItem }) => (
            <ScrollView>

            <Image
              source={galleryItem}
              style={styles.propertyImage}
              />
              </ScrollView>
          )}
          showsHorizontalScrollIndicator={false}
        />

        <View style={styles.indicatorContainer}>
          {item.gallery.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                {
                  backgroundColor: activeIndex.find(i => i.id === item.id && i.index === index) ? Colours.white : '#E0E0E0',
                  width: activeIndex.find(i => i.id === item.id && i.index === index) ? 23 : 8,
                },
              ]}
            />
          ))}
        </View>



        <View style={styles.ratingWrapper}>
          <SvgIcon name={"star"} />
          <Typography style={styles.ratingText} size={13} lineHeight={19.5} color={Colours.inputBorder}>4.8 (50)</Typography>
        </View>

        <View style={styles.detailsContainer}>
          <Typography style={styles.title} color={Colours.inputBorder} size={18} lineHeight={27}>{item.title}</Typography>
          <Typography style={styles.subtitle} color={Colours.inputBorder} size={16} lineHeight={24}>{item.location}</Typography>
          <View style={styles.attributesContainer}>
            {item.attributes.guests && (
              <View style={styles.attributeItem}>
                <SvgIcon name={"Pools"} />
                <Typography style={{ marginHorizontal: 10 }} color={Colours.inputBorder} size={16}>{item.attributes.guests}</Typography>
              </View>
            )}
            {item.attributes.area && (
              <View style={styles.attributeItem}>
                <SvgIcon name={"area"} />
                <Typography style={{ marginHorizontal: 10 }} color={Colours.inputBorder} size={16}>{item.attributes.area}</Typography>
              </View>
            )}
            {item.attributes.bedrooms && (
              <View style={styles.attributeItem}>
                <SvgIcon name={"badroom"} />
                <Typography style={{ marginHorizontal: 10 }} color={Colours.inputBorder} size={16}>{item.attributes.bedrooms}</Typography>
              </View>
            )}
          </View>

          <View style={styles.priceContainer}>
            <Typography style={styles.oldPrice} color={Colours.inputBorder} size={15}>{item.price.original} SAR</Typography>
            <Typography style={styles.newPrice} color={"#1C1F20"} size={18}>{item.price.discounted} SAR</Typography>
            <Typography style={styles.priceText} color={"#606060"} size={18}>/ Night</Typography>
          </View>
        </View>
      </View>
    );
  };

  return (
   
      <FlatList
        data={data?.slice(0,3)}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        initialNumToRender={1}
      />
   
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 4,
    margin: 10,
    position: 'relative',
    height: 'auto',
    marginBottom:10,
  },
  discountBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#D53737',
    borderRadius: 15,
    padding: 5,
    zIndex: 10,
  },
  heartIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 10,
    height: 40,
    width: 40,
    backgroundColor: Colours.white,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  propertyImage: {
    width: (width-20)  ,
    height: 276,
    borderRadius: 20,
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    position: "absolute",
    zIndex: 10,
    top: 235,
    marginLeft: 15
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 5,
    backgroundColor: "#E0E0E0",
  },
  detailsContainer: {
    padding: 10,
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 235,
    right: 15,
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 15,
    justifyContent: "center",
    height: 28
  },
  ratingText: {
    marginLeft: 5,
  },
  attributesContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  attributeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#DBDBDB59",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    marginRight: 10,
  },
  newPrice: {
    fontSize: 18,
  },
  priceText: {
    marginLeft: 5,
  },
});

export default PropertyCard;
