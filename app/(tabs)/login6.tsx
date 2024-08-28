import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';

const PhoneNumberInputScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneNumberChange = (text) => {
    // 숫자만 남기고 필터링
    const cleaned = text.replace(/[^0-9]/g, '');

    let formattedNumber = cleaned;
    if (cleaned.length > 3 && cleaned.length <= 7) {
      // nnn-nnnn
      formattedNumber = `${cleaned.slice(0, 3)}-${cleaned.slice(3)}`;
    } else if (cleaned.length > 7) {
      // nnn-nnnn-nnnn
      formattedNumber = `${cleaned.slice(0, 3)}-${cleaned.slice(3, 7)}-${cleaned.slice(7, 11)}`;
    }

    setPhoneNumber(formattedNumber);
  };

  const isNextEnabled = phoneNumber.length === 13; // 11자리 숫자 + 2개의 하이픈으로 총 13자리

  return (
    <View style={styles.container}>
      <Text style={styles.footerText}>6. 회원가입</Text>

      <Text style={styles.title}>
        전화번호를 입력해 주세요
      </Text>
      
      <View style={styles.inputContainer}>
        <View style={styles.rowContainer}>
          <Text style={styles.subtitle}>전화번호</Text>
          <TextInput
            style={styles.input}
            placeholder="전화번호 입력"
            placeholderTextColor="#888"
            value={phoneNumber}
            onChangeText={handlePhoneNumberChange}
            keyboardType="phone-pad" // 전화번호 입력 필드로 설정
            maxLength={13} // 포맷팅된 전화번호 길이 (nnn-nnnn-nnnn)
          />
        </View>
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[
            styles.button,
            isNextEnabled && styles.activeButton, // 11자리가 입력되면 버튼 스타일 변경
          ]}
          disabled={!isNextEnabled} // 11자리가 입력되지 않으면 버튼 비활성화
        >
          <Text style={[
            styles.buttonText,
            isNextEnabled && styles.activeButtonText, // 11자리가 입력되면 텍스트 색상 변경
          ]}>완료</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // 배경색: 검정색
    justifyContent: 'flex-start', // 상단에 더 가까이 배치
    alignItems: 'center',
    padding: 20,
    paddingTop: 80, // 상단 패딩 추가
  },
  title: {
    fontSize: 24, // 타이틀 폰트 사이즈 24
    color: '#fff',
    fontWeight: 'bold', // 볼드 처리
    textAlign: 'left',
    alignSelf: 'stretch',
    marginBottom: 10, // 타이틀 아래 간격을 줄임
  },
  inputContainer: {
    backgroundColor: '#1C1C1E', // 입력 칸 배경색
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    width: '100%', // 입력칸이 전체 넓이를 차지하도록
    borderWidth: 1, // 테두리 추가
    borderColor: '#fff', // 테두리 색상
  },
  rowContainer: {
    flexDirection: 'row', // 레이블과 입력 필드를 나란히 배치
    alignItems: 'center', // 수직 정렬
  },
  subtitle: {
    fontSize: 18, // 서브타이틀 폰트 사이즈 키우기
    color: '#fff',
    fontWeight: 'bold', // 볼드 처리
    marginRight: 10, // 입력 필드와의 간격 추가
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#1C1C1E',
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%', // 버튼 컨테이너가 전체 너비를 차지하도록 설정
    marginTop: 20,
  },
  button: {
    flex: 1,
    height: 50,  // 버튼 크기 설정
    backgroundColor: '#2D9CDB', // 기본 버튼 색상 파랑
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: 'transparent',
    borderWidth: 1,
  },
  activeButton: {
    borderColor: '#fff', // 11자리 입력 후 테두리 색상 흰색
  },
  buttonText: {
    fontSize: 24, // 버튼 폰트 사이즈 24
    color: '#fff',
    fontWeight: 'bold', // 볼드 처리
  },
  activeButtonText: {
    color: '#000', // 11자리 입력 후 텍스트 색상 검정
  },
  footerText: {
    fontSize: 12, // 서브 타이틀 폰트 사이즈 12
    color: '#888', // 연한 색상으로 설정
    marginBottom: 10, // 타이틀 위에 간격을 줄임
    alignSelf: 'flex-start', // 왼쪽 정렬
  },
});

export default PhoneNumberInputScreen;
