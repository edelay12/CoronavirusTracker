import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Card, CardItem, Text, Body } from "native-base";

export default function CountryItem({ name, cases, newCases, country }) {
  return (
    <TouchableOpacity onPress={country}>
      <Card style={styles.container}>
        <CardItem header bordered>
          <Text style={styles.h1}>{name}</Text>
        </CardItem>
        <CardItem>
          <Body style={styles.body}>
            <Text>Total Cases: {cases}</Text>
            <Text>New Cases: {newCases}</Text>
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
  body: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    color: "black",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  },
  h1: {
    fontSize: 18,
    color: "black"
  },
  title: {
    width: "100%",
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
