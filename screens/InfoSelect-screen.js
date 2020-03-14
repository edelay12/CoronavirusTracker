import React, { Component } from "react";
import ApiService from "../services/api-service";
import { StyleSheet, Text, TouchableOpacity, Linking } from "react-native";
import { Container, Card, CardItem } from "native-base";
import { formatted } from "../components/utils";
import InfoItem from "../components/infoItem";
import CDCLink from "../components/cdcLink";

export default function InfoSelect({ navigation }) {
  handleLink = link => {
    Linking.canOpenURL(link).then(supported => {
      if (supported) {
        Linking.openURL(link);
      } else {
        alert("Cant open URI: " + link);
      }
    });
  };
  return (
    <React.Fragment>
      <Container>
        <TouchableOpacity onPress={() => navigation.navigate("CDCStatements")}>
          <Card style={styles.card}>
            <CardItem>
              <Text style={styles.h1}>CDC Statements</Text>
            </CardItem>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Symptoms")}>
          <Card style={styles.card}>
            <CardItem>
              <Text style={styles.h1}>Symptoms</Text>
            </CardItem>
          </Card>
        </TouchableOpacity>

        <CDCLink
          text="FAQ"
          link="https://www.cdc.gov/coronavirus/2019-ncov/faq.html"
        />
        <CDCLink
          text="CDC Situation Summary"
          link="https://www.cdc.gov/coronavirus/2019-nCoV/summary.html"
        />
      </Container>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
    borderRadius: 5
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    color: "black"
  },
  containerCenter: {
    flex: 1,
    backgroundColor: "black",
    color: "#fff",
    height: "100%"
  },
  h1: {
    fontSize: 22,
    color: "black"
  },
  tab: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: "#fff",
    color: "#fff"
  }
});
