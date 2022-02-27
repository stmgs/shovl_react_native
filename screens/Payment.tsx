import React from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Image, TextInput, Button, ImageBackground } from "react-native";
// import { ScrollView } from "react-native-gesture-handler";

const PaymentPage = (navigation) => {
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
                    <Text style={styles.tag}>Payment</Text>
                    <Text>Home</Text>
                </View>
                <SafeAreaView style={styles.wrapper}>

                    <Text style={styles.creditguide}>Enter Debit/Credit Details</Text>

                    <Image
                        source={require('../assets/payment.png')}
                        resizeMode="center"
                        style={styles.image}
                    />

                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter Debit/Credit Number"
                    />

                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter CVV"
                    />

                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter Expiry Date(MM/YYYY)"
                    />
                    <View style={styles.flexrow}>
                        <TouchableOpacity onPress={() => { }} >
                            <Text style={styles.buttonStyle}>Submit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { }} >
                            <Text style={styles.cancelButton}>Cancel</Text>
                        </TouchableOpacity>

                    </View>

                </SafeAreaView>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
        { width: 60, height: 30 },

    image: {
        alignSelf: 'center',
        marginTop: 40,
        marginBottom: 50,
        padding: 0,
        width: 300,
        height: 55,
    },

    tag:
        { fontSize: 20, fontWeight: "500" },

    textInput: {
        textAlign: 'center',
        color: '#126fb2',
        borderWidth: 2,
        borderColor: '#126fb2',
        padding: 8,
        margin: 20,
        // marginLeft: 50,
        marginTop: 30,
        width: 300,
        borderRadius: 8,
        fontSize: 16
    },

    creditguide: {
        color: '#1e86c7',
        textAlign: 'center',
        marginTop: 70,
        fontSize: 29
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


export default PaymentPage;
