import React, { useEffect } from "react";
import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import getCities from "../api/getCities";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import CitiesList from "../components/CitiesList";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getCities((e) => setData(e));
  }, []);

  return (
    <View style={styles.container}>
      <CitiesList data={data} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
});
