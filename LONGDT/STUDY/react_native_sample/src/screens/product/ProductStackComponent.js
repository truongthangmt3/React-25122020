import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ProductScreen from './ProductScreen'
import ProductDetailScreen from './ProductDetailScreen'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'

const Stack = createStackNavigator()

function StackComponent({ navigation, route }) {
    const routeName = getFocusedRouteNameFromRoute(route)
    React.useLayoutEffect(() => {
        if (routeName == 'ProductDetailScreen') {
            navigation.setOptions({tabBarVisible: false})
        } else {
            navigation.setOptions({tabBarVisible: true})
        }
    })

    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name='ProductScreen' component={ProductScreen}/>
            <Stack.Screen name='ProductDetailScreen' component={ProductDetailScreen}/>
        </Stack.Navigator>
    )
}

export default StackComponent
