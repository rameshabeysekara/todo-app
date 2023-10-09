import React, { useState } from "react";
import { Switch, Text, TextInput, View, Button, Keyboard } from "react-native";
import styles from "./styles";

export default function Form(props) {
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDone, setTaskDone] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleAddPress = () => {
    if (taskDescription) {
      props.onAddTask(taskDescription, taskDone);
      setErrorMessage(null);
      setTaskDescription("");
      setTaskDone(false);
      Keyboard.dismiss();
    } else {
      setErrorMessage("The description is required.");
    }
  };

  const handleDescriptionChange = (value) => {
    setTaskDescription(value);
  };

  const handleStatusChange = (value) => {
    setTaskDone(value);
  };

  return (
    <View style={styles.container}>
      {errorMessage && (
        <View>
          <Text>Attention:</Text>
          <Text>{errorMessage}</Text>
        </View>
      )}
      <TextInput
        style={styles.input}
        placeholder="Enter a task description"
        maxLength={150}
        onChangeText={handleDescriptionChange}
        defaultValue={taskDescription}
      ></TextInput>
      <View style={styles.input}>
        <View style={styles.switchInput}>
          <Text style={styles.switchInput.item}>Completed:</Text>
          <Switch
            style={styles.switchInput.item}
            value={taskDone}
            onValueChange={handleStatusChange}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Add" onPress={handleAddPress} />
      </View>
    </View>
  );
}
