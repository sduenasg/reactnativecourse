import { StyleSheet, View } from "react-native";
import StyledText from "./StyledText";
import Constants from "expo-constants";
import theme from "../theme";
import { Link } from "react-router-native";

const AppBarTab = ({ active, children, to }) => {
  return (
    <Link to={to}>
      <StyledText fontWeight="bold" style={styles.text}>
        {children}
      </StyledText>
    </Link>
  );
};

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab active to="/">
        Repositories
      </AppBarTab>
      <AppBarTab active to="/signin">
        Sign In
      </AppBarTab>
      <AppBarTab active to="/goals">
        Goals
      </AppBarTab>
      <AppBarTab active to="/imagepicker">
        Image picker
      </AppBarTab>
    </View>
  );
};
export default AppBar;

const styles = StyleSheet.create({
  container: {

    flexDirection:'row',
    backgroundColor: theme.appBar.primary,
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 10,
    paddingLeft: 10,

    justifyContent:"space-around"
  },
  text: {
    color: theme.appBar.textPrimary,
  },
});
