import React from "react";
import { StyleSheet, Text, View, Dimensions, Image, SafeAreaView, ScrollView } from "react-native";
import image from '../../assets/infoearth.png'

import Spacer from "../components/Spacer";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;


const DetailScreen = () => {
  return (
    <View style={styles.main}>
      <Image source={image} style={styles.image} />
      <View style={styles.content}>
        <Spacer space={30} />
        <Text style={styles.title}>Earth</Text>
        <Text style={{ color: "white", fontSize: 30 }}>
          The Living Planet
        </Text>

        <Text style={{color:'white'}}>While Earth is only the fifth largest planet in the solar system, it is the only world in our solar system with liquid water  “on the surface”.  Just slightly larger than nearby Venus, Earth is the biggest of the four planets closest to the Sun, all of which are made of rock and metal.</Text>
<Spacer space={20}/>
        <Text style={{color:'white'}}>The name Earth is at least 1,000 years old.  All of the planets, except for Earth, were named after Greek and Roman gods and goddesses. However, the name Earth is a Germanic word, which simply means “the ground.”</Text>
     
        <Spacer space={20}/>
        <Text style={{color:'white'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</Text>

        <Spacer space={20}/>
        <Text style={{color:'white'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</Text>
      </View>
    </View>
  );
};

export default DetailScreen;
//////
const styles = StyleSheet.create({
  main: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: "red",
    position: "relative",
  },

  content: {
    padding: 20,
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  image: { width: "100%", height: "100%", position: "absolute" },
  title: { color: "white", fontSize: 35, fontWeight: "bold" },
});
