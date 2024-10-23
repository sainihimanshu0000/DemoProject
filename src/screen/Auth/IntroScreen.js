import { View, StyleSheet, Dimensions, StatusBar, FlatList, Image, TouchableOpacity } from 'react-native';
import { useRef, useState, useEffect } from 'react';
import { Typography } from '../../components/Typography';
import { image } from '../../../assets/image/image';
import { Data } from '../../constants/introData';
import { strings } from '../../locales/Localization';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';

const { width } = Dimensions.get("window");
const isArabic = strings.getLanguage() === "ar";

const IntroScreen = ({ navigation }) => {
    const flatListRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [introData, setIntroData] = useState([]);
    const isFocus = useIsFocused();

    const handleNext = async () => {
        if (currentIndex < introData.length - 1) {
            const nextIndex = currentIndex + 1;
            flatListRef.current.scrollToIndex({ index: nextIndex });
            setCurrentIndex(nextIndex);
        } else {
            navigation.navigate("Login");
        }
    };

    const handleSkip = () => {
        navigation.navigate("Login");
    };

    useEffect(() => {
        console.log("hi");
        if(isFocus){
            setIntroData([
                {
                    id: "1",
                    image: image.intro1,
                    title: strings.intro_title_1,
                },
                {
                    id: "2",
                    image: image.intro2,
                    title: strings.intro_title_2,
                },
                {
                    id: "3",
                    image: image.intro3,
                    title: strings.intro_title_3,
                },
            ]);
        }
    }, [isFocus]);

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={"transparent"} barStyle={"light-content"} translucent={true} />

            <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
                <Typography style={styles.skipText}>{strings.skip}</Typography>
            </TouchableOpacity>

            <FlatList
                data={introData}
                ref={flatListRef}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={styles.slide}>
                        <Image source={item.image} style={styles.image} />
                        <View style={styles.textContainer}>
                            <Typography lineHeight={45} size={30} color="#fff">
                                {item.title}
                            </Typography>
                        </View>
                    </View>
                )}
                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
               
                onMomentumScrollEnd={(event) => {

                    const index = Math.round(event.nativeEvent.contentOffset.x / width);
                    console.log(index)
                    setCurrentIndex(index);
                }}
            />

            <View style={styles.indicatorContainer}>
                {introData.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.dot,
                            {
                                backgroundColor: currentIndex === index ? '#DA4726' : '#CCC8DE',
                              
                            },
                        ]}
                    />
                ))}
            </View>

            <TouchableOpacity style={styles.nextContainer} onPress={handleNext}>
                <Typography style={styles.nextText}>
                    {currentIndex === introData.length - 1 ? strings.get_started : strings.next}
                </Typography>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    slide: {
        width: width,
        height: "100%",
        justifyContent: 'flex-end',
    },
    image: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '100%',
        width: '100%',
    },
    textContainer: {
        width: '100%',
        paddingHorizontal: 30,
        marginBottom: 100,
    },
    skipButton: {
        position: 'absolute',
        top: 40,
        right: 20,
        padding: 10,
        zIndex: 1,
    },
    skipText: {
        fontSize: 16,
        color: '#000',
        fontFamily: 'Poppins-Regular',
    },
    nextContainer: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: "#DA4726",
        borderRadius: 30,
        padding: 10,
        alignItems: "center",
        width: "auto",
    },
    nextText: {
        color: '#fff',
        fontSize: 16,
    },
    indicatorContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        position: "absolute",
        zIndex: 10,
   bottom:"4%",
        marginLeft: 25,
    },
    dot: {
        width: 25.84,
        height: 3.9,
        borderRadius: 4,
        marginRight: 5,
        backgroundColor: "#CCC8DE",
    },
});

export default IntroScreen;
