import React, { useState, useEffect } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { Typography } from '../../components/Typography';
import SvgIcon from '../../components/SvgIcon';
import LanguageOption from '../../components/LanguageOption';
import { image } from '../../../assets/image/image';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { strings } from '../../locales/Localization';
import { Fonts } from '../../../assets/fonts/fonts';
import Colours from '../../constants/Colours';

const ChooseLanguage = ({ navigation }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [isShow, setIsShow] = useState(null);

  const handleSelectLanguage = (language) => {
    setSelectedLanguage(language);
    strings.setLanguage(language === "Arabic" ? "ar" : "en");
    setTimeout(() => {
      navigation.navigate("intro")
    }, 1000);
  };

  return (
    <View style={[styles.container, strings.getLanguage() === 'en' ? null : { direction: 'rtl' }]}>
      <StatusBar barStyle={"dark-content"} translucent={false}  backgroundColor={Colours.white}/>
      <View style={{ marginBottom: 15, }}>
        <View style={styles.logoContainer}>
          <SvgIcon name="customIcon" size={30} color={Colours.black} />
        </View>
        <View style={styles.textContainer}>
          <Typography size={30} lineHeight={45} color={Colours.black}   type={Fonts.PoppinsBold} style={styles.alignLeft}>
            {strings.choose_language}
          </Typography>
        </View>
      </View>
      <Typography size={18} lineHeight={27} color={Colours.textGraySec} style={[styles.alignLeft , { marginBottom: 42 }]}>
        {strings.select_language}
      </Typography>

      <LanguageOption
        language="Arabic"
        iconsName="rightClick"
        image={image.Arabic}
        selectedLanguage={selectedLanguage}
        onSelectLanguage={handleSelectLanguage}
      />
      <LanguageOption
        language="English"
        iconsName="rightClick"
        image={image.English}
        selectedLanguage={selectedLanguage}
        onSelectLanguage={handleSelectLanguage}
      />
    </View>
  );
};

export default ChooseLanguage;

const styles = StyleSheet.create({
  container: {


    padding: 25,
    backgroundColor: Colours.white,
    height: "100%",
  },
  logoContainer: {
    marginBottom: 15,
  },
  textContainer: {


  },
  alignLeft: {

  },
});
