import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

export default class warranty_item extends Component {
  render() {
    return (
      <View style={styles.warranty_item}>
        <View style={styles.prefix}>
          <Image
            style={styles.img_label}
            source={require('../assets/product_warranty_form/img_label.png')}></Image>
          <View style={styles.product_code}>
            <Text style={styles.text_product}>Mã sản phẩm</Text>
            <Text style={styles.text_code}>{this.props.code}</Text>
          </View>
        </View>
        <View style={styles.center}>
          <Text style={styles.text_product}>Tên sản phẩm</Text>
          <Text style={styles.text_product_name}>{this.props.name}</Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.warranty_date}>
            <Text style={styles.text_active}>Ngày kích hoạt</Text>
            <Text style={styles.text_date}>{this.props.act_date}</Text>
          </View>
          <View style={styles.line_center}></View>
          <View style={styles.warranty_date}>
            <Text style={styles.text_expire}>Hạn bảo hành</Text>
            <Text style={styles.text_date}>{this.props.exp_date}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  });
