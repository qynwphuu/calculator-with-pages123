import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TextInput,
  FlatList,
  DevSettings,
} from "react-native";
import 

export default function History() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>History:</Text>
      <FlatList
        data={calculation}
        renderItem={({ item }) => (
          <View>
            <Text>
              {item.first} {item.operation} {item.second} = {item.result}
            </Text>
          </View>
        )}
      />{" "}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
