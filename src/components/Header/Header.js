import { View, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from "./styles";
import { Colors } from "../../styles/colors";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.leftGroup}>
        <FontAwesome5 name="tasks" size={24} color={Colors.primary} />
        <Text style={styles.title}>Todo App</Text>
      </View>
      <Text style={styles.author}>by Ramesh Abeysekara</Text>
    </View>
  );
}
