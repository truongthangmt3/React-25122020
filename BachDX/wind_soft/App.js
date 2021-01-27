import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Button,
  TextInput,
  TextComponent,
  Touch,
  Touchable,
  TouchableHighlight,
  onPress,
  onclick,
  TouchableNativeFeedback,
  ImageComponent,
  KeyboardAvoidingView,
  TouchableNativeFeedbackBase,
  
} from 'react-native';

const VJMA_display =() =>{
  return (<>
    <SafeAreaView>
      
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{
              flex:0,
          }}
        >
        <View
          style={{
            backgroundColor: 'white',
            width: '100%',
            height: '100%',
          }}>
          <Image
            style={{
              width: 650,
              height: 680,
              alignSelf: 'center',
              marginVertical:-200,

              
            }}
            source={require('./Image/icon4.jpg')}></Image>
            <Image
              style={{
                height:130,
                width:130,
                alignSelf:'center',
                marginVertical:-220,

              }}
              source={require('./Image/Logo.png')}
            ></Image>
            <View
              style={{
                height:420,
                width:360,
                backgroundColor:'white',
                alignSelf:'center',
                marginTop:250,
                borderWidth:2,
                borderColor:"#f9f4f4",
                borderRadius:15,
               
              }}
              
            >
              <Text
                style={{
                  fontSize:24,
                  alignSelf:'center',
                  marginTop:25,
                  fontWeight:"700",
                }}
              >Đăng nhập</Text>
              <View
                  style={{
                    alignSelf:'center',
                    marginTop:40,
                    flexDirection:'row',
                    borderWidth:1,
                    borderColor:'black',
                    borderRadius:7,
                  }}
                >
              <TextInput
                style={{
                  height:40,
                  width:250,
                  backgroundColor:'white',
                  borderLeftWidth:1,
                  borderRadius:7,
                  borderColor:'white',
                  
                }}
                placeholder="Tên tài khoản"
              ></TextInput>
              <Image
                style={{
                   height:19,
                   width:14,
                  marginRight:5,
                  marginTop:10,
                }}
                source={require('./Image/icon2.jpg')}
              ></Image>
              </View>
              <View
                  style={{
                    alignSelf:'center',
                    marginTop:20,
                    flexDirection:'row',
                    borderWidth:1,
                    borderColor:'black',
                    borderRadius:7,
                  }}
                >
              <TextInput
                style={{
                  height:40,
                  width:245,
                  backgroundColor:'white',
                  borderLeftWidth:1,
                  borderRadius:7,
                  borderColor:'white',
                                                                                                
                }}
                // secureTextEntry='true'
                placeholder="Mật khẩu"
              ></TextInput>
              <Image
                style={{
                   height:15,
                   width:20,
                  marginRight:5,
                  marginTop:10,
                }}
                source={require('./Image/icon3.jpg')}
              ></Image>
              </View>
                <TouchableNativeFeedback>
                <Text
                  style={{
                    fontSize:13,
                    marginTop:20,
                    marginLeft:'62%',
                    color:'#820B8A',
                    
                  }}
                >Quên mật khẩu?</Text>
                </TouchableNativeFeedback>
            </View>
            
            <View
              style={{
                width:265,
                backgroundColor:'#820B8A',
                alignSelf:'center',
                marginVertical:-150,
                borderWidth:2,
                borderRadius:10,
                borderColor:'#820B8A'
              }}
            >
              <Button
              title="Đăng nhập"
              color="#820B8A"
            ></Button>
            </View>
            <View
              style={{
                alignSelf:'center',
                flexDirection:'row',
              }}
            >
              <Text
                style={{
                marginTop:200,
                width:200,
                // backgroundColor:'red',
                marginLeft:20,
                width:170,
                }}
              >Bạn chưa có tài khoản?</Text>
              <View
                style={{
                  marginTop:197,
                  marginLeft:-15,
                  // marginRight:30,
                }}
              >
                <TouchableNativeFeedback>
                  <Text
                    style={{
                      fontSize:16,
                      color:'#820B8A',
                    }}
                  >Đăng ký</Text>
                </TouchableNativeFeedback>             
              </View>            
            </View>          
        </View>       
        </KeyboardAvoidingView>
      
    </SafeAreaView>
    </>
  );
};
const Test =() =>{
  return(
    <SafeAreaView>
      <View
        style={styles.background}
      >
        <View
        style={styles.status_bar}
        >
          <Image
            style={styles.bt_back}
            source={require("./Image/Arrow_Left.png")}
          ></Image>
          <Text
            style={styles.stb_text}
          >Thông tin bảo hành</Text>          
          <TouchableHighlight
            style={{
              alignSelf:'center',
              marginLeft:'23%'
            }}
          >
          <Text
            style={styles.save}
          >Lưu</Text>
          </TouchableHighlight>
        </View>
        <View
        style={styles.view}
        >
          <View
            style={styles.block1}
          >
            <View
              style={styles.block1_1}
            >
              <Image
                style={styles.icon_star}
                source={require('./Image/Icon_star.png')}
              ></Image>
              <View
                style={styles.code_product}
              >
                <Text
                  style={{
                    fontSize:12,
                  }}
                >Mã sản phẩm</Text>
                <Text
                  style={{
                    fontSize:16,
                    color:'#820B8A',
                  }}
                >DCTV32D8900ES</Text>
              </View>
            </View>
          <View
            style={styles.block1_2}
          >
            <Text
              style={{
                fontSize:12,
                marginLeft:15,
              }}
            >Tên sản phẩm</Text>
            <Text
              style={{
                fontSize:16,
                marginTop:4,
                marginLeft:15,
              }}
            >Tế bào gốc De Medicotem Human White</Text>
          </View>
          <View
            style={styles.block1_3}
          >
            <View
              style={styles.date1}
            >
              <Text
                style={{
                  fontSize:12,
                  color:'#3498DB',
                  marginLeft:15,
                }}
              >Ngày kích hoạt</Text>
              <Text
                style={{
                  fontSize:15,
                  marginLeft:15,
                  marginTop:4,
                }}
              >09/09/2020</Text>
            </View>
            <View
              style={styles.date2}
            >
              <Text
                style={{
                  fontSize:12,
                  color:'#EB2F06',
                  marginLeft:'51%',
                }}
              >Hạn bảo hành</Text>
              <Text
                style={{
                  fontSize:15,
                  marginLeft:'49%',
                  marginTop:4,
                }}
              >09/09/2023</Text>
            
            </View>
          </View>
          </View>
          <View
            style={styles.block1}
          >
            <View
              style={styles.block1_1}
            >
              <Image
                style={styles.icon_star}
                source={require('./Image/Icon_star.png')}
              ></Image>
              <View
                style={styles.code_product}
              >
                <Text
                  style={{
                    fontSize:12,
                  }}
                >Mã sản phẩm</Text>
                <Text
                  style={{
                    fontSize:16,
                    color:'#820B8A',
                  }}
                >DCTV32D8900ES</Text>
              </View>
            </View>
          <View
            style={styles.block1_2}
          >
            <Text
              style={{
                fontSize:12,
                marginLeft:15,
              }}
            >Tên sản phẩm</Text>
            <Text
              style={{
                fontSize:16,
                marginTop:4,
                marginLeft:15,
              }}
            >Tế bào gốc De Medicotem Human White</Text>
          </View>
          <View
            style={styles.block1_3}
          >
            <View
              style={styles.date1}
            >
              <Text
                style={{
                  fontSize:12,
                  color:'#3498DB',
                  marginLeft:15,
                }}
              >Ngày kích hoạt</Text>
              <Text
                style={{
                  fontSize:15,
                  marginLeft:15,
                  marginTop:4,
                }}
              >09/09/2020</Text>
            </View>
            <View
              style={styles.date2}
            >
              <Text
                style={{
                  fontSize:12,
                  color:'#EB2F06',
                  marginLeft:'51%',
                }}
              >Hạn bảo hành</Text>
              <Text
                style={{
                  fontSize:15,
                  marginLeft:'49%',
                  marginTop:4,
                }}
              >09/09/2023</Text>
            
            </View>
          </View>
          </View>
          <View
            style={styles.block1}
          >
            <View
              style={styles.block1_1}
            >
              <Image
                style={styles.icon_star}
                source={require('./Image/Icon_star.png')}
              ></Image>
              <View
                style={styles.code_product}
              >
                <Text
                  style={{
                    fontSize:12,
                  }}
                >Mã sản phẩm</Text>
                <Text
                  style={{
                    fontSize:16,
                    color:'#820B8A',
                  }}
                >DCTV32D8900ES</Text>
              </View>
            </View>
          <View
            style={styles.block1_2}
          >
            <Text
              style={{
                fontSize:12,
                marginLeft:15,
              }}
            >Tên sản phẩm</Text>
            <Text
              style={{
                fontSize:16,
                marginTop:4,
                marginLeft:15,
              }}
            >Tế bào gốc De Medicotem Human White</Text>
          </View>
          <View
            style={styles.block1_3}
          >
            <View
              style={styles.date1}
            >
              <Text
                style={{
                  fontSize:12,
                  color:'#3498DB',
                  marginLeft:15,
                }}
              >Ngày kích hoạt</Text>
              <Text
                style={{
                  fontSize:15,
                  marginLeft:15,
                  marginTop:4,
                }}
              >09/09/2020</Text>
            </View>
            <View
              style={styles.date2}
            >
              <Text
                style={{
                  fontSize:12,
                  color:'#EB2F06',
                  marginLeft:'51%',
                }}
              >Hạn bảo hành</Text>
              <Text
                style={{
                  fontSize:15,
                  marginLeft:'49%',
                  marginTop:4,
                }}
              >09/09/2023</Text>
            
            </View>
          </View>
          </View>
        </View>
        
        </View>
      
    </SafeAreaView>
  );
};
const App = () =>{
  return (
    <>
      {Test()}
    </>
  );
};
const styles = StyleSheet.create({
  date1:{
    // backgroundColor:'white',
    height:'100%',
    width:'50%',
    borderRightWidth:1,
    borderColor:'#BBBBBB',
  },date2:{
    // backgroundColor:'white',
    height:'100%',
    width:'50%',
    borderLeftWidth:1,
    borderColor:'#BBBBBB',
  },
  code_product:{
    marginLeft:190,
  },
  block1_1:{
    width:'100%',
    flexDirection:'row',
    flex:1,
    // backgroundColor:'white',
  },
  block1_2:{
    width:'100%',
    flex:1,
    backgroundColor:'white',
    
  },
  block1_3:{
    width:'100%',
    flexDirection:'row',
    flex:1,
    // backgroundColor:'white',
  },
  icon_star:{
    width:36,
    height:46,
    marginLeft:15,
  },
  block1:{
    width:370,
    height:152,
    backgroundColor:'white',
    alignSelf:'center',
    marginTop:10,
    borderRadius:15,
  },
  background: {
    width:'100%',
    height:'100%',
  },
  status_bar: {
    backgroundColor:"white",
    flex:1,
    alignSelf:'center',
    flexDirection:'row',
 
  },
  view:{
    backgroundColor:"#F3F5F9",
    flex:7,
  },
  bt_back: {
    width:20,
    height:15,
    resizeMode:'cover',
    marginLeft:15,
    alignSelf:'center',
    marginRight:'23%'
  },
  stb_text:{
    alignSelf:'center',
    fontSize:17,
  },
  save: {
    color:'#7B2CBF',
    fontSize:16,
  },
});
export default App;
