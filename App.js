import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useCallback, useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Root from "./route/Root";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import AppFonts from "./constants/AppFonts";
import { navigationRef } from "./route/Global";

const App = () => {
  const [loaded] = Font.useFonts(AppFonts);
  const [ready, setReady] = useState(false);

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

  const onLayoutRootView = useCallback(async () => {
    if (ready) await SplashScreen.hideAsync();
  }, [ready]);

  if (!ready) return null;
  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
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
