import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Spacer from "./Spacer";
import { AntDesign } from '@expo/vector-icons';
const Planets = ({ image, title, desc }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Image source={image} />
      <View style={styles.content}>
        <AntDesign name="caretleft" size={24} color="white" />
        <View style={styles.aligner}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{desc}</Text>
        </View>
        <AntDesign name="caretright" size={24} color="white" />
      </View>
      <Spacer space={50} />
      <View style={styles.button}>
        <Text style={styles.textButton}>Explore Planet</Text>
      </View>
    </View>
  );
};

export default Planets;

const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width:400
  },
  aligner: { alignItems: "center", marginTop: -80 },
  button: {
    marginLeft: 20,
    width: 200,
    padding: 15,
    backgroundColor: "rgba(255, 255, 255, 0.25)",

    alignItems: "center",
  },
  title: { color: "white", fontSize: 50 },
  description: { color: "white", fontSize: 20 },
  textButton: {
    color: "white",
    fontSize: 18,
    textShadowColor: "rgba(0, 0, 0,1)",
    textShadowOffset: { width: -5, height: 1 },
    textShadowRadius: 10,

    fontWeight: "700",
  },
});
