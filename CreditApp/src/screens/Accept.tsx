import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import CheckBox from '@react-native-community/checkbox';

const Accept = ({ navigation }: any) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleCheckboxChange1 = () => {
    setIsChecked1(!isChecked1);
  };

  const handleCheckboxChange2 = () => {
    setIsChecked2(!isChecked2);
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flex: 1 }}>
        <Text style={styles.titleHeader}>Təsdiq</Text>
      </View>
      <View style={{ flex: 5, marginHorizontal: 20, gap: 20 }}>
        <View>
          <Text style={styles.regSty}>Təsdiq</Text>
        </View>
        <View style={{gap:30}}>
          <View style={{flexDirection:"row",gap:10,width:"90%"}}>
            <CheckBox
              value={isChecked}
              onValueChange={handleCheckboxChange}
              style={styles.checkbox}
              tintColors={{ true: '#155eef', false: '#155eef' }}
            />
            <Text style={{fontSize:18,color:"#344054"}}>İş yeri haqqında məlumatları ASAN Finance xidmətindən alınması üçün razılıq verirəm.</Text>
          </View>
          <View style={{flexDirection:"row",gap:10,width:"90%"}}>
            <CheckBox
              value={isChecked1}
              onValueChange={handleCheckboxChange1}
              style={styles.checkbox}
              tintColors={{ true: '#155eef', false: '#155eef' }}
            />
            <Text style={{fontSize:18,color:"#344054"}}>Akb-dən kredit tarixçəsinin əldə olunmasına razılıq verirəm.</Text>
          </View>
          <View style={{flexDirection:"row",gap:10,width:"90%"}}>
            <CheckBox
              value={isChecked2}
              onValueChange={handleCheckboxChange2}
              style={styles.checkbox}
              tintColors={{ true: '#155eef', false: '#155eef' }}
            />
            <Text style={{fontSize:18,color:"#344054"}}>Akb-dən kredit skor məlumatları əldə olunmasına razılıq verirəm.</Text>
          </View>
        </View>
      </View>
      <View style={{ flex: 1, marginHorizontal: 15 }}>
        {
          isChecked == true && isChecked1==true && isChecked2==true&&
          <View
            style={{
              width: '100%',
              backgroundColor: '#155eef',
              padding: 18,
              borderRadius: 10,
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate('OtpScreen')}>
              <Text style={{ fontSize: 18, textAlign: 'center', color: 'white' }}>
                Təsdiq et
              </Text>
            </TouchableOpacity>

          </View>
        }
      </View>
    </View>
  );
};

export default Accept;

const styles = StyleSheet.create({
  inputSty: {
    color: 'black',
    fontSize: 16,
    borderRadius: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    paddingTop: 14,
    paddingBottom: 14,
    paddingHorizontal: 15,
    borderColor: '#98A2B3',
  },
  regSty: {
    fontSize: 28,
    color: 'black',
    fontWeight: '700',
  },
  titleHeader: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
    marginTop: 20,
  },
  checkbox: {
    width: 30,
    height: 30,
    transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
  },
});
