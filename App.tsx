import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
} from "react-native";
import History from "./History";

const Tab = createBottomTabNavigator();

type dataList = {
  first: number;
  second: number;
  result: number;
  operation: string;
};

type CalculatorScreenProps = {
  navigation: {
    navigate: (screen: "History", params: { historyData: dataList[] }) => void;
  };
};

function CalculatorScreen({ navigation }: CalculatorScreenProps) {
  const [result, setResult] = useState(0);
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [calculation, setCalculation] = useState<dataList[]>([]);

  const calculate = (operation: "-" | "+") => {
    const firstNumber = Number(first);
    const secondNumber = Number(second);

    if (!first.trim() || !second.trim() || !Number.isFinite(firstNumber) || !Number.isFinite(secondNumber)) {
      return;
    }

    const answer = operation === "+" ? firstNumber + secondNumber : firstNumber - secondNumber;
    const newCalc = [
      ...calculation,
      {
        first: firstNumber,
        second: secondNumber,
        result: answer,
        operation,
      },
    ];

    setResult(answer);
    setCalculation(newCalc);
    navigation.navigate("History", { historyData: newCalc });
    setFirst("");
    setSecond("");
  };

  const Subtraction = () => {
    calculate("-");
  };

  const Addition = () => {
    calculate("+");
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
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={CalculatorScreen} />
        <Tab.Screen
          name="History"
          component={History}
          initialParams={{ historyData: [] }}
        />
      </Tab.Navigator>
    </NavigationContainer>
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
    marginBottom: 10,
  },

  buttonContainer: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    width: 80,
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
  },
});
