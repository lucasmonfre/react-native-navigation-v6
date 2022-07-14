import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Screen, Navigator } = createNativeStackNavigator();

import { ScreensA } from "../screens/ScreensA";
import { ScreensB } from "../screens/ScreensB";


export function StackRoutes(){
  return (
    <Navigator screenOptions={{
      headerShown: false,
    }}>
      <Screen
        name='screenA'
        component={ScreensA}
             
      />

      <Screen
        name='screenB'
        component={ScreensB}
              
      />
    </Navigator>
  )
}