import React, { useRef, useMemo } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import BottomSheet, { BottomSheetScrollView,BottomSheetFlatList } from '@gorhom/bottom-sheet';

const MyComponent = () => {
  // ref for the bottom sheet
  const bottomSheetRef = useRef(null);

  // Data for FlatLists
  const horizontalData = useMemo(() => Array(5).fill(0).map((_, index) => `Group ${index + 1}`), []);
  const verticalData = useMemo(() => Array(10).fill(0).map((_, index) => `Item ${index + 1}`), []);

  // bottom sheet snap points
  const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);

  // Render function for the horizontal FlatList items
  const renderHorizontalItem = ({ item }) => (
    <View style={styles.horizontalItem}>
      <Text style={styles.horizontalText}>{item}</Text>
      
      {/* Nested Vertical FlatList */}
      <FlatList
        data={verticalData}
        keyExtractor={(item, index) => `vertical-${index}`}
        renderItem={renderVerticalItem}
        // horizontal={true}
        style={styles.verticalList}
        scrollEnabled={false}  // Disable scrolling on the vertical list to allow the horizontal one to handle the scroll
      />
    </View>
  );

  // Render function for the vertical FlatList items
  const renderVerticalItem = ({ item }) => (
    <View style={styles.verticalItem}>
      <Text>{item}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
      > */}
        {/* Horizontal FlatList */}
        <BottomSheetScrollView>

        <BottomSheetFlatList
          data={horizontalData}
            // horizontal={true}
          keyExtractor={(item, index) => `horizontal-${index}`}
          renderItem={renderHorizontalItem}
          style={styles.horizontalList}
          showsHorizontalScrollIndicator={false}
          />
          </BottomSheetScrollView>
      {/* </BottomSheet> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  horizontalList: {
    marginBottom: 16,
  },
  horizontalItem: {
    backgroundColor: '#f9c2ff',
    padding: 16,
    marginHorizontal: 8,
    borderRadius: 8,
    width: 150, // Set width for horizontal items to control layout
  },
  horizontalText: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  verticalList: {
    marginTop: 8,
  },
  verticalItem: {
    backgroundColor: '#c2e9fb',
    padding: 8,
    marginVertical: 4,
    borderRadius: 4,
  },
});

export default MyComponent;
