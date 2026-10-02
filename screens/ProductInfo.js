import { useContext } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import { GlobalContext } from '../context/GlobalContext.js';

export default function ProductInfo({ route }) {
  const { addToCart } = useContext(GlobalContext);
  const { product } = route.params;

  return <View style={styles.container}>
    <Text>{product.name}</Text>
    <Text>{product.price}</Text>
    <Text>{product.description}</Text>
    <Button
      title="Lägg i varukorgen"
      onPress={() => addToCart(product)}
    />
  </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
