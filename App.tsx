import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>React Native Development</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  mainText:{
    fontSize:20,
    fontWeight:"bold"
  }

})