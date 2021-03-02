import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Image,
} from 'react-native';
import HTMLView from 'react-native-htmlview';

function ProductDetailScreen({navigation, route}) {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.product_img} source={{uri: route.params.image[0]}} />
      <TouchableOpacity
        style={styles.btn_back}
        onPress={() => navigation.goBack()}>
        <Image
          source={require('../../assets/productDetailForm/btnBackImg.png')}
        />
      </TouchableOpacity>
      <View style={styles.contain_title}>
        <Text style={styles.product_name}>{route.params.name}</Text>
        <Text style={styles.product_price}>
          {route.params.price.toLocaleString().replaceAll(',', '.')}
        </Text>
      </View>
      <View style={styles.seperate}></View>
      <View style={styles.contain_information}>
        <Text style={[styles.text_info, {marginBottom: 17}]}>
          Chi tiết sản phẩm
        </Text>
        <View style={styles.contain_text_info}>
          <Text style={styles.text_info}>Dung tích</Text>
          <Text style={styles.text_info}>{route.params.size}</Text>
        </View>
        <View style={styles.contain_text_info}>
          <Text style={styles.text_info}>Xuất xứ</Text>
          <Text style={styles.text_info}>{route.params.source}</Text>
        </View>
        <View style={styles.contain_text_info}>
          <Text style={styles.text_info}>Bảo hành</Text>
          <Text style={styles.text_info}>{route.params.warranty}</Text>
        </View>
      </View>
      <View style={styles.contain_description}>
        <View style={styles.prefix}>
          <Image
            style={styles.doc_img}
            source={require('../../assets/productDetailForm/docImg.png')}
          />
          <Text style={styles.title_text}>Giới thiệu</Text>
        </View>
        <HTMLView stylesheet={styles} value={route.params.description} />
        <View style={styles.prefix}>
          <Image
            style={styles.doc_img}
            source={require('../../assets/productDetailForm/docImg.png')}
          />
          <Text style={styles.title_text}>Giới thiệu</Text>
        </View>
        <HTMLView stylesheet={styles} value={route.params.instructions}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  product_img: {
    position: 'absolute',
    width: '100%',
    height: 227,
    top: 35,
  },

  btn_back: {
    marginLeft: 22,
  },

  contain_title: {
    marginTop: 170,
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingTop: 16,
    paddingHorizontal: 15,
  },

  product_name: {
    fontSize: 16,
    marginBottom: 16,
  },

  product_price: {
    color: '#EB2F06',
    fontSize: 16,
    marginBottom: 11,
  },

  seperate: {
    width: '100%',
    height: 6,
    backgroundColor: '#F3F5F9',
  },

  contain_information: {
    backgroundColor: 'white',
    paddingTop: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: '#BBBBBB',
  },

  contain_text_info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  text_info: {
    fontSize: 16,
  },

  contain_description: {
    paddingTop: 14,
    paddingHorizontal: 16,
    flex: 1,
  },

  prefix: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 13,
  },

  doc_img: {
    width: 13,
    height: 15,
  },

  title_text: {
    fontSize: 15,
    marginLeft: 8,
  },

  p: {
    fontSize: 15,
    marginBottom: 13,
  },
});

export default ProductDetailScreen;
