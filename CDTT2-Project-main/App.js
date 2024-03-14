import { FontAwesome6, Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={[styles.container, { paddingTop: 0 }]}>
      <View style={styles.top}>
        <Ionicons name="arrow-back" size={24} color="black" />
        <FontAwesome6 name="comments" size={24} color="black" />
        <FontAwesome6 name="bookmark" size={24} color="black" />
        <FontAwesome6 name="share" size={24} color="black" />
      </View>

      <Text style={styles.text}>Read News</Text>

      <Image style={styles.image} source={require('./assets/adaptive-icon.png')} />

      <TouchableOpacity>
        <Text style={styles.text}>Read More</Text>
      </TouchableOpacity>

      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 20,
  },
  top: {
    backgroundColor: 'red',
    paddingHorizontal: 20,
    paddingVertical: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: '100%',
    height: 250,
    backgroundColor: 'grey',
  },
});