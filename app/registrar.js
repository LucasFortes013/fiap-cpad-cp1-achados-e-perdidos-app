import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Image, ScrollView } from 'react-native';
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';
import { useRouter } from 'expo-router';

export default function Registrar() {
  const [nome, setNome] = useState('');
  const [local, setLocal] = useState('');
  const [imagem, setImagem] = useState(null);
  const [arquivo, setArquivo] = useState(null);
  const router = useRouter();

  const selecionarImagem = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImagem(result.assets[0].uri);
    } else {
      console.log("Seleção de imagem cancelada");
    }
  };

  const selecionarArquivo = async () => {
    try {
      const doc = await DocumentPicker.getDocumentAsync({
        type: ['application/pdf', 'image/jpeg'],
        copyToCacheDirectory: true
      });

      if (!doc.canceled) {
        setArquivo(doc.assets[0]);
      }
    } catch (err) {
      Alert.alert("Erro", "Não foi possível selecionar o arquivo.");
    }
  };

  const handleCadastrar = () => {
    if (!nome || !local) {
      Alert.alert('Erro', 'Preencha todos os campos!');
      return;
    }

    Alert.alert('Sucesso', 'Item registrado!', [
      {
        text: "OK",
        onPress: () => {
          router.push('/itens_encontrados'); 
        }
      }
    ]);

    setNome('');
    setLocal('');
    setImagem(null);
    setArquivo(null);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Registrar Item Perdido</Text>

      <View style={styles.areaFoto}>
        <TouchableOpacity style={styles.circuloFoto} onPress={selecionarImagem}>
          {imagem ? (
            <Image source={{ uri: imagem }} style={styles.fotoPreview} />
          ) : (
            <Text style={styles.textoPlaceholder}>Adicionar Foto</Text>
          )}
        </TouchableOpacity>
        {imagem && <Text style={styles.feedback}>Foto selecionada!</Text>}
      </View>

      <TextInput
        style={styles.input}
        placeholder="Nome do item"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Último local visto"
        value={local}
        onChangeText={setLocal}
      />

      <View style={styles.secaoAnexo}>
        <TouchableOpacity style={styles.botaoAnexo} onPress={selecionarArquivo}>
          <Text style={styles.botaoAnexoTexto}>
            {arquivo ? "📎 Arquivo Pronto" : "Anexar PDF ou JPEG"}
          </Text>
        </TouchableOpacity>
        {arquivo && (
          <Text style={styles.nomeArquivoSelecionado} numberOfLines={1}>
            Selecionado: {arquivo.name}
          </Text>
        )}
      </View>

      <TouchableOpacity style={styles.botao} onPress={handleCadastrar}>
        <Text style={styles.botaoTexto}>Registrar Item</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#eb1b5b',
    padding: 20,
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  areaFoto: {
    alignItems: 'center',
    marginBottom: 30,
  },
  circuloFoto: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    elevation: 5,
  },
  fotoPreview: {
    width: '100%',
    height: '100%',
  },
  textoPlaceholder: {
    color: '#eb1b5b',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  secaoAnexo: {
    marginTop: 10,
    marginBottom: 20,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.2)',
  },
  botaoAnexo: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#fff',
  },
  botaoAnexoTexto: {
    color: '#fff',
    fontSize: 14,
  },
  nomeArquivoSelecionado: {
    color: '#fff',
    fontSize: 11,
    marginTop: 5,
    textAlign: 'center',
  },
  feedback: {
    color: '#fff',
    marginTop: 5,
    fontSize: 12,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  botao: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#eb1b5b',
    fontSize: 18,
    fontWeight: 'bold',
  },
});