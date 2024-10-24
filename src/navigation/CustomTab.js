import { Dimensions, ImageBackground, StyleSheet, TouchableOpacity, View, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React from 'react';
import { image } from '../../assets/image/image';
import SvgIcon from '../components/SvgIcon';
import { Typography } from '../components/Typography';
import Colours from '../constants/Colours';


const { width } = Dimensions.get("window");

const CustomTab = ({ navigation }) => {
    return (
        // <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ImageBackground
                    source={image.tab}
                    style={styles.background}
                >
                    <View style={styles.tabContainer}>
                        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate("Explore")}>
                            <SvgIcon name={"explore"} />
                            <Typography style={styles.tabLabel} size={12} lineHeight={18}>Explore</Typography>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate("Saved")}>
                            <SvgIcon name={"saved"} />
                            <Typography style={styles.tabLabel} size={12} lineHeight={18}>Saved</Typography>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate("Trips")}>
                            <View style={styles.activeTabIcon}>
                                <SvgIcon name={"trips"} />
                            </View>
                            <Typography style={styles.tabLabel} size={12} lineHeight={18}>Trips</Typography>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate("Inbox")}>
                            <SvgIcon name={"inbox"} />
                            <Typography style={styles.tabLabel} size={12} lineHeight={18}>Inbox</Typography>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate("More")}>
                            <SvgIcon name={"more"} />
                            <Typography style={styles.tabLabel} size={12} lineHeight={18}>More</Typography>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </TouchableWithoutFeedback>
        // </KeyboardAvoidingView>
    );
}

export default CustomTab;

const styles = StyleSheet.create({
    background: {
        height: 70,
        width: width,
        position: "absolute",
        bottom: 0,
    },
    tabContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "flex-end",
        paddingBottom: 10,
    },
    tabItem: {
        alignItems: 'center',
        flexDirection: 'column',
    },
    activeTabIcon: {
        backgroundColor: Colours.oregon,
        height: 60,
        width: 60,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
        marginBottom: 5,
        marginRight: 18
    },
    tabLabel: {
        marginTop: 5,
    },
});
