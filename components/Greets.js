import { View, Text, StyleSheet } from "react-native";


export default function Greet({ name }) {

    return (
        <View style={styles.container}>
            <Text>
                name is here {name}
            </Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
      marginTop: 50,
    },
    bigBlue: {
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 30,
    },
    red: {
      color: 'red',
    },
  });