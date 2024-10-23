import { StyleSheet, Text, View,Dimensions,FlatList ,Image} from 'react-native'
import React from 'react'
const { width } = Dimensions.get('window');
import { BottomSheetFlatList } from '@gorhom/bottom-sheet';

const ImageSwiper = ({item,handleScroll}) => {
 

  return (
   
    <BottomSheetFlatList
    data={item}
    keyExtractor={(galleryItem, index) => index.toString()}
    horizontal
    pagingEnabled
    onScroll={(e) => handleScroll(e, item?.id)}
    scrollEventThrottle={16}
    renderItem={({ item: galleryItem }) => (
      <Image
        source={galleryItem}
        style={styles.propertyImage}
      />
    )}
    showsHorizontalScrollIndicator={false}
  />

  )
}

export default ImageSwiper

const styles = StyleSheet.create({
    propertyImage: {
        width: width ,
        height: 276,
        borderRadius: 20,
      },
})