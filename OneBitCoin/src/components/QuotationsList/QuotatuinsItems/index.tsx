import {  Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { Fragment } from 'react';


export default function QuotationsItems() {
  
  return (
    <View style={styles.mainContent}>
      <View style={styles.contextLeft}>
        <View style={styles.boxLogo}>
          <Image style={styles.logoBitcoin} source={{uri: "https://th.bing.com/th/id/OIP.BXHxKTqXYSxOlG08YcMwUAHaHZ?rs=1&pid=ImgDetMain"}}/>
          <Text style={styles.dayCotation}>19/03/2024</Text>
        </View>
        </View>
        <View style={styles.contextRight}>
        <Text style={styles.price}>$5</Text>        
        </View>
    </View>
  );
}