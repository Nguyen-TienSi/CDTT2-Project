import React from "react";
import { FlatList, Image, Text, View } from "react-native";
    const dataFake = [
        {id:1,name:'Đật 01',Image:'https://vnn-imgs-a1.vgcloud.vn/icdn.dantri.com.vn/2021/05/08/kimoanh-851-1620472406599.jpeg'},
        {id:2,name:'Đật G',Image:'https://cdn.diemnhangroup.com/seoulcenter/2022/11/gai-xinh-61.jpg'},
        {id:3,name:'Đật B',Image: 'https://taimienphi.vn/tmp/cf/aut/anh-gai-xinh-1.jpg' },
        {id:4,name:'Đật 09',Image:'https://leplateau.edu.vn/wp-content/uploads/2023/12/hinh-gai-cute-1.jpg'}


    ]

const Demo = () => {
    return (
        <>
        <Text style={{fontSize:15 ,backgroundColor:'gray',padding:10,textAlign:'center'}}>Demo FlatList</Text>
        {/* <ScrollView >
            <View style={{margin:30}}>
                <Text> Dat09</Text>
                <Image source={require('../assets/giatri1.jpg')} style={{   aspectRatio: 1 ,width: '300%', height: 300 }} />
            </View>
            <View style={{margin:30}}>
                <Text> Dat09</Text>
                <Image source={require('../assets/sach01.jpg')} style={{ aspectRatio: 1,width: '300%', height: 300, }} />
            </View>
            <View style={{margin:30}}>
                <Text> Dat09</Text>
                <Image source={require('../assets/sach01.jpg')} style={{ aspectRatio: 1,width: '300%', height:300 }} />
            </View>
            <View style={{margin:30}}>
                <Text> Dat09</Text>
                <Image source={require('../assets/sach01.jpg')} style={{ aspectRatio: 1,width: '300%', height: 300 }} />
            </View>
            <View style={{margin:30}}>
                <Text> Dat09</Text>
                <Image source={require('../assets/sach01.jpg')} style={{ aspectRatio: 1,width: '300%', height: 300 }} />
            </View>
            <View style={{margin:30}}>
                <Text> Dat09</Text>
                <Image source={require('../assets/sach01.jpg')} style={{ aspectRatio: 1,width: '300%', height: 300 }} />
            </View>
        </ScrollView> */}
        <FlatList data={dataFake} renderItem={({item}) =>
            <View style={{margin:15,}}>
                <Text> {item.name}</Text>
                <Image source={{uri:item.Image}} style={{ aspectRatio: 1,width: '200%', height: 200}} />
            </View>
            } />
        </>
    );
}

export default Demo;
