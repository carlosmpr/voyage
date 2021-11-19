import React from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import image from "../../assets/space.png";
import earth from "../../assets/earth.png";
import mars from "../../assets/mars.png";
import jup from "../../assets/jup.png";
import HorizontalScrollView from "../components/HorizontalScrollView";
import Planets from "../components/Planets";
import Spacer from "../components/Spacer";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const data = [
  { image: earth, title: "EARTH", desc: "THE LIVING PLANET" },

  { image: mars, title: "MARS", desc: "THE RED PLANET" },

  { image: jup, title: "JUPITER", desc: "THE GIANT PLANET" },
];
const PlanetExploreScreen = () => {
  return (
    <View style={styles.main}>
      <Image source={image} style={styles.image} />
      <View style={styles.content}>
        <Spacer space={30} />
        <Text style={styles.title}>Planets</Text>
        <Text style={{ color: "white", fontSize: 30 }}>
          Which planet would you like to explore?
        </Text>
        <HorizontalScrollView>
    {data.map(item => <Planets {...item} />)}
        </HorizontalScrollView>
      </View>
    </View>
  );
};

export default PlanetExploreScreen;

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
