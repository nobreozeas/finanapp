import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Alert, KeyboardAvoidingView } from "react-native";
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import PizzaItem from "./src/Components/PizzaItem";
import ButtonPrimary from "./src/Components/ButtonPrimary/ButtonPrimary";



export default function App() {


  const handleAddPizza = () => {
    Alert.alert(
      `adicionada ao carrinho`,
      'Deseja adicionar mais pizzas?',
      [
        {
          text: 'Não',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { text: 'Sim', onPress: () => console.log('OK Pressed') }
      ],
      { cancelable: false }

    );
  }

  const handleFinalizarPedido = () => {
    Alert.alert(
      `Pedido finalizado`,
      'Deseja finalizar o pedido?',
      [
        {
          text: 'Não',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { text: 'Sim', onPress: () => console.log('OK Pressed') }
      ],
      { cancelable: false }

    );
  }

  return (
    
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" backgroundColor="red" />
    

      <View>
        <Text style={styles.titulo}>Pizzaria</Text>
      </View>

      <PizzaItem
        name={"Pizza de Calabresa"}
        price={50}
        description={"it's a pizza of calabresa"}
        originalPrice={55}
        ingredients={["calabresa", "queijo", "tomate"]}
        onPress={handleAddPizza}
      />
      <PizzaItem
        name={"Pizza de File"}
        price={60}
        description={"it's a pizza of file"}
        ingredients={["file", "queijo", "tomate"]}
      />
      <PizzaItem
        name={"Pizza de Bacon"}
        price={45}
        description={"it's a pizza of bacon"}
        ingredients={["bacon", "queijo", "tomate"]}
      />

      <ButtonPrimary title={"Finalizar Pedido"} onPress={handleFinalizarPedido} />



    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  titulo: {
    fontSize: 30,
    fontWeight: "400",
    color: "red",
  },
});
