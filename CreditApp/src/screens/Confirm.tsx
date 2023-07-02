import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useIsFocused } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Confirm = ({ navigation }: any) => {
  const [ordernumber, setordernumber] = useState<any>("")

  useEffect(() => {
    setordernumber(Math.floor(Math.random() * 1000000))
  }, [])

  console.log(ordernumber);

  const [data, setData] = useState<any>([])
  const isFocused = useIsFocused()


  useEffect(() => {
    if (isFocused) {
      getBasket();
    }
  }, [isFocused]);

  // const getBasket = async () => {
  //   let data: any = await AsyncStorage.getItem("data")
  //   setData(JSON.parse(data))
  // }

  const getBasket = async () => {
    try {
      let data: any = await AsyncStorage.getItem('data');
      setData(JSON.parse(data));
    } catch (error) {
      console.log('Error retrieving data:', error);
    }
  };
  console.log(data);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 1 }}>
        <Text style={styles.titleHeader}>Sifariş nömrəi:</Text>
      </View>
      <View style={{ flex: 5, marginHorizontal: 20, gap: 20 }}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 7 }}>
          <Text style={styles.regSty}>
            Sifariş nömrəsi:
          </Text>
          <Text style={{ fontSize: 18, color: "#155EEF" }}>#K{ordernumber}</Text>
        </View>
        <View>
          <View style={styles.mainBox}>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <Text style={styles.textSty}>Məbləğ:</Text>
              <Text style={styles.valueSty}>2500 AZN</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <Text style={styles.textSty}>Müddət:</Text>
              <Text style={styles.valueSty}>24 ay</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <Text style={styles.textSty}>Faiz:</Text>
              <Text style={styles.valueSty}>22 %</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{ flex: 1, marginHorizontal: 15 }}>
        <View style={{ width: "100%", backgroundColor: "#155eef", padding: 18, borderRadius: 10 }}>
          <TouchableOpacity onPress={() => navigation.navigate("OtpScreen")}>
            <Text style={{ fontSize: 18, textAlign: "center", color: "white" }}>Davam et</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Confirm

const styles = StyleSheet.create({
  mainBox: {
    borderWidth: 1,
    borderColor: "#C1C1C180",
    borderRadius: 10,
    padding: 15,
    gap: 15
  },
  textSty: {
    color: "#344054",
    fontSize: 17
  },
  valueSty: {
    color: "black",
    fontSize: 16,
    fontWeight: "600"
  },
  inputSty: {
    color: "black",
    fontSize: 16,
    borderRadius: 10,
    backgroundColor: "white",
    borderWidth: 1,
    paddingTop: 14,
    paddingBottom: 14,
    paddingHorizontal: 15,
    borderColor: "#98A2B3"

  },
  regSty: {
    fontSize: 22,
    color: "black"
  },
  titleHeader: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
    color: "black",
    marginTop: 20
  }
})