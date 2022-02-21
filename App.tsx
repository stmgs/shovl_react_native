import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Splash from './screens/Splash';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Signup from './screens/Signup';
import Login from './screens/Login';

const Stack = createStackNavigator(); 

export default function App() {
  return (
    <View style={styles.container}>

       <Splash/>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
