
import { View, Text, StyleSheet } from "react-native";

import Box from "./Box";
export default function Flex() {

    return (
        <View style={styles.container}>
            <View style={styles.box1}><Text style={styles.text1}>yellow</Text></View>
            <View style={styles.box2}><Text>green</Text></View>
            <View style={styles.box3}><Text>blue</Text></View>

        </View>
    )
}

let styles=StyleSheet.create({

    container:{
        flex:1,
        alignItems:'flex-end',
        textAlign:'center'
     },

     text1:{
        'textAlign':'center'
     },
    box1:{
        height:100,
        width:100,
        backgroundColor:'yellow',
        justifyContent:'center',
        alignContent:'center',
    },
    box2:{
        height:100,
        width:100,
        backgroundColor:'green',
        justifyContent:'center',
        alignContent:'center'

    },
    box3:{
        height:100,
        width:100,
        backgroundColor:'blue',
        justifyContent:'center',
        alignContent:'center'

    }

})