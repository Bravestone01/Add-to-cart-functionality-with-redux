import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './components/Header'
import Product from './components/Product'


const App = () => {


  const data = [
    {
      name: "Samsung",
      price: "1000",
      color : "black",
    },
    {
      name: "Apple",
      price: "2000",
      color : "white",
    },
    {
      name: "Xiaomi",
      price: "3000",
      color : "black",
    },
    {
      name: "Huawei",
      price: "4000",
      color : "black",
    },
  ]
  return (


    <>
    <View style={styles.container}>
      <Header/>
     {
      data.map((item) => <Product item={item} style={styles.product}/>)
     }
    </View>
    </>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1 ,
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%'

  },
  product: {
    gap:10,
  }
})