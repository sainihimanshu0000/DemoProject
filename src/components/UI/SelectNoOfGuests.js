import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { Typography } from '../Typography'
import SvgIcon from '../SvgIcon'
import Colours from '../../constants/Colours'


const SelectNoOfGuests = ({ guestCounts, setGuestCounts, increment, decrement, selectedDestination, selectedProperties, getSelectedDatesText, goToPrevious }) => {

    // Calculate the total number of guests
    const totalGuests = guestCounts.reduce((total, item) => total + item.count, 0);

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row" }}>
                <View>

                    <TouchableOpacity style={{ marginTop: 10, marginHorizontal: 25 }} onPress={goToPrevious}>
                        <SvgIcon name={"back"} />
                    </TouchableOpacity>
                </View>
                <View>

                    <Typography size={18} lineHeight={27} color={Colours.black}>Number of guests</Typography>
                    {selectedDestination && <Typography size={14} lineHeight={21} color={"322E28"} >
                        {selectedDestination}{"\n"}
                    </Typography>
                    }
                    {selectedProperties &&

                        <Typography size={14} lineHeight={21} color={"322E28"}> {selectedProperties}{"\n"}</Typography>
                    }


                    <Typography size={14} lineHeight={21} color={"322E28"}> {getSelectedDatesText()}{"\n"}</Typography>

                    {
                        totalGuests !== 0 &&
                        <Typography size={14} lineHeight={21} color={"322E28"}>  Total Guests: {totalGuests}</Typography>
                    }
                </View>
            </View>

            <View style={{ borderWidth: 1, borderColor: "#322E284D" }} />

            <FlatList
                data={guestCounts}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <View style={styles.row}>
                        <View>
                            {/* Display category and age */}
                            <Typography size={18} lineHeight={30} color={Colours.inputBorder}>{item?.category}</Typography>
                            <Typography size={14} lineHeight={21} color={Colours.inputBorder}>{item?.age}</Typography>
                        </View>
                        <View style={styles.counterContainer}>
                            <TouchableOpacity
                                style={styles.counterButton}
                                onPress={() => decrement(index)}
                            >
                                <Typography>-</Typography>
                            </TouchableOpacity>
                            <Typography>{item.count}</Typography>
                            <TouchableOpacity
                                style={styles.counterButton}
                                onPress={() => increment(index)}
                            >
                                <Typography>+</Typography>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />


            <View style={styles.totalByCategory}>

            </View>


            <Typography size={13} lineHeight={19.5}>
                This place has a maximum of 3 guests, not including infants. Pets aren’t allowed.
            </Typography>
        </View>
    )
}

export default SelectNoOfGuests

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 10,
    },
    counterContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    counterButton: {
        height: 40,
        width: 40,
        borderRadius: 40,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10,
    },
    totalByCategory: {
        marginTop: 20,
    },
    totalGuests: {
        marginTop: 10,
    }
})
