import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native'
import ListData from '../components/ListData';
import { IWish } from '../interfaces/IWish';
import useWish from '../hooks/useWish';
import InputData from '../components/InputData';



const DataInputScreen = () => {
   
    const{ item, list, handleAddItem, handleInputChange, handleDeleteItem } = useWish();


    return (
        <View style={styles.mainContainer}>
            <View style={{flex: 1, padding: 10  }}>
                <Text style={styles.mainText}>Mi lista de deseos</Text>
            </View>           
            
            <InputData item={item} handleAddItem={ handleAddItem } handleInputChange={ handleInputChange }  />
            
            <View style={{ flex: 5 }}>
                <ListData  elements={ list }  handleDeleteItem = { handleDeleteItem }  />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingTop: 10
    },
    mainText: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 40,
        justifyContent: 'center'
    }
});

export default DataInputScreen
