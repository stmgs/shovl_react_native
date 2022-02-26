import React from "react"
import { View, Text, StyleSheet, SafeAreaView , TouchableOpacity, ScrollView, Image, TextInput, Button} from "react-native"
import { FlatList } from "react-native-gesture-handler"
import { listingData} from "../helper/MockData"


const HomePage = ({navigation}) =>{

    return(
            
            <View style = {styles.mainWrapper}>

                <SafeAreaView style ={styles.navHeader}>
                    <Button title="<" onPress={() => navigation.goBack()} />
                </SafeAreaView>
                
                <SafeAreaView style ={styles.wrapper}>
                    <TouchableOpacity 
                    style={styles.butonStyle} 
                    onPress={()=>{}} >

                        <Text style={styles.buttonTextStyle}>Create Listing</Text>

                    </TouchableOpacity>
                </SafeAreaView>
                
                <TextInput 
                style={styles.textInput}
                placeholder="Search"

                />
                
            
                <FlatList
                    data = {listingData}
                    keyExtractor = {item => item.key}
                    contentContainerStyle = {styles.listingContainer}
                    renderItem = {({item, index}) => {
                        return (
                        <TouchableOpacity>
                        <View style={styles.itemEntry}>
                            <Image
                                source = {item.image.file}
                                style = {styles.listingImage}
                            />

                            <View>
                                <Text style = {styles.textTitile}>{item.title}</Text>
                                <Text style = {styles.textLocation}>{item.location}, ON</Text>
                                <Text style = {styles.textBudget}>CAD {item.budget}</Text>
                                <Text style = {styles.textDate}>{item.date} minutes ago</Text>
                                
                            </View>
                        </View>
                        </TouchableOpacity> 
                        )
                    }}
                />
            </View>
    )

} 

const styles = StyleSheet.create({

    mainWrapper:{
        flex:1 , 
        backgroundColor: '#fff'
    },
    
    wrapper:{
        alignItems:'center',
        justifyContent:'center',
    },

    textInput:{
        color:'#126fb2',
        borderWidth:2,
        borderColor:'#126fb2',
        padding:8,
        marginLeft:"10%",
        width:"80%",
        borderRadius:8,
        fontSize:16
    },
    textStyleBlue:{
        color: '#3383bc',
        marginRight:50,
        alignSelf:'flex-end',
        textDecorationLine:'underline'
        
    },

    listingContainer:{
        padding: "4%", 
        paddingTop: 45
    },

    listingImage:{
        width:80, 
        height:80, 
        borderRadius:100, 
        marginRight : "2%"
    },

    textStyleBlack:{
        color:'#000000',
        alignSelf:'center',
        fontSize:19,
        
    },

    textTitile:{
        color: '#126fb2',
         fontSize: 20, 
         fontWeight:'600'
    },

    textLocation:{
        padding:1, 
        fontSize: 18, 
        opacity: .7
    },

    textBudget:{
        padding:1, 
        fontSize: 16, 
        fontWeight:'500', 
        opacity: .8, 
        color: '#126fb2'
    },

    textDate:{
        padding:1, 
        fontSize: 12, 
        fontWeight:'500', 
        opacity: .6
    },

    itemEntry:{
        flexDirection: 'row', padding:"4%", marginBottom:"4%", backgroundColor : 'rgba(255, 255, 255, 0.9)', 
        borderRadius :12,
        shadowColor : "#000",
        shadowOffset : {
            width: 0,
            height : 10
        },
        shadowOpacity :.2,
        shadowRadius : 20
    },

    butonStyle:{
        backgroundColor:'#126fb2',
        borderRadius:8,
        padding: 10,
        margin:20,
        width:"80%"

    },

    buttonTextStyle: {
        color: "white",
        alignSelf:'center',
        fontSize:18,
        fontWeight: "bold"
    },

    navHeader:{
        marginLeft:"5%",
        alignItems : 'flex-start'
    }

})


export default HomePage;

