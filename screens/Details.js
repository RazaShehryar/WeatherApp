import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { RFValue } from "react-native-responsive-fontsize";
import { weatherIcon } from "../api/endpoints";

const Details = ({ route }) => {
  const { item } = route?.params || {};
  const { coord, name, weather, wind, main } = item || {};
  const { speed } = wind || {};
  const { humidity, temp_max, temp_min, temp } = main || {};
  const tempMax = Math.round(temp_min - 273.15) + "° C";
  const tempMin = Math.round(temp_max - 273.15) + "° C";
  const currentTemp = Math.round(temp - 273.15) + "° C";
  const source = { uri: weatherIcon(weather[0].icon) };
  const { lat, lon } = coord || {};
  const region = {
    latitude: lat,
    longitude: lon,
    latitudeDelta: 0.25,
    longitudeDelta: 0.25,
  };
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        initialRegion={region}
        scrollEnabled={false}
        zoomEnabled={false}
        zoomTapEnabled={false}
        style={styles.mapView}
      >
        <Marker coordinate={region} />
      </MapView>
      <View style={styles.view}>
        <View style={styles.spacerView}>
          <View>
            <Text style={styles.descName}>{name}</Text>
            <Text style={styles.desc}>{weather[0]?.main}</Text>
            <Text style={styles.desc}>{"Humidity: " + humidity}</Text>
            <Text style={styles.desc}>{"Wind Speed: " + speed}</Text>
            <Text style={styles.desc}>{"Max. Temp: " + tempMax}</Text>
            <Text style={styles.desc}>{"Min. Temp: " + tempMin}</Text>
          </View>
          <View style={styles.center}>
            <Text style={styles.temperature}>{currentTemp}</Text>
            <Image source={source} style={styles.image} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  image: { aspectRatio: 1, flex: 0.75 },
  view: { flex: 0.7, padding: 10 },
  spacerView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  center: { alignItems: "center" },
  temperature: { fontFamily: "roboto-r", fontSize: RFValue(25) },
  descName: {
    fontFamily: "roboto-m",
    fontSize: RFValue(18),
    marginVertical: 2,
  },
  desc: { fontFamily: "roboto-r", marginVertical: 2 },
  container: { flex: 1, backgroundColor: "#fff" },
  mapView: { flex: 1, justifyContent: "center", alignItems: "center" },
  name: {
    fontFamily: "roboto-r",
    fontSize: RFValue(18),
  },
});
