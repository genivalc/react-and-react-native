import { StatusBar } from 'expo-status-bar';
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CurrentPrice from './src/components/CurrentPrice';
import HistoryGraphic from './src/components/HistoryGraphic';
import QuotationsList from './src/components/QuotationsList';
import QuotationsItems from './src/components/QuotationsList/QuotatuinsItems';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" backgroundColor='#861d1d'  />
      <CurrentPrice/>
      <HistoryGraphic></HistoryGraphic>
      <QuotationsList/>
      <QuotationsItems/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    paddingTop: Platform.OS === "android" ? 40 : 0 
  },
});
