import {  Text, View } from 'react-native';
import { styles } from './styles';

export default function CurrentPrice() {
  return (
    <View style={styles.headerPrice}>
      <Text style={styles.currentPrice}>$54.00</Text>
      <Text  style={styles.textPrice}>Ultima cotacão</Text>
    </View>
  );
}


