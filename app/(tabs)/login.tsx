import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Image, Alert } from 'react-native';
import { useRouter } from 'expo-router';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const handleLogin = () => {
    if (email && password) {
      Alert.alert('로그인 성공', `환영합니다!`);
      // 로그인 성공 후 추가 로직을 여기에 작성할 수 있습니다.
    } else {
      Alert.alert('로그인 실패', '이메일과 비밀번호를 입력해 주세요.');
    }
  };

  const isLoginEnabled = email.length > 0 && password.length > 0;

  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/images/logo.png')} 
        style={styles.logo} 
      />

      <Text style={styles.title}>
        공평한 주차의 시작,{"\n"}
        스위프트로 더 나은 내일을 만드세요.
      </Text>
      
      <TextInput
        style={[
          styles.input,
          isLoginEnabled && styles.inputActive, // 필드 입력 후 테두리 색 변경
        ]}
        placeholder="이메일 입력"
        placeholderTextColor="#888"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={[
          styles.input,
          isLoginEnabled && styles.inputActive, // 필드 입력 후 테두리 색 변경
        ]}
        placeholder="비밀번호 입력"
        placeholderTextColor="#888"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.loginButton,
            isLoginEnabled && styles.activeLoginButton, // 필드 입력 후 버튼 테두리 추가
          ]}
          onPress={handleLogin}
        >
          <Text style={[
            styles.buttonText,
            isLoginEnabled && styles.activeButtonText // 필드 입력 후 텍스트 색 변경
          ]}>로그인</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.signupButton}
          onPress={() => router.push('/(pages)/login2')}
        >
          <Text style={styles.buttonText}>회원가입</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000', 
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 30,
    alignSelf: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    alignSelf: 'stretch',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#1C1C1E',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    color: '#fff',
    borderColor: '#888', // 기본 테두리 색상
    borderWidth: 1,
  },
  inputActive: {
    borderColor: '#fff', // 필드 입력 후 테두리 색상
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  loginButton: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginRight: 10,
    backgroundColor: '#2D9CDB', // 기본 버튼 배경색 파랑
    borderWidth: 1, // 기본적으로 테두리가 없도록 설정
    borderColor: 'transparent', // 기본적으로 투명 테두리
  },
  activeLoginButton: {
    borderColor: '#fff', // 필드 입력 후 테두리 색상 흰색
  },
  signupButton: {
    flex: 1,
    height: 50,
    backgroundColor: '#2D9CDB',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff', // 기본 텍스트 색상 흰색
    fontSize: 20,
    fontWeight: 'bold',
  },
  activeButtonText: {
    color: '#000', // 필드 입력 후 텍스트 색상 검정
  },
});

export default LoginScreen;
