import React from "react";
import { StyleSheet, View, SafeAreaView, TouchableOpacity, Image, Linking  } from 'react-native';
import { useWebSocket } from "react-use-websocket/dist/lib/use-websocket";
import {useState} from  "react";
import {Input, Text} from "react-native-elements";
import {Feather as Icon} from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';
import {useFonts, Jost_800ExtraBold_Italic, Jost_900Black, Jost_500Medium, Jost_600SemiBold} from "@expo-google-fonts/jost"

export default function Home({navigation}) {

  const [fontLoaded] = useFonts({Jost_800ExtraBold_Italic, Jost_900Black, Jost_500Medium, Jost_600SemiBold})
  const [data, setData] = useState({});
  const [text, setText] = useState("BTCUSDT");
  const [symbol, setSymbol] = useState("btcusdt");

  const {lastJsonMessage} = useWebSocket(`wss://stream.binance.com:9443/ws/${symbol}@ticker`, {
    onMessage: () => {
      if(lastJsonMessage){
        setData(lastJsonMessage);
      }
    },
    onError: (event) => alert(event),
    shouldReconnect: () => true,
    reconnectInterval: 3000
  })
  
  const searchButton = <Icon.Button
    name="search"
    size={24}
    color="white"
    backgroundColor="transparent"
    onPress={evt => setSymbol(text.toLowerCase())}
  />

  const Instructions = (() => {
    Linking.openURL('https://github.com/GolyTech/CryptoLive');
  })

  const styles = StyleSheet.create({
    info: {
      color: "#FFF",
      fontSize: 20,
      justifyContent: 'center',
      fontFamily: 'Jost_900Black'
    }
  
  });

  return (
    <LinearGradient colors={['#0233f7','#5073fe', '#75baff']} style={{height: '100%', width: '100%'}}>
      <SafeAreaView>
        <View style={{alignItems: "flex-end", marginRight: "5%"}}>
          <TouchableOpacity
          onPress={Instructions}>
            <Image source={require('../images/info.png')} style={{width: 30, height: 30}}/>
          </TouchableOpacity>
        </View>
        
        <View style={{marginBottom: "8%", alignItems: 'center'}}>
          <Text h1 style={{color:"#FFF", marginTop: '3%',fontFamily: "Jost_800ExtraBold_Italic"}}>Search Crypto</Text>
        </View>

        <Input
          autoCapitalize="characters"
          leftIcon={<Icon name="dollar-sign" size={24} color="green" />}
          rightIcon={searchButton}
          value={text}
          onChangeText={setText}
          style={{color: 'white', fontFamily: "Jost_600SemiBold"}}
        />

        <Text h3 style={{textAlign: 'center', color: '#FFF', marginBottom: '7%', marginTop: '3%',fontFamily: "Jost_900Black"}}>{data.s}</Text>

        <View style={{ margin: 20}}>
          <View style={{flexDirection: "row", justifyContent: 'space-between'}}>
            <Text style={styles.info}>Real Price: </Text>
            <Text style={{backgroundColor: 'green', fontSize: 20, color: '#FFF', padding: 7,marginBottom: '4%', fontFamily: "Jost_500Medium"}}>${parseFloat(data.c).toFixed(2)}</Text>
          </View>

          <View style={{flexDirection: "row", justifyContent: 'space-between'}}>
            <Text style={styles.info}>Price Change Percent: </Text>
            <Text style={{backgroundColor: 'gray', fontSize: 20, color: '#FFF', padding: 7, marginBottom: '4%', fontFamily: "Jost_500Medium"}}>{parseFloat(data.P).toFixed(2)}%</Text>
          </View>

          <View style={{flexDirection: "row", justifyContent: 'space-between'}}>
            <Text style={styles.info}>Open Price: </Text>
            <Text style={{backgroundColor: 'green', fontSize: 20, color: '#FFF', padding: 7, marginBottom: '4%', fontFamily: "Jost_500Medium"}}>${parseFloat(data.o).toFixed(2)}</Text>
          </View>

          <View style={{flexDirection: "row", justifyContent: 'space-between'}}>
            <Text style={styles.info}>High Price: </Text>
            <Text style={{backgroundColor: 'green', fontSize: 20, color: '#FFF', padding: 7, marginBottom: '4%', fontFamily: "Jost_500Medium"}}>${parseFloat(data.h).toFixed(2)}</Text>
          </View>

          <View style={{flexDirection: "row", justifyContent: 'space-between'}}>
            <Text style={styles.info}>Low Price: </Text>
            <Text style={{backgroundColor: 'red', fontSize: 20, color: '#FFF', padding: 7, marginBottom: '4%', fontFamily: "Jost_500Medium"}}>${parseFloat(data.l).toFixed(2)}</Text>
          </View>

        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

