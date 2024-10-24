import { StyleSheet, View, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';
import { Typography } from '../Typography';
import SvgIcon from '../SvgIcon';
import { Fonts } from '../../../assets/fonts/fonts';
import Colours from '../../constants/Colours';


const Data = [
  { title: "All", icon: "trips" },
  { title: "Villas & Apartments", icon: "villas" },
  { title: "Chalets & Resorts", icon: "Chalets" },
  { title: "Farms", icon: "Farms" },
  { title: "Camps", icon: "camps" },
];

const ChooseProperty = ({selectedProperties,setSelectedProperties,handlePropertySelection,selectedDestination,goToPrevious}) => {
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
            item.icon === "trips" && { backgroundColor: Colours.oregon }
          ]}>
            <SvgIcon name={item.icon} />
          </View>
          <Typography
            size={14}
            color={isSelected ? Colours.black : Colours.inputBorder}
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
      <View style={{flexDirection:"row"}}>
         <TouchableOpacity style={{  marginTop: 10, marginHorizontal: 25 }} onPress={goToPrevious}>
                    <SvgIcon name={"back"}  />
                </TouchableOpacity>

        <View>
      <TouchableOpacity onPress={handleModal}>

        <Typography
          size={18}
          lineHeight={27}
          color={Colours.inputBorder}
          style={{ fontFamily: Fonts.PoppinsBold, textAlign: 'left' }}
          >
          Choose property type
        </Typography>
      </TouchableOpacity>
     

      <Typography size={14} lineHeight={21} color={Colours.inputBorder} style={{ marginVertical: 10, textAlign: 'left' , paddingBottom:20}}>
        {selectedDestination} -{"\n"}
         {selectedProperties.length > 0 ? selectedProperties.join(', ') : "Select properties"}
      </Typography>
          </View>
            </View>
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
    borderColor: Colours.inputBorder,
    borderRadius: 30,
    height: 61,
    width: 61,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  selectedSection: {
    backgroundColor: Colours.inputBorder,
    borderColor: Colours.black,
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
