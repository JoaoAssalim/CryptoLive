import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {useFonts,Jost_800ExtraBold_Italic, Jost_600SemiBold, Jost_900Black, Jost_700Bold} from "@expo-google-fonts/jost"
import Home from './src/Home';
import Search from './src/Search';

export default function App() {

  const Stack = createStackNavigator();

  const [fontLoaded] = useFonts({
    Jost_800ExtraBold_Italic, Jost_600SemiBold, Jost_900Black, Jost_700Bold
  })

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{headerShown:false, title:''}}/>
          <Stack.Screen name="Search" component={Search} options={{headerShown:false, title:''}}/> 
        </Stack.Navigator>
      </NavigationContainer>
  );
}
