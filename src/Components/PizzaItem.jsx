import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

const PizzaItem = ({
  name,
  price,
  description,
  originalPrice,
  ingredients,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titulo}>{name}</Text>
        <Text>R$ {price.toFixed(2)}</Text>
        <Text>{description}</Text>
        {originalPrice && originalPrice > price && <Text>Promocao Extra</Text>}
        <Text>{ingredients.join(", ")}</Text>
      </View>
      <View>
        <Pressable style={styles.buttonAdd} onPress={onPress}>
          <Text style={styles.textButtonAdd}>+</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default PizzaItem;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    backgroundColor: "#ccc",
    width: 350,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titulo: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  buttonAdd: {
    backgroundColor: "green",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  textButtonAdd: {
    fontSize: 20,
    fontWeight: "600",
    color: "#fff",
  },
});
