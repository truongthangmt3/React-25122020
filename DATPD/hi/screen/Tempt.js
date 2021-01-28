import React, { Component, useState, useEffect } from 'react'
import { 
    Text, 
    StyleSheet, 
    View 
} from 'react-native'

const Tempt = ()=>{

    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    const getData = async()=>{
        try {
            setIsLoading(true)

            const response = await fetch('http://vjmagroup.com/api/Service/GetHomeScreen')
            const jsonResponse = await response.json()
            console.log(jsonResponse)
            setData(jsonResponse.data)

            setIsLoading(false)
        } catch (error) {
           setIsLoading(false)
           setError(error)
        }
    }

    useEffect( ()=>{

        // alert('Đã chào đời')

        // This way will be call back hell
        // fetch('http://vjmagroup.com/api/Service/GetHomeScreen')
        // .then( (response)=>{
        //     response.json()
        //     .then( (jsonResponse)=>{
        //         console.log(jsonResponse)
        //     } )
        //     .catch( (error)=>{

        //     } )
        // } )
        // .catch( (error)=>{

        // } )

        getData()

    }, [] )

    if (isLoading) {
        return (
            <Text>Vui long đợi</Text>
        )
    }
    else if (error) {
        return (
            <Text>Đã có lỗi xảy ra</Text> 
        )
    }

    return (
        <View style={styles.container}>
            <Text>{JSON.stringify(data.listProduct[0].name)}</Text>
        </View>
    )
}
export default Tempt



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center', justifyContent: 'center',
        backgroundColor: 'lightblue'
    }
})
