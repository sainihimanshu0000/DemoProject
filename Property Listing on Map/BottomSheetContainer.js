import { StyleSheet, View, Dimensions, ScrollView } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { useMemo, useState, useRef, useCallback } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import PropertyCard from '../src/components/UI/Property';
import { properties } from '../src/constants/PropertyData';
const { height } = Dimensions.get("window");

const TestScreen = () => {
    const snapPoints = useMemo(() => ["35%", "95%"], []);  // Increased snap points to 35% and 95%
    const bottomSheetRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [filteredProperties, setFilteredProperties] = useState(properties);
    const [likedProperty, setLikedProperty] = useState([]);

    const pickupDropLocations = [
        { id: 1, name: "Location 1" },
        { id: 2, name: "Location 2" }
    ];

    const handleSheetChange = useCallback((index) => {
        setCurrentIndex(index);
        console.log('Current Index:', index);
    }, []);

    const handlePropertyLiked = (propertyId) => {
        if (likedProperty.includes(propertyId)) {
            setLikedProperty(likedProperty.filter(id => id !== propertyId));
        } else {
            setLikedProperty([...likedProperty, propertyId]);
        }
    };

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <BottomSheet
                ref={bottomSheetRef}
                index={0}
                snapPoints={[
                    height * 0.65,  // Increased the initial snap height to 65% of the screen
                    pickupDropLocations.length === 2 ? height * 0.65 : 
                    pickupDropLocations.length === 3 ? height * 0.75 : 
                    pickupDropLocations.length === 4 ? height * 0.9 :  // Increased the max height to 90%
                    height * 0.9,
                ]}
                activeOffsetX={[-999, 999]}
                activeOffsetY={[-5, 5]}
                failOffsetX={[-5, 5]}
                animateOnMount={true}
                style={{
                    zIndex: 1,
                    borderTopLeftRadius: 44,
                    borderTopRightRadius: 44,
                }}
            >
                {/* <ScrollView contentContainerStyle={{ justifyContent: 'flex-end' }}> */}
                    <PropertyCard
                        data={filteredProperties}
                        handlePropertyLiked={handlePropertyLiked}
                        likedProperty={likedProperty}
                    />
                {/* </ScrollView> */}
            </BottomSheet>
        </GestureHandlerRootView>
    );
};

export default TestScreen;
