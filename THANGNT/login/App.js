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
  StatusBar,
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

const item = () => {
  return (
    <Image style={styles.item} source={require('./src/assets/ic_user.png')} />
  );
};

const renderWarrantyInfo = () => {
  return (
    <>
      <View style={{flex: 1, backgroundColor: 'green'}}>
      <Image style={styles.item} source={require('./src/assets/img_item.png')} />
      </View>
    </>
  );
};

const renderLogin = () => {
  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <Image
            style={styles.img_bg}
            source={require('./src/assets/img_login_bg.png')}
          />
          <View style={styles.block_1}>
            <Image
              style={styles.icon_app}
              source={require('./src/assets/ic_app.png')}
            />
          </View>

          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.block_2}>
            {/* <View style={styles.block_2}> */}
            <View style={styles.input}>
              <Text style={styles.title}>Đăng nhập</Text>

              <View style={styles.user_contain}>
                <TextInput
                  placeholder={'Tên tài khoản'}
                  style={styles.input_user}></TextInput>
                <Image
                  style={styles.ic_user}
                  source={require('./src/assets/ic_user.png')}
                />
              </View>
              <View style={styles.user_contain}>
                <TextInput
                  secureTextEntry={true}
                  placeholder={'Mật khẩu'}
                  style={styles.input_user}></TextInput>
                <Image
                  style={styles.ic_user}
                  source={require('./src/assets/ic_show_pass.png')}
                />
              </View>
              <Text style={styles.forget_pass}>Quên mật khẩu?</Text>

              <TouchableOpacity style={styles.button_login}>
                <Text style={styles.text_login}>Đăng nhập</Text>
              </TouchableOpacity>
              <View style={styles.register}>
                <Text style={styles.register_prefix}>
                  Bạn chưa có tài khoản?
                </Text>
                <TouchableOpacity>
                  <Text style={styles.register_end}>Đăng ký</Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* </View> */}
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

const App = () => {
  return <View style={styles.container}>{renderWarrantyInfo()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  item: {
    // width : 500,
    height: 200,
    // width: '90%',
    // maxHeight: 200,
    // aspectRatio: 2,
    aspectRatio: 2,
    backgroundColor: 'blue',
    resizeMode: 'contain',
  },
  img_bg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  block_1: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  block_2: {
    width: '100%',
    flex: 2,
  },
  icon_app: {
    width: 130,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
  },

  user_contain: {
    marginHorizontal: 15,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    marginTop: 35,
    borderRadius: 10,
    borderColor: '#A9BCC5',
    borderWidth: 1,
  },

  ic_user: {
    width: 15,
    resizeMode: 'contain',
  },
  input_user: {
    flex: 1,
  },

  input: {
    minHeight: 40,
    alignItems: 'center',
    marginHorizontal: 15,
    minHeight: 500,
    borderRadius: 10,
    resizeMode: 'contain',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#e6e6e6',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
  },

  forget_pass: {
    alignSelf: 'flex-end',
    marginRight: 19,
    marginTop: 27,
    fontSize: 13,
    fontWeight: '300',
    color: '#820B8A',
  },

  button_login: {
    height: 50,
    width: '90%',
    backgroundColor: '#820B8A',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginHorizontal: 15,
    marginTop: 40,
  },

  text_login: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  register: {
    flexDirection: 'row',
    marginTop: 41,
  },
  register_prefix: {
    marginTop: 2,
  },
  register_end: {
    color: '#820B8A',
    fontSize: 16,
    marginLeft: 3,
  },
});

export default App;
