import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Switch, ScrollView } from 'react-native';
import Colours from '../../constants/Colours';
import { Typography } from '../Typography';
import RangeSlider from 'rn-range-slider';
import { Fonts } from '../../../assets/fonts/fonts';


const BookingOption = ({ instantBook, setInstantBook, selfCheckIn, setSelfCheckIn }) => {

    // const [instantBook, setInstantBook] = useState(false);
    // const [selfCheckIn, setSelfCheckIn] = useState(false);

  return (
    

    <View style={styles.section}>
    <Typography style={styles.sectionTitle} size={18} lineHeight={27}>Booking options</Typography>
    <View style={styles.switchRow}>
        <Typography>Instant Book</Typography>
        <Switch value={instantBook} onValueChange={() => setInstantBook(!instantBook)} />
    </View>
    <View style={styles.switchRow}>
        <Typography>Self check-in</Typography>
        <Switch
            value={selfCheckIn}
            onValueChange={() => setSelfCheckIn(!selfCheckIn)}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            //  thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
        />
    </View>
</View>
  )
}

export default BookingOption;

const styles = StyleSheet.create({



    container: {
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    section: {
        marginVertical: 20
    },
    sectionTitle: {
        fontFamily: Fonts.PoppinsBold,
        color: Colours.inputBorder
    },
    sectionSubtitle: {
        color: Colours.inputBorder,
        fontFamily: Fonts.PoppinsMedium
    },
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,


    },
    buttonGroups: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,

    },
    toggleButton: {

        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    toggleButtonSelected: {

        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: Colours.oregon,
    },
    toggleButtonText: {
        color: '#322E28',
        fontFamily: Fonts.PoppinsSemiBold,


    },
    priceRange: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },


    priceBox: {
        width: "40%",
        height: 60,
        borderColor: "#9A9A9A",
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },

    subSection: {
        marginVertical: 10,
    },
    circleButton: {
        borderWidth: 1,
        borderColor: Colours.borderColor,
        borderRadius: 25,
        paddingHorizontal: 22,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
    },
    amenityRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
    },
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    propertyTypeButton: {
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 15,
        marginHorizontal: 5,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    clearButton: {
        backgroundColor: 'transparent',
    },
    clearButtonText: {
        color: Colours.oregon,
    },
    showButton: {
        backgroundColor: '#FF5A5F',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    showButtonText: {
        color: '#FFF',
    },
})