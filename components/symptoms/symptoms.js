import React from "react";
import { StyleSheet, Dimensions, View, Image } from "react-native";
import symptomsImage from "./symptomsImage.jpg";

export default class SymptomsPDF extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={symptomsImage}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
    borderRadius: 5
  },
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    color: "black",
    height: "100%"
  },
  containerCenter: {
    flex: 1,
    backgroundColor: "black",
    color: "#fff",
    height: "100%"
  },
  tab: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: "#fff",
    color: "#fff"
  },
  image: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  }
});
