import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 132,

    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    borderRadius: 10,
    marginHorizontal: 8,

    backgroundColor: theme.colors.surface_secondary,
  },
  image: {
    width: 52,
    height: 52,
  },
  title: {
    fontSize: 15,
    marginTop: 8,
    color: theme.colors.text_primary,
    fontFamily: theme.fonts.medium,
  },
});
