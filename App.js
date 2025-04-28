import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/screens/Login";
import Home from "./src/screens/Home";
import FavItems from "./src/screens/FavItems";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

export default function App() {
  // const Stack = createStackNavigator();
  // const BTabs = createBottomTabNavigator();
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Fav" component={FavItems} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
