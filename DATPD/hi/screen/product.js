import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, NativeModules } from 'react-native';


class Element extends Component {

  render() {
    return (
        <View style={styleElement.container}>

        <View style={styleElement.block}>
          <View style={styleElement.block1_left}>
            <Image 
              source={require('../src/image/login/screen.jpg')}
              style={styleElement.block1_left_img}
            />
          </View>
  
          <View
            style={styleElement.block1_right}>
            <Text style={{fontSize: 12, color: 'black'}}>Mã sản phẩm</Text>
            <Text style={{fontSize: 17, color: '#812cc5'}}>{this.props.code}</Text>
          </View>
        </View>
  
  
        <View style={styleElement.block}>
          <View style={styleElement.block2}>
            <Text style={{fontSize: 12, color: 'black'}}>Tên sản phẩm</Text>
            <Text style={{fontSize: 15, color: 'black', fontWeight: 'bold'}}>{this.props.name}</Text>
          </View>
        </View>
  
  
        <View style={styleElement.block}>
          <View style={styleElement.block3_left}>
            <Text style={{fontSize: 12, color: '#3c9de1'}}>Ngày kích hoạt</Text>
            <Text style={{fontSize: 15, color: 'black'}}>{this.props.active_day}</Text>
          </View>
  
          <View style={styleElement.block3_right}>
              <Text style={{fontSize: 12, color: '#f24825'}}>Hạn bảo hành</Text>
              <Text style={{fontSize: 15, color: 'black'}}>{this.props.exp_day}</Text>
          </View>
        </View>
      </View>
    )
  }
}

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
  block1_left_img: {
    width: 50, height: 50,
    resizeMode: 'contain',
    marginTop: -13
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

        <Element 
          code='Windsof001' 
          name='Klay Thompson'
          active_day='01/01/2020'
          exp_day='14/12/2021'
        />

        <Element 
          code='Why so serious'
          name='Jayson Tatom'
          active_day='02/20/2020'
          exp_day='30/12/2000'
        />

        <Element 
          code='How to train dragon'
          name='Kyrie Irving'
          active_day='19/08/780'
          exp_day='07/08/2012'
        />

      </View>
    );
  }
}
