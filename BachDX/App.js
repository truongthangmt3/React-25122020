import React, {useState, useEffect} from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Button,
} from 'react-native';
import Warrantyitem from './src/Warrantyitem';

const content = () => {
  return (
    <>
      <View style={styles.block2_1}>
        <Warrantyitem
          ad_image={require('./Image/Image_1.png')}
          name={'De Medicotem'}
          price={'1.100.000 đ'}></Warrantyitem>
        <Warrantyitem
          ad_image={require('./Image/Image2.png')}
          name={'De Medicotem'}
          price={'1.350.000 đ'}></Warrantyitem>
      </View>
      <View style={styles.block2_1}>
        <Warrantyitem
          ad_image={require('./Image/Image_3.png')}
          name={'Tế bào gốc CLINICARE'}
          price={'2.050.000 đ'}></Warrantyitem>
        <Warrantyitem
          ad_image={require('./Image/Image_4.png')}
          name={'Bqcell Re-Cell Cure Ampule'}
          price={'850.000 đ'}></Warrantyitem>
      </View>
      <View style={styles.block2_1}>
        <Warrantyitem
          ad_image={require('./Image/Image_5.png')}
          name={'De Medicotem'}
          price={'1.100.000 đ'}></Warrantyitem>
        <Warrantyitem
          ad_image={require('./Image/Image_6.png')}
          name={'De Medicotem'}
          price={'1.350.000 đ'}></Warrantyitem>
      </View>
    </>
  );
};
const DATA = [
  {
    id: '1',
    title: 'Tất cả',
  },
];
const DATA2 = [
  {
    id: '2',
    title: 'Tế bào gốc',
  },
];
const DATA3 = [
  {
    id: '3',
    title: 'Serum',
  },
];
const DATA4 = [
  {
    id: '4',
    title: 'Khác',
  },
];
const Item = ({item, onPress, style}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
);
const abc = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? 'white' : '#F3F5F9';
    const color = item.id === selectedId ? 'yellow' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={{backgroundColor, color}}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
      <FlatList
        data={DATA2}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
      <FlatList
        data={DATA3}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
      <FlatList
        data={DATA4}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const App = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = async ()=> {
    try {
      setLoading(true);
      const response = await fetch(
        'http://vjmagroup.com/api/Service/GetHomeScreen',
      );
      const jsonResponse = await response.json();
      setData(jsonResponse.data);
      console.log(jsonResponse);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  };

  useEffect(() => {
    console.log('Đã hiển thị');
    getData();
    // sẽ bị callback hell
    // fetch('http://vjmagroup.com/api/Service/GetHomeScreen')
    //   .then((response) => {
    //     response
    //       .json()
    //       .then((jsonResponse) => {
    //         console.log(jsonResponse);
    //       })
    //       .catch((error) => {});
    //   })
    //   .catch((error) => {});
  }, []);
  if (loading) {
    return <Text>Vui lòng đợi</Text>;
  }
  if (error) {
    return <Text>Đã có lỗi sảy ra</Text>;
  }
  const link = JSON.stringify(data.listBanner[0].urlImage)
  return (
    
        <>
      <View style={styles.main}>
        <Text>{JSON.stringify(data.listBanner[0].urlImage)}{link}</Text>
        <Image
          source={{
            uri : link
          }}
          style={{
            height:130,
            width:345,
          }}
        ></Image>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'red',
  },
});
export default App;
