import { useEffect, useState } from "react";
import { View, Dimensions, StyleSheet, Text } from "react-native";



export default function Dimension_api() {

    const [dimensions, setDimensions] = useState({
        window: Dimensions.get("window")
    })

    useEffect(() => {
        const subscription = Dimensions.addEventListener("change", ({ window }) => {
            setDimensions({ window })
        });
        return () => subscription?.remove();
    })


    const { window } = dimensions;

    const windowWidth = window.width;
    const widowheight = window.height;

    console.log("windowWidth", { windowWidth }, "widowheight", { widowheight })


    return (
        <View style={[style.container]}>
            <View style={[style.box, {
                width: windowWidth > 500 ? 200 : 100,
                height: widowheight > 500 ? 300 : 200,
                backgroundColor: widowheight > 500 ? 'white' : 'red',

            }]}><Text>shjhshh</Text></View>
        </View>
    )

}


const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
    },
    box: {
        // width: windowWidth < 500 ? 100 : 200,
        // height: height < 500 ? 200 : 100,
        // backgroundColor: windowWidth < 500 ? 'red' : 'blue',
        alignItems: "center",
        justifyContent: 'center',
    }

})




