import React, {Component} from 'react';
import { Button, StatusBar } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import * as OpenAnything from "react-native-openanything"


export default function ThirdScreen(){
    
    return(
        <View style={styles.container}>
            <Text style={{fontSize:30,textAlign:'center',fontWeight:'bold'}}>Press button for ERC20 Smart Contracts code </Text>
            <View style={{width:180,margin:30}}>
            <Button style={{outerWidth:30}} title='PDF' onPress={()=>OpenAnything.Pdf('https://assets.website-files.com/5bf3d7344414eda73c393eb8/5c8633bf8f09537fc4bf9463_iccs_325.pdf') }  ></Button>
            </View>
            <StatusBar style="auto"></StatusBar>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'lavender',
        alignItems: 'center',
        justifyContent: 'center',
    },
});