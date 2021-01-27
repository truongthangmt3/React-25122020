import React, { Component, useState } from 'react';
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native';

class BlockButton extends Component {
    state = {
        color: 'black',
        radiusBorder: 0,
        colorBackground: 'transparent',
    };

    clickButton = () => {
        this.setState({
            color: this.state.color === 'black' ? '#820B8A' : 'black',
            radiusBorder: this.state.radiusBorder === 0 ? 50 : 0,
            colorBackground:
                this.state.colorBackground === 'transparent' ? 'white' : 'transparent',
        });
    };

    render() {
        return (
            <TouchableOpacity
                style={{
                    flex: 1,
                    height: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: this.state.colorBackground,
                    borderRadius: this.state.radiusBorder,
                }}
                onPress={this.clickButton}>
                <Text
                    style={{
                        color: this.state.color,
                        fontSize: 15,
                    }}>
                    {this.props.name}
                </Text>
            </TouchableOpacity>
        );
    }
}

class Product extends Component {

    price = this.props.price + ' đ';

    render() {
        // const link = require(this.props.src)

        return (
            <View style={styles.product}>
                <Image
                    style={styles.product_image}
                    source={this.props.src}
                />
                <Text style={styles.product_name}>{this.props.name}</Text>
                <Text style={styles.product_price}>{this.price}</Text>
            </View>
        );
    }
}

export default class MenuProduct extends Component {

    changeIcon = (id) => {
        alert(id);
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.block_button_grand}>
                    <View style={styles.block_button_father}>
                        <BlockButton name="Tất cả" />
                        <BlockButton name="Tế bào gốc" />
                        <BlockButton name="Serum" />
                        <BlockButton name="Khác" />
                    </View>
                </View>

                <View style={styles.block_product_grand}>
                    <ScrollView style={styles.block_product_father}>
                        <View style={styles.block_product}>
                            <View style={styles.block_product_left}>
                                <Product
                                    src={require('../src/image/product_list/01.png')}
                                    name="GPX Legend 200cc"
                                    price="1.000.000"
                                />
                                <Product name="Black pink" price="18" />
                            </View>

                            <View style={styles.block_product_right}>
                               
                                {/* <Product
                                    src="../src/image/product_list/02.png"
                                    name="Tế bào gốc"
                                    price="1000"
                                />
                                <Product
                                    src="../src/image/product_list/03.png"
                                    name="Security"
                                    price="1000"
                                />
                                <Product
                                    src="../src/image/product_list/04.png"
                                    name="List"
                                    price="1000"
                                /> */}
                                
                            </View>
                        </View>
                    </ScrollView>
                </View>

                <View style={styles.block_control}>
                    <TouchableOpacity
                        style={styles.icon}
                        onPress={ ()=>this.changeIcon(1) }
                    >
                        <Image source={require('../src/image/icon/Home.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.icon}
                        onPress={ ()=>this.changeIcon(2) }
                    >
                        <Image source={require('../src/image/icon/Product_Click.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.icon}
                        onPress={ ()=>this.changeIcon(3) }
                    >
                        <Image source={require('../src/image/icon/Select.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.icon}
                        onPress={ ()=>this.changeIcon(4) }
                    >
                        <Image source={require('../src/image/icon/Notification.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.icon}
                        onPress={ ()=>this.changeIcon(5) }
                    >
                        <Image
                            style={styles.icon}
                            source={require('../src/image/icon/Account.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },

    /**
     * BLOCK 4 BUTTON ABOVE
     */
    block_button_grand: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    block_button_father: {
        width: '90%',
        height: '65%',
        backgroundColor: '#F3F5F9',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },

    /**
     * BLOCK PRODUCT
     */
    block_product_grand: {
        flex: 10,
        width: '100%',
    },
    block_product_father: {
        width: '100%',
        backgroundColor: '#F3F5F9',
    },
    block_product: {
        width: '100%',
        minHeight: 300,
        flexDirection: 'row',
    },

    block_product_left: {
        width: '42.5%',
        marginLeft: '5%',
        marginRight: '2.5%',
    },
    block_product_right: {
        width: '42.5%',
        marginLeft: '2.5%',
        marginRight: '5%',
    },
    /**
     * EACH PRODUCT IS CONTAIN IN A VIEW
     */
    product: {
        width: '100%',
        maxHeight: 280,
        backgroundColor: 'white',
        marginVertical: 10,
        borderRadius: 10,
        overflow: 'hidden',
    },
    product_image: {
        resizeMode: 'contain',
        width: '90%',
        minHeight: 150,
        maxHeight: 200,
        // backgroundColor: 'green',
        alignSelf: 'center',
    },
    product_name: {
        width: '100%',
        height: 40,
        fontSize: 15,
        color: 'black',
        textAlignVertical: 'center',
        padding: 5,
    },
    product_price: {
        width: '100%',
        height: 40,
        fontSize: 15,
        color: '#EB2F06',
        textAlignVertical: 'center',
        padding: 5,
    },

    /**
     * BLOCK CONTROLLER
     */
    block_control: {
        flex: 1.2,
        width: '100%',
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        flex: 1,
    },
});
