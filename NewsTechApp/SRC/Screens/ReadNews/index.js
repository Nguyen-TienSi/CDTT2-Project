import React, { useEffect, useState } from 'react';
import { Text, View, Image, TouchableOpacity, Share, ScrollView, Linking, Button, ActivityIndicator, Dimensions } from 'react-native';
import EIcon from 'react-native-vector-icons/EvilIcons';
import OIcon from 'react-native-vector-icons/Octicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import auth from '@react-native-firebase/auth'
import { styles } from './styles';
import Color from '../Color';
import { isBookmark, makeBookmark, deleteBookmark } from '../../Services/FireStoreBookmarks';
import { fetchSearchNews } from '../../Services/NewsApi';
import { getCommentCount } from '../../Services/FireStoreComments';
import { onGoogleButtonPress } from '../../Services/GoogleLogin';

export default function ReadNews({ route }) {
  const { news, title } = route.params || {};
  const [article, setArticle] = useState({});
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [commentsCount, setCommentsCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const [user, setUser] = useState(null);

  const shareNews = () => {
    Share.share({
      message: article.url,
      title: article.title
    });
  };

  const handleFav = async () => {
    try {
      if (!user) await onGoogleButtonPress();

      if (await isBookmark(article, user)) {
        deleteBookmark(article, user);
        setIsBookmarked(false);
      } else {
        makeBookmark(article, user);
        setIsBookmarked(true);
      }
    } catch (error) {
      console.log('handleFav Error:', error.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (title) {
          const data = await fetchSearchNews(title);
          const count = await getCommentCount(data.articles[0]);
          setArticle(data.articles[0]);
          setCommentsCount(count);
        } else {
          setArticle(news);
          const count = await getCommentCount(news);
          setCommentsCount(count);
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchData();
  }, [title, news]);

  useEffect(() => {
    const checkBookmarkStatus = async () => {
      try {
        const subscriber = auth().onAuthStateChanged(setUser);
        const bookmarked = await isBookmark(article, user);
        setIsBookmarked(bookmarked);
      } catch (error) {
        console.log('checkBookmarkStatus Error:', error.message);
      }
    };

    checkBookmarkStatus();
  }, [article, user]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <EIcon name="chevron-left" color="black" size={40} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('comments', { news: article })}>
          <EIcon name="comment" size={24} color="black" />
          <Text style={{ alignSelf: 'flex-end' }}>{commentsCount}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleFav}>
          {isBookmarked ? (
            <FAIcon name="bookmark" size={24} color="black" />
          ) : (
            <OIcon name="bookmark" size={24} color="black" />
          )}
        </TouchableOpacity>

        <TouchableOpacity onPress={shareNews}>
          <EIcon name="share-google" color="black" size={24} />
        </TouchableOpacity>
      </View>

      {loading ? (
        <ActivityIndicator style={{ marginTop: Dimensions.get('screen').height * 0.35 }} size={'large'} color={Color.primary} />
      ) : (
        <View style={{ flex: 1, padding: 10 }}>
            <Text style={{ fontSize: 40, fontWeight: 'bold' }}>{article.title}</Text>
            <Text style={styles.text}>{new Date(article.publishedAt).toLocaleDateString()}</Text>
            <Text style={[styles.text, { color: Color.primary }]}>{article.source.name}</Text>

            <Image style={styles.image} source={{ uri: article.urlToImage }} />

            <Text style={{ fontSize: 20, marginVertical: 10 }}>{article.description}</Text>

          <View style={{position: 'absolute', bottom: 10, alignSelf: 'center', width: '100%'}}>
            <Button onPress={() => Linking.openURL(article.url)} title="Read More" />
          </View>
        </View>
      )}
    </View>
  );
}