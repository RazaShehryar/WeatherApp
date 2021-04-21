import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useCallback, useState, useEffect } from "react";
import { Dimensions, Modal, StyleSheet, Text, View } from "react-native";
import Root from "./route/Root";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import AppFonts from "./constants/AppFonts";
import { navigationRef } from "./route/Global";
import * as Location from "expo-location";
import NotificationComponent from "./components/Notification";
import getTemperature from "./api/getTemperature";

const { height, width } = Dimensions.get("window");

const App = () => {
  const [loaded] = Font.useFonts(AppFonts);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState("");
  const [location, setLocation] = useState();
  const [temperature, setTemperature] = useState();
  const [visible, setVisible] = useState(false);
  const [icon, setIcon] = useState("");
  useEffect(() => {
    const prepare = async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      } finally {
        if (loaded) setReady(true);
      }
    };

    prepare();
  }, [loaded]);

  useEffect(() => {
    // initial notification to show
    if (location)
      getTemperature(
        location,
        (e) => setTemperature(e),
        (e) => setVisible(e),
        (e) => setIcon(e)
      );
  }, [location]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setError("Permission to access location was denied");
        return;
      } else {
        let location = await Location.getLastKnownPositionAsync({});
        setLocation(location.coords);
      }
    })();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (ready) await SplashScreen.hideAsync();
  }, [ready]);

  useEffect(() => {
    if (visible) setTimeout(() => setVisible(false), 4000);
  }, [visible]);

  useEffect(() => {
    setInterval(async () => {
      var hour = new Date().getHours();
      if (hour >= 9 && hour < 18 && location) {
        //this will show the notification only between 9 AM and 6 PM with a regular interval of 1 hour
        await getTemperature(
          location,
          (e) => setTemperature(e),
          (e) => setVisible(e),
          (e) => setIcon(e)
        );
      }
    }, 1000 * 60 * 60);
  }, [location]);

  if (!ready) return null;
  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <NotificationComponent
        temperature={temperature}
        visible={visible}
        icon={icon}
      />
      <NavigationContainer ref={navigationRef}>
        <Root />
      </NavigationContainer>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
});
