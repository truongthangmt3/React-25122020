import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';

const Slider = (props) => {
  return (
    <View style={{height: 130}}>
      <SliderBox
        parentWidth={390}
        sliderBoxHeight={130}
        ImageComponentStyle={{borderRadius: 8, width: '100%'}}
        disableOnPress={true}
        images={props.list}
        resizeMethod={'resize'}
        resizeMode={'cover'}
        paginationBoxVerticalPadding={3}
        dotColor="#7B2CBF"
        inactiveDotColor="#BBBBBB"
        dotStyle={{
          width: 8,
          height: 2,
          marginHorizontal: -5,
        }}
        autoplay
        circleLoop
      />
    </View>
  );
};

const Title = (props) => {
  return (
    <View style={styles.title_bar}>
      <View style={styles.contain_title}>
        <Text style={styles.title_text}>{props.text}</Text>
        <TouchableOpacity>
          <Text style={styles.more_text}>Xem thêm</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.line}></View>
    </View>
  );
};

function HomeScreen() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const formatImgResult = (res) => {
    let listImgs = [];
    listImgs = res.map(e => e.urlImage)

    setData(listImgs.reverse());
  };

  const getData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        'http://app.vjmagroup.com/api/Service/GetHomeScreen',
      );
      const jsonResponse = await response.json();
      formatImgResult(jsonResponse.data.listNews);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return (
      <View>
        <Text>data loading</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>error</Text>
      </View>
    );
  }

  return (
      <View style={styles.container}>
        <Image
          style={styles.img_top}
          source={require('../../assets/home_form/bg_top.png')}
        />
        <View style={styles.center}>
          <Text style={styles.user_title}>Xin chào, Long</Text>
          <Slider list={data} />
          <Title text="Sản phẩm" />
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  img_top: {
    position: 'absolute',
    width: '100%',
    height: 140,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  center: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 15,
  },

  user_title: {
    color: 'white',
    marginBottom: 11,
    fontSize: 16,
    marginTop: 45,
  },

  title_bar: {
    width: '100%',
    marginTop: 20,
  },

  contain_title: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title_text: {
    fontSize: 17,
  },

  more_text: {
    color: '#7B2CBF',
    fontSize: 14,
  },

  line: {
    width: 29,
    height: 4,
    backgroundColor: '#7B2CBF',
    borderRadius: 20,
    marginTop: 6,
  },
});

export default HomeScreen;
