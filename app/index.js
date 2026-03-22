import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>

      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
      />
      <Button title="Itens Encontrados"
       onPress={() => router.push('/itens-encontrados')} 
      />

      <View style={{height: 10}} />

      <Button title="Cadastrar Item" 
      onPress={() => router.push('/registrar')} 
      />
      
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
  texto: {
    color: '#fff',
    fontSize: 20,
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
});