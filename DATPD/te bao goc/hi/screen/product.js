import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Element = () => {
  return (
    <View style={styleElement.container}>

      <View style={styleElement.block}>
        <View style={{}}>

        </View>

        <View
          style={styleElement.block1_right}>
          <Text style={{fontSize: 12, color: 'black'}}>Mã sản phẩm</Text>
          <Text style={{fontSize: 17, color: '#812cc5'}}>DCTV32D8900ES</Text>
        </View>
      </View>


      <View style={styleElement.block}>
        <View style={styleElement.block2}>
          <Text style={{fontSize: 12, color: 'black'}}>Tên sản phẩm</Text>
          <Text style={{fontSize: 15, color: 'black', fontWeight: 'bold'}}>Tế bào gốc De Medicotem Human White</Text>
        </View>
      </View>


      <View style={styleElement.block}>
        <View style={styleElement.block3_left}>
          <Text style={{fontSize: 12, color: '#3c9de1'}}>Ngày kích hoạt</Text>
          <Text style={{fontSize: 15, color: 'black'}}>09/09/2020</Text>
        </View>

        <View style={styleElement.block3_right}>
            <Text style={{fontSize: 12, color: '#f24825'}}>Hạn bảo hành</Text>
            <Text style={{fontSize: 15, color: 'black'}}>09/09/2023</Text>
        </View>
      </View>
    </View>
  );
};

const styleElement = StyleSheet.create({
  container: {
    width: '90%',
    minHeight: 100,
    backgroundColor: 'white',
    padding: 10, marginVertical: 10,
    borderRadius: 10
  },

  /**
   * Style for all block form 1->3
   */
  block: {
    width: '100%',
    height: 40,
    marginVertical: 5,
    flexDirection: 'row',
  },

  /** 
   * BLOCK 1
  */
  block1_left: {

  },
  block1_right: {
    position: 'absolute',
    right: 0,
    width: '50%',
    height: '100%',
    alignItems: 'flex-end',
  },


  /**
   * BLOCK 2
   */
  block2: {
    alignSelf: 'flex-start'
  },


  /**
   * BLOCK 3
   */
  block3_left: {
    width: '50%',
    height: '100%',
    borderRightColor: '#bababa',
    borderRightWidth: 0.5
  },
  block3_right: {
    width: '50%',
    height: '100%',
    alignItems: 'flex-end'
  }
 
});


export default class Product extends Component {
  render() {
    return (
      <View
        style={{
          alignItems: 'center',
          flex: 1,
          backgroundColor: '#e1e3e6',
        }}>
        <Element />
        <Element />
        <Element />
      </View>
    );
  }
}
