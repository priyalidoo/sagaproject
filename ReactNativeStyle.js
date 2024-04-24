import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

export default ReactNaiveStyle = () => {

  return (
    <View style={styles.mainConatiner}>
      <Text style={[styles.TextStyle, styles.textStyle3]}>React Native</Text>
      <Text style={[styles.TextStyle1, styles.textStyle2]}>Android </Text>
      <Text style={[styles.TextStyle1, styles.textStyle2]}>IOS </Text>
      <Text style={[styles.TextStyle, styles.textStyle3]}>JAVA</Text>
      <Text style={[styles.TextStyle1, styles.textStyle2]}>java Script </Text>
      <Text style={[styles.TextStyle1, styles.textStyle2]}>HTML</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  mainConatiner: {
    flex: 1,
    justifyContent: 'center',

  },
  TextView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  TextmainView: {
    backgroundColor: '#cfcfcf',
    width: "80%",
    alignItems: 'center',
    justifyContent: "center",
    paddingVertical: 20,
    borderRadius: 16,
  },
  TextStyle: {
    fontSize: 40,
    color: Platform.OS == 'android' ? 'red' : 'black',
    fontWeight: 'bold',
    textDecorationLine: 'none'
  },
  TextStyle1: {
    fontSize: 25,
    color: 'blue',

    textDecorationLine: "underline"
  },
  textStyle2: {
    marginLeft: 15,
    fontSize: 25,
  },
  textStyle3: {
    marginLeft: Platform.OS == 'android' ? 5 : 10
  }

})
