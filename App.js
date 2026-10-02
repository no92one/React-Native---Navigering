import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screens/Home.js";
import Products from "./screens/Products.js";
import ProductInfo from "./screens/ProductInfo.js";
import { GlobalProvider } from "./context/GlobalContext.js";
import Cart from "./screens/Cart.js";

const Stack = createNativeStackNavigator();

export default function App() {
  return <GlobalProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Startsida"
          }}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{
            title: "Varukorg"
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
    </NavigationContainer>
  </GlobalProvider>
}
