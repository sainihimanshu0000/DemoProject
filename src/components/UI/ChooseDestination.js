import { StyleSheet, Text, View, TouchableOpacity, FlatList, TextInput, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Typography } from '../Typography';
import SvgIcon from '../SvgIcon';
import { Fonts } from '../../../assets/fonts/fonts';
import { properties } from '../../constants/PropertyData';

const ChooseDestination = ({ setSelectedDestination, selectedDestination,handleDestination }) => {
    // const [selectedDestination, setSelectedDestination] = useState([]);

    // const handleDestination = (item) => {
    //     const newDestination = selectedDestination.includes(item.location)
    //         ? selectedDestination.filter(destination => destination !== item.location)
    //         : [...selectedDestination, item.location];
    //     setSelectedDestination(newDestination);
    // };

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <TouchableOpacity onPress={handleModal}>
                <Typography
                    size={18}
                    lineHeight={27}
                    color={"#322E28"}
                    style={{ fontFamily: Fonts.PoppinsBold }}
                >
                    Where to?
                </Typography>
            </TouchableOpacity>

            <Typography size={14} lineHeight={21} color={"#322E28"}>
                Choose or search your destination
            </Typography>

            <View style={styles.searchView}>
                <SvgIcon name={"search"} style={styles.searchIcon} />
                <TextInput
                    placeholder="Search for Destination"
                    style={styles.searchInput}
                />
            </View>
            <ScrollView>

                <Typography
                    size={18}
                    lineHeight={27}
                    style={styles.sectionTitle}
                    color={"#322E28"}
                >
                    All Destinations
                </Typography>



                <FlatList
                    data={properties}
                    renderItem={({ item }) => (
                        <View style={styles.destinationRow}>
                            <TouchableOpacity onPress={() => handleDestination(item)}>
                                <Typography color={"#322E28"} size={16} lineHeight={53}>
                                    {item.location}
                                </Typography>
                            </TouchableOpacity>
                            {selectedDestination === item.location && (
                                <SvgIcon name={"rightClick"} style={styles.iconRight} />
                            )}
                        </View>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                />
               

            </ScrollView>
        </ScrollView>
    );
};

export default ChooseDestination;

const styles = StyleSheet.create({
    container: {
        // marginTop: 120,
        // borderTopRightRadius: 20,
        // borderTopLeftRadius: 20,
        // backgroundColor: "#ddd",

        // // padding: 30,

    },
    searchView: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 5,
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 12,
        elevation: 3,
        height: 52,
        marginTop: 19,
    },
    searchIcon: {
        marginLeft: 18,
    },
    searchInput: {
        marginLeft: 10,
        flex: 1,
    },
    sectionTitle: {
        marginTop: 27,
        fontFamily: Fonts.PoppinsBold,
    },
    destinationRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "90%",
        marginBottom: 15,
    },
    iconRight: {
        marginLeft: 18,
    },
});
