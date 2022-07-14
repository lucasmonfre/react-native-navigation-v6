import React from 'react';
import { View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export function ScreensA(){
  const navigation = useNavigation();

  function openScreen() {
  
  navigation.navigate('screenB', {name: 'lucas'});
  }

return (
   <View style={{ flex: 1, backgroundColor: 'red', justifyContent: 'center'}} >

    <Button
      title="Ir para a tela B"
      onPress={openScreen}
    />

   </View>
  );
}