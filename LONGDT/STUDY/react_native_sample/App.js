import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  ScrollView,
  FlatList
} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import Warranty_item from './src/components/Warranty_item';

const Slider = (props) => {
  return (
    <View style={{height: 130}}>
      <SliderBox
        parentWidth={390}
        sliderBoxHeight={130}
        ImageComponentStyle={{borderRadius: 8, width: '100%'}}
        disableOnPress={true}
        images={props.list}
        resizeMethod={'resize'}
        resizeMode={'cover'}
        paginationBoxVerticalPadding={3}
        dotColor="#7B2CBF"
        inactiveDotColor="#BBBBBB"
        dotStyle={{
          width: 8,
          height: 2,
          marginHorizontal: -5,
        }}
        autoplay
        circleLoop
      />
    </View>
  );
};

const Title = (props) => {
  return (
    <View style={styles.title_bar}>
      <View style={styles.contain_title}>
        <Text style={styles.title_text}>{props.text}</Text>
        <TouchableOpacity>
          <Text style={styles.more_text}>Xem thêm</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.line}></View>
    </View>
  );
};

const HomeForm = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const formatImgResult = res => {
    let listImgs = [];
    res.map(e => listImgs.push(e.urlImage));

    setData(listImgs.reverse());
  };

  const getData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        'http://app.vjmagroup.com/api/Service/GetHomeScreen',
      );
      const jsonResponse = await response.json();
      formatImgResult(jsonResponse.data.listNews);
      setIsLoading(false);
    } catch (error) {
      console.log(error)
      setIsLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return (
      <View>
        <Text>data loading</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>error</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.img_top}
        source={require('./src/assets/home_form/bg_top.png')}
      />
      <View style={styles.center}>
        <Text style={styles.user_title}>Xin chào, Long</Text>
        <Slider list={data} />
        <Title text="Sản phẩm" />
        {/* <FlatList 
          data={}
          renderItem={({item, index}) => {
            return (
              <Image source={item.img}/>
            )
          }}
        /> */}
      </View>
    </View>
  );
};

const App = () => {
  return HomeForm();
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  img_top: {
    position: 'absolute',
    width: '100%',
    height: 140,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  center: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 15,
  },

  user_title: {
    color: 'white',
    marginBottom: 11,
    fontSize: 16,
    marginTop: 45,
  },

  title_bar: {
    width: '100%',
    marginTop: 20,
  },

  contain_title: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title_text: {
    fontSize: 17,
  },

  more_text: {
    color: '#7B2CBF',
    fontSize: 14,
  },

  line: {
    width: 29,
    height: 4,
    backgroundColor: '#7B2CBF',
    borderRadius: 20,
    marginTop: 6
  },
});

// NOTE STYLE FOR PRODUCT_FORM
//#region <PRODUCT_FORM CSS>
/* const styles = StyleSheet.create({
  text_container: {
    flex: 1
  },

  container: {
    flex: 1,
  },

  container_tab: {
    width: '100%',
    height: 85,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingHorizontal: 15,
    justifyContent: 'flex-end',
  },

  tab_bar: {
    width: '100%',
    height: 32,
    backgroundColor: '#F3F5F9',
    borderRadius: 16,
    marginBottom: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 2,
  },

  contain_text_tab: {
    flex: 1,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
  },

  contain_text_tab_active: {
    backgroundColor: 'white',
  },

  text_tab: {
    fontSize: 14,
    color: '#666666',
  },

  container_product: {
    flex: 1,
    paddingTop: 16,
    paddingHorizontal: 15,
    backgroundColor: '#F3F5F9',
  },

  product_list: {
    flex: 1,
    height: '100%',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },

  list: {
    width: 170,
  },

  product_item: {
    backgroundColor: 'white',
    marginBottom: 16,
    borderRadius: 10,
    alignItems: 'center',
  },

  img_product: {
    width: 164,
    resizeMode: 'contain',
  },

  product_name: {
    fontSize: 15,
    marginTop: 6,
    height: 38,
    marginHorizontal: 5,
    alignSelf: 'flex-start',
  },

  product_price: {
    fontSize: 14,
    color: '#EB2F06',
    marginTop: 10,
    marginBottom: 8,
    alignSelf: 'flex-start',
    marginLeft: 5,
  },

  container_control_bar: {
    position: 'absolute',
    width: '100%',
    height: 80,
    backgroundColor: 'white',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  ic_contain: {
    width: 75,
    height: 47,
    alignItems: 'center',
    marginTop: 6,
  },

  ic_product: {
    flex: 1,
    width: 75,
    resizeMode: 'contain',
  },

  ic_text: {
    fontSize: 12,
    color: '#A9BCC5',
  },

  img_qr: {
    bottom: 18,
  },
}); */
//#endregion

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

