import { Pressable, StyleSheet, Text, View } from "react-native";

import React from "react";

export default function ListaItem({ data, suma, resta }) {
  return (
    <View style={styles.itemList}>
      <Text> {data.item.value} </Text>
      <View style={styles.buttonsNumbers}>
        <Pressable style={styles.button} onPress={() => suma(data.item.id)}>
          <Text styles={styles.textoPlus}>+</Text>
        </Pressable>
        <Text st> {data.item.cant} </Text>
        <Pressable style={styles.button} onPress={() => resta(data.item.id)}>
          <Text styles={styles.textoPlus}>-</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemList: {
    width: 310,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
  },
  buttonsNumbers:{
    flexDirection: "row",
    alignItems: "center",
  },
  item: {
    justifyContent: "flex-start",
    width: 260,
    marginTop: 10,
    marginLeft: 8,
    marginRight: 8,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  button: {
    width: 30,
    height: 30,
    margin: 0,
    backgroundColor: "#e0afa0",
    alignItems: "center",
    justifyContent:"center",
  },
  textoPlus:{
    fontSize:10,
  }
});
