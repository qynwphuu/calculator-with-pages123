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

type dataList = {
  first: number;
    second: number;
    result: number;
    operation: string;
};

export default function App() {
  const [result, setResult] = useState(0);
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [calculation, setCalculation] = useState<dataList[]>([]);

  const Subtraction = () => {
    const answer = Number(first) - Number(second);

    setResult(answer);

    setCalculation([
      ...calculation,
      {
        first: Number(first),
        second: Number(second),
        result: answer,
        operation: "-"
      },
    ]);
    setFirst("");
    setSecond("");
  };

  const Addition = () => {
    const answer = Number(first) + Number(second);

    setResult(answer);

    setCalculation([
      ...calculation,
      {
        first: Number(first),
        second: Number(second),
        result: answer,
        operation: "+"
      },
    ]);
    setFirst("");
    setSecond("");
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Result: {result}</Text>
        <StatusBar style="auto" />

        <TextInput
          placeholder="Enter first number"
          onChangeText={(first) => setFirst(first)}
          value={first}
          style={styles.input}
        />

        <TextInput
          placeholder="Enter second number"
          onChangeText={(second) => setSecond(second)}
          value={second}
          style={styles.input}
        />

        <View style={styles.buttonContainer}>
          <Button onPress={Addition} title=" + " />
          <Button onPress={Subtraction} title=" - " />
        </View>

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
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    paddingBottom: 10,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },

  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    width: 200,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 120,
  },

  description: {
    marginTop: 5,
    marginBottom: 5,
  },

  titleText: {
    paddingTop: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: "blue",
  },

  text: {
    marginTop: 4,
    marginBottom: 5,
  }
});
