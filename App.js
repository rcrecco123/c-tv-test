import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import fetch from "node-fetch";
global.fetch = fetch;

import store from "./redux/reducers/store";

import Search from "./components/search";

export default function App() {
  const [clientId, setClientId] = useState(
    "aa2f3c3be8125f1fc86e3007153420c4e446c19b7b0c6d80a6257b281c9a0dc5"
  );
  return (
    <Provider store={store}>
      <Search />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
