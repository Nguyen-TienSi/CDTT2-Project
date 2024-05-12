import { View, Text, Image, ActivityIndicator, TouchableOpacity, Dimensions } from 'react-native';
import styles from './styles';
import Color from '../../../Color';
import { firebase } from '@react-native-firebase/auth';

const Comment = (props) => {
  const user = firebase.auth().currentUser;

  console.log(props);

  return (
    <View style={styles.comment}>
      {!props.user ? (
        <ActivityIndicator style={{ marginTop: Dimensions.get('screen').height * 0.35 }} size={'large'} color={Color.primary} />
      ) : (
        <View>
          <View style={styles.user}>
            <Image
              style={styles.userImage}
              source={{ uri: props.user.photoURL }}
            />

            <View style={styles.userRecord}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{props.user.displayName}</Text>
              <Text>Last Modified: {props.changedAt.toDate().toLocaleDateString()}</Text>
            </View>
          </View>

          <Text style={styles.commentContent}>{props.text}</Text>

          {user && (
            <View style={styles.userCapacity}>
              {user?.uid === props.user.uid && (
                <View style={{
                  flex: 2,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                }}>
                  <TouchableOpacity onPress={props.onDeleteComment}>
                    <Text>Delete</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default Comment;