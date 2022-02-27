import React from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Image, TextInput, Button, ImageBackground } from "react-native";
// import {
//  Dropdown }
//  from 'react-native-material-dropdown';

const Bidding = (navigation) => {

    return (
        <ScrollView>
            {/* <SafeAreaView style ={styles.navHeader}>
                <Button title="<" onPress={() => navigation.goBack()} />
            </SafeAreaView> */}
            <View style={styles.wrapper}>
                <View style={styles.menu}>
                    <Image
                        source={require('../assets/snowflakes.png')}
                        resizeMode="center"
                        style={styles.logoimage}
                    />
                    <Text style={styles.tag}>Bidding</Text>
                    <Text>Home</Text></View>
                <View style={styles.formElements}>
                    <Image
                        source={require('../assets/snowAdvertise.jpeg')}
                        resizeMode="center"
                        style={styles.image}
                    />

                    <View style={styles.labelName}>
                        <Text style={{ width: "20%" }}>Location:</Text>
                        <TextInput
                            style={styles.textInput}
                            value="22, Maple view, Barrie, Ontario" multiline={true} numberOfLines={3} editable={false} selectTextOnFocus={false}
                        />
                    </View>
                    <View style={styles.labelName}>
                        <Text style={{ width: "20%" }}>Bid Your Price:</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder="$__"
                        />
                    </View>
                    <View style={styles.labelName}>
                        <Text style={{ width: "20%" }}>Required Time:</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder="$__Hour"
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
        marginTop: 20
    },
    textInput: {
        textAlign: 'center',
        color: '#126fb2',
        borderWidth: 2,
        borderColor: '#126fb2',
        padding: 8,
        margin: 5,
        alignSelf: "center",
        marginTop: 15,
        width: "65%",
        borderRadius: 8,
        fontSize: 16
    },
    formElements: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    bodyimg: {
        width: 400,
        height: 200,
        marginTop: 20,
        marginBottom: 10
    },
    bidpricetext: {
        textAlign: 'left',
        fontSize: 20,
        marginTop: 10,
        color: '#126fb2',
        alignSelf: "center"
    },
    reqtime: {
        textAlign: 'left',
        fontSize: 20,
        marginTop: 5,
        color: '#126fb2',
        alignSelf: "center"
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

    navHeader: {
        marginLeft: "5%",
        alignItems: 'flex-start'
    },
})

export default Bidding;

