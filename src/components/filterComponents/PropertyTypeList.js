import { StyleSheet, View, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import { Typography } from '../Typography';
import SvgIcon from '../SvgIcon'; 

const propertyTypes = ['House', 'Flat', 'Guest house', 'Hotel'];

const PropertyTypeList = ({handleProperty,setSelectedProperty,selectedProperty}) => {
    const renderItem = ({ item }) => (
        <TouchableOpacity
        key={item}
        style={[styles.propertyTypeButton, selectedProperty.includes(item) && { backgroundColor: "#DA4726" }]}
        onPress={() => handleProperty(item)}  // Passing item to handleProperty
      >
        <SvgIcon name={item} />
        <Typography>{item}</Typography>
      </TouchableOpacity>
      
    );

    return (
        <View style={styles.section}>
            <Typography style={styles.sectionTitle} size={18} lineHeight={27}>Property type</Typography>
            <FlatList
                data={propertyTypes}
                renderItem={renderItem}
                keyExtractor={(item) => item}
                horizontal={false} 
                contentContainerStyle={styles.buttonGroups}
                numColumns={2}
            />
        </View>
    );
};

export default PropertyTypeList;

const styles = StyleSheet.create({
    section: {
        marginVertical: 16,
    },
    sectionTitle: {
        marginBottom: 12,
    },
    buttonGroups: {
        justifyContent: 'space-between',
    },
    propertyTypeButton: {
        flex: 1,
        padding: 10,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5, 
        flexDirection: 'row',
        justifyContent:"space-around"
    },
});
