import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";
import * as Haptics from "expo-haptics";

import img1 from "../assets/images/1.png";
import img2 from "../assets/images/2.png";
import img3 from "../assets/images/3.png";
import img4 from "../assets/images/4.png";
import img5 from "../assets/images/5.png";
import img6 from "../assets/images/6.png";
import ludoimg from "../assets/images/ludoimg.jpg";

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  btn: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: "#f44444", // Fallback color
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    elevation: 5, // For shadow on Android
    shadowColor: "#000", // For shadow on iOS
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    overflow: "hidden", // For rounded gradient edges
  },
  btntext: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    letterSpacing: 1,
    textTransform: "uppercase", // Makes the text uppercase
  },

  imgContain: {
    width: 120,
    height: 120,
  },
  img: {
    width: "100%",
    height: "100%",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // Ensures the image covers the entire background
  },
  headtext: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 32,
    fontStyle: "italic",
    textDecorationLine: "underline", // This underlines the text
    letterSpacing: 1,
    textTransform: "uppercase",
    textAlign: "center",
    marginTop: 20,
  },
  headContainer: {
    alignItems: "center",
    marginTop: 20,
    borderBottomColor: "#fff",
    borderBottomWidth: 4, // Thickness of the bottom border
    paddingBottom: 5, // Space between text and border
    marginHorizontal: 32,
  },
});

const App = () => {
  const [selectedImg, setSelectedImg] = useState(img1);

  const changeImg = () => {
    const suffleno = Math.floor(Math.random() * 6);

    switch (suffleno) {
      case 0:
        setSelectedImg(img1);
        break;
      case 1:
        setSelectedImg(img2);
        break;
      case 2:
        setSelectedImg(img3);
        break;
      case 3:
        setSelectedImg(img4);
        break;
      case 4:
        setSelectedImg(img5);
        break;
      case 5:
        setSelectedImg(img6);
        break;
      default:
        setSelectedImg(img1);
    }

    // Trigger haptic feedback
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  return (
    <ImageBackground source={ludoimg} style={styles.backgroundImage}>
      <View style={styles.headContainer}>
        <Text style={styles.headtext}>Ludo Suffle App</Text>
      </View>

      <View style={styles.container}>
        <View style={styles.imgContain}>
          <Image style={styles.img} source={selectedImg} />
        </View>
        <View>
          <Pressable style={[styles.btn]} onPress={changeImg}>
            <Text style={[styles.btntext]}>Change</Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
};

export default App;
