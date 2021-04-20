import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Details from "../screens/Details";
import Home from "../screens/Home";
import { AntDesign } from "@expo/vector-icons";
import { goBack, navigate } from "./Global";
import HeaderLeft from "../icons/HeaderLeft";

const Stack = createStackNavigator();

const Root = () => {
  const options = {
    headerTitleStyle: { color: "white" },
    headerStyle: { backgroundColor: "#027F4C" },
    title: "WeatherApp",
  };
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={Home} options={options} />
      <Stack.Screen
        name="details"
        component={Details}
        options={{ ...options, headerLeft: () => <HeaderLeft /> }}
      />
    </Stack.Navigator>
  );
};

export default Root;
