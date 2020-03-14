import React, { Component } from "react";
import ApiService from "../services/api-service";
import {
  StyleSheet,
  FlatList,
} from "react-native";
import { Container, Content } from "native-base";
import CountryItem from "../components/CountryItem";

export default class Countries extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    ApiService.getCountryStats().then(data => this.setState({ data: data }));
  }
  render() {
    return (
      <Container>
        <Content>
          <FlatList
            data={this.state.data.countries_stat}
            renderItem={({ item }) => (
              <CountryItem
                country={() =>
                  this.props.navigation.navigate("Country", {
                    country: item,
                    name: item.country_name
                  })
                }
                name={item.country_name}
                cases={item.cases}
                newCases={item.new_cases}
              />
            )}
            keyExtractor={item => item.name}
          />
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
  containerView: {
    minWidth: "100%",
    justifyContent: "center",
    alignItems: "center"
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
