import React, {Component} from 'react';
import { Button, StatusBar } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import {Image} from 'react-native' ; 


export default function HomeScreen( {navigation} ){
    return(
        <View style={styles.container}>
            <Image
            style={{width:220, height:220,margin:25}}
            source={require('../assets/bc.png')}/>
            
           
          
            <View style={{margin:20}}>
                <Button style={styles.button} title="FivetaElection.sol Code"
                onPress={()=> navigation.navigate("Second")}
            />
            </View>
            <View style={{margin:20}}>
            <Button style={{padding: 20, backgroundColor: 'red'}} title="ERC20.sol Code"
            onPress={()=> navigation.navigate("Third")}
            />
            </View>
            <View style={{margin:20}}>
            <Button title="Ballot.sol Code"
            
            onPress={()=> navigation.navigate("Fourth")}
            />
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
    button: {
        marginBottom: 50,
        width:120,
    }
});