import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Duoi = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.icon}>☰</Text>
        <Text style={styles.menuText}>Tin tức</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <Image
          source={require("../assets/icon.jpg")}
          style={styles.iconImage}
        />
        <Text style={styles.menuText}>Video</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <Image
          source={require("../assets/icon.jpg")}
          style={styles.iconImage}
        />
        <Text style={styles.menuText}>Xu hướng</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <Image
          source={require("../assets/icon.jpg")}
          style={styles.iconImage}
        />
        <Text style={styles.menuText}>Tiện ích</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#fff", // Set your background color
    elevation: 2, // Shadow for Android
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  menuItem: {
    alignItems: "center",
  },
  icon: {
    fontSize: 24,
    marginBottom: 5,
  },
  iconImage: {
    width: 24,
    height: 24,
    marginBottom: 5,
  },
  menuText: {
    fontSize: 12,
    color: "#333", // Set your text color
    
  },
});

export default Duoi;
