import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Typography } from '../Typography';

const RoomAndbed = ({ handleSelection, selectedBedrooms, selectedBeds, selectedBathrooms }) => {
    const renderOptions = (label, selectedValue, type) => (
        <View style={styles.subSection}>
            <Typography color={"#000000"} size={16} lineHeight={24}>{label}</Typography>
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
                        <Typography color={selectedValue === value ?"#fff":"#000"}>{value}</Typography>
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
        color: "#322E28",
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
        borderColor: "#F4F4F4",
        borderRadius: 25,
        paddingHorizontal: 20,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 15,
    },
    selectedButton: {
        backgroundColor: '#DA4726',
        color:"#fff"
    },
});
