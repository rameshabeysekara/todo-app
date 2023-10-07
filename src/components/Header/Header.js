import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faListCheck } from "@fortawesome/free-solid-svg-icons/faListCheck";

const Header = () => {
  return (
    <View style={styles.container}>
      <FontAwesomeIcon icon={faListCheck} size={28} />
      <Text>Todo App</Text>
      <Text>by Ramesh Abeysekara</Text>
    </View>
  );
};
export default Header;