import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Switch, ScrollView } from 'react-native';

import Slider from '@react-native-community/slider';
import { Typography } from '../Typography';
import RangeSlider from 'rn-range-slider';
import { Fonts } from '../../../assets/fonts/fonts';



const PriceRange = ({priceRange,setPriceRange}) => {

  return (
    <View style={styles.section}>
    <Typography style={styles.sectionTitle} size={18} lineHeight={27}>Price range</Typography>
    <Typography size={14} lineHeight={21}>Nightly prices before fees and taxes</Typography>

    <Slider
        style={{ width: '100%', height: 104 }}
        minimumValue={100}
        maximumValue={50000}
        step={10}
        value={priceRange[1]}
        onValueChange={(value) => setPriceRange([priceRange[0], value])}
        minimumTrackTintColor="#FF5A5F"
        maximumTrackTintColor="#D3D3D3"
        thumbTintColor="#ccc"
    />

    <View style={styles.priceRange}>
        <View style={styles.priceBox}>
            <Typography color={"#322E28"} size={14} lineHeight={21}>Minimum</Typography>
            <Typography>{priceRange[0]} SAR</Typography>
        </View>
        <View style={styles.priceBox}>
            <Typography color={"#322E28"} size={14} lineHeight={21}>Maximum</Typography>
            <Typography>{priceRange[1]} SAR</Typography>
        </View>
    </View>
</View>


  )
}

export default PriceRange

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
        color: "#322E28"
    },
    sectionSubtitle: {
        color: "#322E28",
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
        backgroundColor: '#DA4726',
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
        borderColor: "#F4F4F4",
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
        color: '#DA4726',
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