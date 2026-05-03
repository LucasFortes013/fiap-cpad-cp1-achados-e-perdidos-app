import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
      />

      <Text style={styles.titulo}>Bem-vindo</Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => router.push('/login')}
      >
        <Text style={styles.textoBotao}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => router.push('/cadastro')}
      >
        <Text style={styles.textoBotao}>Cadastrar</Text>
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
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  titulo: {
    color: '#fff',
    fontSize: 30,
    marginBottom: 30,
  },
  botao: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    width: 200,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#000000',
    fontWeight: 'bold',
  },
});