import React from "react";
import { View, Button } from "react-native";
import { Formik, useField } from "formik";
import StyledTextInput from "./StyledTextInput.jsx";

const initialValues = {
  email: "",
  password: "",
};

const FormikInputValue = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  return (
    <StyledTextInput
      value={field.value} //valor del camp
      onChangeText={(value) => helpers.setValue(value)}
      {...props}
    />
  );
};

export default function LogInPage() {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleSubmit }) => {
        return (
          <View style={{ padding: 20 }}>
            <FormikInputValue placeholder="E-mail" name="email" />
            <FormikInputValue placeholder="Password" name="password" secureTextEntry />
            <Button title="Login" onPress={handleSubmit} />
          </View>
        );
      }}
    </Formik>
  );
}
