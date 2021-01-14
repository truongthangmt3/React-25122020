/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from 'react-native';

const login_form = () => {
  return (
    <>
      <TouchableWithoutFeedback>
        <View style={styles.container}>
          <Image
            source={require('./src/assets/login_form/bg.png')}
            style={styles.img_bg}
          />
          <View style={styles.container_1}>
            <Image
              source={require('./src/assets/login_form/logo.png')}
              style={styles.img_lg}
            />
          </View>
          <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container_2}
          >
            <View style={styles.container_2}>
              <View style={styles.user_container}>
                <Text style={styles.title}>Đăng nhập</Text>
                <View style={styles.user_input}>
                  <TextInput
                    placeholder="Tên tài khoản"
                    placeholderTextColor="black"
                    style={styles.ip_type}></TextInput>
                  <Image
                    source={require('./src/assets/login_form/user.jpg')}
                    style={styles.img_type}
                  />
                </View>
                <View style={styles.user_input}>
                  <TextInput
                    placeholder="Mật khẩu"
                    placeholderTextColor="black"
                    secureTextEntry={true}
                    style={styles.ip_type}></TextInput>
                  <Image
                    source={require('./src/assets/login_form/pass_show.jpg')}
                    style={styles.img_type}
                  />
                </View>
                <TouchableOpacity style={styles.contain_forget_text}>
                  <Text style={styles.forget_pass}>Quên mật khẩu?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.submit_button}>
                  <Text style={styles.submit_text}>ĐĂNG NHẬP</Text>
                </TouchableOpacity>
                <View style={styles.register}>
                  <Text style={styles.register_prefix}>
                    Bạn chưa có tài khoản?
                  </Text>
                  <TouchableOpacity style={styles.register_click}>
                    <Text style={styles.register_text}>Đăng ký</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

const App = () => {
  return login_form();
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  img_bg: {
    position: 'absolute',
    resizeMode: 'cover',
    width: '100%',
  },

  container_1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  img_lg: {
    resizeMode: 'contain',
    width: 130,
    marginTop: 20,
  },

  container_2: {
    flex: 2.5,
    marginHorizontal: 10,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 40,
  },

  user_container: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 30,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 10,
    shadowOpacity: 0.2,
  },

  user_input: {
    width: '100%',
    borderColor: '#A9BCC5',
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    height: 60,
    paddingHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },

  ip_type: {
    flex: 1,
    color: 'black',
    fontSize: 20,
  },

  img_type: {
    width: 17,
    resizeMode: 'contain',
  },

  contain_forget_text: {
    alignSelf: 'flex-end',
    marginTop: 27,
  },

  forget_pass: {
    color: '#820B8A',
  },

  submit_button: {
    width: '100%',
    backgroundColor: '#820B8A',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 40,
  },

  submit_text: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },

  register: {
    flexDirection: 'row',
    marginTop: 47,
    marginBottom: 50,
  },

  register_prefix: {
    fontSize: 16,
  },

  register_click: {
    marginLeft: 13,
  },

  register_text: {
    fontSize: 16,
    color: '#820B8A',
  },
});

export default App;
