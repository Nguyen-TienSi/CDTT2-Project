import { TextInput, TouchableOpacity, Alert, Keyboard, KeyboardAvoidingView } from 'react-native'

import styles from './styles'
import Icon from 'react-native-vector-icons/EvilIcons'
import { useState, useEffect } from 'react'
import auth from '@react-native-firebase/auth'
import { onGoogleButtonPress } from '../../../../Services/GoogleLogin'

const Form = (props) => {
    const [comment, setComment] = useState('')
    const [height, setHeight] = useState()
    const [user, setUser] = useState()

    const handleAddText = () => {
        if (comment.length === 0) {
            return Alert.alert('Please write your comment')
        }
        Keyboard.dismiss()

        if (!user) {
            onGoogleButtonPress();
          } else {
            props.onAddText(comment);
            setComment('');
          }
    }

    useEffect(() => {
        const subscribe = auth().onAuthStateChanged(setUser);
    
        return () => subscribe();
      }, []);

    return (
        <KeyboardAvoidingView style={styles.input}>
            <TextInput
                style={[styles.inputBox, { height }]}
                placeholder='Write your comment here'
                onChangeText={(text) => setComment(text)}
                value={comment}
                multiline={true}
                onContentSizeChange={({
                    nativeEvent: {
                        contentSize: { height }
                    }
                }) => {
                    setHeight(height)
                }}
            />

            <TouchableOpacity onPress={handleAddText}>
                <Icon name="plus" color='black' size={24} />
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

export default Form