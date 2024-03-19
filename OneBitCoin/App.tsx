import { StatusBar } from 'expo-status-bar';
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CurrentPrice from './src/components/CurrentPrice';
import HistoryGraphic from './src/components/HistoryGraphic';
import QuotationsList from './src/components/QuotationsList';
import QuotationsItems from './src/components/QuotationsList/QuotatuinsItems';
import { useEffect, useState } from 'react';

function addZero(number: number): string {
  if (number < 10) {
      return "0" + number;
  }
  return number.toString();
}

function createUrl(qtdDays: number): string {
  const data = new Date();
  const listLastDays = qtdDays;
  data.setDate(data.getDate() - listLastDays);
  const end_date = `${data.getFullYear()}-${addZero(data.getMonth() + 1)}-${addZero(data.getDate())}`;
  data.setDate(data.getDate() + listLastDays); // Reset date before calculating start_date
  const start_date = `${data.getFullYear()}-${addZero(data.getMonth() + 1)}-${addZero(data.getDate())}`;
  return `https://api.coindesk.com/v1/bpi/historical/close.json?start=${start_date}&end=${end_date}`;
}

async function getListCoins(url:string) {
let response = await fetch(url)
let returnApi = await response.json()
let selectListQuotations = returnApi.bpi
const queryCoinsList = Object.keys(selectListQuotations).map((key) => {
  return {
    data: key.split('-').reverse().join("/"),
    valor: selectListQuotations[key]
  }
})
let data  = queryCoinsList.reverse()
return data
}

async function getPriceCoinsGraphic(url:string) {
let response = await fetch(url)
let returnApi = await response.json()
let selectListQuotations = returnApi.bpi
const queryCoinsList = Object.keys(selectListQuotations).map((key) => {
    valor: selectListQuotations[key]
})
let data  = queryCoinsList
return data
}

export default function App() {

  const [conisList, setConisList] = useState([])
  const [conisGraphicList, setConisGraphicList] = useState([0])
  const [days, setDays] = useState(30)
  const [updateData, setUpdateData] = useState(true)

  function updateDays(number: number) {
    setDays(number)
    setUpdateData(true)
  }

  useEffect(() => {
    getListCoins(createUrl(days)).then((data : any) =>{
      setConisList(data)
    })
    getPriceCoinsGraphic(createUrl(days)).then((data : any) =>{
      setConisGraphicList(data)
    })
    if(updateData){
      setUpdateData(false)
    }

  }, [updateData])


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
