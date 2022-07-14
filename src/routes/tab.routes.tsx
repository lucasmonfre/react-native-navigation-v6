import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

const { Screen, Navigator } = createBottomTabNavigator();

import { ScreensA } from "../screens/ScreensA";
import { ScreensB } from "../screens/ScreensB";


export function TabRoutes(){
  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: 'navy',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      }}
    >
      <Screen
        name='screenA'
        component={ScreensA}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size}) => (
            <MaterialIcons
              name="home"
              color={color}
              size={size}
            />
          )
        }}
             
      />

      <Screen
        name='screenB'
        component={ScreensB}
        options={{
          tabBarLabel: 'Novo',
          tabBarIcon: ({ color, size}) => (
            <MaterialIcons
              name="add"
              color={color}
              size={size}
            />
          )
        }}
              
      />
    </Navigator>
  )
}