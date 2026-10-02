import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext.js";
import { FlatList, Text, View } from "react-native";

export default function Cart() {
  const { cart, getTotalPrice } = useContext(GlobalContext);

  return <View>
    <Text>Varukorgen</Text>
    <View>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.product.id}
        renderItem={({ item }) => {
          console.log("item - ", item);
          return <Text>{item.product.name} - {item.amount}</Text>;
        }}
      />
    </View>
    <Text>Total pris: {getTotalPrice()}</Text>
  </View>;
}
