import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Home({ navigation }) {
  return <View style={styles.container}>
    <Text>Home</Text>
    <Pressable
      onPress={() => navigation.navigate("Products")}
    >
      <Text>Gå till produkter</Text>
    </Pressable>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
