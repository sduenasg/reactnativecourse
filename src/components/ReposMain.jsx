import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  TouchableOpacity,
  Platform,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import RepositoryList from './RepositoryList'

export default function ReposMain(){
  return (
    <View style={styles.appContainer}>
      <RepositoryList/>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    margintop: Constants.statusBarHeight,
    flexDirection: "column",
    paddingHorizontal: 50,
    paddingBottom: 50,
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
