import React from 'react';
import { StyleSheet, TouchableOpacity, View, ScrollView } from 'react-native';
import SvgIcon from './SvgIcon';
import { Typography } from './Typography';
import PriceRange from './filterComponents/PriceRange';
import RoomAndbed from './filterComponents/RoomAndbed';
import Amenities from './filterComponents/Amenities';
import BookingOption from './filterComponents/BookingOption';
import PropertyTypeList from './filterComponents/PropertyTypeList';
import { useDispatch, useSelector } from 'react-redux';
import {
    setPriceRange,
    setSelectedBedrooms,
    setSelectedBeds,
    setSelectedBathrooms,
    setSelectedAmenities,
    setSelectedProperty,
    setInstantBook,
    setSelfCheckIn,
    clearAllFilters,
} from '../redux/action';

const Filter = ({ onClose, navigation }) => {
    const dispatch = useDispatch();
    const {
        priceRange,
        selectedBedrooms,
        selectedBeds,
        selectedBathrooms,
        selectedAmenities,
        selectedProperty,
        instantBook,
        selfCheckIn,
    } = useSelector(state => state.filter);

    const handleAmenities = (item) => {
        const newAmenities = selectedAmenities.includes(item)
            ? selectedAmenities.filter(amenity => amenity !== item)
            : [...selectedAmenities, item];
        console.log(newAmenities)
        dispatch(setSelectedAmenities(newAmenities));
    };

    const handleProperty = (item) => {
        const newProperties = selectedProperty.includes(item)
            ? selectedProperty.filter(property => property !== item)
            : [...selectedProperty, item];

        dispatch(setSelectedProperty(newProperties));
    };

    const handleRoomSelection = (value, type) => {
        switch (type) {
            case 'bedrooms':
                dispatch(setSelectedBedrooms(value));
                break;
            case 'beds':
                dispatch(setSelectedBeds(value));
                break;
            case 'bathrooms':
                dispatch(setSelectedBathrooms(value));
                break;
            default:
                break;
        }
    };

    const handleSubmit = () => {
        // dispatch(setPriceRange(priceRange));
        // dispatch(setSelectedPrice(priceRange)); 
        onClose();
        navigation.navigate("Map")
    };


    const handleClearAll = () => {
        dispatch(clearAllFilters());
        onClose();
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <Typography>Filters</Typography>
                <TouchableOpacity onPress={onClose}>
                    <SvgIcon name="close" />
                </TouchableOpacity>
            </View>

            <View style={styles.section}>
                <Typography style={styles.sectionTitle} size={18} lineHeight={27}>
                    Type of place
                </Typography>
                <Typography style={styles.sectionSubtitle} size={14} lineHeight={21}>
                    Search rooms, entire homes, or any type of place
                </Typography>

                <View style={styles.buttonGroup}>
                    <TouchableOpacity style={styles.toggleButtonSelected}>
                        <Typography style={styles.toggleButtonText} size={16} lineHeight={24}>
                            Any type
                        </Typography>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.toggleButton}>
                        <Typography style={styles.toggleButtonText}>Room</Typography>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.toggleButton}>
                        <Typography style={styles.toggleButtonText}>Entire home</Typography>
                    </TouchableOpacity>
                </View>
            </View>

            <Divider />

            <PriceRange
                priceRange={priceRange}
                setPriceRange={(range) => dispatch(setPriceRange(range))}
            />

            <Divider />

            <RoomAndbed
                handleSelection={handleRoomSelection}
                selectedBedrooms={selectedBedrooms}
                selectedBeds={selectedBeds}
                selectedBathrooms={selectedBathrooms}
            />

            <Divider />

            <Amenities
                selectedAmenities={selectedAmenities}
                handleAmenities={handleAmenities}
            />

            <Divider />

            <BookingOption
                instantBook={instantBook}
                setInstantBook={(value) => dispatch(setInstantBook(value))}
                selfCheckIn={selfCheckIn}
                setSelfCheckIn={(value) => dispatch(setSelfCheckIn(value))}
            />

            <Divider />

            <PropertyTypeList
                selectedProperty={selectedProperty}
                handleProperty={handleProperty}
            />

            <View style={styles.footer}>
                <TouchableOpacity style={styles.clearButton} onPress={handleClearAll}>
                    <Typography style={styles.clearButtonText}>Clear all</Typography>
                </TouchableOpacity>
                <TouchableOpacity style={styles.showButton} onPress={handleSubmit}>
                    <Typography style={styles.showButtonText}>Show 1000+ places</Typography>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const Divider = () => (
    <View style={styles.divider} />
);

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginTop: 25,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
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
        fontFamily: 'Poppins-Bold',
        color: '#322E28',
    },
    sectionSubtitle: {
        color: '#322E28',
        fontFamily: 'Poppins-Medium',
    },
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        paddingVertical: 3,
        paddingHorizontal: 3,
        backgroundColor: '#F4F4F4',
        borderColor: '#9A9A9A',
        borderWidth: 1,
        borderRadius: 30,
    },
    toggleButton: {
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    toggleButtonSelected: {
        backgroundColor: '#DA4726',
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    toggleButtonText: {
        color: '#322E28',
        fontFamily: 'Poppins-SemiBold',
    },
    divider: {
        width: '100%',
        height: 2,
        backgroundColor: '#9A9A9A',
        marginVertical: 10,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    clearButton: {
        backgroundColor: 'transparent',
          justifyContent:'center',
        alignItems:"center"
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
});

export default Filter;
