import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react';
import PropertyCard from '../../components/UI/Property'
import { properties } from '../../constants/PropertyData'
import { useSelector ,useDispatch} from 'react-redux'
import { setLikedProperty } from '../../redux/action';


const Inbox = () => {
  

  return (
    <View>
    
      <Text>Inbox</Text>
    </View>
  );
}

export default Inbox;

const styles = StyleSheet.create({});
