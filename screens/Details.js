import React from "react";
import { View } from "react-native";

const Details = ({ route }) => {
  const { item } = route?.params || {};
  return <View style={{ flex: 1 }}></View>;
};

export default Details;
