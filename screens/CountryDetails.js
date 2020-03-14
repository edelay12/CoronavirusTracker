import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Card, CardItem, Text, Body } from "native-base";

export default function CountryDetails({ route }) {
  const { country } = route.params;
  return (
    <TouchableOpacity>
      <Card style={styles.card}>
        <CardItem>
          <Body style={styles.body}>
            <Text style={styles.title}>Cases: {country.cases}</Text>
            <Text style={styles.title}>Deaths: {country.deaths}</Text>
            <Text style={styles.title}>Region: {country.region}</Text>
            <Text style={styles.title}>
              Recovered: {country.total_recovered}
            </Text>
            <Text style={styles.title}>New Deaths: {country.new_deaths}</Text>
            <Text style={styles.title}>New Cases: {country.new_cases}</Text>
            <Text style={styles.title}>
              Cases in Serious Condition: {country.serious_critical}
            </Text>
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
    justifyContent: "flex-start",
    alignItems: "flex-start"
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
  title: {
    width: "100%",
    fontSize: 18,
    marginBottom: 10
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
