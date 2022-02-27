import React from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Image, TextInput, Button, ImageBackground } from "react-native";
// import {
//  Dropdown }
//  from 'react-native-material-dropdown';

const Bidding = (navigation) =>{

    return(
        <ScrollView>
            <SafeAreaView style ={styles.navHeader}>
                <Button title="<" onPress={() => navigation.goBack()} />
            </SafeAreaView>
            <View style = {styles.wrapper}>
                <SafeAreaView style={styles.menu}>
                        <Image
                            source={require('../assets/shovl_new_logo.png')}
                            resizeMode="center"
                            style={styles.logoimage}
                        />
                        <Text style={styles.tag}>Bidding</Text>
                        <Text>Home</Text>
                </SafeAreaView>
            </View>
            <View /*style = {styles.bodyimg}*/>
                     <Image source={require('../assets/locations/2.jpeg')}
                     resizeMode="stretch"
                     style = {styles.bodyimg}                     />
                
                <Text style = {styles.bidpricetext}> Bid Your Price</Text>
                <TextInput 
                        style={styles.textInput}
                        placeholder="$__"
                    />
                <Text style = {styles.reqtime}> Required Time </Text>
                <TextInput 
                        style={styles.textInput}
                        placeholder="$__Hour"
                    />
                    <TouchableOpacity 
                 style={styles.touchbutonStyle1} 
                 onPress={()=>{}} >

                    <Text style={styles.buttonTextStyle}>Procced</Text>
                
                 </TouchableOpacity>
                 <TouchableOpacity 
                 style={styles.touchbutonStyle2} 
                 onPress={()=>{}} >

                    <Text style={styles.buttonTextStyle}>Cancel</Text>
                
                 </TouchableOpacity>

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
    menu: {
        // flex: 1,
        flexDirection: "row",
        width: "100%",
        padding: 10,
        borderBottomWidth: 1,
        marginTop: 30,
        borderColor: "#0f0f0f",
        justifyContent: "space-between"
    },
    textInput:{
        textAlign: 'center',
        color:'#126fb2',
        borderWidth:2,
        borderColor:'#126fb2',
        padding: 8,
        margin: 5,
        alignSelf:"center",
        marginTop: 15,
        width: 300,
        borderRadius: 8,
        fontSize: 16
    },
    logoimage: 
    {
        width: 60, 
        height: 30, 
    },
    bodyimg:{
        width:410,
        height:330,
        alignSelf:"center",
    },
    bidpricetext:{
        textAlign:'left',
        fontSize: 20,
        marginTop:10,
        color:'#126fb2',
        alignSelf:"center"
    },
    reqtime:{
        textAlign:'left',
        fontSize: 20,
        marginTop:5,
        color:'#126fb2',
        alignSelf:"center"
    },
    tag:{
        fontSize: 20, fontWeight: "500" 
    },
    touchbutonStyle1:{
        alignSelf:"center",
        backgroundColor:'#126fb2',
        alignItems: 'center',
        borderRadius:8,
        padding: 10, 
        marginTop:42,
        marginBottom: 1,
        width:250,
    },
    touchbutonStyle2:{
        alignSelf:"center",
        backgroundColor:'#126fb2',
        alignItems: 'center',
        borderRadius:8,
        padding: 10, 
        marginTop:20,
        marginBottom: 1,
        width:250,
    },
  buttonTextStyle: {
        color: "white",
        alignSelf:"center",
        fontSize:18,
        fontWeight: "bold",
  },
  navHeader:{
    marginLeft:"5%",
    alignItems : 'flex-start'
  },
})

export default Bidding;

