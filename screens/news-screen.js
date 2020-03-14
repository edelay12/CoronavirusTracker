import React, { Component } from "react";
import ApiService from "../services/api-service";
import { StyleSheet, FlatList } from "react-native";
import { Header, Title } from "native-base";
import { formatted } from "../components/utils";
import Item from "../components/Item";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      news: {
        articles: []
      }
    };
  }
  componentDidMount() {
    ApiService.getNews()
      .then(news => {
        this.setState({ news: news });
      })
      .catch(err => console.log(err));
  }

  render() {
    return this.state.news.articles.length == 0 ? null : (
      <React.Fragment>
        <Header>
          <Title>Recent News</Title>
        </Header>
        <FlatList
          data={this.state.news.articles}
          renderItem={({ item }) => (
            <Item
              title={item.title}
              description={item.description}
              image={item.urlToImage}
              link={item.url}
            />
          )}
          keyExtractor={item => item.id}
        />
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
