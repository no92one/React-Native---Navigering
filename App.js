import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screens/Home.js";
import Products from "./screens/Products.js";
import ProductInfo from "./screens/ProductInfo.js";

const Stack = createNativeStackNavigator();

export default function App() {
  return <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Startsida"
        }}
      />

      <Stack.Screen
        name="Products"
        component={Products}
        options={{
          title: "Produkt Lista"
        }}
      />

      <Stack.Screen
        name="ProductInfo"
        component={ProductInfo}
        options={({ route }) => ({
          title: route.params.product.name
        })}
      />

    </Stack.Navigator>
  </NavigationContainer>;
}
