/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
  <View style={{
    backgroundColor: 'lightblue',
    width: '100%',
    height: '100%',
  }}
  >
    <Image
      style={{
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginTop: 140,                   
      }}
      source={{
        uri: 'https://img.icons8.com/clouds/2x/google-logo.png',
      }}
    />       
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          borderBottomWidth:1,
        }}
      >
        <TextInput
          style={{
            marginTop: 30,
            width: 250,
            height: 50,
            
          }}
        >Username</TextInput>
          <Image
          style={{
            width: 50,
            height: 50,
            marginTop: 30,                      
          }}
          source={{
            uri: 'https://img.icons8.com/clouds/2x/google-logo.png',
          }}
          />       
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          borderBottomWidth:1,
        }}
      >
        <TextInput
          style={{
            marginTop: 30,
            width: 250,
            height: 50,
            
          }}
        >Passcode</TextInput>
          <Image
          style={{
            width: 50,
            height: 50,
            marginTop: 30,                      
          }}
          source={{
            uri: 'https://img.icons8.com/clouds/2x/google-logo.png',
          }}
          />       
      </View>
    <View
      style={{
        marginTop: 30,
        alignSelf: 'center',
        width: 200,
        height: 40,
        backgroundColor: 'lightgreen',
      }}
      >
        <Button                                 
          title="Log in"
          color="blue"         
        />
    </View>
    <View
      style={{
        marginTop: 10,
        alignSelf: 'center',

      }}
    >
      <Text>
        Having issue?
      </Text>
    </View>
    <View
      style={{
        marginTop: 30,
        alignSelf: 'center',

      }}
    >
      <Text>
        
        Are you a newbie?
      </Text>     
    </View>
    <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          borderBottomWidth:1,
        }}
      >
      </View>
  </View>
);
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
