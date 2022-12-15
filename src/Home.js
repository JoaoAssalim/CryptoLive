import React from "react";
import { StyleSheet, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { useWebSocket } from "react-use-websocket/dist/lib/use-websocket";
import { LinearGradient } from 'expo-linear-gradient';
import {useState} from  "react";
import {Text} from "react-native-elements";
import {useFonts, Jost_800ExtraBold_Italic, Jost_600SemiBold, Jost_900Black} from "@expo-google-fonts/jost"

export default function Home({navigation}) {

  const [fontLoaded] = useFonts({
    Jost_800ExtraBold_Italic, Jost_600SemiBold, Jost_900Black
  })
  const [btc, setBtc] = useState({});
  const [eth, setEth] = useState({});
  const [ada, setAda] = useState({});
  const [sol, setSol] = useState({});
  const [dot, setDot] = useState({});

  for(var i = 0; i < 5; i++){
    if(i == 0){
      const {lastJsonMessage} = useWebSocket(`wss://stream.binance.com:9443/ws/btcusdt@ticker`, {
        onMessage: () => {
          if(lastJsonMessage){
            setBtc(lastJsonMessage);
          }
        },
        onError: (event) => alert(event),
        shouldReconnect: () => true,
        reconnectInterval: 1000
      })
    }else if(i == 1){
      const {lastJsonMessage} = useWebSocket(`wss://stream.binance.com:9443/ws/adausdt@ticker`, {
        onMessage: () => {
          if(lastJsonMessage){
            setAda(lastJsonMessage);
          }
        },
        onError: (event) => alert(event),
        shouldReconnect: () => true,
        reconnectInterval: 1000
      })
    }else if(i == 2){
      const {lastJsonMessage} = useWebSocket(`wss://stream.binance.com:9443/ws/ethusdt@ticker`, {
        onMessage: () => {
          if(lastJsonMessage){
            setEth(lastJsonMessage);
          }
        },
        onError: (event) => alert(event),
        shouldReconnect: () => true,
        reconnectInterval: 1000
      })
    }else if(i == 3){
      const {lastJsonMessage} = useWebSocket(`wss://stream.binance.com:9443/ws/solusdt@ticker`, {
        onMessage: () => {
          if(lastJsonMessage){
            setSol(lastJsonMessage);
          }
        },
        onError: (event) => alert(event),
        shouldReconnect: () => true,
        reconnectInterval: 1000
      })
    }else if(i == 4){
      const {lastJsonMessage} = useWebSocket(`wss://stream.binance.com:9443/ws/dotusdt@ticker`, {
        onMessage: () => {
          if(lastJsonMessage){
            setDot(lastJsonMessage);
          }
        },
        onError: (event) => alert(event),
        shouldReconnect: () => true,
        reconnectInterval: 1000
      })
    }
  }

  return (
    <LinearGradient colors={['#0233f7','#5073fe', '#75baff']} style={{height: '100%', width: '100%'}}>
      <SafeAreaView style={styles.container}>

        <View style={styles.title}>
          <Text h1 style={{color: "#FFF", fontFamily: "Jost_800ExtraBold_Italic"}}>CryptoLive</Text>
        </View>

        <View style={styles.exibition}>

          <View style={{flexDirection: "row", margin: 10, justifyContent: "space-between"}}>
            <Text style={{marginTop: '1%', fontSize: 20, color: "green", fontFamily: "Jost_600SemiBold"}}>Crypto</Text>
            <Text style={{marginTop: '1%', fontSize: 18, color: "green", fontFamily: "Jost_600SemiBold"}}>Live Price</Text>
          </View>


          <View style={{flexDirection: "row", margin: 10, justifyContent: "space-between"}}>

            <View style={{flexDirection: "row"}}>
              <TouchableOpacity>
                <Image source={require("../images/bitcoin.png")} style={{width: 30, height: 30, marginRight: 10}}/>
              </TouchableOpacity>
              <Text style={{marginTop: '2%', fontSize: 18, fontFamily: "Jost_600SemiBold"}}>Bitcoin</Text>
            </View>
            <View>
              <Text style={{marginTop: '2%', fontSize: 18, fontFamily: "Jost_600SemiBold"}}>${parseFloat(btc.c).toFixed(2)}</Text>
            </View>
          </View>

          <View style={{flexDirection: "row", margin: 10, justifyContent: "space-between"}}>

            <View style={{flexDirection: "row"}}>
              <TouchableOpacity>
                <Image source={require("../images/ethereum.png")} style={{width: 30, height: 30, marginRight: 10}}/>
              </TouchableOpacity>
              <Text style={{marginTop: '2%', fontSize: 18, fontFamily: "Jost_600SemiBold"}}>Ethereum</Text>
            </View>
            <View>
              <Text style={{marginTop: '2%', fontSize: 18, fontFamily: "Jost_600SemiBold"}}>${parseFloat(eth.c).toFixed(2)}</Text>
            </View>
          </View>

          <View style={{flexDirection: "row", margin: 10, justifyContent: "space-between"}}>

            <View style={{flexDirection: "row"}}>
              <TouchableOpacity>
                <Image source={require("../images/solana.png")} style={{width: 30, height: 30, marginRight: 10}}/>
              </TouchableOpacity>
              <Text style={{marginTop: '2%', fontSize: 18, fontFamily: "Jost_600SemiBold"}}>Solana</Text>
            </View>
            <View>
              <Text style={{marginTop: '2%', fontSize: 18, fontFamily: "Jost_600SemiBold"}}>${parseFloat(sol.c).toFixed(2)}</Text>
            </View>
          </View>
      

          <View style={{flexDirection: "row", margin: 10, justifyContent: "space-between"}}>

            <View style={{flexDirection: "row"}}>
              <TouchableOpacity>
                <Image source={require("../images/polkadot.png")} style={{width: 30, height: 30, marginRight: 10}}/>
              </TouchableOpacity>
              <Text style={{marginTop: '2%', fontSize: 18, fontFamily: "Jost_600SemiBold"}}>Polkadot</Text>
            </View>
            <View>
              <Text style={{marginTop: '2%', fontSize: 18, fontFamily: "Jost_600SemiBold"}}>${parseFloat(dot.c).toFixed(2)}</Text>
            </View>
          </View>

          <View style={{flexDirection: "row", margin: 10, justifyContent: "space-between"}}>

        <View style={{flexDirection: "row"}}>
          <TouchableOpacity>
            <Image source={require("../images/cardano.png")} style={{width: 30, height: 30, marginRight: 10}}/>
          </TouchableOpacity>
          <Text style={{marginTop: '2%', fontSize: 18, fontFamily: "Jost_600SemiBold"}}>Cardano</Text>
          </View>
          <View>
            <Text style={{marginTop: '2%', fontSize: 18, fontFamily: "Jost_600SemiBold"}}>${parseFloat(ada.c).toFixed(2)}</Text>
          </View>
        </View>

        </View>  
          <TouchableOpacity
            onPress={() => navigation.navigate("Search")}
            style={styles.findout}
            >
            <Text style={{fontSize: 20, fontFamily: 'Jost_900Black'}}>Personalized Search</Text>
          </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title :{
    marginBottom: "15%",
    marginTop: '10%'
  }, 
  exibition: {
    backgroundColor: "#FFF",
    borderRadius: 30,
    paddingTop: "5%",
    marginBottom: "20%",
    width: "90%",
    height: "55%"
  },
  findout: {
    backgroundColor: "#FFF",
    width: "80%",
    height: "9%",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20
  } 

});