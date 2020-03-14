import React from "react";
import { StyleSheet, TouchableOpacity, Linking } from "react-native";
import { Card, CardItem, Text, Body } from "native-base";

export default function InfoItem({ title, link, date }) {
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
        <CardItem header bordered>
          <Text style={styles.h1}>{title}</Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text style={styles.sub}>{date}</Text>
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
  h1: {
    fontSize: 22,
    color: "black"
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
