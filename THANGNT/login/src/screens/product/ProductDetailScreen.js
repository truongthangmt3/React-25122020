import React from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
function ProductDetailScreen({navigation}) {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <TouchableOpacity
                onPress={()=>{
                    // navigation.navigate("PRODUCT")
                    navigation.goBack();
                }}
            >
          <Text>Product Detail</Text>  
          </TouchableOpacity>
        </View>
    )
}

export default ProductDetailScreen
