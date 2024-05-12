import { View, ActivityIndicator, TouchableOpacity, Text, Dimensions } from 'react-native';
import { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/EvilIcons';
import { firebase } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import Color from "../Color";
import List from '../List/index';
import { useNavigation } from '@react-navigation/native';

const Bookmarks = () => {
  const navigation = useNavigation();

  const [loading, setLoading] = useState(true);
  const [bookmarkList, setBookmarkList] = useState([]); 

  useEffect(() => {
    const fetchBookmarks = async () => {
      try {
        const user = firebase.auth().currentUser;
        if (user) {
          firestore()
          .collection('Bookmarks-News')
          .where('userId', '==', user.uid)
          .orderBy('addedOn', 'desc')
          .onSnapshot(querySnapshot => {
            if (querySnapshot) {
              const favList = [];
    
              querySnapshot.forEach(documentSnapshot => {
                favList.push({
                  ...documentSnapshot.data(),
                  key: documentSnapshot.id,
                });
              });
    
              const processedNews = favList
                .map((item) => item.news)
    
              setBookmarkList(processedNews);
            }
          });
        }
      } catch (error) {
        console.log('Error fetching bookmarks: ', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookmarks();
  }, [bookmarkList]);

  return (
    <View style={{ flex: 1 }}>
      <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 5, marginVertical: 10,}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" color='black' size={40} />
        </TouchableOpacity>

        <Text style={{ fontSize: 30, fontWeight: 'bold', color: Color.primary }}>Bookmarks</Text>
      </View>

      {loading ? (
        <ActivityIndicator style={{ marginTop: Dimensions.get('screen').height * 0.35 }} size={'large'} color={Color.primary} />
      ) : (
        <List newsList={bookmarkList} />
      )}

    </View>
  )
};

export default Bookmarks;