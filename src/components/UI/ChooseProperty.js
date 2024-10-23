import { StyleSheet, View, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';
import { Typography } from '../Typography';
import SvgIcon from '../SvgIcon';
import { Fonts } from '../../../assets/fonts/fonts';

const Data = [
  { title: "All", icon: "trips" },
  { title: "Villas & Apartments", icon: "villas" },
  { title: "Chalets & Resorts", icon: "Chalets" },
  { title: "Farms", icon: "Farms" },
  { title: "Camps", icon: "camps" },
];

const ChooseProperty = ({selectedProperties,setSelectedProperties,handlePropertySelection,selectedDestination}) => {
  // const [selectedProperties, setSelectedProperties] = useState([]);

  // const handlePropertySelection = (item) => {
  //   if (item.title === "All") {
  //     if (selectedProperties.includes("All")) {
  //       setSelectedProperties([]); // Deselect all
  //     } else {
  //       setSelectedProperties(Data.map(property => property.title)); // Select all
  //     }
  //   } else {
  //     const updatedProperties = selectedProperties.includes(item.title)
  //       ? selectedProperties.filter(property => property !== item.title)  // Deselect if already selected
  //       : [...selectedProperties, item.title];  // Select if not selected

  //     if (updatedProperties.length === Data.length - 1) {
  //       setSelectedProperties(Data.map(property => property.title)); // Select all
  //     } else {
  //       setSelectedProperties(updatedProperties.filter(property => property !== "All")); // Ensure "All" is not selected
  //     }
  //   }
  // };

  const handleModal = () => {};

  const renderPropertyItem = ({ item }) => {
    const isSelected = selectedProperties.includes(item.title);
    return (
      <TouchableOpacity onPress={() => handlePropertySelection(item)}>
        <View style={{ flexDirection: "row", marginBottom: 20, justifyContent: "space-between" }}>
          <View style={[
            styles.section, 
            item.icon === "trips" && { backgroundColor: "#DA4726" }
          ]}>
            <SvgIcon name={item.icon} />
          </View>
          <Typography
            size={14}
            color={isSelected ? "#000" : "#322E28"}
            style={{ fontFamily: Fonts.PoppinsRegular, marginTop: 8, textAlign: 'left', flex: 1 }}
          >
            {item.title}
          </Typography>
          {isSelected && (
            <View style={styles.iconRightContainer}>
              <SvgIcon name={"rightClick"} style={styles.iconRight} />
            </View>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleModal}>
        <Typography
          size={18}
          lineHeight={27}
          color={"#322E28"}
          style={{ fontFamily: Fonts.PoppinsBold, textAlign: 'left' }}
        >
          Choose property type
        </Typography>
      </TouchableOpacity>
     

      <Typography size={14} lineHeight={21} color={"#322E28"} style={{ marginVertical: 10, textAlign: 'left' , paddingBottom:20}}>
        {selectedDestination} -{"\n"}
         {selectedProperties.length > 0 ? selectedProperties.join(', ') : "Select properties"}
      </Typography>
      <View style={{borderWidth: 1, borderColor: "#322E284D"}} />

      <FlatList
        data={Data}
        renderItem={renderPropertyItem}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default ChooseProperty;

const styles = StyleSheet.create({
  container: {
    // marginTop: 120,
    // padding: 30,
    // borderTopRightRadius: 20,
    // borderTopLeftRadius: 20,
    // backgroundColor: "#ddd",
    // height: "100%",
    // width: "100%",
  },
  section: {
    borderWidth: 1,
    borderColor: "#322E28",
    borderRadius: 30,
    height: 61,
    width: 61,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  selectedSection: {
    backgroundColor: "#322E28",
    borderColor: "#000",
  },
  listContainer: {
   
    paddingVertical: 10,
    
  },
  iconRightContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconRight: {
    marginLeft: 10,
    alignSelf: 'center',
  },
});
