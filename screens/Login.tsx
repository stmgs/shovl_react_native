import React from "react";
import { View, Text, StyleSheet, SafeAreaView , TouchableOpacity, ScrollView, Image, TextInput, Button} from "react-native";

const Login = () =>{

    return(
        <ScrollView>
            <View style ={styles.wrapper}>

                <Image 
                
                source={require('../assets/shovl_new_logo.png')}
                resizeMode="center"
                style={styles.image}
                />

                <TextInput 
                style={styles.textInput}
                placeholder="Email"
                />

                <TextInput 
                style={styles.textInput}
                placeholder="Password"
                secureTextEntry={true}
                />

                <Text
                 style={styles.textStyleBlue}
                 >Forgot Password?</Text>

                 <TouchableOpacity 
                 style={styles.butonStyle} 
                 onPress={()=>{}} >

                    <Text style={styles.buttonTextStyle}>Login</Text>

                 </TouchableOpacity>

                <Text style={styles.textStyleBlack}>Not a member? Register here.</Text>

                <View style={styles.rowArrangement}>

                    <View style={styles.horizontalLine}/>

                    <Text>OR</Text>

                    <View style={styles.horizontalLine}/>

                </View>
                
                <View style={styles.rowArrangement}>
        <TouchableOpacity>
    <Image style={styles.iconStyle}
    
                source={
                    require('../assets/facebook.png')}
                resizeMode="center"
                
                />
</TouchableOpacity>
        <TouchableOpacity>
    <Image style={styles.iconStyle}
    
                source={
                    require('../assets/google.png')}
                resizeMode="center"
                
                />
</TouchableOpacity>
      </View>


            
            </View>
        </ScrollView>
    )

} 

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },

    image:{
        marginTop:30,
        width:400,
        height:250,
    },

    textInput:{
        color:'#126fb2',
        borderWidth:2,
        borderColor:'#126fb2',
        padding:8,
        margin:10,
        width:300,
        borderRadius:8,
        fontSize:16
    },
    textStyleBlue:{
        color: '#3383bc',
        marginRight:50,
        alignSelf:'flex-end',
        textDecorationLine:'underline'
        
    },

    textStyleBlack:{
        color:'#000000',
        alignSelf:'center',
        fontSize:19,
        marginTop:-30
        
    },

    butonStyle:{
        backgroundColor:'#126fb2',
        borderRadius:8,
        padding: 10,
        margin:50,
        width:300

    },

  buttonTextStyle: {
    color: "white",
    alignSelf:'center',
    fontSize:18,
    fontWeight: "bold"
  },

  iconStyle:{

    width:55,
    height:55
  },
  rowIconArrangement:{
      flexDirection:'row',
      justifyContent:'space-between',
      padding:20,
      alignItems:'center'
  },

  rowArrangement:{
      flexDirection:'row',
      justifyContent:'space-between',
      padding:20,
      alignItems:'center'
  },

  horizontalLine:{
      
      width:"35%",
      height:1.5,
      backgroundColor:'#b2b7bf',
      marginRight:10,
      marginLeft:10
  }

})


export default Login;

