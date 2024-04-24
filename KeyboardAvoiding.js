import React, { useState } from 'react';
import { View, Text, TextInput, Image, SafeAreaView, ScrollView, StyleSheet, Platform, KeyboardAvoidingView } from 'react-native';

export default KeyboardAvoiding = () => {
  const [textInput, setTextInput] = useState('');
  return (
    <View style={styles.mainContainer}>
      <SafeAreaView>

        <View style={{ borderwidth: 1 }}>
          <Text style={{ color: Platform.OS == 'android' ? 'red' : 'blue', fontWeight: Platform.OS == 'android' ? '700' : '800' }}>imageExample</Text>
          <Image
            source={{ uri: 'https://www.imageshine.in/uploads/gallery/HD_PNG_Images_of_Narendra_Modi_Ji.png' }}
            style={{ height: 150, width: 200 }}
            resizeMode='contain'
          />
        </View>

        <View style={{ borderwidth: 1 }}>
          <Text style={{ color: Platform.OS == 'android' ? 'red' : 'blue', fontWeight: Platform.OS == 'android' ? '700' : '800' }}>imageExample</Text>
          <Image
            source={{ uri: 'https://www.imageshine.in/uploads/gallery/home-minister-amit-shah.jpg' }}
            style={{ height: 150, width: 200 }}
            resizeMode='contain'
          />
        </View>


        <View style={{ borderwidth: 1 }}>
          <Text style={{ color: Platform.OS == 'android' ? 'red' : 'blue', fontWeight: Platform.OS == 'android' ? '700' : '800' }}>imageExample</Text>
          <Image
            source={{ uri: 'https://w7.pngwing.com/pngs/741/55/png-transparent-rajnath-singh-minister-of-home-affairs-of-india-others-image-file-formats-downloads-singh.png' }}
            style={{ height: 200, width: 200 }}
            resizeMode='contain'
          />
        </View>
        <KeyboardAvoidingView
          behavior='position'
          keyboardVerticalOffset={Platform.OS === "android" ? 10 : 0}>
          <TextInput
            value={textInput}
            onChangeText={(value) => {
              setTextInput(value)
            }}
            placeholder='Type Here........'
            placeholderTextColor={'#000'}
            style={{ paddingVertical: 10, paddingHorizontal: 15, borderwidth: 5, marginTop: 10, marginHorizontal: 16, backgrouncolor: '#eeeee4' }}
          />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create(
  {
    mainContainer: {
      flex: 1
    }
  })
