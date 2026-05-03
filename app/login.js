import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  async function handleLogin() {
    setErro('');

    if (!email || !senha) {
      setErro('Preencha todos os campos');
      return;
    }

    const data = await AsyncStorage.getItem('user');
    const user = JSON.parse(data);

    if (user && user.email === email && user.senha === senha) {
      await AsyncStorage.setItem('logado', 'true');
      router.push('/home');
    } else {
      setErro('E-mail ou senha inválidos');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Login</Text>

      <TextInput
        placeholder="E-mail"
        style={styles.input}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Senha"
        secureTextEntry
        style={styles.input}
        onChangeText={setSenha}
      />

      {erro !== '' && <Text style={styles.erro}>{erro}</Text>}

      <TouchableOpacity style={styles.botao} onPress={handleLogin}>
        <Text style={styles.textoBotao}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eb1b5b',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    color: '#fff',
    fontSize: 28,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  botao: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
  },
  erro: {
    color: 'red',
    marginBottom: 10,
  },
});