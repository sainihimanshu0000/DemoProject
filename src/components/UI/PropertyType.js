import { StyleSheet, View, FlatList, TouchableOpacity,Dimensions } from 'react-native';
import React from 'react';
import { Typography } from '../Typography';
import SvgIcon from '../SvgIcon';
import { Fonts } from '../../../assets/fonts/fonts';
const { width } = Dimensions.get("window");

const PropertyType = ({ data }) => {
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                style={styles.slide}

            >
                <View style={styles.iconContainer}>
                    <SvgIcon name={item.typeImg} color={"#000"} />
                </View>
                <Typography lineHeight={14.52} fonts={600} style={styles.text} color={"#322E28"}>
                    {item.type}
                </Typography>
            </TouchableOpacity>
        );
    };

    return (
        <View style={{ marginTop: 30,width:width }}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

export default PropertyType;

const styles = StyleSheet.create({
    slide: {
        alignItems: 'center',
        marginHorizontal: 10,
        paddingVertical: 10,
    },
    iconContainer: {
        borderWidth: 1,
        height: 59,
        width: 59,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        borderColor: '#322E28',
    },
    text: {
        fontFamily: Fonts.InterBold,
        marginTop: 5.25
    }
});
