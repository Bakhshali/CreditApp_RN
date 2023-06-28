import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useRef, useState, useEffect } from 'react';

const Otp = ({ navigation }: any) => {
  const [pin1, setPin1] = useState<any>('');
  const [pin2, setPin2] = useState<any>('');
  const [pin3, setPin3] = useState<any>('');
  const [pin4, setPin4] = useState<any>('');
  const [timer, setTimer] = useState<number>(60);

  const pin1Ref = useRef<TextInput>(null);
  const pin2Ref = useRef<TextInput>(null);
  const pin3Ref = useRef<TextInput>(null);
  const pin4Ref = useRef<TextInput>(null);

  const handlePin1Change = (value: string) => {
    setPin1(value);
    if (value !== '') {
      pin2Ref.current?.focus();
    }
  };

  const handlePin2Change = (value: string) => {
    setPin2(value);
    if (value !== '') {
      pin3Ref.current?.focus();
    } else {
      pin1Ref.current?.focus();
    }
  };

  const handlePin3Change = (value: string) => {
    setPin3(value);
    if (value !== '') {
      pin4Ref.current?.focus();
    } else {
      pin2Ref.current?.focus();
    }
  };

  const handlePin4Change = (value: string) => {
    setPin4(value);
    if (value === '') {
      pin3Ref.current?.focus();
    }
  };


  const handleResendOTP = () => {
    setTimer(60);
  };

  useEffect(() => {
    const countdown = setInterval(() => {
      if (timer > 0) {
        setTimer((prevTimer) => prevTimer - 1);
      }
    }, 1000);

    return () => {
      clearInterval(countdown);
    };
  }, [timer]);

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flex: 1 }}>
        <Text style={styles.titleHeader}>Verification</Text>
      </View>
      <View style={{ flex: 5, marginHorizontal: 20, gap: 25 }}>
        <View style={{ gap: 7 }}>
          <Text style={styles.regSty}>OTP</Text>
          <Text style={{ fontSize: 16 }}>Please type the verification code sent to</Text>
          <Text style={{ color: 'black', fontWeight: '600', fontSize: 15 }}>+994 70 304 40 90</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 0 }}>
          <View style={styles.inputView}>
            <TextInput
              ref={pin1Ref}
              style={styles.inputSty}
              keyboardType={'number-pad'}
              maxLength={1}
              value={pin1}
              onChangeText={handlePin1Change}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              ref={pin2Ref}
              style={styles.inputSty}
              keyboardType={'number-pad'}
              maxLength={1}
              value={pin2}
              onChangeText={handlePin2Change}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              ref={pin3Ref}
              style={styles.inputSty}
              keyboardType={'number-pad'}
              maxLength={1}
              value={pin3}
              onChangeText={handlePin3Change}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              ref={pin4Ref}
              style={styles.inputSty}
              keyboardType={'number-pad'}
              maxLength={1}
              value={pin4}
              onChangeText={handlePin4Change}
            />
          </View>
        </View>
        {
          timer === 0 ? (
            <TouchableOpacity style={styles.resendButton} onPress={handleResendOTP}>
              <Text style={styles.resendButtonText}>Resend OTP</Text>
            </TouchableOpacity>
          ) : (
            <Text style={styles.timerText}>{`Resend OTP in ${timer} seconds`}</Text>
          )}
      </View>
      <View style={{ flex: 1, marginHorizontal: 15 }}>
        <View style={{ width: '100%', backgroundColor: '#155eef', padding: 18, borderRadius: 10 }}>
          <TouchableOpacity onPress={() => navigation.navigate('OtpScreen')}>
            <Text style={{ fontSize: 18, textAlign: 'center', color: 'white' }}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Otp;

const styles = StyleSheet.create({
  inputSty: {
    fontSize: 25,
  },
  inputView: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: 70,
    height: 68,
    backgroundColor: '#F2F4F7',
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
  resendButton: {
    alignSelf: 'center',
  },
  resendButtonText: {
    fontSize: 16,
    color: '#155eef',
    fontWeight: '600',
  },
  timerText: {
    fontSize: 16,
    color: 'gray',
    alignSelf: 'center',
  },
});
