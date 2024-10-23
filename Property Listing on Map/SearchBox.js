import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import SvgIcon from './SvgIcon';
import { Fonts } from '../../assets/fonts/fonts';
import { Typography } from './Typography';

const SearchBox = ({ svgLeftName, svgRightName, placeholder, onPress }) => {
    return (
        <View style={styles.container}>
            <View style={styles.iconWrapper}>
                <SvgIcon name={svgLeftName} color={"#000"} />
            </View>
            <TouchableOpacity style={styles.placeholderWrapper} onPress={onPress}>
                <Typography size={18} lineHeight={27} style={styles.placeholderText}>
                    {placeholder}
                </Typography>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterIconWrapper} onPress={onPress}>
                <SvgIcon name={svgRightName} color={"#000"} />
            </TouchableOpacity>
        </View>
    );
};

export default SearchBox;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        borderColor: '#FFFFFF',
        borderWidth: 2,
        paddingHorizontal: 10,
        borderRadius: 35,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 12,
        elevation: 5,
        width: '100%',
        height: 70,
        justifyContent: "space-between",
    },
    iconWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: '100%',
    },
    placeholderWrapper: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal:10
    },
    placeholderText: {
        // color: '#000', // Change color if needed
        // // You can add more styles here if needed
    },
    filterIconWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 44,
        height: 44,
        borderWidth: 1,
        borderColor: '#322E2840',
        borderRadius: 22,
    },
});
