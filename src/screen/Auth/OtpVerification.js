import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { strings } from '../../locales/Localization';
import OTPTextView from 'react-native-otp-textinput';
import { Typography } from '../../components/Typography';
import { Fonts } from '../../../assets/fonts/fonts';


const OtpVerification = ({navigation}) => {
  const [time, setTime] = useState(15);
  let intervalId;

  const startResendOtpTimer = () => {
    intervalId = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(intervalId);
          return 0;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);
  };

  const handleResendOtp = () => {
    setTime(15); 
    startResendOtpTimer();
    navigation.navigate("HomeStack")
  };

  useEffect(() => {
    startResendOtpTimer();

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, []);

  return (
    <View style={styles.mainContainer}>
      <Typography fonts={600} size={20} lineHeight={30} color={"#000000"}   type={Fonts.PoppinsBold} style={styles.title}>{strings.OTP_Verfication}</Typography>
      <Typography fonts={400} size={20} lineHeight={30} color={"#000000"} style={styles.discription}>
       {strings.A_verification_code_was_sent_to}
      </Typography>

      <OTPTextView
        inputCount={4}
        textInputStyle={styles.textInputStyle}
        containerStyle={styles.containerStyle}
      />

      <Typography fonts={400} size={15} lineHeight={22.5} color={"#000000"} style={{  marginBottom:30}}>
      {strings.OTP_about}
      </Typography>

      <Typography fonts={400} size={18} lineHeight={27} color={"#DA4726"} style={{  marginBottom:34}}>0:{time < 10 ? `0${time}` : time}</Typography>

      <TouchableOpacity
        style={styles.actionButton}
        onPress={handleResendOtp}
        // disabled={time > 0} 

      >
        <Typography fonts={600} size={18} lineHeight={27} color={time > 0 ? "#B0B0B0" : "#DA4726"}>{strings.Resend_OTP}</Typography>
      </TouchableOpacity>
    </View>
  );
};

export default OtpVerification;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    paddingTop: 40,
  },
  title:{
    marginBottom:9
  },
  discription:{
    marginBottom:37
  },
  textInputStyle: {
    borderColor: "#DBDBDB",
    borderWidth: 1,
    borderRadius: 10,
    height: 68,
    width: 75,
    textAlign: 'center',
    fontSize: 24,
  },
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '80%',
    marginBottom:31
  },
  actionButton: {
    borderWidth: 1,
    borderColor: "#DA4726",
    height: 60,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    marginTop: 20,
  },
});
