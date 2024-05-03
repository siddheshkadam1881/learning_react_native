import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, Button, Pressable, Modal, StatusBar, ActivityIndicator, Alert } from 'react-native';

import React, { useState } from 'react';
import Dimension_api from './components/Dimension_api';
import WindowDimension from './components/WindowDimention';
import SafeAreaView from './components/SafeAreaViews';

import Box from './components/Box';
import List from './components/List';
import FlatLists from './components/FlatLists';
import Sectionlist from './components/Sectionlist';

export default function App() {
  return (
    // <ScrollView>
      <View style={styles.container}>
        {/* <View style={styles.box}><Text>shjhshh</Text></View> */}

        {/* <Dimension_api></Dimension_api> */}

        {/* <WindowDimension></WindowDimension> */}


        {/* <SafeAreaView> */}
        {/* <List></List> */}

        {/* </SafeAreaView>  */}

        {/* <FlatLists></FlatLists> */}

        {/* <Sectionlist></Sectionlist> */}



      </View>
    // </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "plum",
    // alignItems: "center",
    // justifyContent: 'center',

  }
});

