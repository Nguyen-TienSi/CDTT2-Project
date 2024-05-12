import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 10,
  },
  image: {
    marginTop: 10,
    width: '100%',
    height: 300,
  },
  text: {
    lineHeight: 30,
    fontSize: 20,
  }
});