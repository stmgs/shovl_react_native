import React from "react";
import { View, Text, StyleSheet, SafeAreaView , TouchableOpacity, Image} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "./Login";
import SignupPage from "./Signup";

const Stack = createNativeStackNavigator(); 

const SplashPageMain = ({navigation}) =>{

    return(

        <SafeAreaView style={styles.wrapper}>

            <View style={styles.topBox}>

                <Image 
                
                source={require('../assets/shovl_new_logo.png')}
                resizeMode="center"
                style={styles.image}
                />


            </View>

            <View style={styles.bottmBox}>

                <TouchableOpacity 

                    style={styles.butonStyle} 
                    onPress={()=>{

                        navigation.push('Login')

                    }}>

                    <Text style={styles.buttonTextStyle}>Login</Text>

                 </TouchableOpacity>

                 <TouchableOpacity 
                    style={styles.butonStyle} 
                    onPress={()=>{

                        navigation.push('Signup')

                    }} >

                    <Text style={styles.buttonTextStyle}>Signup</Text>
                 </TouchableOpacity>

            </View>

        </SafeAreaView>

        )
}


const SplashPage = () => {
    return (
        <Stack.Navigator   
            initialRouteName="Splash"
            screenOptions={{
                headerShown: false
                }}>
            <Stack.Screen name = "Splash" component= {SplashPageMain} />
            <Stack.Screen name = "Login" component={LoginPage}/>
            <Stack.Screen name = "Signup" component={SignupPage}/>
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },

    image:{
        marginTop:70,
        width:400,
        height:250,
    },

    topBox:{
        flex:1.5,
        
    },

    bottmBox:{
        flex:2,
        justifyContent:'flex-end',
        padding:20,

    },

    navButtonsWrapper:{
        backgroundColor:'green',
        
        height:100
    },
    butonStyle:{
        backgroundColor:'#126fb2',
        borderRadius:8,
        padding: 10,
        margin:10,
        width:300

    },
    buttonTextStyle: {
    color: "white",
    alignSelf:'center',
    fontSize:18,
    fontWeight: "bold"
  },

})

export default SplashPage;