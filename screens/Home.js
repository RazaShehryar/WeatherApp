import React, { useEffect } from "react";
import { FlatList, View } from "react-native";
import getCities from "../api/getCities";

const Home = () => {
  useEffect(() => {
    getCities();
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={[1, 2, 3]}
        keyExtractor={(item, index) => item + index.toString()}
        renderItem={({ item, index }) => <View />}
        ItemSeparatorComponent={() => (
          <View style={{ height: 5, backgroundColor: "black" }} />
        )}
      />
    </View>
  );
};

export default Home;
