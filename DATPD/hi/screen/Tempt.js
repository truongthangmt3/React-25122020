import React, { Component, useState, useEffect, useRef } from 'react'
import {
    Text,
    StyleSheet,
    View,
    Image,
    Animated,
    Dimensions,
    TouchableOpacity
} from 'react-native'
import { SliderBox } from 'react-native-image-slider-box'

// const Tempt = () => {

//     const [images, setImages] = useState([
//         require('../src/image/product_list/01.png'),
//         require('../src/image/product_list/02.png')
//     ])

//     const animation = useRef(new Animated.Value(0))
//     const [currentImage, setCurrentImage] = useState(0)

//     const handleAnimation = ()=>{
//         let newCurrentImage = currentImage + 1
//         Animated.spring(animation.current, {
//             toValue: -(Dimensions.get('screen').width*newCurrentImage),
//             useNativeDriver: true
//         }).start()
//         setCurrentImage(newCurrentImage)
//     }


//     return (
//         <View style={styles.container}>
//             <Animated.View style={[styles.slide, {
//                 transform: [{translateX: animation.current}]
//             }]}>
//                 {images.map( (image)=>(
//                     <Image
//                         source={image}
//                         style={styles.image}
//                         key={image}
//                     />
//                 ) )}
//             </Animated.View>

//             <TouchableOpacity
//                 onPress={ handleAnimation }
//             >
//                 <Text>Move</Text>
//             </TouchableOpacity>
//         </View>
//     )
// }
// export default Tempt

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center', justifyContent: 'center',
//     },

//     slide: {
//         height: 250, width: '100%',
//         flexDirection: 'row',
//         backgroundColor: 'lightblue'
//     },

//     image: {
//         resizeMode: 'cover',
//         height: 200, width: Dimensions.get('screen').width
//     }
// })


const Tempt = ()=>{

    const [data, setData] = useState([
        require('../src/image/product_list/01.png'),
        require('../src/image/product_list/02.png')
    ])

    return (
        <View style={styles.container}>
            
            <View style={styles.boxSlide}>

                <Animated.View style={styles.slideComponent}>

                </Animated.View>

            </View>

        </View>
    )
}
export default Tempt

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
        alignItems: 'center', justifyContent: 'center'
    },

    boxSlide: {
        backgroundColor: 'white',
        width: '100%', height: 200,
    },

    slideComponent: {
        flex: 1,
        backgroundColor: 'red'
    }
})