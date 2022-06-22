import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'


const Landing = ({navigation}) => {
  return (
    <View style={styles.container}>
     
    
        <Text style={{color:'white'}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, sed! Ex animi accusantium, vitae aliquam odio fugiat provident. Perferendis tempore sint similique distinctio quisquam dignissimos, ratione deserunt perspiciatis itaque, suscipit voluptas labore enim? Ut deserunt eaque adipisci tempora et. Libero ducimus quisquam praesentium! Officiis, in. Aliquid aspernatur nemo ab magni iure. Quae quaerat atque eveniet consequuntur amet totam debitis libero quos magnam non assumenda, vero illum exercitationem accusamus ducimus perferendis facilis quasi praesentium, fugit necessitatibus placeat iure! Nam modi veniam at quibusdam neque dolor ab, repudiandae exercitationem. Dolor fugit et modi, explicabo quasi numquam culpa. Perferendis maiores mollitia tempore nam.
        </Text>

        <TouchableOpacity onPress={()=>{navigation.navigate("Login")}}>
          <Text>Go to login</Text>
        </TouchableOpacity>
    
    </View>
  )
}

export default Landing

const styles = StyleSheet.create({
container:{
    flex:1,
    backgroundColor:'red',
    alignItems:'center',
    justifyContent:'center'
}
})