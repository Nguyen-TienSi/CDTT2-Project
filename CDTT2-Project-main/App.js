import React from 'react';
import { StyleSheet, View } from 'react-native';
import HomeScreen from '../CDTT2-Project-main/Src/HomeScreen'; // Import HomeScreen từ đường dẫn tương ứng

const App = () => {
  return (
    <View style={styles.container}>
      <HomeScreen/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // căn giữa theo chiều dọc
    alignItems: 'center', // căn giữa theo chiều ngang
  },
});

export default App;
