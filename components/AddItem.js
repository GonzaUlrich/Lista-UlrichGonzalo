import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

export default function AddItem({
  handleAddItem,
  handleChangeText,
  inputText,
}) {
  const [modalVisible, setModalVisible] = useState(false);

  const handleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.inputContainer}>
      <TouchableOpacity style={styles.button} onPressIn={handleModal}>
        <Text style={styles.texto}>Agregar Empanada</Text>
      </TouchableOpacity>
      <Modal transparent={true} animationType="fade" visible={modalVisible}>
        <Pressable style={styles.backgorundModal} onPress={handleModal}>
          <View style={styles.modal}>
            <TextInput
              placeholder="Add item"
              style={styles.input}
              onChangeText={handleChangeText}
              value={inputText}
            ></TextInput>
            <TouchableOpacity style={styles.button} onPress={handleAddItem}>
              <Text style={styles.texto}>Agregar</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}

/*

*/
const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    width: "100%",
    borderBottomColor: "#463f3a",
    borderBottomWidth: 1,
    marginBottom:10,
    textAlign:"center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#f4f3ee",
    padding: 10,
    width: "100%",
  },
  backgorundModal: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    padding: 20,
    width:"60%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#bfc0c0",
  },
  texto:{
    color: "#463f3a",
  },
});
