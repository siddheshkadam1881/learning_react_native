import { View, Dimensions, Text, useWindowDimensions, StyleSheet, SafeAreaView, Platform } from "react-native";

import CustomButton from "./custom/CustomButton";


export default function SafeAreaViews() {
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.containers}>
                <View style={styles.box}>
                    <Text style={styles.text}> Welcome!</Text>
                    <CustomButton title="Press Me" onPress={() => alert("Pressed!")} />
                </View>
            </View>
        </SafeAreaView>
    )
}



let styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: "plum"
    },
    containers: {
        // backgroundColor: "red",
        // height: 400,
        // width: 400,
    },

    box: {
        padding: 20
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        ...Platform.select({
            ios: {
                color: "red",

            },
            android: {

                color: "blue",
                fontSize: 48,

            }
        })

    }
})


