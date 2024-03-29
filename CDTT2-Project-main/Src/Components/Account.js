import React from "react";
import { Text, TouchableOpacity, View } from "react-native"; // Sửa từ "react-native-gesture-handler" thành "react-native"
import { SafeAreaView } from "react-native-safe-area-context";

const Account = ({navigation}) => {
    return (
        <SafeAreaView>
            <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:30}}>
                <TouchableOpacity><Text style={{padding:15,backgroundColor:'#27B7C0',borderRadius:10}}>Đăng Nhập</Text></TouchableOpacity>
                <TouchableOpacity><Text style={{padding:15,backgroundColor:'#27B7C0',borderRadius:10}} onPress={()=>navigation.navigate('login')}>Đăng kí</Text></TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default Account;
