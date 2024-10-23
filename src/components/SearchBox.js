import { Dimensions, StyleSheet, TouchableOpacity, View, ScrollView, TextInput } from 'react-native';
import React, { useState } from 'react';
import SvgIcon from './SvgIcon';
import { Typography } from './Typography';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { BlurView } from '@react-native-community/blur';

const { width } = Dimensions.get("window");

const SearchBox = ({ svgLeftName, svgRightName, placeholder, onPress }) => {
   
    const animatedWidth = useSharedValue(width * 0.9);
    const animatedHeight = useSharedValue(70);

    const [isExpanded, setIsExpanded] = useState(false);

    const animatedStyle = useAnimatedStyle(() => ({
        width: withTiming(animatedWidth.value, { duration: 500 }),
        height: withTiming(animatedHeight.value, { duration: 500 }),
    }));

    const handlePress = () => {
        setIsExpanded(!isExpanded);
        animatedHeight.value = animatedHeight.value === 70 ? 320 : 70;
    };

    return (
        <ScrollView>
            <Animated.View style={[styles.containerBox, animatedStyle]}>
                {!isExpanded ? (
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.iconWrapper}>
                            <SvgIcon name={svgLeftName} color={"#000"} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.placeholderWrapper} onPress={handlePress}>
                            <Typography size={18} lineHeight={27} style={styles.placeholderText}>
                                {placeholder}
                            </Typography>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.filterIconWrapper} onPress={onPress}>
                            <SvgIcon name={svgRightName} color={"#000"} />
                        </TouchableOpacity>
                    </View>
                ):(
                    <View>

                        <View style={styles.header}>
                            <TouchableOpacity style={styles.closeIcon} onPress={handlePress}>
                                <SvgIcon name={"close"} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.searchCard}>
                            <Typography style={styles.title}>Where to?</Typography>
                            <View style={styles.searchBar}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Search destinations"
                                    placeholderTextColor="#8e8e93"
                                    />
                            </View>
                            <View style={styles.destinationContainer}>
                                {["I'm flexible", "Europe", "United Kingdom"].map((destination, index) => (
                                    <TouchableOpacity key={index} style={styles.destination}>
                                        <Typography style={styles.destinationTypography}>{destination}</Typography>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>
                        </View>

                )}
</Animated.View>

                {isExpanded && (
                    
                    <View>

                       

                        <View style={styles.searchCard}>
                            <TouchableOpacity style={styles.optionRow}>
                                <Typography style={styles.optionTypography}>When</Typography>
                                <Typography style={styles.optionSubTypography}>Any week</Typography>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.searchCard}>
                            <TouchableOpacity style={styles.optionRow}>
                                <Typography style={styles.optionTypography}>Who</Typography>
                                <Typography style={styles.optionSubTypography}>Add guests</Typography>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.bottomBar}>
                            <TouchableOpacity style={styles.clearButton}>
                                <Typography style={styles.clearTypography}>Clear all</Typography>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.searchButton}>
                                <Typography style={styles.searchButtonTypography}>Search</Typography>
                            </TouchableOpacity>
                        </View>
                        </View>
                   
                )}
        </ScrollView>
    );
};

export default SearchBox;

const styles = StyleSheet.create({
    containerBox: {
      
        backgroundColor: '#fff',
        // alignItems: 'center',
        paddingHorizontal: 15,
        borderRadius: 35,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 12,
        elevation: 3,
        justifyContent: "space-between",
      
        width:"100%"
    },
    blurView: {
        flex: 1,
        borderRadius: 35,
        overflow: 'hidden',
    },
    row: {
        flexDirection: 'row',
        // justifyContent: "space-between",
        alignItems: 'center',
        width: '100%',
    },
    iconWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    placeholderWrapper: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    placeholderText: {
        color: '#000',
        fontSize: 16,
        fontWeight: '500',
    },
    filterIconWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 44,
        height: 44,
        borderWidth: 1,
        borderColor: '#e1e1e1',
        borderRadius: 22,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 15,
    },
    closeIcon: {
        padding: 10,
    },
    searchCard: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 20,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
    },
    title: {
        fontSize: 22,
        fontWeight: '600',
        marginBottom: 15,
    },
    searchBar: {
        flexDirection: 'row',
        backgroundColor: '#f7f7f7',
        borderRadius: 8,
        paddingHorizontal: 10,
        alignItems: 'center',
        marginBottom: 20,
    },
    input: {
        fontSize: 16,
        padding: 10,
        flex: 1,
    },
    destinationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    destination: {
        alignItems: 'center',
        flex: 1,
        marginHorizontal: 5,
    },
    destinationTypography: {
        fontSize: 14,
        fontWeight: '500',
    },
    optionRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    optionTypography: {
        fontSize: 16,
        fontWeight: '600',
    },
    optionSubTypography: {
        fontSize: 16,
        color: '#8e8e93',
    },
    clearButton: {
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 8,
        backgroundColor: '#f8f8f8',
    },
    clearTypography: {
        fontSize: 16,
        color: '#ff385c',
    },
    searchButton: {
        backgroundColor: '#ff385c',
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 30,
        marginLeft: 10,
    },
    searchButtonTypography: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    bottomBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
    },
});
