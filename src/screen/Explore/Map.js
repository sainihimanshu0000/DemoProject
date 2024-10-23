import { StyleSheet, View, Dimensions, ScrollView, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, StatusBar, Modal, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import BottomSheet, { BottomSheetView, BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { useMemo, useState, useEffect, useRef, useCallback } from 'react';
import { properties } from '../../constants/PropertyData';
import { Typography } from '../../components/Typography';
import SvgIcon from '../../components/SvgIcon';
import SearchBox from '../../components/SearchBox';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';
import PropertyCard from '../../components/UI/Property';
import { setLikedProperty } from '../../redux/action';
import BottomSheetContainer from '../../components/BottomSheetContainer';
import ChooseDestination from '../../components/UI/ChooseDestination';
import ChooseProperty from '../../components/UI/ChooseProperty';
import FilterDestination from '../../components/FilterDestination';
const { height } = Dimensions.get("window");

const Map = () => {
  const snapPoints = useMemo(() => ["20%", "85.6%"], []);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [visibleModal, setVisibleModal] = useState(false)
  const mapRef = useRef(null);
  const bottomSheetRef = useRef(null);
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState(0);
  const { priceRange, selectedBedrooms, selectedBathrooms, selectedAmenities, likedProperty } = useSelector(state => state.filter);

  const [selectedDestination, setSelectedDestination] = useState();
  const [selectedProperties, setSelectedProperties] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedDates, setSelectedDates] = useState({});
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [selectedKey, setSelectedKey] = useState('');
  // const [currentIndex, setCurrentIndex] = useState(0); // For controlling component display
  const [guestCounts, setGuestCounts] = useState([
    { category: 'Adults', age: 'Ages 13+', count: 0 },
    { category: 'Children', age: 'Age 2-12', count: 0 },
    { category: 'Infants', age: 'Under 2', count: 0 },
    { category: 'Pets', age: 'Bringing a service animal?', count: 0 }
  ]);



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
  };const filterProperties = () => {
    const results = properties.filter((property) => {
      const discountedPrice = property.price.discounted;
  
      // Check price range
      const isPriceInRange = discountedPrice >= priceRange[0] && discountedPrice <= priceRange[1];
  
      // Check bedrooms and bathrooms match
      const isBedroomsMatch = selectedBedrooms === 'Any' || property.attributes.bedrooms === selectedBedrooms;
      const isBathroomsMatch = selectedBathrooms === 'Any' || property.attributes.bathrooms === selectedBathrooms;
  
      // Check amenities match
      const isAmenitiesMatch = selectedAmenities.length === 0 || selectedAmenities.every((amenity) =>
        property.amenities.some((item) => item.toLowerCase() === amenity.toLowerCase())
      );
  
      // Check if the property matches the selected destination (using `location` or `title`)
      const isDestinationMatch = !selectedDestination || property.location === selectedDestination || property.title === selectedDestination;
      
      // // Check if the property is in the selected properties list (optional filter)
      const isSelectedPropertiesMatch = selectedProperties.length === 0 || selectedProperties.includes( property.type );
// console.log(' selectedProperties.includes( property.type )',  selectedProperties.includes( property.type ))
      // selectedProperties.includes(console.log(item))
      // console.log("====",selectedProperties.includes((item)=>property.type===item))
      // console.log("-=-\/\/\/\\",selectedProperties)
  
      // // Check if the property matches the selected date or dates
      const isDateMatch = !selectedDate || 
        (new Date(property.availability.availableFrom) <= new Date(selectedDate) && 
         new Date(property.availability.availableTo) >= new Date(selectedDate));
      const isDatesMatch = !selectedDates || 
        Object.keys(selectedDates).every((key) =>
          (new Date(property.availability.availableFrom) <= new Date(selectedDates[key]) && 
           new Date(property.availability.availableTo) >= new Date(selectedDates[key]))
        );
  
      // // Check if the property matches the selected time slot (if applicable)
      // const isTimeSlotMatch = !selectedTimeSlot || (property.timeSlots && property.timeSlots.includes(selectedTimeSlot));
  
      // // Check if the property matches the selected key
      // const isKeyMatch = !selectedKey || property.key === selectedKey;
  
      return isPriceInRange &&
        isBedroomsMatch &&
        isBathroomsMatch &&
        isAmenitiesMatch &&
        isDestinationMatch &&
        isSelectedPropertiesMatch &&
         isDateMatch ;
        // isDatesMatch ||
        // isTimeSlotMatch ||
        // isKeyMatch;
    });
  
    setFilteredProperties(results);
    console.log(results)
  };
  
  // Trigger filter when any relevant state changes
  useEffect(() => {
    filterProperties();
  }, [
    priceRange,
    selectedBedrooms,
    selectedBathrooms,
    selectedAmenities,
    selectedDestination,
    selectedProperties,
    selectedDate,
    selectedDates,
    selectedTimeSlot,
    selectedKey,
  ]);
  
  const handleModal = () => {
    setVisibleModal(!visibleModal)
  }
  const handleSheetChange = useCallback((index) => {
    setCurrentIndex(index);  // Update the current index
    console.log('Current Index:', index);
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* <StatusBar  animated={true}
         backgroundColor="transparent"
         barStyle={"dark-content"}
         translucent={true}/> */}
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <View style={styles.header}>
              <SearchBox
                svgLeftName="search"
                svgRightName="filter"
                placeholder="Where to?"
                onSearchInputChange={() => { }}
                onPress={() => { handleModal() }}
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
                <Typography size={16} lineHeight={24} color={"#FFFFFF"} style={{ marginLeft: 8 }}>
                  Map
                </Typography>
              </TouchableOpacity>
              {/* <View style={styles.divider} />
              <TouchableOpacity style={styles.filterButton}>
                <SvgIcon name={"filter2"} />
                <Typography size={16} lineHeight={24} color={"#FFFFFF"} style={{ marginLeft: 8 }}>
                  Filter
                </Typography>
              </TouchableOpacity> */}
            </View>)}

            {/* <View style={styles.mapFilterView}>
              <TouchableOpacity
                style={styles.filterButton}
                onPress={() => {

                  bottomSheetRef.current.snapToIndex(0);
                }}
              >
                <SvgIcon name={"map"} />
                <Typography size={16} lineHeight={24} color={"#FFFFFF"} style={{ marginLeft: 8 }}>
                  Map
                </Typography>
              </TouchableOpacity>
              <View style={styles.divider} />
              <TouchableOpacity style={styles.filterButton}>
                <SvgIcon name={"filter2"} />
                <Typography size={16} lineHeight={24} color={"#FFFFFF"} style={{ marginLeft: 8 }}>
                  Filter
                </Typography>
              </TouchableOpacity>
            </View> */}



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
                      <Typography color={"#000"}>
                        {property.price.discounted} {property.price.currency}
                      </Typography>
                    </View>
                    <SvgIcon name={"Marker"} style={styles.markerIcon} />
                  </View>
                </Marker>
              ))}
            </MapView>

            <BottomSheet
              ref={bottomSheetRef}
              index={0}
              //  snapPoints={[
              //    height * 0.55,

              //    properties.length==2 ? height * 0.55: 
              //     properties.length==3 ?height * 0.6 : 
              //     properties.length==4 ?height * 0.8: height * 0.8,
              //  ]}
              snapPoints={snapPoints}
              activeOffsetX={[-999, 999]}
              activeOffsetY={[-5, 5]}
              failOffsetX={[-5, 5]}
              animateOnMount={true}
              // handleComponent={() => null}
              style={{
                zIndex: 1,
                borderTopLeftRadius: 44,
                borderTopRightRadius: 44,
              }}
              onChange={handleSheetChange}
            >
              {/* 
<PropertyCard
                        data={filteredProperties}
                        handlePropertyLiked={handlePropertyLiked}
                        likedProperty={likedProperty}
                    /> */}

              <BottomSheetContainer
                data={filteredProperties}
                handlePropertyLiked={handlePropertyLiked}
                likedProperty={likedProperty} />

              <Modal
                visible={visibleModal}
                transparent={true}
                animationType='slide'
              >
                {/* <ChooseDestination handleModal={() => handleModal()} /> */}
                {/* <ChooseProperty /> */}
                <FilterDestination
                  handleModal={handleModal}
                  selectedDestination={selectedDestination}
                  setSelectedDestination={setSelectedDestination}
                  selectedProperties={selectedProperties}
                  setSelectedProperties={setSelectedProperties}
                  selectedDate={selectedDate}
                  setSelectedDate={setSelectedDate}
                  selectedDates={selectedDates}
                  setSelectedDates={setSelectedDates}
                  selectedTimeSlot={selectedTimeSlot}
                  setSelectedTimeSlot={setSelectedTimeSlot}
                  selectedKey={selectedKey}
                  setSelectedKey={setSelectedKey}
                  guestCounts={guestCounts}
                  setGuestCounts={setGuestCounts}
                />
              </Modal>

              {/* <MyComponent/> */}
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
    // padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    // backgroundColor: '#fff',
    position: "absolute",
    top: 0,
    // width: "100%",

    marginTop: 10,
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
    backgroundColor: "#000",
    zIndex: 100,
    flexDirection: "row",
    bottom: "15%",
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
    borderColor: "#fff",
    height: "100%",
  },
});
