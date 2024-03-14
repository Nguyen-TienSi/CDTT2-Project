
import React, { useState } from 'react';
import { Alert, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';

  const LoginScreen = () => {
    const [isCheck,setIsCheck] = useState(false);
    return (
      <SafeAreaView style={styles.main}>
        <StatusBar backgroundColor={'#ffffff'} barStyle={'dark-content'} />
        <View style={styles.title}>
          <Text style={{ fontWeight: 'bold', fontSize: 60, color: 'black' }}>Login</Text>
          <Text style={{ margin: 15 }}>Wecom</Text>
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <Text>Our </Text>
            <TouchableOpacity onPress={() => Alert.alert('Sau này tao làm chuyển trang')}>
              <Text style={{ color: '#1bcdff' }}>bam vào đây</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <Text style={{ color: '#1bcdff', marginRight: 30 }}>Login</Text>
            <Text style={{ color: 'red' }}>Register</Text>
          </View>
          <View style={styles.form}>
            <View style={styles.group}>
              <Icon name="email" style={styles.icon} size={30} color="#900" />
              <TextInput placeholder='Email Address'  />
            </View>
            <View style={styles.group}>
              <Icon name="locked" style={styles.icon} size={30} color="#900" />
              <TextInput placeholder='Enter Password' style={styles.ip} secureTextEntry={true} />
            </View>
            <View style={styles.group1}>
            
              <Text>Ghi Nho Pass</Text>
              <TouchableOpacity onPress={() => Alert.alert('Sau này tao làm chuyển trang')}>
              <Text style={{ color: '#1bcdff' }}>bam vào đây</Text>
            </TouchableOpacity>
              

                </View>
                <TouchableOpacity style={styles.btn}>
                    <TouchableOpacity onPress={() => Alert.alert('Sau này tao làm chuyển trang')}>
                <Text style={{ color: '#1bcdff' }}>bam vào đây</Text>
                 </TouchableOpacity>

                </TouchableOpacity>

              

            
          </View>
        </View>
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    main: {
      backgroundColor: '#ffffff',
      flex: 1,
      paddingHorizontal: 30, // Thêm khoảng cách padding
    },
    title: {
      alignItems: 'center',
      marginTop: 30,
    },
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
      paddingHorizontal: 5,
    },
    form: {
      margin: 30,
    },
    group: {
      marginTop: 15,
      position: 'relative',
      flexDirection:'row',
      
    },
    group1:{
      flexDirection: 'row',
      margin:20,
      justifyContent:'space-between',
      alignItems:'center',
      


    },

    ip: {
      borderBottomWidth: 1,
      backgroundColor: '#fff',
      borderColor: 'gray',
      borderRadius: 5,
      paddingLeft: 30,
    },
    icon: {
      fontSize: 25,
      position: 'absolute',
      top: 10,
      left: 0,
      zIndex: 1000,
    },
    btn:{
      marginTop:30,
      backgroundColor:'gray',
      paddingVertical:5,
      alignItems:'center',



    }

  });

  export default LoginScreen;
