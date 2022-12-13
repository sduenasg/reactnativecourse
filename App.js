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
} from "react-native";
import slothImage from "./assets/sloth.png";
import * as ImagePicker from "expo-image-picker";
import * as Sharing from "expo-sharing";
import uploadToAnonymousFilesAsync from "anonymous-files";

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  let openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to acces camera is required");
    } else {
      const pickerResult = await ImagePicker.launchImageLibraryAsync();
      if (pickerResult.canceled === false) {
        if (Platform.OS === "web") {
          // CORS error...
          // let remoteUri = await uploadToAnonymousFilesAsync(pickerResult.assets[0].uri);
          // console.log(remoteUri);
        } 
        
        setSelectedImage({ localUri: pickerResult.assets[0].uri });
        
      }
    }
  };

  const openShareDialogAsync = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert("Sharing is not available on your platform");
    } else {
      await Sharing.shareAsync(selectedImage.localUri);
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.imageIcon} source={slothImage} />
      <Text style={styles.title}>hello world 🐈</Text>
      <TouchableOpacity onPress={openImagePickerAsync}>
        <Image
          style={styles.image}
          source={{
            uri:
              selectedImage !== null
                ? selectedImage.localUri
                : "https://picsum.photos/200/200",
          }}
        />
      </TouchableOpacity>

      {selectedImage ? (
        <TouchableOpacity
          style={styles.button}
          title="Share"
          color="blue"
          onPress={openShareDialogAsync}
        >
          <Text style={styles.buttonText}> Share 🦔 </Text>
        </TouchableOpacity>
      ) : (
        <View />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#292929",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    color: "#FFFFFF",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 20,
  },
  image: {
    //resizeMode: "contain",
    borderRadius: 100,
    height: 200,
    width: 200,
  },
  imageIcon: {
    height: 50,
    width: 50,
  },
  button: {
    backgroundColor: "deepskyblue",
    padding: 7,
    marginTop: 10,
  },
});
