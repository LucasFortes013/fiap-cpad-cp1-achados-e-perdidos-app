import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

export default function Cadastro() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmar, setConfirmar] = useState('');

  const [erroEmail, setErroEmail] = useState('');
  const [erroSenha, setErroSenha] = useState('');
  const [erroConfirmar, setErroConfirmar] = useState('');

  function validarEmail(email) {
    return email.includes('@') && email.includes('.');
  }

  async function handleCadastro() {
    // limpar erros
    setErroEmail('');
    setErroSenha('');
    setErroConfirmar('');

    let valido = true;

    if (!email) {
      setErroEmail('E-mail é obrigatório');
      valido = false;
    } else if (!validarEmail(email)) {
      setErroEmail('E-mail inválido');
      valido = false;
    }

    if (!senha) {
      setErroSenha('Senha é obrigatória');
      valido = false;
    } else if (senha.length < 6) {
      setErroSenha('Mínimo 6 caracteres');
      valido = false;
    }

    if (confirmar !== senha) {
      setErroConfirmar('Senhas não coincidem');
      valido = false;
    }

    if (!valido) return;

    const user = { email, senha };

    await AsyncStorage.setItem('user', JSON.stringify(user));

    router.push('/login');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro</Text>

      <TextInput
        placeholder="E-mail"
        style={styles.input}
        onChangeText={setEmail}
      />
      {erroEmail !== '' && <Text style={styles.erro}>{erroEmail}</Text>}

      <TextInput
        placeholder="Senha"
        secureTextEntry
        style={styles.input}
        onChangeText={setSenha}
      />
      {erroSenha !== '' && <Text style={styles.erro}>{erroSenha}</Text>}

      <TextInput
        placeholder="Confirmar senha"
        secureTextEntry
        style={styles.input}
        onChangeText={setConfirmar}
      />
      {erroConfirmar !== '' && <Text style={styles.erro}>{erroConfirmar}</Text>}

      <TouchableOpacity style={styles.botao} onPress={handleCadastro}>
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
    marginBottom: 5,
  },
  botao: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
  },
  erro: {
    color: '#fff',
    marginBottom: 5,
  },
});