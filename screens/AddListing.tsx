import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, TextInput, ImageBackground, Button } from "react-native";

const AddListing = () => {

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
                    <Text style={styles.tag}>Add Listing</Text>
                    <Text>Home</Text>
                </View>
                {/* End of navigation */}
                {/* Body part Starts */}
                <View style={styles.formElements}>

                    <View style={styles.labelName}>
                        <Text style={{ width: "20%" }}>Address:</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder=" Enter Address"
                        />
                    </View>
                    <View style={styles.labelName}>
                        <Text style={{ width: "20%" }}>Description:</Text>

                        <TextInput style={styles.textInput}
                            multiline={true} numberOfLines={4} placeholder=" Description of the property and area of the property to be cleaned."
                        /></View>
                    <View style={styles.labelName}>
                        <Text style={{ width: "20%" }}>From Date:</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder="mm/dd/yyy"
                        />
                    </View>
                    <View style={styles.labelName}>
                        <Text style={{ width: "20%" }}>To Date:</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder="mm/dd/yyy"
                        />
                    </View>
                    <View style={styles.labelName}>
                        <Text style={{ width: "20%" }}>From Time:</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder="HH:MM"
                        />
                    </View>
                    <View style={styles.labelName}>
                        <Text style={{ width: "20%" }}>To Time:</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder="HH:MM"
                        />
                    </View>
                    <View style={styles.labelName}>
                        <Text style={{ width: "85%" ,marginBottom:10,marginTop:10,fontWeight:"bold",fontSize:16}}>Add Pictures:</Text>
                    </View>
                    <View style={styles.labelName}>
                        <Image
                            source={require('../assets/snowAdvertise.jpeg')}
                            style={{width: 100, height:100}}
                        />
                        <Image
                            source={require('../assets/snowAdvertise1.jpeg')}
                            style={{width: 100, height:100,marginLeft:10}}
                        />
                         <Image
                            source={require('../assets/addImage.jpeg')}
                            style={{width: 100, height:100,marginLeft:10,opacity:0.6}}
                        />
                    </View>
                    <View style={styles.flexrow}>
                        <TouchableOpacity onPress={() => { }} >
                            <Text style={styles.buttonStyle}>Submit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { }} >
                            <Text style={styles.cancelButton}>Cancel</Text>
                        </TouchableOpacity>

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
        justifyContent: "center",
        alignItems: "center"
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
    flexrow: {
        flexDirection: "row",

    },
    buttonStyle: {
        backgroundColor: '#126fb2',
        borderRadius: 8,
        padding: 10,
        color: "#fff",
        margin: 20,
        width: 100,
        textAlign: "center",
        fontWeight: "500"
    },
    cancelButton: {
        backgroundColor: '#900',
        borderRadius: 8,
        padding: 10,
        color: "#fff",
        margin: 20,
        width: 100,
        textAlign: "center",
        fontWeight: "500"

    },
    textInput: {
        color: '#126fb2',
        borderWidth: 2,
        borderColor: '#126fb2',
        padding: 8,
        margin: 8,
        width: "60%",
        borderRadius: 8,
        fontSize: 16
    }

})



export default AddListing;
