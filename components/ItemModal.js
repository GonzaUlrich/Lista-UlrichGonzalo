import { Button, Modal, StyleSheet, Text, View } from "react-native";

import React from "react";

export default function ItemModal({
    modalVisible,
    itemSelected,
    handleConfirmeDelete,
    handleDontDelete,
}) {

    return(
  <Modal transparent={true} animationType="slide" visible={modalVisible}>
    <View style={styles.modal}>
      <Text flexDirection="">Eliminar:</Text>
      <Text> {itemSelected.value} </Text>
      <View flexDirection={"row"}>
        <Button title="Si" onPress={handleConfirmeDelete}></Button>
        <Text> </Text>
        <Button title="No" onPress={handleDontDelete}></Button>
      </View>
    </View>
  </Modal>
  )
}

const styles = StyleSheet.create({
    modal: {
        marginTop: 200,
        width: 100,
        height: 150,
        padding: 0,
        borderWidth: 3,
        borderColor: 'black',
        backgroundColor: '#ECECEC',
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent: 'space-evenly',
      }
})