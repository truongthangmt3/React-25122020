import React, {Component} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Image 
          source={require('../src/image/background.png')}
          style={styles.background}
        />

        <View style={styles.block_logo}>

        </View>

        <KeyboardAvoidingView style={styles.block_login}>
          
        </KeyboardAvoidingView>

      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
  },

  /**
   * BACKGROUND BEHIND
   */
  background: {
    position: 'absolute', top: -100,
    resizeMode: 'contain',
    width: 500, height: 500
  },

  /**
   * BLOCK_LOGO
   */
  block_logo: {
    flex: 1, width: '100%',
    backgroundColor: 'red'
  },

  /**
   *  BLOCK_LOGIN
   */
  block_login: {
    flex: 2, width: '100%',
    backgroundColor: 'green'
  }
  
});
