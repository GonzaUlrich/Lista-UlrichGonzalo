import { FlatList, StyleSheet } from "react-native";

import ListaItem from "./ListaItem";
import React from "react";

export default function List({
    suma,
    resta,
    itemList,
}) {
    
    return (
        <FlatList
            style={styles.list}
            data={itemList}
            renderItem={(data)=> <ListaItem data={data} suma={suma} resta={resta}></ListaItem>}
            keyExtractor={item => item.id}
        ></FlatList>
    );
}

const styles = StyleSheet.create({
    list: {
        
      }
})

