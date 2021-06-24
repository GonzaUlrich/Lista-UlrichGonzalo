import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import AddItem from "./components/AddItem";
import ItemModal from "./components/ItemModal";
import List from "./components/Lista";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [itemList, setItemList] = useState([]);

  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const handleChangeText = (text) => setInputText(text);
  const handleAddItem = () => {
    if (inputText != "" && inputText != " ")
      setItemList([
        ...itemList,
        {
          id: Math.random().toString(),
          value: inputText,
          cant: 1,
        },
      ]);
    setInputText("");
  };

  const handleConfirmeDelete = () => {
    const id = itemSelected.id;
    setItemList(itemList.filter((item) => item.id !== id));
    setModalVisible(false);
    setItemSelected({});
  };
  const handleDontDelete = () => {
    setModalVisible(false);
    setItemSelected({});
  };

  const handleModal = (id) => {
    setItemSelected(itemList.find((item) => item.id === id));
    setModalVisible(true);
  };



  const suma = (id) => {
    //setItemSelected(itemList.find((item) => item.id === id));
    //itemSelected.cant++;
    let item = itemList.findIndex((item) => item.id === id);
    const updated = [...itemList];
    updated[item].cant++;
    setItemList(updated);
  };
  const resta = (id) => {
    let item = itemList.findIndex((item) => item.id === id);
    const updated = [...itemList];
    updated[item].cant--;
    setItemList(updated);
    if (updated[item].cant <= 0) {
      setItemList(itemList.filter((item) => item.id !== id));
    }
  };

  return (
    <View style={styles.screen}>
      {/*Head*/}
      <View>
        <Text style={styles.texto}>Lista de Empanadas</Text>
      </View>
      {/*Body*/}
      <ScrollView style={styles.itemBox} horizontal>
        <List suma={suma} resta={resta} itemList={itemList}></List>
        <ItemModal
          modalVisible={modalVisible}
          handleConfirmeDelete={handleConfirmeDelete}
          itemSelected={itemSelected}
          handleDontDelete={handleDontDelete}
        ></ItemModal>
      </ScrollView>
      <AddItem
        handleChangeText={handleChangeText}
        handleAddItem={handleAddItem}
        inputText={inputText}
      ></AddItem>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30,
    paddingTop: 50,
    backgroundColor: "#8a817c",
    height: "100%",
  },
  itemBox: {
    marginTop: 20,
    marginBottom: 10,
    height: "80%",
    width: "100%",
    backgroundColor: "#bcb8b1",
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 10,
    },
    shadowOpacity: 0.09,
    shadowRadius: 4.65,
    elevation: 7,
  },
  texto: {
    color: "#463f3a",
    textAlign: "center",
    fontSize: 20,
  },
});
