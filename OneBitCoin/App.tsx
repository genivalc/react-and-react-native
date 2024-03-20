import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Platform, SafeAreaView, StyleSheet } from 'react-native';
import CurrentPrice from './src/components/CurrentPrice';
import HistoryGraphic from './src/components/HistoryGraphic';
import QuotationsList from './src/components/QuotationsList';

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
  const start_date = `${data.getFullYear()}-${addZero(data.getMonth() + 1)}-${addZero(data.getDate())}`;
  data.setDate(data.getDate() + listLastDays); // Reset date before calculating start_date
  const end_date = `${data.getFullYear()}-${addZero(data.getMonth() + 1)}-${addZero(data.getDate())}`;
  return `https://api.coindesk.com/v1/bpi/historical/close.json?start=${start_date}&end=${end_date}`;
}

async function getListCoins(url:string) {
  const selectListQuotations = await axios.get(url).then((response) => {
    return response.data.bpi
  });

  const queryCoinsList = Object.keys(selectListQuotations).map((key) => {
    return {
      data: key.split('-').reverse().join("/"),
      valor: selectListQuotations[key]
    }
  })
  return queryCoinsList.reverse()
}

async function getPriceCoinsGraphic(url:string) {
  const selectListQuotations = await axios.get(url).then((response) => {
    return response.data.bpi
  });
  const queryCoinsList = Object.keys(selectListQuotations).map((key) => {
    return [ selectListQuotations[key]]
  })
  return queryCoinsList
}

export default function App() { 
  const [conisList, setConisList] = useState([])
  const [conisGraphicList, setConisGraphicList] = useState([])
  const [days, setDays] = useState(30)
  const [updateData, setUpdateData] = useState(true)
  const [price, setPrice] = useState()

  function updateDays(number: number) {
    setDays(number)
    setUpdateData(true)
  }

  function priceCotation(){
    setPrice(conisGraphicList.pop())
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
    priceCotation()

  }, [updateData])


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" backgroundColor='#861d1d'  />
      <CurrentPrice lastContation={price}/>
      <HistoryGraphic infoDataGraphic={conisGraphicList}></HistoryGraphic>
      <QuotationsList filterDay={updateDays} listTransactions={conisList}/>
      
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
