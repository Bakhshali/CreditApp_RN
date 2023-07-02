import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';

const RangeFilter = ({ navigation }: any) => {
  const [value, setValue] = useState(0);
  const [valueMonth, setValueMonth] = useState(0);
  const [isInputFocused, setInputFocused] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const [selectedValue2, setSelectedValue2] = useState('');

  const handleValueSelect = (itemValue: any) => {
    setSelectedValue(itemValue);
  };

  const handleValueSelect2 = (itemValue: any) => {
    setSelectedValue2(itemValue);
  };

  const handleValueChange = (newValue: any) => {
    setValue(newValue);
  };

  const handleTextInputChange = (text: any) => {
    setValue(parseInt(text) || 0);
  };

  const handleValueChangeMonth = (newValue: any) => {
    setValueMonth(newValue);
  };

  const handleTextInputChangeMonth = (text: any) => {
    setValueMonth(parseInt(text) || 0);
  };

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    setInputFocused(false);
  };

  const data = value.toFixed().toString();
  const dataMonth = valueMonth.toFixed().toString();
  console.log(selectedValue);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 1 }}>
        <Text style={styles.titleHeader}>İpateka krediti</Text>
      </View>
      <View style={{ flex: 5, marginHorizontal: 20, gap: 20 }}>
        <View>
          <Text style={styles.regSty}>
            Müraciət
          </Text>
        </View>
        <View>
          <Text style={{ fontSize: 16, color: "black", marginHorizontal: 10 }}>Məbləğ</Text>
          <Slider
            style={styles.sliderSty}
            value={value}
            minimumValue={500}
            maximumValue={5000}
            onValueChange={handleValueChange}
            thumbTintColor="#155eef"
            minimumTrackTintColor="#155eef"
          />
          <View style={{ marginHorizontal: 15, flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={{ color: "black" }}>500</Text>
            <Text style={{ color: "black" }}>2000</Text>
            <Text style={{ color: "black" }}>5000</Text>
          </View>
          <TextInput
            style={[
              styles.inputSty,
              isInputFocused && styles.inputFocusedSty
            ]}
            keyboardType="numeric"
            value={data}
            maxLength={5000}
            onChangeText={handleTextInputChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
        </View>
        <View>
          <Text style={{ fontSize: 16, color: "black", marginHorizontal: 10 }}>Məbləğ</Text>
          <Slider
            style={styles.sliderSty}
            value={valueMonth}
            minimumValue={6}
            maximumValue={36}
            onValueChange={handleValueChangeMonth}
            thumbTintColor="#155eef"
            minimumTrackTintColor="#155eef"
          />
          <View style={{ marginHorizontal: 15, flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={{ color: "black" }}>6</Text>
            <Text style={{ color: "black" }}>12</Text>
            <Text style={{ color: "black" }}>18</Text>
            <Text style={{ color: "black" }}>24</Text>
            <Text style={{ color: "black" }}>30</Text>
            <Text style={{ color: "black" }}>36</Text>
          </View>
          <TextInput
            style={[
              styles.inputSty,
              isInputFocused && styles.inputFocusedSty
            ]}
            keyboardType="numeric"
            value={dataMonth}
            maxLength={5000}
            onChangeText={handleTextInputChangeMonth}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
        </View>
        <View>
          <View style={{borderColor:"gray",borderWidth:1,borderRadius:10,marginHorizontal:5,marginTop:10}}>
            <Picker
              selectedValue={selectedValue}
              onValueChange={handleValueSelect}
            >
              <Picker.Item label="Kreditin götürmə məqsədi" value="" enabled={false} />
              <Picker.Item label="Option 1" value="option1" />
              <Picker.Item label="Option 2" value="option2" />
              <Picker.Item label="Option 3" value="option3" />
            </Picker>
          </View>
          <View style={{borderColor:"gray",borderWidth:1,borderRadius:10,marginHorizontal:5,marginTop:25}}>
            <Picker
              selectedValue={selectedValue2}
              onValueChange={handleValueSelect2}
              placeholder="salam"
            >
              <Picker.Item label="Daşınmaz əmlak məlumatınız" value="" enabled={false} />
              <Picker.Item label="Option 1" value="option1" />
              <Picker.Item label="Option 2" value="option2" />
              <Picker.Item label="Option 3" value="option3" />
            </Picker>
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
  );
};


const styles = StyleSheet.create({
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  selectedValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  sliderSty: {
    padding: 5
  },
  inputSty: {
    color: "black",
    fontSize: 16,
    borderRadius: 7,
    backgroundColor: "white",
    borderWidth: 1.3,
    marginHorizontal: 5,
    borderColor: "#98A2B3",
    marginTop: 20,
    padding: 8,
  },
  inputFocusedSty: {
    borderColor: "#155eef"
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
});

export default RangeFilter;
