import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  FlatList,
} from "react-native";
import axios from "axios";
import Unsplash, { toJson } from "unsplash-js";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      results: "",
    };
    this.search = this.search.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
  }

  updateSearch = (string) => {
    this.state.search = string;
    console.log(this.state.search);
  };

  search() {
    const unsplash = new Unsplash({
      accessKey:
        "aa2f3c3be8125f1fc86e3007153420c4e446c19b7b0c6d80a6257b281c9a0dc5",
    });

    unsplash.search
      .users(this.state.search)
      .then(toJson)
      .then((json) => {
        console.log(json);
        this.setState({ results: json });
      });
  }

  componentDidMount() {}

  render() {
    // if (this.state.results) {
    //   const names = this.state.data.results.forEach((user) => {
    //     return <Text>{user.name}</Text>;
    //   });
    // }

    return (
      <View style={styles.container}>
        <Text> Search Username</Text>
        <TextInput
          style={styles.searchBar}
          onChangeText={(text) =>
            this.setState({
              search: text,
            })
          }
        />
        <Button title="search" onPress={() => this.search()} />
        <Text>Results</Text>
        {/* <View>{names}</View> */}
      </View>
    );
  }
}

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  searchBar: {
    borderWidth: 1,
    width: "50%",
  },
});
