import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import SvgIcon from './SvgIcon';
import { Typography } from './Typography';
import { strings } from '../locales/Localization';

// const isArabic = strings.getLanguage() === 'ar';


const socialSignIn = ({ title, iconName ,Arabic ,onPress}) => {
  return (
    <TouchableOpacity style={[styles.container,Arabic ?{flexDirection:"row-reverse"}:{  flexDirection: 'row',}]} onPress={onPress}>
      <View style={styles.iconContainer}>
        <SvgIcon name={iconName} color='#000' />
      </View>
      <Typography fonts={500} size={16} lineHeight={24} style={styles.text}>
        {title}
      </Typography>
    </TouchableOpacity>
  );
};

export default socialSignIn;

const styles = StyleSheet.create({
  container: {
  
    borderWidth: 1,
    width: '100%',
    marginBottom: 20,
    height: 60,
    alignItems: 'center',
    borderRadius: 40,
    borderColor: "#322E28",
  },
  iconContainer: {
   marginHorizontal:12,
    justifyContent: 'flex-start',
  
  },
  text: {
    flex: 1,  
    textAlign: 'center',  
    alignSelf:"center",
    alignItems:"center",
    color:"#322E28"
  },
});
