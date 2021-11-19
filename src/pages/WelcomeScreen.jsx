import React from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import image from "../../assets/mainScreen.png";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const WelcomeScreen = () => {
  return (
    <View style={styles.main}>
      <Image source={image} style={styles.image} />
      <View style={{padding:25}}>
      <Text style={styles.title}>Voyage</Text>
    <Text style={{color:'white'}}>Which planet
would you like to explore?</Text>

</View>
<View style={styles.button}>
        <Text style={styles.textButton}>Explore</Text>
      </View>
    
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  main: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: "red",
    position: "relative",

    justifyContent: "center",
  },
  image: { width: "100%", height: "100%", position: "absolute" },
  title: { color: "white", fontSize: 80, fontWeight: "bold" },
  button: {
     marginLeft:20,
      width:200,
    padding: 5,
    backgroundColor:'rgba(255, 255, 255, 0.08)',
   
    alignItems:'center'
  },
  textButton: {
     
    color: "white",
    fontSize: 18,
    textShadowColor: "rgba(0, 0, 0,1)",
    textShadowOffset: { width: -5, height: 1 },
    textShadowRadius: 10,

    fontWeight: "700",
  },
});
