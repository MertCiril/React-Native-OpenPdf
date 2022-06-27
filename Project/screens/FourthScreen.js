import React, {Component} from 'react';
import { Button, StatusBar } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import * as OpenAnything from "react-native-openanything"


export default function FourthScreen(){
    
    return(
        <View style={styles.container}>
            <Text style={{fontSize:30,textAlign:'center',fontWeight:'bold'}}>Press button for Ballot Smart Contracts code </Text>
            <View style={{width:180,margin:30}}>
            <Button style={{outerWidth:30}} title='PDF' onPress={()=>OpenAnything.Pdf('https://www.dcs.warwick.ac.uk/~fenghao/files/openvotenetwork.pdf') }  ></Button>
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