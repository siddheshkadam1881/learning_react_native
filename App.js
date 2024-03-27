import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, Button, Pressable, Modal, StatusBar, ActivityIndicator, Alert } from 'react-native';

import React, { useState } from 'react';
import Dimension_api from './components/Dimension_api';
import WindowDimension from './components/WindowDimention';
import SafeAreaView from './components/SafeAreaViews';

import Box from './components/Box';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <View style={styles.box}><Text>shjhshh</Text></View> */}

      {/* <Dimension_api></Dimension_api> */}

      {/* <WindowDimension></WindowDimension> */}

      <SafeAreaView></SafeAreaView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    alignItems: "center",
    // justifyContent: 'center',
  }
});

