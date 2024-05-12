import { View, Text, TouchableOpacity, TextInput, ActivityIndicator, Keyboard, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { debounce } from 'lodash';
import Icon from 'react-native-vector-icons/EvilIcons';
import { styles } from './styles';
import Color from '../Color';
import { fetchSearchNews } from '../../Services/NewsApi';
import List from '../List/index';

const Search = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async (search) => {
    if (search && search.length > 0) {
      setLoading(true);
      setResults([]);
      setSearchTerm(search);

      try {
        const data = await fetchSearchNews(search);

        const processedNews = data.articles
          .filter((item) => item.urlToImage && item.title);

        setResults(processedNews);
      } catch (error) {
        console.log('Search Error: ', error);
      }

      setLoading(false);
    }
  }

  const handleClearText = () => {
    setSearchTerm('');
    setResults([]);
  };

  const handleTextSubmit = () => {
    Keyboard.dismiss();
    handleSearch(searchTerm);
  }

  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" color="black" size={40} />
        </TouchableOpacity>

        <View style={styles.searchInput}>
          <TextInput
            style={styles.seachText}
            placeholder="Search"
            onChangeText={(text) => setSearchTerm(text)}
            value={searchTerm}
            onSubmitEditing={handleTextSubmit}
          />

          {searchTerm !== '' && (
            <TouchableOpacity style={styles.icon} onPress={handleClearText}>
              <Icon name="close" color="black" size={24} />
            </TouchableOpacity>
          )}
        </View>
      </View>

      <View>
        <View style={{ alignItems: 'center', justifyContent: 'center', marginVertical: 10 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{results.length} News for {searchTerm}</Text>
        </View>

        {loading ? (
          <ActivityIndicator style={{ marginTop: Dimensions.get('screen').height * 0.35 }} size={'large'} color={Color.primary} />
        ) : (
          <List newsList={results} />
        )}
      </View>
    </View>
  );
};

export default Search;