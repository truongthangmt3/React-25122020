import React, { Component, useState, useEffect, useRef } from 'react'
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    FlatList,
    Image,
    Animated,
    Dimensions
} from 'react-native'
import { SliderBox } from 'react-native-image-slider-box'


const BannerElement = () => {

    const [data, setData] = useState([
        require('../src/image/product_list/01.png'),
        require('../src/image/product_list/02.png'),
        require('../src/image/product_list/03.png')
    ])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    /** 
     * GET DATA FROM API
    */
    const setUrlImageToData = (props) => {
        let listUrl = []
        props.map((e) => {
            listUrl.push(e.urlImage)
        })
        setData(listUrl)
    }

    const getData = async () => {

        try {
            setLoading(true)
            const res = await fetch('http://app.vjmagroup.com/api/Service/GetHomeScreen')
            const jsonRes = await res.json()

            // setData(jsonRes.data.listBanner)
            setUrlImageToData(jsonRes.data.listBanner)

            setLoading(false)
        } catch (error) {
            setLoading(false)
            setError(error)
        }
    }

    useEffect(() => {
        getData()
    }, [])


    /**
     *  HANDLE CLICK LEFT AND RIGHT
     */
    const animation = useRef(new Animated.Value(0))
    const [currentImage, setCurrentImage] = useState(0)

    const handleClickDirection = (number)=>{
        let newCurrentImage = currentImage + number

        if (newCurrentImage>=data.length) newCurrentImage=0
         else if (newCurrentImage<0) newCurrentImage=data.length-1

        Animated.spring(animation.current, {
            toValue: -(Dimensions.get('screen').width * newCurrentImage),
            useNativeDriver: true
        }).start()
        setCurrentImage(newCurrentImage)
    }

    /**
     * DOTS HANDLE STATUS OF SLIDE IMAGE
     */
    
    const handleClickDot = ()=>{

    }


    /**
     * DISPLAY TO THE SCREEN
     */
    if (loading) {
        return (
            <View style={styles.bannerElement}>
                <Text>Is Loading</Text>
            </View>
        )
    }
    else if (error) {
        return (
            <View style={styles.bannerElement}>
                <Text>Have error</Text>
            </View>
        )
    }
    else {
        return (
            <View style={styles.bannerElement}>

                <Image
                    style={{
                        position: 'absolute',
                        alignSelf: 'center',
                        width: '100%', height: 100,
                        top: 0
                    }}
                    source={require('../src/image/banner/background.png')}
                />

                <View
                    style={{
                        width: '90%', height: '20%',
                        alignItems: 'center', justifyContent: 'center',
                    }}
                >
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Xin chào, Đức Đạt</Text>
                </View>

                <View style={styleBanner.boxSlide} >
                    {/* <SliderBox
                        images={data}
                        dotColor='purple'
                        autoplay
                        circleLoop
                    /> */}
                    <Animated.View 
                        style={[
                            styleBanner.slideComponents, 
                            {transform: [{translateX: animation.current}]}
                        ]}
                    >
                        {data.map( (urlImage)=>(
                            <Image 
                                source={{uri: urlImage}}
                                // source={urlImage}
                                style={styleBanner.image}
                            />
                        ) )}
                    </Animated.View>

                    
                    <TouchableOpacity 
                        style={[styleBanner.buttonDirection, {right: 5}]}
                        onPress={ ()=>handleClickDirection(1) }
                    >
                        <Text style={{fontSize: 15, color: 'purple'}}> &#10095; </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={[styleBanner.buttonDirection, {left: 5}]}
                        onPress={ ()=>handleClickDirection(-1) }
                    >
                        <Text style={{fontSize: 15, color: 'purple'}}> 	&#10094; </Text>
                    </TouchableOpacity>


                    <View style={styleBanner.dotStatus}>
                        {
                            data.map( ()=>(
                                <View 
                                    style={styleBanner.dot}
                                > 
                                </View>
                            ) )
                        }
                    </View>

                </View>
            </View>
        )
    }
}
const styleBanner = StyleSheet.create({
    boxSlide: {
        width: '90%', height: '80%',
        borderRadius: 15,
        alignItems: 'center', justifyContent: 'center',
        // backgroundColor: 'red',
        overflow: 'hidden'
    },
    slideComponents: {
        width: '100%', height: '100%',
        flexDirection: 'row'
    },
    image: {
        resizeMode: 'cover',
        width: '100%', height: '100%'
    },
    buttonDirection: {
        position: 'absolute',
        backgroundColor: 'white',
        width: 30, height: 30,
        borderRadius: 13,
        alignItems: 'center', justifyContent: 'center',
        opacity: .3
    },
    dotStatus: {
        position: 'absolute',
        width: '100%', height: 30, borderRadius: 10,
        // backgroundColor: 'red',
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center', justifyContent: 'center'
    }, 
    dot: {
        width: 13, height: 13, borderRadius: 8,
        backgroundColor: 'red',
        marginHorizontal: 10,
    }
})


const ProductList = () => {
    return (
        <View style={styles.productList}>

        </View>
    )
}


const ButtonControl = () => {

    const listButton = [
        {
            image: require('../src/image/icon/Home.png')
        },
        {
            image: require('../src/image/icon/Product.png')
        },
        {
            image: require('../src/image/icon/Select.png')
        },
        {
            image: require('../src/image/icon/Notification.png')
        },
        {
            image: require('../src/image/icon/Account.png')
        }
    ]

    return (
        <View style={styles.ButtonControl}>
            {
                listButton.map((item) => (
                    <TouchableOpacity style={{ flex: 1 }}>
                        <Image style={{ flex: 0.8, resizeMode: 'contain' }} source={item.image} />
                    </TouchableOpacity>
                ))
            }
        </View>
    )
}


const Banner = () => {

    return (
        <View style={styles.container}>
            <BannerElement />
            <ProductList />
            <ButtonControl />
        </View>
    )
}
export default Banner


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'lightblue',
    },

    bannerElement: {
        flex: 3,
        alignItems: 'center', justifyContent: 'center'
    },

    productList: {
        flex: 8,
        backgroundColor: 'green'
    },

    ButtonControl: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center', alignItems: 'center'
    }
})
