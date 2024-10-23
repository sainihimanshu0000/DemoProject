import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import InputFild from '../../components/InputFild';
import { Typography } from '../../components/Typography';
import SvgIcon from '../../components/SvgIcon';
import Validation from '../../utils/Validation';
import { strings } from '../../locales/Localization';
import { Fonts } from '../../../assets/fonts/fonts';

const SignUp = ({ navigation }) => {
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState("");
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [isCheck, setIsCheck] = useState(false);
    const [errors, setErrors] = useState({});


    const handleSignUp = () => {
        const newErrors = {
            fullName: Validation.checkUsername(strings.full_name, fullName, 2, 50),
            email: Validation.checkEmail(strings.email, email),
            phone: Validation.checkPhoneNumberWithFixLength(strings.phone_number, 10, phone),
            country: country ? null : strings.Country_is_required,
            password: Validation.checkPassword(strings.password, password),
            confirmPassword: Validation.validateConfirmPassword(strings.confirm_password, confirmPassword),
        };

        setErrors(newErrors);

        if (Object.values(newErrors).every(err => !err)) {
           
        }
        navigation.navigate("OtpVerification");
    };


    const isArabic = strings.getLanguage() === 'ar';
    return (
        <ScrollView
            contentContainerStyle={[styles.scrollContainer, isArabic && { direction: "rtl" }]}
        >
            {/* <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container }
            > */}
                <View style={[styles.headerContainer, isArabic && { alignSelf: "flex-end" }]}>
                    <Typography
                        size={30}
                        lineHeight={45}
                        type={Fonts.PoppinsBold}
                        color={"#000000"}
                        style={styles.title}
                    >
                        {strings.create_account}
                    </Typography>
                    <Typography
                       
                        size={18}
                        lineHeight={27}
                        color="#525758"
                    >
                        {strings['Let’s_get_started_now']}
                    </Typography>
                </View>

                <InputFild
                    fildName={strings.full_name}
                    value={fullName}
                    onChangeText={(value) => {
                        setFullName(value);
                        setErrors((prevErrors) => ({
                            ...prevErrors,
                            fullName: Validation.checkUsername(strings.full_name, value, 2, 50),
                        }));
                    }}
                    placeholder={strings.enter_your_name}
                    fieldType="text"
                    errorMessage={errors.fullName}
                />

                <InputFild
                    fildName={strings.email}
                    value={email}
                    onChangeText={(value) => {
                        setEmail(value);
                        setErrors((prevErrors) => ({
                            ...prevErrors,
                            email: Validation.checkEmail(strings.email, value),
                        }));
                    }}
                    placeholder={strings.enter_your_email}
                    fieldType="email"
                    errorMessage={errors.email}
                />

                <InputFild
                    fildName={strings.phone_number}
                    value={phone}
                    onChangeText={(value) => {
                        setPhone(value);
                        setErrors((prevErrors) => ({
                            ...prevErrors,
                            phone: Validation.checkPhoneNumberWithFixLength(strings.phone_number, 10, value),
                        }));
                    }}
                    placeholder={strings.mobile_number}
                    fieldType="phone"
                    errorMessage={errors.phone}
                />

                <InputFild
                    fildName={strings.country}
                    value={country}
                    onChangeText={(value) => {
                        setCountry(value);
                        setErrors((prevErrors) => ({
                            ...prevErrors,
                            country: value ? null : strings.Country_is_required,
                        }));
                    }}
                    placeholder={strings.select_your_country}
                    fieldType="country"
                    errorMessage={errors.country}
                />

                <InputFild
                    fildName={strings.password}
                    value={password}
                    onChangeText={(value) => {
                        setPassword(value);
                        setErrors((prevErrors) => ({
                            ...prevErrors,
                            password: Validation.checkPasswordh(strings.password, 10, value),
                        }));
                    }}
                    placeholder={strings.enter_your_password}
                    fieldType="password"
                    secureTextEntry
                    errorMessage={errors.password}
                />
                <InputFild
                    fildName={strings.confirm_password}
                    value={confirmPassword}
                    onChangeText={(value) => {
                        setConfirmPassword(value);
                        setErrors((prevErrors) => ({
                            ...prevErrors,
                            confirmPassword: Validation.validateConfirmPassword(strings.phone_number, 10, value),
                        }));

                    }}
                    placeholder={strings.confirm_your_password}
                    fieldType="confirmPassword"
                    secureTextEntry
                    errorMessage={errors.confirmPassword}
                />

                <View style={{ flexDirection: "row", alignItems: 'center' }}>
                    <TouchableOpacity
                        style={[styles.checkBox, isCheck && { backgroundColor: "#DA4726" }]}
                        onPress={() => { setIsCheck(!isCheck) }}
                    >
                        {isCheck ? (<SvgIcon name={"check"} color={""}></SvgIcon>) : null}
                    </TouchableOpacity>
                    <Typography fonts={400} size={16} lineHeight={24} color={"#322E28"}>
                        {strings.terms_conditions}
                    </Typography>
                </View>

                <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                    <Typography size={18} color="#FFFFFF" fonts={600} style={styles.buttonText}>
                        {strings.sign_up}
                    </Typography>
                </TouchableOpacity>
            {/* </KeyboardAvoidingView> */}
        </ScrollView>
    );
};

export default SignUp;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
    },
    scrollContainer: {

        alignItems: 'center',
        justifyContent: 'center',
        padding: 21,
        paddingTop: 12,
        backgroundColor: "#FFFFFF"
    },
    headerContainer: {
        marginBottom: 33,
        width: '100%',
    },
    title: {},
    button: {
        backgroundColor: '#DA4726',
        paddingVertical: 15,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginTop: 30,
    },
    buttonText: {
        fontWeight: 'bold',
    },
    checkBox: {
        borderWidth: 1,
        borderColor: "#ccc",
        height: 25,
        width: 25,
        borderRadius: 7,
        marginHorizontal: 5,
        justifyContent: "center",
        alignItems: "center"
    }
});
