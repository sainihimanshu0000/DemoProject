import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Dimensions, FlatList, Modal, TouchableWithoutFeedback, ScrollView } from 'react-native';
import SvgIcon from './SvgIcon';
import ChooseDestination from './UI/ChooseDestination';


import { Typography } from './Typography';
import {
  BottomSheetFlatList,
  BottomSheetView,
  BottomSheetScrollView
} from '@gorhom/bottom-sheet';
import SearchBox from './SearchBox';
import ImageSwiper from './ImageSwiper';
import { Text } from 'react-native-svg';
const { width } = Dimensions.get('window');

const BottomSheetContainer = ({ data, handlePropertyLiked, likedProperty }) => {
  const [activeIndex, setActiveIndex] = useState([]);
  const [visibleModal, setVisibleModal] = useState(true);


  useEffect(() => {
    const initialActiveIndices = data.map(item => ({ id: item.id, index: 0 }));
    setActiveIndex(initialActiveIndices);
  }, [data]);

  const handleScroll = (event, itemId) => {
    const scrollPosition = event?.nativeEvent?.contentOffset.x;
    const index = Math.round(scrollPosition / (width));
    console.log(index)
    setActiveIndex(prevActiveIndex => {
      const updatedIndices = prevActiveIndex.filter(item => item.id !== itemId);
      return [...updatedIndices, { id: itemId, index }];
    });
  };

  const getActiveIndex = (itemId) => {
    const foundItem = activeIndex.find(item => item.id === itemId);
    return foundItem ? foundItem.index : 0;
  };

  handleModal = () => {
    setVisibleModal(!visibleModal)
  }
  const renderItem = ({ item }) => (
    <View style={styles.cardContainer}>
      <View style={styles.discountBadge}>
        <Typography style={styles.discountText} size={12} lineHeight={18} color={"#FFFFFF"}>
          {item.discount.label}
        </Typography>
      </View>
      <TouchableOpacity
        style={styles.heartIcon}
        onPress={() => handlePropertyLiked(item)}
      >
        <SvgIcon
          name="heart"
          color={likedProperty.includes(item.id) ? "#D53737" : "#fff"}
        />
      </TouchableOpacity>

      <FlatList
        data={item.gallery}
        keyExtractor={(galleryItem, index) => index.toString()}
        horizontal
        style={{ zIndex: 0 }}
        pagingEnabled
        onScroll={(e) => handleScroll(e, item?.id)}
        scrollEventThrottle={6}
        renderItem={({ item: galleryItem }) => (
          <Image
            source={galleryItem}
            style={styles.propertyImage}
          />
        )}
        showsHorizontalScrollIndicator={false}
      />
      {/* <ImageSwiper item={item.gallery} handleScroll={handleScroll}/> */}
      {/* <Image source={item.image_url} style={styles.propertyImage} /> */}
      <View style={styles.indicatorContainer}>
        {item.gallery.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              {
                backgroundColor: getActiveIndex(item.id) === index ? '#FFFFFF' : '#E0E0E0',
                width: getActiveIndex(item.id) === index ? 23 : 8,
              },
            ]}
          />
        ))}
      </View>

      <View style={styles.ratingWrapper}>
        <SvgIcon name={"star"} />
        <Typography style={styles.ratingText} size={13} lineHeight={19.5} color={"#322E28"}>4.8 (50)</Typography>
      </View>

      <View style={styles.detailsContainer}>
        <Typography style={styles.title} color={"#322E28"} size={18} lineHeight={27}>{item.title}</Typography>
        <Typography style={styles.subtitle} color={"#322E28"} size={16} lineHeight={24}>{item.location}</Typography>
        <View style={styles.attributesContainer}>
          {item.attributes.guests && (
            <View style={styles.attributeItem}>
              <SvgIcon name={"Pools"} />
              <Typography style={{ marginHorizontal: 10 }} color={"#322E28"} size={16}>{item.attributes.guests}</Typography>
            </View>
          )}
          {item.attributes.area && (
            <View style={styles.attributeItem}>
              <SvgIcon name={"area"} />
              <Typography style={{ marginHorizontal: 10 }} color={"#322E28"} size={16}>{item.attributes.area}</Typography>
            </View>
          )}
          {item.attributes.bedrooms && (
            <View style={styles.attributeItem}>
              <SvgIcon name={"badroom"} />
              <Typography style={{ marginHorizontal: 10 }} color={"#322E28"} size={16}>{item.attributes.bedrooms}</Typography>
            </View>
          )}
        </View>

        <View style={styles.priceContainer}>
          <Typography style={styles.oldPrice} color={"#322E28"} size={15}>{item.price.original} SAR</Typography>
          <Typography style={styles.newPrice} color={"#1C1F20"} size={18}>{item.price.discounted} SAR</Typography>
          <Typography style={styles.priceText} color={"#606060"} size={18}>/ Night</Typography>
        </View>
      </View>
    </View>
  );

  return (

    // <View>
    //   <Text>
    //     hello
    //   </Text>
    // </View>

    <BottomSheetFlatList
      
      nestedScrollEnabled
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={false}
      initialNumToRender={1}
      // style={{ zIndex: 21 }}
    />

    // <BottomSheetScrollView
    //   showsVerticalScrollIndicator={false}
    //   style={{ zIndex: 4 }}
    // >
    //   {data.map((item) => (
    //     <View key={item.id.toString()} style={styles.itemContainer}>
    //       {renderItem({ item })} 
    //     </View>
    //   ))}
    // </BottomSheetScrollView>


  );
};

export default BottomSheetContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',

  },
  cardContainer: {
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 4,
    marginBottom: 10,
    marginTop: 10,

    // zIndex:10

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
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    top: "51%",

  },
  propertyImage: {
    width: width,
    height: 276,
    borderRadius: 20,
    zIndex: 10

  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    position: "absolute",
    zIndex: 10,
    top: "53%",
    marginLeft: 15,
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
    top: 20,
    right: 15,
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 15,
    justifyContent: "center",
    height: 28,
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
