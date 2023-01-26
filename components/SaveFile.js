import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, Button, View, Alert } from 'react-native';
// import { DocumentDirectoryPath, writeFile } from 'react-native-fs';
// import {  writeFile } from 'react-native-fs';

// copied from https://www.atomlab.dev/tutorials/react-native-fs 
// import fs from 'react-native-fs';

// import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
// import * as Permissions from 'expo-permissions';





export const SaveFile = (props) => {

    // const saveFile2 = async () => {
    //     const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    //     if (status === "granted") {
    //         let fileUri = FileSystem.documentDirectory + "text.txt";
    //         await FileSystem.writeAsStringAsync(fileUri, "Hello World", { encoding: FileSystem.EncodingType.UTF8 });
    //         const asset = await MediaLibrary.createAssetAsync(fileUri)
    //         await MediaLibrary.createAlbumAsync("Download", asset, false)
    //     }
    // }

        const [fileText, setFileText] = useState('');

        const saveFile = async () => {
          filename="tatatatatatatata.txt"
          const fileUri = `${FileSystem.documentDirectory}${filename}`;
          const strData = JSON.stringify(['aaaaa', 'bbbbb', 'ccccc'])
          await FileSystem.writeAsStringAsync(fileUri, strData, { encoding: FileSystem.EncodingType.UTF8 });
          const strContent = await FileSystem.readAsStringAsync(fileUri,{ encoding: FileSystem.EncodingType.UTF8 });
          const strDataRead  = JSON.parse(strContent)



          // const path = `${DocumentDirectoryPath}/${Date.now()}.txt`;
          
        };
      
        return (
          <SafeAreaView style={styles.wrapper}>
            <View style={styles.container}>
              <View style={styles.main}>
                <Text style={styles.title}>Enter text for your file:</Text>
                <TextInput
                  value={fileText}
                  onChangeText={setFileText}
                  style={styles.textArea}
                  multiline
                  textAlignVertical="top"
                />
              </View>
              <Button title="Save File" onPress={saveFile} />
            </View>
          </SafeAreaView>
        );
    
}

const styles = StyleSheet.create({
    wrapper: {
      flex: 1,
    },
    container: {
      padding: 16,
      flex: 1,
    },
    main: {
      flex: 1,
      display: 'flex',
      paddingVertical: 16,
    },
    textArea: {
      height: 200,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 4,
      marginBottom: 16,
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 16,
      paddingBottom: 16,
      fontSize: 18,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
      color: '#333',
    },
  });

export default SaveFile;