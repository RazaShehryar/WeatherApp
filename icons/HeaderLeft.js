import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { goBack } from "../route/Global";

const HeaderLeft = () => {
  return (
    <AntDesign
      name="arrowleft"
      size={24}
      color="white"
      style={{ marginLeft: 10 }}
      onPress={goBack}
    />
  );
};

export default HeaderLeft;
