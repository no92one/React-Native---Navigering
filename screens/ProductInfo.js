import { StyleSheet, Text, View } from 'react-native';

export default function ProductInfo({ route }) {
  const { product } = route.params;

  return <View style={styles.container}>
    <Text>{product.name}</Text>
    <Text>{product.price}</Text>
    <Text>{product.description}</Text>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
