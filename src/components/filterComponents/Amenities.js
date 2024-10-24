import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Typography } from '../Typography';

import { Fonts } from '../../../assets/fonts/fonts';
import SvgIcon from '../SvgIcon';
import Colours from '../../constants/Colours';

const Amenities = ({selectedAmenities,setSelectedAmenities,handleAmenities}) => {
    // const [selectedAmenities, setSelectedAmenities] = useState([]);

    // const handleAmenities = (item) => {
    //     setSelectedAmenities((prev) => 
    //         prev.includes(item) ? prev.filter(amenity => amenity !== item) : [...prev, item]
    //     );
    // };

    return (
        <View style={styles.section}>
            <Typography style={styles.sectionTitle} size={18} lineHeight={27}>Amenities</Typography>
            <View>
                {['WiFi', 'Kitchen', 'Washing machine'].map((amenity) => (
                    <View key={amenity} style={styles.amenityRow}>
                        <Typography size={18} lineHeight={57}>{amenity}</Typography>
                        <TouchableOpacity onPress={() => handleAmenities(amenity)}>
                            <View style={[styles.checkbox , selectedAmenities.includes(amenity) && {backgroundColor:Colours.oregon }]}>
                                {selectedAmenities.includes(amenity) && <SvgIcon name="check" />}
                            </View>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
        </View>
    );
};

export default Amenities;

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    checkBox: {
        backgroundColor: Colours.oregon,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    section: {
        marginVertical: 20,
    },
    sectionTitle: {
        fontFamily: Fonts.PoppinsBold,
        color: Colours.inputBorder,
    },
    amenityRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
    },
    checkbox: {
        height: 25,
        width: 25,
        borderWidth: 1,
        borderColor: "#9A9A9A",
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
