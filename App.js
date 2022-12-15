import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Home';
import Search from './src/Search';

export default function App() {

  const Stack = createStackNavigator();

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{headerShown:false, title:''}}/>
          <Stack.Screen name="Search" component={Search} options={{headerShown:false, title:''}}/> 
        </Stack.Navigator>
      </NavigationContainer>
  );
}
