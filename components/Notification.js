import React from "react";
import {
  Dimensions,
  Image,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import moment from "moment";

const { width, height } = Dimensions.get("window");

const NotificationComponent = ({ visible, temperature, icon }) => {
  const time = moment().format("hh:mm A");
  const day = moment().format("dddd");
  const date = moment().format("MMM DD, YYYY");
  const temp = temperature + "° C";
  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <SafeAreaView style={styles.view}>
        <View style={styles.baseView}>
          <View style={styles.topView}>
            <Text style={styles.topText}>Grameen</Text>
            <View style={styles.separator} />
            <View style={styles.detailsView}>
              <Text style={styles.time}>{time}</Text>
              <View style={{ margin: 10 }}>
                <Text style={styles.text}>{day}</Text>
                <Text style={styles.text}>{date}</Text>
              </View>
            </View>
          </View>
          <View style={styles.bottomView}>
            <View style={styles.circle} />
            <View>
              <Text style={styles.weatherText}>Weather App</Text>
              <Text style={styles.temperature}>
                {"Current Temperature: " + temp}
              </Text>
            </View>
            <Image source={{ uri: icon }} style={styles.image} />
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default NotificationComponent;

const styles = StyleSheet.create({
  image: { flex: 1, aspectRatio: 1 },
  text: {
    fontFamily: "roboto-r",
    fontSize: RFValue(15),
    color: "#d3d3d3",
    marginVertical: 2,
  },
  temperature: {
    fontFamily: "roboto-r",
    fontSize: RFValue(13),
    marginVertical: 2,
    marginHorizontal: 5,
  },
  weatherText: {
    fontFamily: "roboto-r",
    fontSize: RFValue(18),
    marginVertical: 2,
    marginHorizontal: 5,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "gray",
  },
  bottomView: {
    backgroundColor: "white",
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
  },
  time: { color: "white", fontFamily: "roboto-r", fontSize: RFPercentage(3) },
  detailsView: { margin: 10, flexDirection: "row", alignItems: "center" },
  separator: {
    alignSelf: "center",
    height: 1,
    backgroundColor: "#d3d3d3",
    marginVertical: 5,
    width: width * 0.75,
  },
  topText: { color: "white", alignSelf: "center", fontFamily: "roboto-r" },
  topView: { backgroundColor: "#3E3E3E", paddingTop: 10 },
  baseView: {
    width: width * 0.85,
    alignSelf: "center",
    backgroundColor: "#000000",
  },
  view: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
});
