import React from "react";
import { StyleSheet, Image, Linking, TouchableOpacity } from "react-native";
import { Card, CardItem, Text, Body } from "native-base";

export default function Item({ title, description, image, link }) {
  handlePress = () => {
    Linking.canOpenURL(link).then(supported => {
      if (supported) {
        Linking.openURL(link);
      } else {
        alert("Cant open URI: " + link);
      }
    });
  };

  return (
    <TouchableOpacity onPress={this.handlePress}>
      <Card style={styles.card}>
        <CardItem header>
          <Image
            style={{ width: "100%", height: 300 }}
            source={{ uri: image }}
          />
        </CardItem>
        <CardItem header>
          <Text>{title}</Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{description}</Text>
          </Body>
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
    borderRadius: 5
  },
  container: {
    flex: 1,
    width: "95%",
    backgroundColor: "#fff",
    color: "black",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  },
  title: {
    textAlign: "center"
  },
  discription: {},
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
  }
});
