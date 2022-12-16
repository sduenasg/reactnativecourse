import React from "react";
import { View, Button, Image, StyleSheet } from "react-native";
import { Formik, useField } from "formik";
import StyledTextInput from "./StyledTextInput.jsx";
import StyledText from "./StyledText.jsx";
import octopusImage from "../../assets/octopus.png";
import { loginValidationSchema } from "../validationSchemas/login.js";

const initialValues = {
  email: "",
  password: "",
};

const FormikInputValue = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  return (
    <>
      <StyledTextInput
        error={meta.error}
        value={field.value} //valor del campo
        onChangeText={(value) => helpers.setValue(value)}
        {...props}
      />
      {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
    </>
  );
};

export default function LogInPage() {
  return (
    <Formik
      validationSchema = {loginValidationSchema}
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleSubmit }) => {
        return (
          <View style={{ padding: 20 }}>
            <Image style={styles.imageIcon} source={octopusImage} />
            <FormikInputValue placeholder="E-mail" name="email" />
            <FormikInputValue
              placeholder="Password"
              name="password"
              secureTextEntry
            />
            <Button title="Login" onPress={handleSubmit} />
          </View>
        );
      }}
    </Formik>
  );
}

const styles = StyleSheet.create({
  imageIcon: {
    height: 50,
    width: 50,
    alignSelf: "center",
    marginBottom: 10,
  },
  form: {
    margin: 12,
  },
  error: {
    color: "red",
    fontSize: 12,
    marginBottom: 20,
    marginTop: -5,
  },
});
