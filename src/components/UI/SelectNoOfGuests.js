import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { Typography } from '../Typography'

const SelectNoOfGuests = ({ guestCounts, setGuestCounts, increment, decrement, selectedDestination, selectedProperties, getSelectedDatesText }) => {

    // Calculate the total number of guests
    const totalGuests = guestCounts.reduce((total, item) => total + item.count, 0);

    return (
        <View style={styles.container}>
            <Typography size={18} lineHeight={27} color={"#000000"}>Number of guests</Typography>
            <Typography style={styles.selectedDatesText}>
                {selectedDestination}{"\n"}
                {selectedProperties}{"\n"}
                {getSelectedDatesText()}{"\n"}
                Total Guests: {totalGuests}
            </Typography>
            {/* <Typography size={18} lineHeight={27} color={"#000000"} style={styles.totalGuests}>
              
            </Typography> */}
            {/* {guestCounts.map((item, index) => (
                    <Typography  style={styles.selectedDatesText}>
                        {item.category}: {item.count}
                    </Typography>
                ))} */}
            <View style={{ borderWidth: 1, borderColor: "#322E284D" }} />

            <FlatList
                data={guestCounts}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <View style={styles.row}>
                        <View>
                            {/* Display category and age */}
                            <Typography size={18} lineHeight={30} color={"#322E28"}>{item.category}</Typography>
                            <Typography size={14} lineHeight={21} color={"#322E28"}>{item.age}</Typography>
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

            {/* Display total guests by category */}
            <View style={styles.totalByCategory}>
               
            </View>

            {/* Display the overall total guests */}
          

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
