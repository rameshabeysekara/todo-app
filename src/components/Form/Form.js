import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Switch,
  Button,
  Keyboard,
  Alert,
  Pressable,
} from "react-native";
import { save as databaseSave } from "../../database";
import styles from "./styles";
import { Colors } from "../../styles/colors";

export default function Form(props) {
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDone, setTaskDone] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleAddPress = () => {
    if (taskDescription) {
      const data = {
        description: taskDescription,
        done: taskDone,
      };

      databaseSave(data)
        .then((id) => {
          data.id = id;
          props.onAddTask(data);

          setErrorMessage(null);
          setTaskDescription("");
          setTaskDone(false);

          Keyboard.dismiss();
        })
        .catch(() => {
          Alert.alert(
            "Database Save",
            "There was an error saving to the database. Please, try again later."
          );
        });
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
        <View style={styles.errorMessage.container}>
          <Text style={styles.errorMessage.label}>Attention:</Text>
          <Text style={styles.errorMessage.text}>{errorMessage}</Text>
        </View>
      )}

      <Text style={styles.label}>Description:</Text>
      <TextInput
        maxLength={150}
        onChangeText={handleDescriptionChange}
        defaultValue={taskDescription}
        style={styles.textbox}
      />

      <View style={styles.switch.container}>
        <Pressable onPress={handleStatusChange}>
          <Text style={styles.switch.label}>Completed:</Text>
        </Pressable>
        <Switch
          trackColor={{ false: Colors.inactive, true: Colors.primary }}
          value={taskDone}
          onValueChange={handleStatusChange}
        />
      </View>

      <Button title="Add" onPress={handleAddPress} color={Colors.primary} />
    </View>
  );
}
