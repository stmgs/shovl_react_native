import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashPage from './screens/Splash';

const Stack = createStackNavigator(); 

export default function App() {
  return (

    <NavigationContainer>
      <SplashPage/>
    </NavigationContainer>
  );
}
