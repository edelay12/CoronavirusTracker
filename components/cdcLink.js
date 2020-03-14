import React from "react";
import { StyleSheet, Image, TouchableOpacity, Linking } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Title
} from "native-base";

export default function CDCLink({ text, link }) {
  handleLink = () => {
    Linking.canOpenURL(link).then(supported => {
      if (supported) {
        Linking.openURL(link);
      } else {
        alert("Cant open URI: " + link);
      }
    });
  };
  return (
    <TouchableOpacity onPress={handleLink}>
      <Card style={styles.card}>
        <CardItem>
          <Text style={styles.h1}>{text}</Text>
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
  body: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  h1: {
    fontSize: 22,
    color: "black"
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
