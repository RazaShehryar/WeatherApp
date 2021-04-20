import React from "react";
import { useCallback } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { navigate } from "../route/Global";
const CitiesList = ({ data }) => {
  const keyExtractor = (item, index) => item + index.toString();
  const renderItem = useCallback(({ item, index }) => {
    const { name, weather, main } = item || {};
    const { temp } = main || {};
    const convert = Math.round(temp - 273.15) + "° C";
    return (
      <TouchableOpacity
        style={styles.rowView}
        onPress={() => navigate("details", { item })}
      >
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.weather}>{weather[0]?.main}</Text>
        </View>
        <Text style={styles.temperature}>{convert}</Text>
      </TouchableOpacity>
    );
  });

  return (
    <FlatList
      data={data}
      initialNumToRender={7}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
};

export default React.memo(CitiesList);

const styles = StyleSheet.create({
  separator: { height: 1, backgroundColor: "#d3d3d3" },
  temperature: { fontFamily: "roboto-m", fontSize: RFValue(25) },
  weather: {
    fontFamily: "roboto-r",
    fontSize: RFValue(14),
    marginVertical: 2.5,
  },
  name: {
    fontFamily: "roboto-r",
    fontSize: RFValue(18),
    marginVertical: 2.5,
  },
  rowView: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
