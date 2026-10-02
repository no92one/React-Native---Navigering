import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Home({ navigation }) {
  return <View style={styles.container}>
    <Text>Home</Text>
    <Pressable
      accessibilityLabel="Öppna kundvagnen för att se alla produkter som du kan köpoa av oss"
      onPress={() => navigation.navigate("Products")}
    >
      <Text>Gå till produkter</Text>
    </Pressable>

    <Pressable
      onPress={() => navigation.navigate("Cart")}
    >
      <Text>Gå till Varukorg</Text>
    </Pressable>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
