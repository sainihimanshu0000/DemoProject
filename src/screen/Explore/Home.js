import { StyleSheet, View, TouchableOpacity, ScrollView, StatusBar, Modal, Text, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import SearchBox from '../../components/SearchBox';
import Swiper from '../../components/UI/Swiper';
import { SwiperData } from '../../constants/SwiperData';
import PropertyType from '../../components/UI/PropertyType';
import { PropertyTypeData } from '../../constants/PropertyTypeData';
import { Typography } from '../../components/Typography';
import { Fonts } from '../../../assets/fonts/fonts';
import CityProperty from '../../components/UI/CityProperty';
import { CityPropertyData } from '../../constants/cityPropertyData';
import PropertyCard from '../../components/UI/Property';
import { properties } from '../../constants/PropertyData';
import Filter from '../../components/Filter';
import { useSelector, useDispatch } from 'react-redux';
import { setLikedProperty } from '../../redux/action';
import { image } from '../../../assets/image/image';


const Home = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [modal, setModal] = useState(false);
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const dispatch = useDispatch()
  const {
    priceRange,
    selectedBedrooms,
    selectedBeds,
    selectedBathrooms,
    selectedAmenities,
    likedProperty,
  } = useSelector(state => state.filter);

  const handleSearchInputChange = (text) => {
    setSearchText(text);
  };

  const handleModalVisible = () => {
    setModal(!modal);
    if (!modal) {
      filterProperties();
    }
  };
  const handlePropertyLiked = (item) => {
    const newLikedProperty = likedProperty.includes(item.id)
      ? likedProperty.filter(like => like !== item.id)
      : [...likedProperty, item.id];
    console.log(newLikedProperty)


    dispatch(setLikedProperty(newLikedProperty))
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

  return (
    <ScrollView>
      <StatusBar barStyle={"dark-content"} translucent={false} backgroundColor={"#fff"} />
      <View style={styles.container}>
        <View style={styles.header}>
          <SearchBox
            svgLeftName="search"
            svgRightName="filter"
            placeholder="Where to?"
            onSearchInputChange={handleSearchInputChange}
            onPress={handleModalVisible}
          />
        </View>

        <Swiper data={SwiperData} />
        <PropertyType data={PropertyTypeData} />
        <View style={styles.topCitiesContainer}>
          <Typography size={20} lineHeight={30} color={"#000000"} style={{ fontFamily: Fonts.PoppinsBold }}>
            Top Cities
          </Typography>
          <View style={styles.citiesInfoContainer}>
            <Typography size={14} lineHeight={21} color={"#322E28"} style={{ fontFamily: Fonts.PoppinsRegular }}>
              More than 30K homes across 180 Saudi cities
            </Typography>
            <TouchableOpacity>
              <Typography size={14} lineHeight={21} color={"#DA4726"} fonts={400}>
                View all
              </Typography>
            </TouchableOpacity>
          </View>
        </View>
        <CityProperty data={CityPropertyData} />


        <View style={styles.topCitiesContainer}>
          <Typography size={20} lineHeight={30} color={"#000000"} style={{ fontFamily: Fonts.PoppinsBold }}>
            Trending Properties
          </Typography>
          <View style={styles.citiesInfoContainer}>
            <Typography size={14} lineHeight={21} color={"#322E28"} style={{ fontFamily: Fonts.PoppinsRegular }}>
              50,000 properties in more than 150 cities
            </Typography>
            <TouchableOpacity >
              <Typography size={14} lineHeight={21} color={"#DA4726"} fonts={400}>
                View all
              </Typography>
            </TouchableOpacity>
          </View>
        </View>
        <PropertyCard data={filteredProperties}
          handlePropertyLiked={handlePropertyLiked}
          likedProperty={likedProperty}
        />
        <Modal visible={modal} animationType='slide' transparent={false} >
          <ScrollView>
            <Filter onClose={handleModalVisible} navigation={navigation} />
          </ScrollView>
        </Modal>
        <TouchableOpacity style={styles.mapView} onPress={() => {
          navigation.navigate("Map")
        }}>
          <Typography color={"#DA4726"} size={18} lineHeight={27}>
            View All
          </Typography>
        </TouchableOpacity>
        <View style={styles.about}>
          <View style={styles.aboutTextContainer}>
            <Typography size={24} lineHeight={33} color={"#FFFFFF"} style={{ fontFamily: Fonts.PoppinsBold }}>
              Become a host
            </Typography>
            <Typography size={15} lineHeight={19} color={"#FFFFFF"}>
              Earn extra income and unlock new opportunities by sharing your space.
            </Typography>
            <TouchableOpacity style={styles.learnButton}>
              <Typography size={16} lineHeight={24} color={"#DA4726"} style={{ fontFamily: Fonts.PoppinsBold }}>
                Learn more
              </Typography>
            </TouchableOpacity>
          </View>
          <Image source={image.group} style={styles.imageContainer} />
        </View>

      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

    paddingBottom: 90,
  },
  header: {
    padding: 25,
  },
  topCitiesContainer: {
    marginVertical: 20,
    marginHorizontal: 10,
  },
  citiesInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  mapView: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 100,
    width: "90%",
    marginTop: 10,
    height: 65,
    borderWidth: 1,
    borderColor: "#DA4726"
  },
  about: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#DA4726",
    borderRadius: 20,
    marginHorizontal: 20,
    padding: 20,
    marginBottom: 20,
    marginTop: 20
  },
  aboutTextContainer: {
    flex: 1,
    paddingRight: 10,
  },
  learnButton: {
    backgroundColor: "#FFFFFF",
    height: 45,
    width: 133,
    borderRadius: 80,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
  },
  imageContainer: {
    height: 152,
    width: 152,
  },

});
