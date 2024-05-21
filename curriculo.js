import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';


const Curriculo = ({ navigation }) => {
 
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Educação</Text>
      <Text style={styles.text}>Graduando em Análise e Desenvolvimento de Sistemas - Graduação- Faculdade Senac</Text>
      <Text style={styles.text}>Data da conclusão: 2025</Text>
      <Text style={styles.text}>Graduado em Desenvolvimento de sistemas - Técnico - Escola Técnica Estadual Jurandir Bezerra Lins</Text>
      <Text style={styles.text}>Data da conclusão: 12/2021</Text>

      <Text style={styles.title}>Experiência</Text>
      <Text style={styles.text}>Professora de inglês - English easy</Text>
      <Text style={styles.text}>Abril de 2024 - Atualmente</Text>

      <Text style={styles.title}>Idiomas</Text>
      <Text style={styles.text}>English</Text>
      <Text style={styles.text}>B2 Upper intermediate</Text>

      <Button
        title="Voltar para Home"
        onPress={() => navigation.navigate('Home')} // Use a função de navegação diretamente aqui
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  text: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default Curriculo;