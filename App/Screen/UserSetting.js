import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, Navigator} from 'react-native';
//import FeatherIcon from 'react-native-vector-icons/Feather' 
//import Profile from './src/Profile'
//import Contact from './src/components/Contact/Contact.js';
//import { MaterialIcons } from "@expo/vector-icons";


const navigateToReportBug = () =>{
  console.log("Report Bug")
};

const navigateToContactUs = ({navigation}) =>{
  navigation.navigate("Contact")
};

const navigateToBookmark = ({navigation}) =>{
  navigation.navigate("Bookmark")
};

const navigateToDownloads = ({navigation}) =>{
  navigation.navigate("Downloads")
};

const helpItems = [
  {icon: 'mail', text: "Contact Us", action: navigateToContactUs },
  {icon: 'flag', text: "Report Bug", action: navigateToReportBug }
];

const contentItems = [
  {icon: 'bookmark', text: "Bookmark", action: navigateToBookmark},
  {icon: 'download', text: "Downloads", action: navigateToDownloads}
];

const renderSettingItems = ({ icon, text, action }) =>(
  <TouchableOpacity onPress={action} style={styles.subtitle}>
    {/*<MaterialIcons name={icon} size={24} color="black"/>*/}
    <Text style={styles.rowLabel}>{text}</Text>
  </TouchableOpacity>
)

const UserSetting = ({navigation}) =>{
  return(
    <SafeAreaView style={{flex: 1, backgroundColor: '#f6f6f6'}}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          {/*<TouchableOpacity onPress={()=>navigation.goBack()} style={{ position: 'absolute', left: 0} }>
            <MaterialIcon name="keyboard-arrow-left" size ={24} color={COLORS.black}/>
          </TouchableOpacity>*/}

          <Text style={styles.title}>Settings</Text>
        </View>

        {/*<Profile/>*/}

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>Help</Text>
          </View>
          <View style={{borderRadius: 12, backgroundColor: COLORS.gray}}>
            {helpItems.map((item,index) => (
              <React.Fragment key={index}>
                {renderSettingItems(item)}
              </React.Fragment>
            ))}

          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>Content</Text>
          </View>
          <View style={{borderRadius: 12, backgroundColor: COLORS.gray}}>
            {contentItems.map((item,index) => (
              <React.Fragment key={index}>
                {renderSettingItems(item)}
              </React.Fragment>
            ))}

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles= StyleSheet.create({
  container:{
    paddingVertical: 24,
  },
  header:{
    marginHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title:{
    fontSize: 24,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 0,
  },
  section:{
    paddingTop: 12,
  },
  sectionBody:{
    marginBottom: 12,
  },
  sectionHeader:{
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  sectionHeaderText:{
    fontSize: 14,
    fontWeight: '600',
    color: '#a7a7a7',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
  },
  rowWrapper:{
    paddingLeft: 24,
    borderTopWidth: 1,
    borderColor: '#e3e3e3',
    backgroundColor: '#fff',
  },
  row:{
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingRight: 24,
  },
  rowLabel:{
    fontSize: 17,
    fontWeight: '500',
    color: '#000',
  },
  rowSpacer:{
    flex: 1,
  },
  rowValue:{
    fontSize: 17,
    color: '#616161',
    marginRight: 4,
  },
  subtitle:{
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingLeft: 12,
  },
});

export const COLORS = {
  primary: '#242760',
  secondary: '#544C4C',
  white: '#FFFFFF',
  black: '#000000',
  gray: 'rgba(36, 39, 96, 0.05)',
  secondaryGray: 'rgba(84, 76, 76, 0.14)'
}

const SIZES = {
  // global SIZES
  base: 8,
  font: 14,
  radius: 30,
  padding: 10,
  padding2: 12,
  padding3: 16,

  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 20,
  h3: 18,
  h4: 16,
  body1: 30,
  body2: 20,
  body3: 18,
  body4: 14,
  body5: 12,

  width: 30,
  height: 30,
}

const FONTS = {
  largeTitle: {
      fontFamily: 'black',
      fontSize: SIZES.largeTitle,
      lineHeight: 55,
  },
  h1: { fontFamily: 'bold', fontSize: SIZES.h1, lineHeight: 36 },
  h2: { fontFamily: 'bold', fontSize: SIZES.h2, lineHeight: 30 },
  h3: { fontFamily: 'bold', fontSize: SIZES.h3, lineHeight: 22 },
  h4: { fontFamily: 'bold', fontSize: SIZES.h4, lineHeight: 20 },
  body1: { fontFamily: 'regular', fontSize: SIZES.body1, lineHeight: 36 },
  body2: { fontFamily: 'regular', fontSize: SIZES.body2, lineHeight: 30 },
  body3: { fontFamily: 'regular', fontSize: SIZES.body3, lineHeight: 22 },
  body4: { fontFamily: 'regular', fontSize: SIZES.body4, lineHeight: 20 },
}

export default UserSetting;
