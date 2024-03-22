import { Fragment } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import QuotationsItems from './QuotatuinsItems';
import { styles } from './styles';

export default function QuotationsList(props: any) {
  const daysQuerey = props.filterDay
  return (
    <Fragment>
      <View style={styles.filters}>
        <TouchableOpacity style={styles.buttonQuery} onPress={() => daysQuerey(7)}>
          <Text style={styles.textButtonQuery}>7D</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonQuery} onPress={() => daysQuerey(15)}>
          <Text style={styles.textButtonQuery}>15D</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonQuery} onPress={() => daysQuerey(30)}>
          <Text style={styles.textButtonQuery}>1M</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonQuery} onPress={() => daysQuerey(90)}>
          <Text style={styles.textButtonQuery}>3M</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonQuery} onPress={() => daysQuerey(365)}>
          <Text style={styles.textButtonQuery}>1A</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {props.listTransactions.map((item: any) => {
          return <QuotationsItems valor={item.valor} data={item.data}/>   
        })}
       
      </ScrollView>
    </Fragment>
  );
}