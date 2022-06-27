import React, {Component} from 'react';
import { Button, StatusBar } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import * as OpenAnything from "react-native-openanything"


export default function SecondScreen(){
    
    return(
        <View style={styles.container}>
            <Text style={{fontSize:30,textAlign:'center',fontWeight:'bold'}}>Press button for Fiveta Election Smart Contracts code </Text>
            <View style={{width:180,margin:30}}>
            <Button style={{outerWidth:30}} title='PDF' onPress={()=>OpenAnything.Pdf('https://blockchainlab.com/pdf/Ethereum_white_paper-a_next_generation_smart_contract_and_decentralized_application_platform-vitalik-buterin.pdf') }  ></Button>
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
        justifyContent: 'center', //container içine nasıl dağılacağı
    },
});