import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Typography } from './Typography'; 
import SvgIcon from './SvgIcon';

const languageOption = ({ language, iconsName, image, selectedLanguage, onSelectLanguage }) => {
  const isSelected = selectedLanguage === language;

  return (
    <TouchableOpacity onPress={() => onSelectLanguage(language)}>
      <View style={[styles.container, isSelected && styles.selectedContainer]}>
        <Image source={image} style={styles.imageLeft} />
        <Typography style={styles.text} lineHeight={30} size={20} fonts={600} color={"#000"} >{language}</Typography>
        <View style={{marginRight:27}}>

        {
            isSelected &&  <SvgIcon name={iconsName} color='' />
        }
        </View>
      
      </View>
    </TouchableOpacity>
  );
};

export default languageOption;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 35,
    height: 70,
    borderColor: '#BFBFBF',
    width: '100%',
    justifyContent: 'space-between',
    
    marginBottom: 20,
  },
  selectedContainer: { 
    borderColor: '#DA4726',
  },
  imageLeft: {
    height: 37,
    width: 37,
    marginHorizontal: 17,
  },
  text: {
    flex: 1,
    textAlign: 'left',
    marginLeft: 10,
  
  },
});
