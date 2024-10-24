import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Typography } from '../Typography';
import Colours from '../../constants/Colours';

const RoomAndbed = ({ handleSelection, selectedBedrooms, selectedBeds, selectedBathrooms }) => {
    const renderOptions = (label, selectedValue, type) => (
        <View style={styles.subSection}>
            <Typography color={Colours.black} size={16} lineHeight={24}>{label}</Typography>
            <View style={styles.buttonGroups}>
                {['Any', 1, 2, 3, 4, 5].map((value) => (
                    <TouchableOpacity
                        key={value}
                        style={[
                            styles.circleButton,
                            selectedValue === value && styles.selectedButton
                        ]}
                        onPress={() => handleSelection(value, type)}
                    >
                        <Typography color={selectedValue === value ?Colours.white:Colours.black}>{value}</Typography>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );

    return (
        <View style={styles.section}>
            <Typography style={styles.sectionTitle} size={18} lineHeight={27}>Rooms and beds</Typography>
            {renderOptions('Bedrooms', selectedBedrooms, 'bedrooms')}
            {renderOptions('Beds', selectedBeds, 'beds')}
            {renderOptions('Bathrooms', selectedBathrooms, 'bathrooms')}
        </View>
    );
};

export default RoomAndbed;

const styles = StyleSheet.create({
    section: {
        marginVertical: 20,
    },
    sectionTitle: {
        fontFamily: 'Poppins-Bold',
        color: Colours.inputBorder,
    },
    subSection: {
        marginVertical: 10,
    },
    buttonGroups: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
flex:1,
    },
    circleButton: {
    
        borderWidth: 1,
        borderColor: Colours.borderColor,
        borderRadius: 25,
        paddingHorizontal: 20,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 15,
    },
    selectedButton: {
        backgroundColor: Colours.oregon,
        color:Colours.white
    },
});
