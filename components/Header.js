import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect, useState} from 'react'
import { useSelector } from 'react-redux'


const Header = () => {

  const cart = useSelector((state) => state.reducer)
  
  const [items , setItems] = useState(0);

  useEffect(() => {
    setItems(cart.length)
  }, [cart])
  

  
  return (
    <View style={styles.header}>

      <View style={styles.CartView}>
        <Text style={styles.Text}>{ items }</Text>
        </View>
     
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        paddingRight: 15,
    },
    Text: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold'
    },
    CartView:{
      backgroundColor:"black",
      padding:15,
      borderRadius:25,
    }
})