import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

class ProductScreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress = {()=>{
            this.props.navigation.navigate("PRODUCT_DETAIL");
          }}
        >
          <Text> ProductScren </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ProductScreen;
