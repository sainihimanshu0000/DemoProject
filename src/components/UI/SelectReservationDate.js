import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import { CalendarList } from 'react-native-calendars';
import { Typography } from '../Typography';
import { Fonts } from '../../../assets/fonts/fonts';
import moment from 'moment';

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
  selectedProperties
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
    <View style={styles.container}>
      <Typography
        size={18}
        lineHeight={27}
        color={"#322E28"}
        style={{ fontFamily: Fonts.PoppinsBold }}
      >
        Choose reservation date
      </Typography>

      <Typography style={styles.selectedDatesText}>
        {selectedDestination}{"\n"}
        {selectedProperties}{"\n"}
        {getSelectedDatesText()}
      </Typography>
      <View style={{borderWidth: 1, borderColor: "#322E284D" ,marginBottom:20}} />

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
              <Typography size={14} lineHeight={40}>{item}</Typography>
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
              <Typography lineHeight={30} size={11} style={styles.timeSlotText}>{item}</Typography>
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
        markedDates={selectedKey === 'Date' ? selectedDates : { [selectedDate]: { selected: true, selectedColor: '#F57224' } }}
        theme={{
          selectedDayBackgroundColor: '#F57224',
          todayTextColor: '#F57224',
          arrowColor: '#F57224',
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
    </View>
  );
};

export default SelectReservationDate;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignContent: 'center',
    height:"90%"
  },
  timeSlotContainer: {
    backgroundColor: '#F4F4F4',
    borderRadius: 30,
    width: '100%',
    justifyContent: 'space-evenly',
  },
  timeSlots: {
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#00000080',
    margin: 5,
    paddingHorizontal: 10,
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 3,
    backgroundColor: '#FFFFFF',
  },
  timeSlotButton: {
    borderRadius: 30,
    margin: 5,
    paddingHorizontal: 10,
  },
  selectedTimeSlot: {
    backgroundColor: '#F57224',
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
    borderColor: '#F57224',
  },
  continueButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#F57224',
  },
  continueText: {
    color: '#fff',
  },
  selectedDatesText: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 16,
    color: '#322E28',
    fontFamily: Fonts.PoppinsRegular,
  },
  calendar: {
    height: 300,
    width: '100%',
  },
});
