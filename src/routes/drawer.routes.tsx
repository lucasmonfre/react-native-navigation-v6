import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialIcons } from '@expo/vector-icons';

const { Screen, Navigator } = createDrawerNavigator();

import { ScreensA } from "../screens/ScreensA";
import { ScreensB } from "../screens/ScreensB";


export function DrawerRoutes(){
  return (
    <Navigator >
      <Screen
        name='screenA'
        component={ScreensA}
        options={{
          drawerLabel: 'Home',
          drawerIcon: () => <MaterialIcons name="home" size={22} />
        }}
             
      />

      <Screen
        name='screenB'
        component={ScreensB}
        options={{
          drawerLabel: 'Novo',
          drawerIcon: () => <MaterialIcons name="add" size={22} />
        }}
           
              
      />
    </Navigator>
  )
}