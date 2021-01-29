/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';

import Login from './screen/login.js'
import Product from './screen/product.js'
import MenuProduct from './screen/MenuProduct.js'
import Tempt from './screen/Tempt.js'
import Banner from './screen/Banner.js'


const App = () => {

  const [color, setColor] = useState('blue')

  return (
    <Tempt />
  );
};

export default App;