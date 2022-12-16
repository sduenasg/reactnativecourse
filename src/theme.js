import { Platform } from "react-native";

const theme = {
  appBar:{
    primary:'#24292e',
    textPrimary:'#fff',
    secondary:'#aaa'
  },
  colors: {
    textPrimary: "#24292e",
    textSecondary: "#586069",
    primary: "#0366d6",
    white: '#fefefe'
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  font: {
    main: Platform.select({ios:'Arial', android:'Roboto', default:'System'}),
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
};

export default theme;
