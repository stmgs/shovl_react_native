import React from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Image, TextInput, Button, ImageBackground } from "react-native";

const ViewProfile = () => {

    return (
        <ScrollView>
            {/* Start the navigation */}
            <ImageBackground source={require('../assets/background-image-2.png')} resizeMode="cover" style={styles.bgimage} />

            <View style={styles.wrapper}>
                <View style={styles.menu}>
                    <Image
                        source={require('../assets/snowflakes.png')}
                        resizeMode="center"
                        style={styles.logoimage}
                    />
                    <Text style={styles.tag}>View Profile</Text>
                    <Text>Home</Text>
                </View>
                {/* End of navigation */}
                {/* Body part Starts */}
                <View style={styles.formElements}>
                    <Image
                        source={require('../assets/profilePicture.png')}
                        resizeMode="center"
                        style={styles.image}
                    />
                    <View style={styles.labelName}>
                    <Text style={{width:"15%"}}>Name:</Text>
                        <TextInput
                            style={styles.textInput}
                            value="John Markson" editable={false} selectTextOnFocus={false}
                        />
                    </View>
                    <View style={styles.labelName}>
                    <Text style={{width:"15%"}}>Age:</Text>
                        <TextInput
                            style={styles.textInput}
                            value="25" editable={false} selectTextOnFocus={false}
                        />
                    </View>
                    <View style={styles.labelName}>
                    <Text style={{width:"15%"}}>Gender:</Text>
                        <TextInput
                            style={styles.textInput}
                            value="Male" editable={false} selectTextOnFocus={false}
                        />
                    </View>
                    <View style={styles.labelName}>
                    <Text style={{width:"15%"}}>Address:</Text>
                        <TextInput
                            style={styles.textInput}
                            value="22, Maple View" editable={false} selectTextOnFocus={false}
                        />
                    </View>
                    
                    <TextInput
                        style={styles.province}
                        value="Barrie, ON" editable={false} selectTextOnFocus={false}
                    />

                    <View style={styles.labelName}>
                    <Text style={{width:"15%"}}>Zip Code:</Text>
                        <TextInput
                            style={styles.textInput}
                            value="G1F 5F2" editable={false} selectTextOnFocus={false}
                        />
                    </View>

                </View>
            </View>
        </ScrollView>
    )

}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    labelName: {
        flexDirection: "row",
        width: "100%",
        justifyContent:"center",
        alignItems:"center"
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
    logoimage:
        { width: 30, height: 30 },
    tag:
        { fontSize: 20, fontWeight: "500" },
    image: {
        width: 400,
        height: 200,
    },
    bgimage: {
        justifyContent: "center",
        flex: 1
    },
    formElements: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    textInput: {
        color:'#999',
        borderBottomWidth: 2,
        borderColor: '#126fb2',
        padding: 8,
        margin: 8,
        width: "60%",
        borderRadius: 8,
        fontSize: 16
    },
    province:{
        color: '#999',
        borderBottomWidth: 2,
        borderColor: '#126fb2',
        padding: 8,
        margin: 8,
        marginLeft:"15%",
        width: "60%",
        borderRadius: 8,
        fontSize: 16
    }

})


export default ViewProfile;
