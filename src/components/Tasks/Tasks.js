import React from "react";
import { ScrollView, Text, View } from "react-native";
import styles from "./styles.js";
import Task from "./Task/Task.js";

export default function Tasks(props) {
  return (
    <View style={styles.container}>
      <ScrollView>
        {props.tasks.map((task, index) => {
          return <Task key={index} task={task} />;
        })}
      </ScrollView>
    </View>
  );
}
