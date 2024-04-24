import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';

const ReactNativeFetch = () => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    firstAppCall();
  }, []);

  const firstAppCall = () => {
    fetch('https://reqres.in/api/users/2', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((res) => {
        setIsLoading(false);
        console.log(JSON.stringify(res));
        setFirstName(res.data.first_name);
        setLastName(res.data.last_name);
        setEmail(res.data.email);
        setImageUrl(res.data.avatar);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  };

  return (
    <View style={styles.mainContainer}>
      <Text>First Name: {firstname}</Text>
      <Text>Last Name: {lastname}</Text>
      <Text>Email: {email}</Text>
      {!!imageUrl && (
        <Image style={styles.imageStyle} source={{ uri: imageUrl }} resizeMode='contain' />
      )}

      {isLoading && (
        <View style={styles.loadingView}>
          <ActivityIndicator size={'large'} color={'#0000FF'} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    height: 100,
    width: 100,
  },
  loadingView: {
    position: 'absolute',
    right: 0,
    left: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0000FF',
  },
});

export default ReactNativeFetch;