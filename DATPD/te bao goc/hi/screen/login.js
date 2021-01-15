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

  background: {
    resizeMode: 'contain',
    width: 500, height: 500
  }
  
});
