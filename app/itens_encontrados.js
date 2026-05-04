import { View, Text, StyleSheet, FlatList, Image, TextInput, TouchableOpacity } from 'react-native';
import { useState, useCallback } from 'react';
import { useFocusEffect } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';

export default function ItensEncontrados() {
  const [itens, setItens] = useState([]);
  const [busca, setBusca] = useState('');
  const [filtrados, setFiltrados] = useState([]);

  // Atualiza sempre que entra na tela
  useFocusEffect(
    useCallback(() => {
      async function carregarItens() {
        try {
          const dados = await AsyncStorage.getItem('itens');
          if (dados) {
            const lista = JSON.parse(dados);
            setItens(lista);
            setFiltrados(lista);
          } else {
            setItens([]);
            setFiltrados([]);
          }
        } catch (erro) {
          console.log('Erro ao carregar itens:', erro);
        }
      }

      carregarItens();
    }, [])
  );

  // Função de busca
  const filtrarItens = (texto) => {
    setBusca(texto);
    if (texto.trim() === '') {
      setFiltrados(itens);
    } else {
      const resultado = itens.filter((item) =>
        item.nome.toLowerCase().includes(texto.toLowerCase())
      );
      setFiltrados(resultado);
    }
  };

  // Função para remover item quando marcado
  const removerItem = async (id) => {
    const novosItens = itens.filter((item) => item.id !== id);
    setItens(novosItens);
    setFiltrados(novosItens);
    await AsyncStorage.setItem('itens', JSON.stringify(novosItens));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Itens Encontrados</Text>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={24} color="#fff" />
          <TextInput
            style={styles.input}
            placeholder="Pesquisar item..."
            placeholderTextColor="#ccc"
            value={busca}
            onChangeText={filtrarItens}
          />
        </View>
      </View>

      <FlatList
        data={filtrados}
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

            <View style={{ flex: 1 }}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.local}>Local: {item.local}</Text>
            </View>

            <TouchableOpacity onPress={() => removerItem(item.id)}>
              <Ionicons name="checkmark-circle" size={28} color="#28a745" />
            </TouchableOpacity>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  titulo: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#c2185b',
    borderRadius: 10,
    paddingHorizontal: 10,
    flex: 1,
    marginLeft: 10,
  },
  input: {
    flex: 1,
    color: '#fff',
    marginLeft: 5,
  },
  vazio: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    alignItems: 'center',
  },
  imagem: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
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
