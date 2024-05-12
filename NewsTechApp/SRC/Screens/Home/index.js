import { View, Text, ActivityIndicator, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import { styles } from './styles'
import Icon from 'react-native-vector-icons/EvilIcons.js'
import { CategoryTextSlider } from './CategoryList.js'
import { fetchSearchNews } from '../../Services/NewsApi.js'
import Color from '../Color.js'
import List from '../List/index.js'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
  const navigation = useNavigation();

  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let fetchFlag = true;

    if (fetchFlag)
      fetchData('Technology');

    return () => {
      fetchFlag = false;
    };
  }, []);

  const fetchData = async (category) => {
    setLoading(true);
    try {
      const data = await fetchSearchNews(category);

      const processedNews = data.articles
        .filter((item) => item.urlToImage && item.title);

      setNewsList(processedNews);
    }
    catch (error) {
      console.error("Error fetching news:", error);
    }
    setLoading(false);
  };

  for (const news of newsList) {
    console.log(`${newsList.indexOf(news)}: `, news);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.appName}>Technology News</Text>

        <TouchableOpacity onPress={() => navigation.navigate('search')}>
          <Icon name="search" size={35} color="black" />
        </TouchableOpacity>
      </View>

      <CategoryTextSlider selectCategory={(category) => fetchData(category)} />

      {loading ? (
        <ActivityIndicator style={{ marginTop: Dimensions.get('screen').height * 0.35 }} size={'large'} color={Color.primary} />
      ) : (
        <List newsList={newsList} />
      )}
    </View>
  );
};

export default Home