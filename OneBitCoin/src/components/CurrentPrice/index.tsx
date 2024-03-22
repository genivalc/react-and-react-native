import { Text, View } from 'react-native';
import { styles } from './styles';

export default function CurrentPrice(props: any) {
  return (
    <View style={styles.headerPrice}>
      <Text style={styles.currentPrice}>{props.lastContation}</Text>
      <Text  style={styles.textPrice}>Ultima cotacão</Text>
    </View>
  );
}


