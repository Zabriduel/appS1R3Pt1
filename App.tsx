import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/screens/Home";
import Produtos from "./src/screens/Produtos";

export type RootStackParamList = {
  Home: undefined,
  Produtos: undefined
}


const Stack = createNativeStackNavigator<RootStackParamList>();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name='Produtos'
          component={Produtos}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });