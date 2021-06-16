import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class AppHeader2 extends React.Component{
    render(){
      return(
        <View style= {styles.textContainer}>
          <Text style={styles.text}>ReadStory</Text>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    textContainer:{
      backgroundColor: 'blue',
    },
    text:{
      color: 'white',
      padding: 20,
      fontSize: 22,
      fontWeight: 'bold',
      textAlign: 'center',
    }
  });
  
  export default AppHeader2;