import { Image, Text, View } from 'react-native';
import { styles } from './styles';

export default function QuotationsItems(props: any) {
  return (
    <View style={styles.mainContent}>
      <View style={styles.contextLeft}>
        <View style={styles.boxLogo}>
          <Image style={styles.logoBitcoin} source={{uri: "https://th.bing.com/th/id/OIP.BXHxKTqXYSxOlG08YcMwUAHaHZ?rs=1&pid=ImgDetMain"}}/>
          <Text style={styles.dayCotation}>{props.data}</Text>
        </View>
        </View>
        <View style={styles.contextRight}>
         <Text style={styles.price}>${props.valor}</Text>          
        </View>
    </View>
  );
}