import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import styles from "./src/styles/main.js";
import Header from "./src/components/Header/Header.js";
import Tasks from "./src/components/Tasks/Tasks.js";
import Form from "./src/components/Form/Form.js";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Tasks />
      <Form />
      <StatusBar style="auto" />
    </View>
  );
}
