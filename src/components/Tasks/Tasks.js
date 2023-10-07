import React from "react";
import { Text, View } from "react-native";
import styles from "./styles.js";
import Task from "./Task/Task.js";

const Tasks = () => {
  return (
    <View style={styles.container}>
      <Text>Tasks</Text>
      <Task />
    </View>
  );
};
export default Tasks;
