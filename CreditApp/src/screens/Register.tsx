import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const Register = ({navigation}:any) => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 1 }}>
        <Text style={styles.titleHeader}>Kreditlər</Text>
      </View>
      <View style={{ flex: 5, marginHorizontal: 20, gap: 20 }}>
        <View>
          <Text style={styles.regSty}>
            Qeydiyyat
          </Text>
        </View>
        <View style={{ gap: 20 }}>
          <TextInput placeholder='Email' style={styles.inputSty} />
          <TextInput placeholder='FIN Code' style={styles.inputSty} />
          <TextInput placeholder='Seriya Nömrəsi' style={styles.inputSty} />
          <TextInput secureTextEntry={true} placeholder='Parol' style={styles.inputSty} />
        </View>
      </View>
      <View style={{ flex: 1, marginHorizontal: 15 }}>
        <View style={{ width: "100%", backgroundColor: "#155eef", padding: 18, borderRadius: 10 }}>
          <TouchableOpacity onPress={()=>navigation.navigate("OtpScreen")}>
            <Text style={{ fontSize: 18, textAlign: "center", color: "white" }}>Davam et</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
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
    fontSize: 28,
    color: "black",
    fontWeight: "700"
  },
  titleHeader: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
    color: "black",
    marginTop: 20
  }
})