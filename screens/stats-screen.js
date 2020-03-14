import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
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
import { formatted } from "../components/utils";
import ApiService from "../services/api-service";

export default class Stats extends Component {
  constructor() {
    super();
    this.state = {
      totalCases: "",
      deaths: "",
      recovered: "",
      active: "",
      closed: "",
      activeMild: "",
      activeSerious: "",
      closedMild: "",
      closedSerious: ""
    };
  }

  componentDidMount() {
    ApiService.getStats()
      .then(stats => {
        this.setState({
          totalCases: stats.cases,
          deaths: stats.deaths,
          recovered: stats.recovered,
          active: stats.a,
          closed: stats.c,
          activeMild: stats.aMild,
          activeSerious: stats.aSerious,
          closedMild: stats.cMild,
          closedSerious: stats.cSerious
        });
      })
      .catch(err => console.log(err));
  }

  bannerError(e) {
    alert(e);
  }

  render() {
    return (
      <Container>
        <Header>
          <Title>Live Data</Title>
        </Header>

        <Content>
          <Card style={styles.card}>
            <CardItem header bordered>
              <Text style={styles.h1}>Total Cases</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text style={styles.sub}>
                  {formatted(this.state.totalCases)}
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Card style={styles.card}>
            <CardItem header bordered>
              <Text style={styles.h1}>Deaths</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text style={styles.subRed}>
                  {formatted(this.state.deaths)}
                </Text>
              </Body>
            </CardItem>
          </Card>

          <Card style={styles.card}>
            <CardItem header bordered>
              <Text style={styles.h1}>Recovered</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text style={styles.subGreen}>
                  {formatted(this.state.recovered)}
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Card style={styles.card}></Card>
          <Card style={styles.card}>
            <CardItem header bordered>
              <Text style={styles.h1}>Active Cases:</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text style={styles.sub}>{formatted(this.state.active)}</Text>
              </Body>
            </CardItem>
          </Card>

          <Card style={styles.card}>
            <CardItem header bordered>
              <Text style={styles.h1}>Active cases: Mild condition</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text style={styles.sub}>
                  {formatted(this.state.activeMild)}
                </Text>
              </Body>
            </CardItem>
          </Card>

          <Card style={styles.card}>
            <CardItem header bordered>
              <Text style={styles.h1}>Active cases: Serious condition</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text style={styles.subRed}>
                  {formatted(this.state.activeSerious)}
                </Text>
              </Body>
            </CardItem>
          </Card>

          <Card style={styles.card}>
            <CardItem header bordered>
              <Text style={styles.h1}>Closed cases: Mild condition</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text style={styles.sub}>
                  {formatted(this.state.closedMild)}
                </Text>
              </Body>
            </CardItem>
          </Card>

          <Card style={styles.card}>
            <CardItem header bordered>
              <Text style={styles.h1}>Closed cases: Serious condition</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text style={styles.subRed}>
                  {formatted(this.state.closedSerious)}
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
    borderRadius: 5
  },
  container: {
    paddingHorizontal: 10,
    backgroundColor: "#fff"
  },
  h1: {
    fontSize: 22,
    color: "black"
  },
  sub: {
    fontSize: 20
  },
  subGreen: {
    fontSize: 20,
    color: "green"
  },
  subRed: {
    fontSize: 20,
    color: "red"
  }
});
