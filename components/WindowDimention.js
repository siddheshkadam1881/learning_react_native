import { View, Dimensions, StyleSheet, Text, useWindowDimensions } from "react-native";



export default function useWindowDimension() {
    const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;


    console.log("windowWidth", { windowWidth }, "widowheight", { windowHeight })


    return (
        <View style={[style.container]}>
            <View style={[style.box, {
                width: windowWidth > 500 ? 200 : 100,
                height: windowHeight > 500 ? 300 : 200,
                backgroundColor: windowHeight > 500 ? 'white' : 'red',

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


