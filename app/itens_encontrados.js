import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { useState, useCallback } from 'react';
import { useFocusEffect } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ItensEncontrados() {
  const [itens, setItens] = useState([]);

  // Atualiza sempre que entra na tela
  useFocusEffect(
    useCallback(() => {
      async function carregarItens() {
        try {
          const dados = await AsyncStorage.getItem('itens');
          if (dados) {
            setItens(JSON.parse(dados));
          } else {
            setItens([]);
          }
        } catch (erro) {
          console.log('Erro ao carregar itens:', erro);
        }
      }

      carregarItens();
    }, [])
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Itens Encontrados</Text>

      <FlatList
        data={itens}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text style={styles.vazio}>Nenhum item cadastrado ainda</Text>
        }
        renderItem={({ item }) => (
          <View style={styles.card}>

            {item.imagem && (
              <Image
                source={{ uri: item.imagem }}
                style={styles.imagem}
              />
            )}

            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.local}>Local: {item.local}</Text>

          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eb1b5b',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  vazio: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    alignItems: 'center',
  },
  imagem: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  local: {
    fontSize: 16,
    color: '#555',
  },
});