import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Menu Principal</Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => router.push('/itens_encontrados')}
      >
        <Text style={styles.textoBotao}>Itens Encontrados</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => router.push('/registrar')}
      >
        <Text style={styles.textoBotao}>Cadastrar Item Perdido</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eb1b5b',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    color: '#fff',
    fontSize: 28,
    marginBottom: 30,
  },
  botao: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    width: 250,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#000',
    fontWeight: 'bold',
  },
});