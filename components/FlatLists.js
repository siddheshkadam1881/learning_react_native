import { StyleSheet, View, Text, Platform, Image, ScrollView, FlatList, SafeAreaView } from 'react-native';
import productlist from '../product.json';

export default function FlatLists() {
    return (

        <View style={styles.container}>

            <FlatList
                data={productlist}
                initialNumToRender={10}
                renderItem={(product) => {
                    product = product.item;
                    return (
                        <View key={product.index} style={styles.card}>
                            <View style={styles.nameContainer}>
                                <Text style={styles.name}>{product.title}</Text>
                                {/* <Text style={styles.hp}>❤️️{hp}</Text> */}
                            </View>
                            {/* <Image source={require(product.thumbnail)} />; */}

                            <Image
                                source={{ uri: `${product.thumbnail}` }}
                                accessibilityLabel={`${product.title}}`}
                                resizeMode='contain'
                                style={styles.image} />

                            <View style={styles.desccontainer}>
                                <Text style={styles.descView}>Description</Text>
                            </View>
                            <View style={styles.desccontainer}>
                                <Text style={styles.desc}>{product.description} </Text>
                            </View>

                        </View>
                    );
                }}
                nestedScrollEnabled
            />



        </View>


    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5',
        paddingTop: Platform.OS == "android" ? 25 : 0,
    },
    card: {
        backgroundColor: 'white',
        height: 500,
        width: 300,
        borderColor: "grey",
        borderRadius: 16,
        borderWidth: 2,
        padding: 16,
        margin: 16,
        marginLeft: 20,

    },
    nameContainer: {
        // flex:1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10,
        width: "100%",
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    image: {
        width: '100%',
        height: 200,
    },
    desccontainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 10,
        marginTop: 30,
        width: "100%",
    },
    descView: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    desc: {
        fontSize: 15,
        fontWeight: 'normal',
    }



})


