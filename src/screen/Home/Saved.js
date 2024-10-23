import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react';
import PropertyCard from '../../components/UI/Property'
import { properties } from '../../constants/PropertyData'
import { useSelector ,useDispatch} from 'react-redux'
import { setLikedProperty } from '../../redux/action';

const Saved = () => {
  const dispatch =useDispatch()
  const {
    likedProperty, 
  } = useSelector(state => state.filter);

  const like=likedProperty
  const likedProperties = properties.filter((item) => likedProperty.includes(item.id));

  const handlePropertyLiked = (item) => {
    const newLikedProperty = likedProperty.includes(item.id)
    ? likedProperty.filter(like => like !== item.id)
    : [...likedProperty, item.id]; 
    console.log(newLikedProperty)
        

   dispatch(setLikedProperty(newLikedProperty))
};

  useEffect(() => {
    console.log(like);
  }, []); 
  return (
    <View>
    
    <PropertyCard data={likedProperties}  handlePropertyLiked={handlePropertyLiked} likedProperty={likedProperty}/>
  </View>
  )
}

export default Saved

const styles = StyleSheet.create({})