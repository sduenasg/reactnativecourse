import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import StyledText from "./StyledText";
import Constants from "expo-constants";
import theme from "../theme";
import { Link, useLocation } from "react-router-native";

const AppBarTab = ({children, to }) => {
 
  const { pathname } = useLocation(); //current path from the router
  const active = pathname === to
  const textStyles = [styles.text, active && styles.active];

  return (
    <Link to={to} component={TouchableWithoutFeedback}>
      <StyledText fontWeight="bold" style={textStyles}>
        {children}
      </StyledText>
    </Link>
  );
};

const AppBar = () => {
  
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scroll}>
        <AppBarTab to="/">Repositories</AppBarTab>
        <AppBarTab to="/signin">Sign In</AppBarTab>
        <AppBarTab to="/goals">Goals</AppBarTab>
        <AppBarTab to="/imagepicker">Image picker</AppBarTab>
      </ScrollView>
    </View>
  );
};
export default AppBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: theme.appBar.primary,
    paddingTop: Constants.statusBarHeight + 10,
    paddingLeft: 10,
    justifyContent: "space-around",
  },
  text: {
    color: theme.appBar.secondary,
    paddingHorizontal: 10,
  },
  scroll: {
    paddingBottom: 15,
  },
  active: {
    color: theme.appBar.textPrimary,
  },
});
