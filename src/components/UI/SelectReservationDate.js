import { StyleSheet, Text, View, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { CalendarList } from 'react-native-calendars';
import { Typography } from '../Typography';
import { Fonts } from '../../../assets/fonts/fonts';
import moment from 'moment';
import SvgIcon from '../SvgIcon';
import Colours from '../../constants/Colours';


const SelectReservationDate = ({
  getSelectedDatesText,
  chooseReservationTime,
  selectedKey,
  handleDateSelect,
  selectedDate,
  selectedTimeSlot,
  setSelectedKey,
  setSelectedDate,
  setSelectedDates,
  setSelectedTimeSlot,
  selectedDestination,
  selectedProperties,
  goToPrevious,
  selectedDates
}) => {

  useEffect(() => {

    if (!selectedKey) {
      setSelectedKey('6 hours');
    }
  }, []);

  const doesTimeCrossMidnight = (timeSlot) => {
    const times = timeSlot.split(' - ');
    const startTime = moment(times[0], ['HH:mm A']);
    const endTime = moment(times[1], ['HH:mm A']);
    return endTime.isBefore(startTime);
  };

  return (
    <ScrollView style={styles.container}>
      <View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={{ marginTop: 10, marginHorizontal: 25 }} onPress={goToPrevious}>
            <SvgIcon name={"back"} color={Colours.black} />
          </TouchableOpacity>
          <View>

            <Typography
              size={18}
              lineHeight={27}
              color={Colours.homeTabColor}
              style={{ fontFamily: Fonts.PoppinsBold }}
            >
              Choose reservation date
            </Typography>
            {selectedDestination &&
              <Typography size={14} lineHeight={21} color={Colours.homeTabColor} style={styles.selectedDatesText}>
                {selectedDestination}{"\n"}
              </Typography>
            
            }
            {selectedProperties &&
              <Typography size={14} lineHeight={21} color={Colours.homeTabColor}>
                {selectedProperties}{"\n"}
              </Typography>
            }
            <Typography size={14} lineHeight={21} color={Colours.homeTabColor}>
              {getSelectedDatesText()}
            </Typography>
          </View>
        </View>
      </View>
      <View style={{ borderWidth: 1, borderColor: "#322E284D", marginBottom: 20 }} />

      <View style={styles.timeSlotContainer}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={Object.keys(chooseReservationTime)}
          // style={{justifyContent:"space-between"}}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.timeSlotButton,
                selectedKey === item && styles.selectedTimeSlot
              ]}
              onPress={() => {
                  setSelectedKey(item);
                setSelectedDate('');
                setSelectedDates({});
                setSelectedTimeSlot('');
              }}
            >
              <Typography size={14} lineHeight={40} color={ selectedKey === item ? Colours.white : Colours.homeTabColor}>{item}</Typography>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={chooseReservationTime[selectedKey] || chooseReservationTime["6 hours"]}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.timeSlots,
                selectedTimeSlot === item && styles.selectedTimeSlot
              ]}
              onPress={() => setSelectedTimeSlot(item)}
            >
              <Typography lineHeight={30} size={11} color={ selectedTimeSlot === item? Colours.white :Colours.homeTabColor}>{item}</Typography>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

      <CalendarList
        onDayPress={handleDateSelect}
        pastScrollRange={0}
        futureScrollRange={12}
        scrollEnabled={true}
        showScrollIndicator={false}
        markedDates={selectedKey === 'Date' ? selectedDates : { [selectedDate]: { selected: true, selectedColor: Colours.oregon } }}
        theme={{
          selectedDayBackgroundColor: Colours.oregon,
          todayTextColor: Colours.oregon,
          arrowColor: Colours.oregon,
          textDayFontFamily: Fonts.PoppinsMedium,
          textDayFontSize: 13,
          textMonthFontFamily: Fonts.PoppinsBold,
          textMonthFontSize: 15,
        }}
        style={styles.calendar}
      />

      {/* <View style={styles.actions}>
        <TouchableOpacity style={styles.resetButton} onPress={() => {
          setSelectedDate('');
          setSelectedDates({});
          setSelectedTimeSlot('');
        }}>
          <Typography size={18} lineHeight={27}>Reset</Typography>
        </TouchableOpacity>
        <TouchableOpacity style={styles.continueButton}>
          <Typography style={styles.continueText} size={18} lineHeight={27}>Continue</Typography>
        </TouchableOpacity>
      </View> */}
    </ScrollView>
  );
};

export default SelectReservationDate;

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    alignContent: 'center',
    height: "90%"
  },
  timeSlotContainer: {
    backgroundColor: Colours.borderColor,
    borderRadius: 30,
 justifyContent:"space-between"
  
  },
  timeSlots: {
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#000000',
    margin: 5,
    paddingHorizontal: 10,
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 3,
    backgroundColor: Colours.white,
  },
  timeSlotButton: {
    borderRadius: 30,
    margin: 5,
    paddingHorizontal: 10,
  },
  selectedTimeSlot: {
    backgroundColor: Colours.oregon,
    color:Colours.white
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  resetButton: {
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colours.oregon,
  },
  continueButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: Colours.oregon,
  },
  continueText: {
    color: '#fff',
  },
  selectedDatesText: {
   
    
   
  },
  calendar: {
    height: 300,
    width: '100%',
  },
});
