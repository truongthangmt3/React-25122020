import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import Image from 'react-native-scalable-image';

const listTab = [
  {
    item: 'Tất cả',
  },
  {
    item: 'Tế bào gốc',
  },
  {
    item: 'Serum',
  },
  {
    item: 'Khác',
  },
];

const tab_item = () => {
  const [item, setItem] = useState('Khác');
  const tabChange = (item) => setItem(item);

  return listTab.map((e) => (
    <TouchableOpacity
      style={[
        styles.contain_text_tab,
        item == e.item && styles.contain_text_tab_active,
      ]}
      onPress={() => tabChange(e.item)}>
      <Text style={[styles.text_tab, item == e.item && {color: '#820B8A'}]}>
        {e.item}
      </Text>
    </TouchableOpacity>
  ));
};

const ProductItem = ({navigation, list}) => {
  return (
  list.map((e) => (
      <TouchableOpacity
        style={styles.ProductItem}
        onPress={() => navigation.navigate('ProductDetailScreen', e)}>
        <Image
          style={styles.img_product}
          width={170}
          source={{
            uri: e.image[0],
          }}
        />
        <Text style={styles.product_name}>{e.name}</Text>
        <Text style={styles.product_price}>
          {e.price.toLocaleString().replaceAll(',', '.')}
        </Text>
      </TouchableOpacity>
  )))
};

function ProductScreen({navigation}) {
  const [list1, setList1] = useState([]);
  const [list2, setList2] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const listProduct1 = [];
  const listProduct2 = [];

  const HandleData = (res) => {
    while (res.length > 0) {
      setIsLoading(true);
      if (listProduct1.length < 5) {
        listProduct1.push(res.pop());
      } else {
        listProduct2.push(res.pop());
      }
    }

    setList1(listProduct1);
    setList2(listProduct2);
  };

  const GetData = async () => {
    try {
      const response = await fetch(
        'http://app.vjmagroup.com/api/Service/getListProduct',
      );
      const jsonRes = await response.json();
      HandleData(jsonRes.data.listProduct);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.container_tab}>
        <View style={styles.tab_bar}>{tab_item()}</View>
      </View>
      <ScrollView>
        <View style={styles.container_product}>
          <View style={styles.product_list}>
            <View style={styles.list}>
              <ProductItem
                navigation={navigation}
                list={list1}
                loading={isLoading}
              />
            </View>
            <View style={styles.list}>
              <ProductItem navigation={navigation} list={list2} />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

//#region <PRODUCT_FORM CSS>
const styles = StyleSheet.create({
  text_container: {
    flex: 1,
  },

  container: {
    flex: 1,
  },

  container_tab: {
    width: '100%',
    height: 85,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingHorizontal: 15,
    justifyContent: 'flex-end',
  },

  tab_bar: {
    width: '100%',
    height: 32,
    backgroundColor: '#F3F5F9',
    borderRadius: 16,
    marginBottom: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 2,
  },

  contain_text_tab: {
    flex: 1,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
  },

  contain_text_tab_active: {
    backgroundColor: 'white',
  },

  text_tab: {
    fontSize: 14,
    color: '#666666',
  },

  container_product: {
    flex: 1,
    paddingTop: 16,
    paddingHorizontal: 15,
    backgroundColor: '#F3F5F9',
  },

  product_list: {
    flex: 1,
    height: '100%',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },

  list: {
    width: 170,
  },

  ProductItem: {
    backgroundColor: 'white',
    marginBottom: 16,
    borderRadius: 10,
    alignItems: 'center',
  },

  img_product: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    resizeMode: 'contain',
  },

  product_name: {
    fontSize: 15,
    marginTop: 6,
    marginHorizontal: 5,
    alignSelf: 'flex-start',
    flexShrink: 1,
  },

  product_price: {
    fontSize: 14,
    color: '#EB2F06',
    marginTop: 10,
    marginBottom: 8,
    alignSelf: 'flex-start',
    marginLeft: 5,
  },

  ic_contain: {
    width: 75,
    height: 47,
    alignItems: 'center',
    marginTop: 6,
  },

  ic_product: {
    flex: 1,
    width: 75,
    resizeMode: 'contain',
  },

  ic_text: {
    fontSize: 12,
    color: '#A9BCC5',
  },

  img_qr: {
    bottom: 18,
  },
});
//#endregion

export default ProductScreen;
