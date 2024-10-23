import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Typography } from './Typography';
import { Fonts } from '../../assets/fonts/fonts';
import SvgIcon from './SvgIcon';
import { strings } from '../locales/Localization';

const InputFild = ({ fildName, value, onChangeText, placeholder, fieldType, errorMessage }) => {

  const getKeyboardType = () => {
    switch (fieldType) {
      case 'phone':
        return 'phone-pad';
      case 'email':
        return 'email-address';
      default:
        return 'default';
    }
  };

  const isPasswordField = fieldType === 'password' || fieldType === 'confirmPassword';
  const [isSecure, setIsSecure] = useState(true)
  const isArabic = strings.getLanguage() === 'ar';
  return (
    <View style={styles.container}>
      {fildName && (
        <Typography size={18} color="#000000" fonts={500} style={{ marginBottom: 0, paddingHorizontal: 10 }}>
          {fildName}
        </Typography>
      )}

      <View style={[styles.inputContainer, isArabic && { direction: "rtl", flexDirection: "row-reverse" }]}>

        <TextInput
          style={[styles.input, isArabic && { textAlign: "right" }]}

          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#322E28"
          secureTextEntry={isPasswordField && isSecure}
          keyboardType={getKeyboardType()}
        />
        {
          isPasswordField && <TouchableOpacity style={[
            { marginRight: 10, }, isArabic && { justifyContent: "flex-start" }
          ]} onPress={() => setIsSecure(!isSecure)}>
            <SvgIcon name='hide' color='#000' />
          </TouchableOpacity>
        }
      </View>
      {errorMessage && <Typography color="red" style={[styles.error, isArabic && { alignSelf: "flex-start", }]}>{errorMessage}</Typography>}
    </View>
  );
};

export default InputFild;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    width: "100%",
  },
  inputContainer: {
    height: 60,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#322E28',
    paddingHorizontal: 17,
    width: '100%',
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"



  },
  input: {
    flex: 1,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 16,
    paddingHorizontal: 10,
    fontFamily: Fonts.PoppinsMedium,
    // position:"absolute",
    // justifyContent: 'space-around',
    // justifyContent:"flex-end"



  },
  error: {
    alignSelf: "flex-end",
    marginBottom:-25

  }
});
