import {
  StyleSheet,
  Text,
  View,
  FlatList,
} from "react-native";

type HistoryItem = {
  first: number;
  second: number;
  result: number;
  operation: string;
};

type HistoryProps = {
  route: {
    params?: {
      historyData?: HistoryItem[];
    };
  };
};

export default function History({ route }: HistoryProps) {
  const historyData = route.params?.historyData || [];

  return (
    <View style={styles.container}>
      <Text style={styles.text}>History:</Text>
      <FlatList
        data={historyData}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <Text>{item.first} {item.operation} {item.second} = {item.result}</Text>
        )}
      />
    </View>
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
    marginBottom: 10
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
