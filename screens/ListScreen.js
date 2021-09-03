import React from 'react';
import { Text,View, StyleSheet,FlatList } from 'react-native';

const ListScreen = ()=> {

    const friends = [
        {name : 'Friend 1 - Age 20'},
        {name : 'Friend 2 - Age 45'},
        {name : 'Friend 3 - Age 32'},
        {name : 'Friend 4 - Age 27'},
        {name : 'Friend 5 - Age 53'},
        {name : 'Friend 6 - Age 90'},
        {name : 'Friend 1 - Age 25'},
    ]

    return <FlatList
        keyExtractor = {friend => friend.name}
        data = {friends}
        renderItem = {({item}) =>{
            return <Text style = {styles.ItemStyle}>
                {item.name}
            </Text>;

        }}
    />
};

const styles = StyleSheet.create({
    ItemStyle : {
        marginVertical : 40
    },
});

export default ListScreen;