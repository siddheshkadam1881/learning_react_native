import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, Button, Pressable, Modal } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import React, { useState } from 'react';

let logoImage = require("./assets/adaptive-icon.png")


export default function App() {
  let [active, setactive] = useState(false);

  
  return (


    <View style={{ flex: 1, backgroundColor: 'plum', }}>
      {/*       <View Used for div  */}

      {/*       <ScrollView> Used for screen to be scroll  */}

      <ScrollView>


        <Text>
          <Text style={{ color: "red" }}> hello </Text>world
        </Text>

        {/* Button with ImageBackground */}

        <Button title='press' style={{ height: 100, width: 100 }} onPress={() => console.log("buttion press")} color="red" disabled />

        {/* image with ImageBackground */}
        <ImageBackground source={logoImage} style={{ height: 200, width: 200 }}>
          <Text>hello World</Text>
        </ImageBackground>

        <Pressable onPress={() => console.log("Image passable")} >
          {<Image
            source={{ uri: 'https://logonoid.com/images/android-studio-logo.png' }}
            style={{ height: 200, width: 200 }}></Image>}
        </Pressable>

        <Pressable>
          <Button title='press' style={{ height: 100, width: 100 }} onPress={() => console.log("button passable")} color="red" />
        </Pressable>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.      </Text>

        {<Image
          source={{ uri: 'https://logonoid.com/images/android-studio-logo.png' }}
          style={{ height: 200, width: 200 }}></Image>}

        {<Image
          source={{ uri: 'https://logonoid.com/images/android-studio-logo.png' }}
          style={{ height: 200, width: 200 }}></Image>}

        {<Image
          source={{ uri: 'https://logonoid.com/images/android-studio-logo.png' }}
          style={{ height: 200, width: 200 }}></Image>}
        {<Image
          source={{ uri: 'https://logonoid.com/images/android-studio-logo.png' }}
          style={{ height: 200, width: 200 }}></Image>}
        {<Image
          source={{ uri: 'https://logonoid.com/images/android-studio-logo.png' }}
          style={{ height: 200, width: 200 }}></Image>}
        {<Image
          source={{ uri: 'https://logonoid.com/images/android-studio-logo.png' }}
          style={{ height: 200, width: 200 }}></Image>}
        {<Image
          source={{ uri: 'https://logonoid.com/images/android-studio-logo.png' }}
          style={{ height: 200, width: 200 }}></Image>}


       {/* Model Working   */}
        <View style={styles.container}>
  
          <Button
            title={"click"}
            onPress={() => { setactive(!active) }}
          />
        </View>
      </ScrollView>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: 'center',
    justifyContent: 'center',
  },
  View: {
    backgroundColor: "white",
    height: 140,
    width: 250,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "black",
    borderWidth: 2,
  },
  text: {
    fontSize: 20,
    color: "green",
    marginBottom: 20
  },
  button: {
    margin: 20,
    width: 200,
  }
});

