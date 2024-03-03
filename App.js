import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import Home from "./assets/components/home/home";
import Contato from "./assets/components/contato/contato";
import Header from "./assets/components/header/header";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.body}>
        <Home />
        <Contato />
        <View style={styles.infoDev}>
          <Text style={styles.info}>
            Aplicativo Demonstrativo
          </Text>
          <Text style={styles.rafaelsilvadev}>
            Desenvolvedor Mobile Rafael Silva Dev
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262626',
  },
  body: {
    flex: 2,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 12
  },
  infoDev: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  info: {
    color: '#999'
  },
  rafaelsilvadev: {
    color: '#999',
    fontWeight: 'bold'
  }
});
