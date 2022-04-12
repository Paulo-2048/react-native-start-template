import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'mediumblue',
    },
    caixa: {
        flexDirection: 'row', alignItems: 'flex-start',
    },
    imagem1: {
        width: 250,
        height: 300,
    },
    botao: {
        marginVertical: 10,
        padding: 3, width: 200, height: 25,
        backgroundColor: 'lightsteelblue',
        textAlign: 'center', fontWeight: 'bold',
        borderRadius: 15,
    },
    itemTexto: {
        fontSize: 20, fontWeight: 'bold', color: 'white',
    },
    itemTextoBig: {
        fontSize: 30, fontWeight: 'bold', color: 'yellow',
        marginBottom: 20,
    },
    entrada: {
      backgroundColor: '#ffffff',
      fontSize: 15, borderRadius: 5, width: 300, 
    },
    lista: {
        marginVertical: 10,
        padding: 3, width: 350,
        backgroundColor: 'lightgrey',
        textAlign: 'left', fontWeight: 'bold',
        borderRadius: 15,
    },
  });