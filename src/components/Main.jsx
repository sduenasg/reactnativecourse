import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Route, Routes } from "react-router-native";
import RepositoryList from "./RepositoryList";
import AppBar from "./Appbar"; // sin extension para cargar la appbar de cada plataforma 
import GoalsMain from "./GoalsMain.jsx";
import MyImagePicker from "./ImagePicker.jsx";
import LogInPage from "./LogIn";
import QuestionCard from "./Question.jsx";
import octopusImage from "../../assets/octopus.png";

export default function Main() {
  return (
    <View style={styles.appContainer}>
      <AppBar />
      <Routes>
        <Route path="/" exact element={<RepositoryList />} />
        <Route path="/signin" exact element={<LogInPage />} />
        <Route path="/goals" exact element={<GoalsMain />} />
        <Route path="/imagepicker" exact element={<MyImagePicker />} />
        <Route path="/question" exact element={<QuestionCard question={'¿Cómo estás?'} image = {octopusImage}/>} />
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
