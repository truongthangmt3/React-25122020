/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import Login from './screen/login.js'
import Product from './screen/product.js'


const App = () => {
  return (
    <Product />
  );
};

export default App;










// <View style={styles.container}>
    //     <Image
    //       source={require('./src/image/background.png')}
    //       style={styles.background}
    //     />

    //     <Image source={require('./src/image/logo.png')} style={styles.logo} />

    //     <View
    //       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    //       style={styles.login}>
    //       <Text style={styles.textLogin}>Đăng nhập</Text>

    //       <View style={styles.user}>
    //         <TextInput
    //           placeholder={'Username'}
    //           style={styles.textUser}></TextInput>
    //         <Image
    //           style={styles.imageUser}
    //           source={require('./src/image/username.png')}
    //         />
    //       </View>

    //       <View style={styles.user}>
    //         <TextInput
    //           placeholder={'Password'}
    //           style={styles.textUser}></TextInput>
    //         <Image
    //           style={styles.imagePassword}
    //           source={require('./src/image/password.png')}
    //         />
    //       </View>

    //       <TouchableOpacity style={styles.forgetContainer}>
    //         <Text style={styles.forgetPass}>Quên mật khẩu?</Text>
    //       </TouchableOpacity>

    //       <TouchableOpacity style={styles.buttonLogin}>
    //         <Text style={styles.textButton}>ĐĂNG NHẬP</Text>
    //       </TouchableOpacity>

    //       <View style={styles.haveAccount}>
    //         <Text>Bạn chưa có tài khoản? </Text>
    //         <TouchableOpacity>
    //           <Text style={styles.sub}>Đăng ký</Text>
    //         </TouchableOpacity>
    //       </View>
    //     </View>
    //   </View>


// const styles = StyleSheet.create({

//   container: {
//     position: 'relative',
//     backgroundColor: 'white',
//     width: '100%',
//     height: '100%',
//     overflow: 'hidden',
//     alignItems: 'center',
//   },

//   background: {
//     position: 'absolute',
//     width: '140%',
//     height: 390,
//     top: -50,
//     resizeMode: 'cover',
//   },

//   logo: {
//     position: 'absolute',
//     height: 100,
//     width: 100,
//     top: 40,
//   },

//   /**
//    * THIS PART IS FOR LOGIN FORM
//    */
//   login: {
//     position: 'absolute',
//     top: 170,
//     backgroundColor: 'white',
//     width: '90%',
//     flex: 1,
//     shadowColor: 'black',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.5,
//     // shadowRadius: 4,
//     elevation: 10,
//     alignItems: 'center',
//   },

//   /**
//    * TEXT: DANG NHAP
//    */
//   textLogin: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginTop: 20,
//     color: '#8e0694',
//   },

//   /**
//    * FORM USER
//    */
//   user: {
//     width: '80%',
//     height: 50,
//     marginTop: 20,
//     borderColor: '#d595d8',
//     borderStyle: 'solid',
//     borderWidth: 1,
//     borderRadius: 8,
//     flexDirection: 'row',
//   },
//   textUser: {
//     fontSize: 17,
//     marginLeft: 6,
//     width: '86%',
//     color: '#8e0694',
//   },
//   imageUser: {
//     width: 15,
//     height: 18,
//     marginTop: 13,
//     marginLeft: 2,
//   },
//   imagePassword: {
//     width: 20,
//     height: 15,
//     marginTop: 16,
//   },

//   /**
//    * FORGET PASSWORD
//    */
//   forgetContainer: {
//     alignSelf: 'flex-end',
//     marginRight: 30,
//     marginTop: 15,
//   },
//   forgetPass: {
//     fontSize: 13,
//     color: '#8e0694',
//   },

//   /**
//    * BUTTON LOGIN
//    */
//   buttonLogin: {
//     backgroundColor: '#8e0694',
//     width: '60%',
//     height: 45,
//     alignItems: 'center',
//     borderRadius: 8,
//     marginTop: 40,
//   },
//   textButton: {
//     color: 'white',
//     fontSize: 15,
//     marginTop: 12,
//   },

//   /**
//    * EXTENSION
//    */
//   haveAccount: {
//     flexDirection: 'row',
//     marginTop: 30,
//   },
//   sub: {
//     color: '#8e0694',
//   },

//   /**
//    * -------------------------------------------------------------------
//    */
// });
