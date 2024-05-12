import { View, Text, StyleSheet, TouchableOpacity, FlatList, Alert } from 'react-native';
import Comment from './Comment/index';
import Form from './Form/index';
import { useEffect, useState } from 'react';
import { firebase } from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/EvilIcons';
import { useNavigation, useRoute } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import Color from '../../Color';
import { deleteComment, makeComment } from '../../../Services/FireStoreComments';

export default function Comments() {
  const news = useRoute().params.news;
  const navigation = useNavigation();
  const user = firebase.auth().currentUser;
  const [commentList, setCommentList] = useState([]);

  const handleAddComment = (comment) => {
    makeComment(news, user, comment);
  };

  const handleDeleteComment = (commentId) => {
    Alert.alert(
      'Do you really want to delete this comment?',
      'Please select your choice',
      [
        {
          text: 'Cancel',
          onPress: () => { },
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            deleteComment(news, commentId)
          },
        },
      ]
    );
  };

  useEffect(() => {
    const unsubscribe = firestore()
      .collection('news-comments')
      .where('news', '==', news)
      .onSnapshot((querySnapshot) => {
        const comments = [];
        querySnapshot.forEach((doc) => {
          const commentsSubColl = doc.ref.collection('comments').orderBy('addedOn', 'asc');
          commentsSubColl.get().then((subSnapshot) => {
            subSnapshot.forEach((subDoc) => {
              comments.push({
                ...subDoc.data(),
                key: subDoc.id,
              });
            });
            setCommentList(comments);
          });
        });
      });

    return () => unsubscribe();
  }, [commentList]);

  console.log(commentList);

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 5, marginVertical: 10 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" color="black" size={40} />
        </TouchableOpacity>
        <Text style={{ fontSize: 30, fontWeight: 'bold', color: Color.primary }}>Comments</Text>
      </View>

      <FlatList
        data={commentList}
        renderItem={({ item, index }) => <Comment
          user={item.from}
          changedAt={item.addedOn}
          text={item.message}
          onDeleteComment={() => handleDeleteComment(item.key)}
        />}
        keyExtractor={(item, index) => index.toString()}
      />

      <Form onAddText={handleAddComment} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lineSeparator: {
    height: 0.5,
    width: '100%',
    backgroundColor: Color.gray,
  },
});