const listTab = [
  {
    item: 'Tất cả',
  },
  {
    item: 'Tế bào gốc',
  },
  {
    item: 'Serum',
  },
  {
    item: 'Khác',
  },
];

const tab_item = () => {
  const [item, setItem] = useState('Tế bào gốc');
  const tabChange = (item) => setItem(item);

  return listTab.map((e) => (
    <TouchableOpacity
      style={[
        styles.contain_text_tab,
        item == e.item && styles.contain_text_tab_active,
      ]}
      onPress={() => tabChange(e.item)}>
      <Text style={[styles.text_tab, item == e.item && {color: '#820B8A'}]}>
        {e.item}
      </Text>
    </TouchableOpacity>
  ));
};

const listProduct_1 = [
  {
    image: require('./src/assets/product_form/product_1.png'),
    name: 'De Medicotem Human ',
    price: '1.100.000 đ',
  },
  {
    image: require('./src/assets/product_form/product_3.png'),
    name: 'Serum The Ordinary 30ml',
    price: '390.000 đ',
  },
  {
    image: require('./src/assets/product_form/product_5.png'),
    name: 'De Medicotem Human ',
    price: '705.000 đ',
  },
];

const listProduct_2 = [
  {
    image: require('./src/assets/product_form/product_2.png'),
    name: 'De Medicotem Human ',
    price: '1.350.000 đ',
  },
  {
    image: require('./src/assets/product_form/product_7.png'),
    name: 'Neutrogena Bright Boost Serum',
    price: '850.000 đ',
  },
  {
    image: require('./src/assets/product_form/product_6.png'),
    name: 'Serum Nhụy Hoa Nghệ Tây Genie',
    price: '250.000 đ',
  },
];

const product_item = (list) => {
  return list.map((e) => (
    <View style={styles.product_item}>
      <Image style={styles.img_product} source={e.image} />
      <Text style={styles.product_name}>{e.name}</Text>
      <Text style={styles.product_price}>{e.price}</Text>
    </View>
  ));
};

const nav_bar = (item) => {
  return (
    <TouchableOpacity style={styles.ic_contain}>
      <Image style={styles.ic_product} source={item.image} />
      <Text
        style={[styles.ic_text, item.text == 'Sản phẩm' && {color: '#820B8A'}]}>
        {item.text}
      </Text>
    </TouchableOpacity>
  );
};

const product_form = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container_tab}>
        <View style={styles.tab_bar}>{tab_item()}</View>
      </View>
      <ScrollView>
        <View style={styles.container_product}>
          <View style={styles.product_list}>
            <View style={styles.list}>{product_item(listProduct_1)}</View>
            <View style={styles.list}>{product_item(listProduct_2)}</View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.container_control_bar}>
        {nav_bar({
          text: 'Trang chủ',
          image: require('./src/assets/product_form/ic_home.png'),
        })}
        {nav_bar({
          text: 'Sản phẩm',
          image: require('./src/assets/product_form/ic_product_fill.png'),
        })}
        <Image
          style={styles.img_qr}
          source={require('./src/assets/product_form/img_qr.png')}
        />
        {nav_bar({
          text: 'Thông báo',
          image: require('./src/assets/product_form/ic_notify.png'),
        })}
        {nav_bar({
          text: 'Tài khoản',
          image: require('./src/assets/product_form/ic_acc.png'),
        })}
      </View>
    </View>
  );
};
