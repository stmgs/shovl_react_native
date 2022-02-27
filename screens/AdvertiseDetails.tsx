import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, TextInput, ImageBackground, Button } from "react-native";

const AdvertiseDetails = () => {

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
                    <Text style={styles.tag}>Advertise Details</Text>
                    <Text>Home</Text>
                </View>
                {/* End of navigation */}
                {/* Body part Starts */}
                <View style={styles.formElements}>
                    <Image
                        source={require('../assets/snowAdvertise.jpeg')}
                        resizeMode="center"
                        style={styles.image}
                    />
                    <TextInput style={styles.textArea}
                        multiline={true} numberOfLines={3} editable={false} selectTextOnFocus={false} value=" This walk way in front of the house which needs to be cleaned as soon as possible."
                    />

                    <View style={styles.labelName}>
                        <Text style={{ width: "25%" }}>From Date:</Text>
                        <TextInput
                            style={styles.textInput}
                            value="02/25/2022" editable={false} selectTextOnFocus={false}
                        />
                    </View>
                    <View style={styles.labelName}>
                        <Text style={{ width: "25%" }}>To Date:</Text>
                        <TextInput
                            style={styles.textInput}
                            value="02/27/2022" editable={false} selectTextOnFocus={false}
                        />
                    </View>



                    <View style={styles.flexrow}>
                        <TouchableOpacity onPress={() => { }} >
                            <Text style={styles.buttonStyle}>Apply</Text>
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
        width: "90%",
        justifyContent: "center",
        alignItems: "center"
    },
    menu: {
        // flex: 1,
        flexDirection: "row",
        width: "100%",
        padding: 10,
        borderBottomWidth: 1,
        marginTop: 10,
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
        marginTop: 20,
        marginBottom: 10
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
        margin: 10,
        width: 100,
        textAlign: "center",
        fontWeight: "500"
    },
    cancelButton: {
        backgroundColor: '#900',
        borderRadius: 8,
        padding: 10,
        color: "#fff",
        margin: 10,
        width: 100,
        textAlign: "center",
        fontWeight: "500"

    },
    textArea: {
        color: '#737373',
        borderWidth: 0.5,
        borderColor: '#999',
        padding: 8,
        margin: 8,
        width: "85%",
        borderRadius: 8,
        fontSize: 14
    },
    textInput: {
        color: '#737373',
        borderWidth: 0.5,
        borderColor: '#ddd',
        padding: 8,
        margin: 8,
        width: "65%",
        borderRadius: 8,
        fontSize: 16
    },
    province: {
        color: '#126fb2',
        borderBottomWidth: 2,
        borderColor: '#126fb2',
        padding: 8,
        margin: 8,
        marginLeft: 60,
        width: "60%",
        borderRadius: 8,
        fontSize: 16
    }

})


export default AdvertiseDetails;
