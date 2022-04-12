import React from 'react';
import { Pressable, Image, Text, View } from 'react-native';
import { style } from '../styles';


export default function Inicio({navigation}) {
  
  return (
    <View style={style.container}>
      <Image style={style.imagem} source={"logo"}/>
      <Pressable onPress={() => (navigation.push('About'))}>
          <Text style={style.botao}>Iniciar</Text>
      </Pressable>
    </View>
  );
}