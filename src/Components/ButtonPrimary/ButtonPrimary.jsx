import React from "react";
import {Pressable, Text, View } from "react-native";
import { styles } from "./style";

const ButtonPrimary = ({ title, onPress }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <View>
        <Text style={styles.textButton}>{title}</Text>
      </View>
    </Pressable>
  );
};



export default ButtonPrimary;
