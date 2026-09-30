import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

import products from '../data/products.js';

export default function Products({ navigation }) {
  return <View style={styles.container}>
    <Text>Products</Text>
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Pressable style={styles.product}
        onPress={() => navigation.navigate("ProductInfo", { product: item })}
      >
        <Text>{item.name}</Text>
        <Text>{item.price}</Text>
      </Pressable>
      }
    />
    <Pressable
      onPress={() => navigation.goBack()}
    >
      <Text>Gå tillbaka</Text>
    </Pressable>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  product: {
    backgroundColor: "lightblue",
    marginVertical: 12,
    padding: 12,
    borderRadius: 8
  }
});
