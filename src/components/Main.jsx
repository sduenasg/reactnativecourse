import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RepositoryList from "./RepositoryList";
import AppBar from "./Appbar";
import { Route, Routes } from "react-router-native";
import GoalsMain from "./GoalsMain";
import ImagePicker from "./ImagePicker"

export default function Main() {
  return (
    <View style={styles.appContainer}>
      <AppBar />
      <Routes>
        <Route path="/" exact element = {<RepositoryList />}/>
        <Route path="/signin" exact element = {<Text>Under construction</Text>}/>
        <Route path="/goals" exact element = {<GoalsMain/>}/>
        <Route path="/imagepicker" exact element = {<ImagePicker/>}/>
      </Routes>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flexDirection: "column",
    paddingBottom: 50,
    flex: 1,
  },
  goalsContainer: {
    flex: 5,
  },
});
