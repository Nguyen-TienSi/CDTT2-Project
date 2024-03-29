import React, { useState } from 'react';
import { Alert, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const RegisterScreen = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '', remember: false, emailValid: true });

    const handleInputChange = (name, value) => {
        setCredentials({ ...credentials, [name]: value });
    };

    const handleRegisterScreenPress = () => {
        console.log('Thông tin đăng nhập', credentials);
        Alert.alert('Đăng ký đã được nhấn', 'Đăng ký.');
    }
    
    const validateEmail = () => {
        const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!regexEmail.test(credentials.email)) {
            setCredentials({ ...credentials, emailValid: false });
        } else {
            setCredentials({ ...credentials, emailValid: true });
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={'#ffffff'} barStyle={'dark-content'} />
            <View style={styles.title}>
                <Text style={styles.titleText}>Đăng Kí</Text>
                <Text style={styles.subtitleText}>Welcome to Our App</Text>
            </View>
            <View style={styles.form}>
                <View style={styles.inputGroup}>
                    <Icon name="envelope" style={styles.icon} size={20} color="#900" />
                    <TextInput
                        placeholder='Email Address'
                        style={styles.input}
                        value={credentials.email}
                        onChangeText={(value) => handleInputChange('email', value)}
                        onBlur={validateEmail}></TextInput>
                    <Text style={{ color: 'red' }}>{!credentials.emailValid ? 'Sai Định Dạng Email' : ''}</Text>
                </View>
                <View style={styles.inputGroup}>
                    <Icon name="lock" style={styles.icon} size={20} color="#900" />
                    <TextInput
                        placeholder='Enter Password'
                        style={styles.input}
                        secureTextEntry={true}
                        value={credentials.password}
                        onChangeText={(value) => handleInputChange('password', value)}></TextInput>
                </View>
            </View>
            <TouchableOpacity onPress={handleRegisterScreenPress} style={styles.button}>
                <Text style={styles.buttonText}>Đăng Ký</Text>
            </TouchableOpacity>
            <Text style={styles.linkText}>Bạn đã có tài khoản? Đăng Nhập ngay</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: 15,
        justifyContent: 'center',
    },
    title: {
        alignItems: 'center',
        marginBottom: 50,
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 40,
        color: 'black',
    },
    subtitleText: {
        fontSize: 18,
        color: 'grey',
        marginBottom: 100,
    },
    form: {
        width: '100%',
    },
    inputGroup: {
        flexDirection: 'row',
        borderBottomWidth: 1,       
        borderColor: 'grey',
        marginBottom: 20,
        alignItems: 'center',
    },
    input: {
        flex: 1,
        paddingLeft: 10,
        fontSize: 18,
    },
    icon: {
        marginRight: 10,
    },
    button: {
        backgroundColor: '#1a73e8',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 18,
    },
    linkText: {
        color: '#1a73e8',
        marginTop: 10,
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
});

export default RegisterScreen;
