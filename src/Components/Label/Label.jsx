import React from "react";
import { Text } from "react-native";
import { label } from "./style";


const Label = ({ children, style }) => {
  return <Text style={label} >{children}</Text>;
};

export default Label;