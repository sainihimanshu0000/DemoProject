import { StyleSheet, View, Dimensions, ScrollView, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, StatusBar } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import BottomSheet, { BottomSheetView, BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { useMemo, useState, useEffect, useRef, useCallback } from 'react';
import { properties } from '../../constants/PropertyData';
import { Typography } from '../../components/Typography';
import SvgIcon from '../../components/SvgIcon';
import SearchBox from './SearchBox';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';
import { setLikedProperty } from './redux/action';
import BottomSheetContainer from './BottomSheetContainer';


const Map = () => {
  const snapPoints = useMemo(() => ["10%", "85.6%"], []);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const mapRef = useRef(null);
  const bottomSheetRef = useRef(null);
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState(0);
  const { priceRange, selectedBedrooms, selectedBathrooms, selectedAmenities, likedProperty } = useSelector(state => state.filter);

  useEffect(() => {
    if (selectedHotel && mapRef.current) {
      mapRef.current.animateToRegion({
        latitude: selectedHotel.coordinates.latitude,
        longitude: selectedHotel.coordinates.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }, 1000);
    }
  }, [selectedHotel]);

  const handlePropertyLiked = (item) => {
    const newLikedProperty = likedProperty.includes(item.id)
      ? likedProperty.filter(like => like !== item.id)
      : [...likedProperty, item.id];

    dispatch(setLikedProperty(newLikedProperty));
  };

  const filterProperties = () => {
    const results = properties.filter((property) => {
      const discountedPrice = property.price.discounted;
      const isPriceInRange = discountedPrice >= priceRange[0] && discountedPrice <= priceRange[1];
      const isBedroomsMatch = selectedBedrooms === 'Any' || property.attributes.bedrooms === selectedBedrooms;
      const isBathroomsMatch = selectedBathrooms === 'Any' || property.attributes.bathrooms === selectedBathrooms;
      const isAmenitiesMatch = selectedAmenities.length === 0 || selectedAmenities.every((amenity) =>
        property.amenities.some((item) => item.toLowerCase() === amenity.toLowerCase())
      );
      return isPriceInRange && isBedroomsMatch && isBathroomsMatch && isAmenitiesMatch;
    });

    setFilteredProperties(results);
  };

  useEffect(() => {
    filterProperties();
  }, [priceRange, selectedBedrooms, selectedBathrooms, selectedAmenities]);

  const handleSheetChange = useCallback((index) => {
    setCurrentIndex(index);  
    console.log('Current Index:', index);
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
     
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <View style={styles.header}>
              <SearchBox
                svgLeftName="search"
                svgRightName="filter"
                placeholder="Where to?"
                onSearchInputChange={() => { }}
                onPress={() => { }}
              />
            </View>

            {currentIndex === 0 ? null : (<View style={styles.mapFilterView}>
              <TouchableOpacity
                style={styles.filterButton}
                onPress={() => {

                  bottomSheetRef.current.snapToIndex(0);
                }}
              >
                <SvgIcon name={"map"} />
                <Typography size={16} lineHeight={24} color={Colours.white} style={{ marginLeft: 8 }}>
                  Map
                </Typography>
              </TouchableOpacity>
             
            </View>)}

            <MapView
              ref={mapRef}
              style={styles.map}
              initialRegion={{
                latitude: 21.694025,
                longitude: 39.103656,
                latitudeDelta: 10,
                longitudeDelta: 10,
              }}
            >
              {filteredProperties.map(property => (
                <Marker
                  key={property.id}
                  coordinate={{
                    latitude: property.coordinates.latitude,
                    longitude: property.coordinates.longitude,
                  }}
                  onPress={() => setSelectedHotel(property)}
                >
                  <View style={styles.markerContainer}>
                    <View style={styles.priceLabel}>
                      <Typography color={Colours.black}>
                        {property.price.discounted} {property.price.currency}
                      </Typography>
                    </View>
                    <SvgIcon name={"Marker"} style={styles.markerIcon} />
                  </View>
                </Marker>
              ))}
            </MapView>

            <BottomSheet
              snapPoints={snapPoints}
              ref={bottomSheetRef}
              index={1}
              enablePanDownToClose={false}
              enableOverDrag={false}
              onChange={handleSheetChange}
            >
                <BottomSheetContainer
                  data={filteredProperties}
                  handlePropertyLiked={handlePropertyLiked}
                  likedProperty={likedProperty} />
            </BottomSheet>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </GestureHandlerRootView>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#ccc",
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  markerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    backgroundColor: '#fff',
    position: "absolute",
    top: 0,
    width: "100%",


  },
  priceLabel: {
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  markerIcon: {
    // Add marker icon styles here
  },
  bottomSheetContent: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  mapFilterView: {
    backgroundColor: Colours.black,
    zIndex: 100,
    flexDirection: "row",
    bottom: "5%",
    height: 40,
    paddingHorizontal: 14,
    alignItems: 'center',
    borderRadius: 60,
    justifyContent: 'space-between',
    position: "absolute",

  },
  filterButton: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 14,
  },
  divider: {
    borderWidth: 1,
    borderColor: Colours.white,
    height: "100%",
  },
});
