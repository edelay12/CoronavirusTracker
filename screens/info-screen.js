import React, { Component } from "react";
import ApiService from "../services/api-service";
import { StyleSheet, FlatList } from "react-native";
import { formatted } from "../components/utils";
import InfoItem from "../components/infoItem";
import CDCLink from "../components/cdcLink";

export default class CDCStatments extends Component {
  constructor() {
    super();
    this.state = {
      statements: null,
      show: false
    };
  }
  componentDidMount() {
    ApiService.getInfoStatements()
      .then(data => {
        this.setState({ statements: data }, () => {
          this.setState({ show: true });
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <React.Fragment>
        {this.state.show == true && (
          <FlatList
            data={this.state.statements}
            renderItem={({ item }) => (
              <InfoItem title={item.title} link={item.link} date={item.date} />
            )}
            keyExtractor={item => item.id}
          />
        )}
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
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
  tab: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: "#fff",
    color: "#fff"
  }
});
