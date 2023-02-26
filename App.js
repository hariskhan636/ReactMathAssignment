import React, {useState}  from 'react';
import { Text, View, StyleSheet,TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';


export default function App() {



  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Sessional 1
      </Text>
      <Test/>
      
    </View>
  );
}

const Test = () =>{
  const[getVal,SetVal]=useState(0)
  var arr1 = []
  return(
    <View style={styles.container}>
    <View>
        <TextInput
          onChangeText={(val)=>SetVal(val)}
          alignItems='center'
          placeholder="Enter a value"
          keyboardType='numerical'
        />
      </View>
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity
          backgroundColor='red'
          style={styles.button1}
          onPress={()=>RoundOff(arr1,getVal,SetVal)}
        >
          <Text>Round</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button2}
          onPress={()=>SetVal(Math.ceil(getVal))}
        >
          <Text>Ciel</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button3}
          onPress={()=>SetVal(Math.floor(getVal))}
        >
          <Text>Floor</Text>
        </TouchableOpacity>

      </View>
      <View>
        <Text>Value: {getVal}</Text>
      </View>

      <TouchableOpacity
          style={styles.button3}
          onPress={()=>ViewArray(arr1)}
        >
          <Text>History</Text>
      </TouchableOpacity>
      </View>

  )
  
}
const RoundOff =(arr1,getVal,SetVal)=>{

  SetVal(Math.round(getVal))
  arr1.push("Round")

}

const CielOff =(arr1,getVal,SetVal)=>{

  SetVal(Math.ceil(getVal))
  arr1.push("Ciel")

}

const FloorOff =(arr1,getVal,SetVal)=>{

  SetVal(Math.floor(getVal))
  arr1.push("Floor")

}

const ViewArray =(arr) =>{
  
  for(let i=0;i<arr.length;i++){
    console.log(<Text>arr[i]</Text>)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button1: {
    marginTop: 10,
    marginBottom:10,
    alignItems: "center",
    padding: 10,
    marginRight:10,
    borderRadius:15,
    width:100,
    backgroundColor:'red'
  },
   button2: {
    marginTop: 10,
    marginBottom:10,
    alignItems: "center",
    padding: 10,
    marginRight:10,
    borderRadius:15,
    width:100,
    backgroundColor:'blue'
  },
   button3: {
    marginTop: 10,
    marginBottom:10,
    alignItems: "center",
    padding: 10,
    marginRight:10,
    borderRadius:15,
    width:100,
    backgroundColor:'green'
  },
});
