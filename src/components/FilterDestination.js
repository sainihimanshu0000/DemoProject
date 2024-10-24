import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import ChooseDestination from './UI/ChooseDestination';
import ChooseProperty from './UI/ChooseProperty';
import SelectReservationDate from './UI/SelectReservationDate';
import SelectNoOfGuests from './UI/SelectNoOfGuests';
import { Typography } from './Typography';
import Animated, { SlideInLeft, SlideOutRight, Layout } from 'react-native-reanimated';
import SvgIcon from './SvgIcon';
import Colours from '../constants/Colours';


const FilterDestination = ({
  handleModal,
  selectedDestination,
  setSelectedDestination,
  selectedProperties,
  setSelectedProperties,
  selectedDate,
  setSelectedDate,
  selectedDates,
  setSelectedDates,
  selectedTimeSlot,
  setSelectedTimeSlot,
  selectedKey,
  setSelectedKey,
  guestCounts,
  setGuestCounts
}) => {
  // const [selectedDestination, setSelectedDestination] = useState();
  // const [selectedProperties, setSelectedProperties] = useState([]);
  // const [selectedDate, setSelectedDate] = useState('');
  // const [selectedDates, setSelectedDates] = useState({});
  // const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  // const [selectedKey, setSelectedKey] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0); // For controlling component display
  // const [guestCounts, setGuestCounts] = useState([
  //   { category: 'Adults', age: 'Ages 13+', count: 0 },
  //   { category: 'Children', age: 'Age 2-12', count: 0 },
  //   { category: 'Infants', age: 'Under 2', count: 0 },
  //   { category: 'Pets', age: 'Bringing a service animal?', count: 0 }
  // ]);

  const Data = [
    { title: "All", icon: "trips" },
    { title: "Villas & Apartments", icon: "villas" },
    { title: "Chalets & Resorts", icon: "Chalets" },
    { title: "Farms", icon: "Farms" },
    { title: "Camps", icon: "camps" },
  ];

  const chooseReservationTime = {
    "6 hours": [
      "13:00 PM - 19:00 PM",
      "21:00 PM - 03:00 AM",
      "05:00 AM - 11:00 AM"
    ],
    "10 hours": [
      "09:00 AM - 19:00 PM",
      "14:00 PM - 00:00 AM",
      "18:00 PM - 04:00 AM"
    ],
    "Date": [
      "2024-10-18",
      "2024-10-19",
      "2024-10-20",
      "2024-10-21",
      "2024-10-22"
    ]
  };

  // Function to increment guest count
  const increment = (index) => {
    const newCounts = [...guestCounts];
    newCounts[index].count += 1;
    setGuestCounts(newCounts);
  };

  // Function to decrement guest count
  const decrement = (index) => {
    const newCounts = [...guestCounts];
    if (newCounts[index].count > 0) {
      newCounts[index].count -= 1;
    }
    setGuestCounts(newCounts);
  };

  const handleDateSelect = (day) => {
    if (selectedKey === 'Date') {
      const dates = { ...selectedDates };
      if (dates[day.dateString]) {
        delete dates[day.dateString];
      } else {
        dates[day.dateString] = { selected: true, selectedColor: Colours.oregon };
      }
      setSelectedDates(dates);
    } else {
      setSelectedDate(day.dateString);
    }
  };

  const key = Object.keys(chooseReservationTime);


  const goToNext = () => {
    if (currentIndex < 3) {
      setCurrentIndex(currentIndex + 1);
    }
    else { handleModal() }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  return (
    <View style={styles.container}>
      <View style={{justifyContent:"flex-end", flexDirection:"row"}}>

      <TouchableOpacity style={styles.closeIcon} onPress={handleModal}>
        <SvgIcon name={"close"}/>
      </TouchableOpacity>
      </View>
      <View style={{ flex: 0.99 }}>
        <Animated.View
          entering={SlideInLeft}
          exiting={SlideOutRight}
          layout={Layout}
          style={styles.contentContainer}
        >

          {currentIndex === 0 && (
            <ChooseDestination
              setSelectedDestination={setSelectedDestination}
              selectedDestination={selectedDestination}
              goToPrevious={goToPrevious}
              handleDestination={(item) => {
                // const newDestination = selectedDestination.includes(item.location)
                //   ? selectedDestination.filter(destination => destination !== item.location)
                //   : [...selectedDestination, item.location];
                setSelectedDestination(item.location);
                goToNext()
              }}
            />
          )}
          {currentIndex === 1 && (
            <ChooseProperty
              selectedDestination={selectedDestination}
              setSelectedProperties={setSelectedProperties}
              selectedProperties={selectedProperties}
              goToPrevious={goToPrevious}
              handlePropertySelection={(item) => {
                if (item.title === "All") {
                  if (selectedProperties.includes("All")) {
                    setSelectedProperties([]); // Deselect all
                  } else {
                    setSelectedProperties(Data.map(property => property.title));
                  }
                } else {
                  const updatedProperties = selectedProperties.includes(item.title)
                    ? selectedProperties.filter(property => property !== item.title)
                    : [...selectedProperties, item.title];
                  setSelectedProperties(updatedProperties.filter(property => property !== "All"));
                }
              }}
              Data={Data}
            />
          )}
          {currentIndex === 2 && (
            <SelectReservationDate
              getSelectedDatesText={() => {
                if (selectedKey === 'Date') {
                  const dates = Object.keys(selectedDates);
                  return dates.length > 0 ? dates.join(', ') : 'No dates selected';
                }
                return selectedDate || 'No date selected';
              }}
              key={key}
              chooseReservationTime={chooseReservationTime}
              selectedKey={selectedKey}
              handleDateSelect={handleDateSelect}
              selectedDate={selectedDate}
              selectedTimeSlot={selectedTimeSlot}
              setSelectedTimeSlot={setSelectedTimeSlot}
              setSelectedKey={setSelectedKey}
              selectedDestination={selectedDestination}
              selectedProperties={selectedProperties}
              goToPrevious={goToPrevious}
              setSelectedDate={setSelectedDate}
            />
          )}
          {currentIndex === 3 && (
            <SelectNoOfGuests
              guestCounts={guestCounts}
              handleModal={handleModal}
              setGuestCounts={setGuestCounts}
              increment={increment}
              decrement={decrement}
              selectedDestination={selectedDestination}
              selectedProperties={selectedProperties}
              goToPrevious={goToPrevious}
              selectedDates={selectedDates}
              getSelectedDatesText={() => {
                if (selectedKey === 'Date') {
                  const dates = Object.keys(selectedDates);
                  return dates.length > 0 ? dates.join(', ') : 'No dates selected';
                }
                return selectedDate || 'No date selected';
              }}
            />
          )}
        </Animated.View>
      </View>

      <View style={styles.buttonContainer}>
        {currentIndex > 0 && (
          <TouchableOpacity onPress={goToPrevious} style={styles.resetButton}>
            <Typography size={18} lineHeight={27} style={{ borderRadius: 30 }} color={Colours.oregon}>Reset</Typography>
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={goToNext} style={styles.continueButton}>
          <Typography size={18} lineHeight={27} color={Colours.white}>Continue</Typography>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FilterDestination;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 120,
    padding: 10,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: '#fff',
    height: '85%',
    width: '100%',
  },
  closeIcon:{
    
    backgroundColor:Colours.oregon,
    width:25,
    height:25,
    borderRadius:20,
    justifyContent:"center",
    alignItems:"center",
    right:0
  },
  contentContainer: {
    flex: 1,
  },
  buttonContainer: {
backgroundColor:Colours.white,
    flexDirection: 'row',
    justifyContent: 'space-around',

  },
  resetButton: {
    padding: 15,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: Colours.oregon,
    width: "40%",
    alignItems: "center"
  },
  continueButton: {
    padding: 15,
    borderRadius: 50,
    backgroundColor: Colours.oregon,
    width: "40%",
    alignItems: "center",


  },
});
