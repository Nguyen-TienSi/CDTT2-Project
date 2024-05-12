import { View, Text, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { styles } from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome'
import Login from '../../Services/GoogleLogin'
import auth from '@react-native-firebase/auth'
import { useNavigation } from '@react-navigation/native'

const Profile = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState();

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(setUser);
    // Clean up the listener when the component is unmounted
    return () => subscriber(); // unsubscribe on unmount
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {user ? (
          <View style={{ alignItems: 'center' }}>
            <Image
              style={styles.image}
              source={{ uri: user.photoURL }}
            />

            <Text style={{ marginTop: 30, fontSize: 30, fontWeight: 'bold' }}>{user.displayName}</Text></View>
        ) : (<View />)}

      </View>

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly' }}>
        <TouchableOpacity style={styles.bookmarks} onPress={() => navigation.navigate('bookmarks')}>
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Bookmarks</Text>
          <Icon name="bookmark" size={30} color="black" />
        </TouchableOpacity>

        <Login user={user}/>
      </View>
    </View>
  )
}

export default Profile