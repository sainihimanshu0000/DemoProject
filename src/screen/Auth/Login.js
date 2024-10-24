import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Alert, TouchableOpacity, ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform, StatusBar ,Button} from 'react-native';
import { Typography } from '../../components/Typography';
import SvgIcon from '../../components/SvgIcon';
import PhoneInput from 'react-native-phone-number-input';
import { Fonts } from '../../../assets/fonts/fonts';
import SocialSignIn from '../../components/SocialSignIn';
import { strings } from '../../locales/Localization';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Validation from '../../utils/Validation';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from "@react-native-firebase/app";
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import Colours from '../../constants/Colours';



const Login = ({ navigation }) => {
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef(null);


  async function onFacebookButtonPress() {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
  
    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }
  
    // Once signed in, get the users AccessToken
    const data = await AccessToken.getCurrentAccessToken();
  
    if (!data) {
      throw 'Something went wrong obtaining access token';
    }
  
    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
  
    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
  }
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '639649987900-a6thevg1q507poq80rcnrsj3shnsp3dk.apps.googleusercontent.com', 
      offlineAccess: true,
    });
  }, []);

  const handleLogin = () => {
    const isValid = Validation.checkPhoneNumberWithFixLength(strings.phone_number, 10, value);
    setValid(isValid);
  };
  const handleGoogleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
      // Navigate or handle user info as needed
    } catch (error) {
      console.error(error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        Alert.alert("Sign-in cancelled");
      } else if (error.code === statusCodes.IN_PROGRESS) {
        Alert.alert("Sign-in is in progress");
      } else {
        Alert.alert("Login Error", error.message);
      }
    }
  };
  
  const isArabic = strings.getLanguage() === 'ar';

  return (
    <KeyboardAvoidingView 
      style={{ flex: 1 }} 
      behavior={Platform.OS === 'ios' ? 'padding' : undefined} 
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0} 
    >
      <StatusBar translucent={false} barStyle={"dark-content"}/>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView 
          contentContainerStyle={[styles.container, isArabic ? { direction: 'rtl' } : null]}
        >
          <View style={styles.logoContainer}>
            <SvgIcon name="customIcon" size={30} />
          </View>
          <View style={styles.textContainer}>
            <Typography size={30} lineHeight={45} color={Colours.black}   type={Fonts.PoppinsBold} style={styles.alignRight}>
              {strings.welcome_back}
            </Typography>
          </View>

          <Typography size={18} lineHeight={27} color={Colours.textGraySec} style={[styles.alignRight, { marginBottom: 42 }]}>
            {strings.login_continue}
          </Typography>

          <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="IN"
            layout="second"
            onChangeText={(text) => setValue(text)}
            textInputStyle={[styles.textInputStyle, isArabic && styles.textInputArabic]}
            flagButtonStyle={[styles.flagButtonStyle, isArabic && { marginLeft: 7 }]}
            containerStyle={[styles.phoneInputContainer, isArabic && { flexDirection: "row-reverse" }]}
            textContainerStyle={styles.textContainerStyle}
            placeholder={strings.mobile_number} 
            placeholderTextColor="#999999"
            autoFocus
          />
          {valid && (
            <Typography size={16} color={"red"} style={styles.validationMessage}>
              {valid}
            </Typography>
          )}

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Typography size={18} color={Colours.white} style={styles.buttonText}>
              {strings.login} 
            </Typography>
          </TouchableOpacity>

          <Typography fonts={500} size={18} lineHeight={27} style={styles.or}>{strings.or}</Typography>

          <View style={[styles.socialSignInContainer]}>
            <SocialSignIn iconName="google" title={strings.continue_google} Arabic={isArabic} onPress={handleGoogleLogin} />
            <SocialSignIn iconName="apple" title={strings.continue_apple} Arabic={isArabic} />
            <Button
      title="Facebook Sign-In"
      onPress={() => onFacebookButtonPress().then(() => console.log('Signed in with Facebook!'))}
    />
          </View>

          <View style={styles.signupContainer}>
            <Typography  size={18} lineHeight={27}>
              {strings.no_account} 
            </Typography>
            <TouchableOpacity onPress={() => {navigation.navigate("SignUp")}}>
              <Typography  size={18} lineHeight={27} color={Colours.oregon }style={styles.signupText}>
                {strings.signup} 
              </Typography>
            </TouchableOpacity>
          </View>
         
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Login;




const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 25,
    backgroundColor: Colours.white,
 
  },
  logoContainer: {
    marginBottom: 15,
  },
  textContainer: {},
  alignRight: {},
  button: {
    backgroundColor: Colours.oregon,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginBottom: 32,
    width: "100%",
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: '600',
  },
  validationMessage: {
marginTop:-22,
    textAlign: 'center',
  },
  or: {
    marginBottom: 20,
    textAlign: 'center',
  },
  socialSignInContainer: {
    marginBottom: 30,
  },
  signupContainer: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 47,
  },
  signupText: {
    marginLeft: 5,
  },
  textInputStyle: {
    color: Colours.black,
    fontSize: 16,
    fontFamily: Fonts.RubikMedium,
    paddingVertical: 10,
    marginBottom: -15,
  },
  textInputArabic: {
    textAlign: 'right', 
  },
  codeTextStyle: {
    color: Colours.oregon,
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: Fonts.RubikMedium,
  },
  flagButtonStyle: {
    borderWidth: 1,
    borderColor: '#322E28',
    borderRadius: 10,
    marginRight: 7,
  },
  phoneInputContainer: {
    height: 60,
    width: "100%",
    marginBottom: 40,
    justifyContent:"center",
  
  },
  textContainerStyle: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#322E28',
    borderRadius: 10,
    marginLeft: 0,
paddingTop:0
  },
  skip: {
    position: 'absolute',
    top: 40,
    right: 20,
  },
});
