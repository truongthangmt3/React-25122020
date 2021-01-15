import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  return (
    <View
      style={styles.background}
    >
      <View
        style={styles.background_1}
      >
        <View
          style={styles.background_1_1}
        >
          <Image
            style={styles.img_arrow}
            source={require('./image/Arrow_Left.png')}
          />
          <Text
            style={styles.warranty_inf}
          >
            Thông tin bảo hành
        </Text>
          <TouchableOpacity
            style={{
              alignSelf: 'center'
            }}
          >
            <Text
              style={styles.save}
            >
              Lưu
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={styles.background_2}
      >
        <View
          style={styles.background_2_1}
        >
          <View>
            <View
              style={styles.background_2_1_1}
            >
              <View
                style={styles.block_1}
              >
                <Image
                  style={styles.img_armorial}
                  source={require('./image/Armorial.jpg')}
                />
                <Text
                  style={{
                    marginLeft: '2%',
                    fontSize: 13,
                  }}
                >
                  Tên sản phẩm
                </Text>
              </View>
              <View
                style={styles.block_1}
              >
                <Text
                  style={{
                    marginLeft: '57%',
                    marginTop: '2%'
                  }}
                >
                  Mã sản phẩm
                </Text>
                <Text
                  style={{
                    marginLeft: '45%',
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: 'purple',
                  }}
                >
                  DCTV32D8900ES
              </Text>
              </View>
            </View>
            <Text
              style={{
                marginLeft: '1%',
                marginTop: '-4%',
                fontSize: 16,
                fontWeight: 'bold',
              }}
            >
              Tế bào gốc De Medicotem Human White
            </Text>
            <View
              style={styles.background_2_1_1}
            >
              <View
                style={styles.block_2}
              >
                <Text
                  style={{
                    marginLeft: '2%',
                    marginTop: '0.5%',
                    fontSize: 13,
                    color: '#3498DB',
                  }}
                >
                  Ngày kích hoạt
              </Text>
                <Text
                  style={{
                    marginLeft: '2%',
                    marginTop: '0.5%',
                    fontWeight: 'bold',
                    fontSize: 15,
                  }}
                >
                  09/09/2020
              </Text>
              </View>
              <View
                style={styles.block_1}
              >
                <Text
                  style={{
                    color: 'red',
                    fontSize: 13,
                    marginLeft: '58%'
                  }}
                >
                  Hạn bảo hành
                </Text>
                <Text
                  style={{
                    marginLeft: '58%',
                    marginTop: '0.5%',
                    fontWeight: 'bold',
                    fontSize: 15,
                  }}
                >
                  09/09/2023
                </Text>
              </View>
            </View>
          </View>
          <View>

          </View>
        </View>
        <View
          style={styles.background_2_1}
        >
          <View>
            <View
              style={styles.background_2_1_1}
            >
              <View
                style={styles.block_1}
              >
                <Image
                  style={styles.img_armorial}
                  source={require('./image/Armorial.jpg')}
                />
                <Text
                  style={{
                    marginLeft: '2%',
                    fontSize: 13,
                  }}
                >
                  Tên sản phẩm
                </Text>
              </View>
              <View
                style={styles.block_1}
              >
                <Text
                  style={{
                    marginLeft: '57%',
                    marginTop: '2%'
                  }}
                >
                  Mã sản phẩm
                </Text>
                <Text
                  style={{
                    marginLeft: '45%',
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: 'purple',
                  }}
                >
                  DCTV32D8900ES
              </Text>
              </View>
            </View>
            <Text
              style={{
                marginLeft: '1%',
                marginTop: '-4%',
                fontSize: 16,
                fontWeight: 'bold',
              }}
            >
              Tế bào gốc De Medicotem Human White
            </Text>
            <View
              style={styles.background_2_1_1}
            >
              <View
                style={styles.block_2}
              >
                <Text
                  style={{
                    marginLeft: '2%',
                    marginTop: '0.5%',
                    fontSize: 13,
                    color: '#3498DB',
                  }}
                >
                  Ngày kích hoạt
              </Text>
                <Text
                  style={{
                    marginLeft: '2%',
                    marginTop: '0.5%',
                    fontWeight: 'bold',
                    fontSize: 15,
                  }}
                >
                  09/09/2020
              </Text>
              </View>
              <View
                style={styles.block_2}
              >
                <Text
                  style={{
                    color: 'red',
                    fontSize: 13,
                    marginLeft: '58%'
                  }}
                >
                  Hạn bảo hành
                </Text>
                <Text
                  style={{
                    marginLeft: '58%',
                    marginTop: '0.5%',
                    fontWeight: 'bold',
                    fontSize: 15,
                  }}
                >
                  09/09/2023
                </Text>
              </View>
            </View>
          </View>
          <View>

          </View>
        </View>
        <View
          style={styles.background_2_1}
        >
          <View>
            <View
              style={styles.background_2_1_1}
            >
              <View
                style={styles.block_1}
              >
                <Image
                  style={styles.img_armorial}
                  source={require('./image/Armorial.jpg')}
                />
                <Text
                  style={{
                    marginLeft: '2%',
                    fontSize: 13,
                  }}
                >
                  Tên sản phẩm
                </Text>
              </View>
              <View
                style={styles.block_1}
              >
                <Text
                  style={{
                    marginLeft: '57%',
                    marginTop: '2%'
                  }}
                >
                  Mã sản phẩm
                </Text>
                <Text
                  style={{
                    marginLeft: '45%',
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: 'purple',
                  }}
                >
                  DCTV32D8900ES
              </Text>
              </View>
            </View>
            <Text
              style={{
                marginLeft: '1%',
                marginTop: '-4%',
                fontSize: 16,
                fontWeight: 'bold',
              }}
            >
              Tế bào gốc De Medicotem Human White
            </Text>
            <View
              style={styles.background_2_1_1}
            >
              <View
                style={styles.block_2}
              >
                <Text
                  style={{
                    marginLeft: '2%',
                    marginTop: '0.5%',
                    fontSize: 13,
                    color: '#3498DB',
                  }}
                >
                  Ngày kích hoạt
              </Text>
                <Text
                  style={{
                    marginLeft: '2%',
                    marginTop: '0.5%',
                    fontWeight: 'bold',
                    fontSize: 15,
                  }}
                >
                  09/09/2020
              </Text>
              </View>
              <View
                style={styles.block_1}
              >
                <Text
                  style={{
                    color: 'red',
                    fontSize: 13,
                    marginLeft: '58%'
                  }}
                >
                  Hạn bảo hành
                </Text>
                <Text
                  style={{
                    marginLeft: '58%',
                    marginTop: '0.5%',
                    fontWeight: 'bold',
                    fontSize: 15,
                  }}
                >
                  09/09/2023
                </Text>
              </View>
            </View>
          </View>
          <View>

          </View>
        </View>
             
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  save: {
    color: 'purple',
    alignSelf: 'center',
    marginLeft: '18%',
    fontSize: 16,
  },
  warranty_inf: {
    alignSelf: 'center',
    flexDirection: 'column',
    fontSize: 17,
    marginLeft: '25%',
  },

  img_arrow: {
    marginLeft: '5%',
    alignSelf: 'center',
    width: 15,
    height: 12.5,
  },
  img_armorial: {
    marginLeft: '15%',
    marginTop: '1%',
    width: '40%',
    height: '50%',
  },
  block_1: {
    flexDirection: 'column',
  },
  block_2: {
    flexDirection: 'column',
  },
  background: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F3F5F9',
  },
  background_1: {
    alignSelf: 'center',
    width: '100%',
  },
  background_1_1: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    backgroundColor: 'white'
  },
  background_2: {
    alignSelf: 'center',
    width: '90%',
    height: '90%',
  },
  background_2_1: {
    marginTop: '5%',
    width: '100%',
    height: '21%',
    borderRadius: 10,
    backgroundColor: 'white',
  },
  background_2_1_1: {
    flexDirection: 'row',
  },
});

export default App;
