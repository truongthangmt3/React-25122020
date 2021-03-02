import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProductStackComponent from './src/screens/product/ProductStackComponent';
import HomeScreen from './src/screens/home/HomeScreen';
import HomeIcon from './src/components/tabBarComponent/HomeIcon';
import ProductIcon from './src/components/tabBarComponent/ProductIcon';

const App = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: {fontSize: 12},
          activeTintColor: '#820B8A',
          inactiveTintColor: '#A9BCC5',
        }}>
        <Tab.Screen
          name="Trang chủ"
          component={HomeScreen}
          options={{tabBarIcon: ({color}) => <HomeIcon color={color} />}}
        />
        <Tab.Screen
          name="Sản phẩm"
          component={ProductStackComponent}
          options={{tabBarIcon: ({color}) => <ProductIcon color={color} />}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

// NOTE STYLE FOR PRODUCT_FORM

// NOTE STYLE FOR LOGIN_FORM
//#region <LOGIN_FORM CSS>

/* const styles = StyleSheet.create({
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

}); */
//#endregion

// NOTE STYLE FOR PRODUCT_WARRANTY_FORM
//#region  <PRODUCT_WARRANTY CSS>
/* const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  container_1: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'flex-end',
  },

  nav_bar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    marginHorizontal: 16,
    marginBottom: 14,
  },

  container_ic_left: {
    flex: 1,
    justifyContent: 'center',
  },

  img_left: {
    width: 15,
    resizeMode: 'contain',
  },

  warranty_text: {
    flex: 2,
    fontSize: 17,
    textAlign: 'center',
  },

  container_save_text: {
    flex: 1,
    alignItems: 'flex-end',
  },

  save_text: {
    fontSize: 16,
    color: '#7B2CBF',
  },

  container_2: {
    flex: 8,
    backgroundColor: '#F3F5F9',
    overflow: 'hidden',
  },

  container_warranty_information: {
    backgroundColor: '#F3F5F9',
  },

  shadow_line: {
    width: '100%',
    height: 1,
    backgroundColor: '#D7D9DC',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 5,
    shadowOpacity: 0.9,
  },

  list_form_warranty: {
    flex: 1,
    marginTop: 14,
    marginHorizontal: 15,
  },

  warranty_item: {
    width: '100%',
    height: 152,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    marginBottom: 12,
  },

  prefix: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },

  img_label: {
    width: 36,
    height: 46,
    resizeMode: 'contain',
  },

  product_code: {
    marginTop: 11,
    height: 38,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },

  text_product: {
    fontSize: 12,
    fontWeight: '300',
  },

  text_code: {
    color: '#7B2CBF',
  },

  center: {
    flex: 1,
    justifyContent: 'center',
  },

  text_product_name: {
    fontSize: 16,
  },

  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  warranty_date: {
    height: 35,
    justifyContent: 'space-between',
  },

  text_active: {
    fontSize: 12,
    color: '#3498DB',
  },

  text_date: {
    fontSize: 15,
  },

  line_center: {
    width: 1,
    height: 30,
    backgroundColor: '#BBBBBB',
  },

  text_expire: {
    color: '#EB2F06',
  },
}); */
//#endregion

export default App;

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
            style={styles.container_2}>
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

const warranty_item = (code, name, act_date, exp_date) => (
  <View style={styles.warranty_item}>
    <View style={styles.prefix}>
      <Image
        style={styles.img_label}
        source={require('./src/assets/product_warranty_form/img_label.png')}></Image>
      <View style={styles.product_code}>
        <Text style={styles.text_product}>Mã sản phẩm</Text>
        <Text style={styles.text_code}>{code}</Text>
      </View>
    </View>
    <View style={styles.center}>
      <Text style={styles.text_product}>Tên sản phẩm</Text>
      <Text style={styles.text_product_name}>{name}</Text>
    </View>
    <View style={styles.footer}>
      <View style={styles.warranty_date}>
        <Text style={styles.text_active}>Ngày kích hoạt</Text>
        <Text style={styles.text_date}>{act_date}</Text>
      </View>
      <View style={styles.line_center}></View>
      <View style={styles.warranty_date}>
        <Text style={styles.text_expire}>Hạn bảo hành</Text>
        <Text style={styles.text_date}>{exp_date}</Text>
      </View>
    </View>
  </View>
);

const product_warranty_form = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.container_1}>
          <View style={styles.nav_bar}>
            <TouchableOpacity style={styles.container_ic_left}>
              <Image
                style={styles.img_left}
                source={require('./src/assets/product_warranty_form/arrow_left.png')}></Image>
            </TouchableOpacity>
            <Text style={styles.warranty_text}>Thông tin bảo hành</Text>
            <TouchableOpacity style={styles.container_save_text}>
              <Text style={styles.save_text}>Lưu</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.container_2}>
          <View style={styles.container_warranty_information}>
            <View style={styles.shadow_line}></View>
            <View style={styles.list_form_warranty}>
              {warranty_item(
                '1203143024',
                'React Native Course: BEGINNER TO PRO',
                '15/01/2021',
                '15/05/2021',
              )}
              <Warranty_item
                code="5403143024"
                name="Flutter Course: NOOB TO PRO"
                act_date="30/01/2022"
                exp_date="15/05/2022"
              />
              <Warranty_item
                code="3249242934"
                name="Java Course"
                act_date="20/2/2022"
                exp_date="15/05/2023"
              />
            </View>
          </View>
        </View>
      </View>
    </>
  );
};
