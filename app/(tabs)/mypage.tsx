import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import mypage from './tabs/mypage';  // 올바른 경로로 MyPage를 가져옵니다.
// import AccountPage from '../pages/account';  // 올바른 경로로 AccountPage를 가져옵니다.

const Stack = createStackNavigator();

export default function app() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MyPage">
        <Stack.Screen name="MyPage" component={MyPage} options={{ headerShown: false }} />
        <Stack.Screen name="AccountPage" component={AccountPage} options={{ title: '계정' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AccountPage from '../pages/account';

// MyPage 컴포넌트 선언 (중복되지 않도록 확인)
export default function MyPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My page</Text>
      
      {/* 프로필 섹션 */}
      <View style={styles.profileSection}>
        <Image 
          source={{ uri: 'https://via.placeholder.com/50' }} // 프로필 사진 URL 또는 로컬 경로
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>홍길동</Text>
      </View>

      {/* 복지카드 섹션 */}
      <View style={styles.cardSection}>
        <Image 
          source={{ uri: 'https://via.placeholder.com/200x100' }} // 복지카드 이미지 URL 또는 로컬 경로
          style={styles.cardImage}
        />
        <Text style={styles.cardText}>복지카드 등록 완료</Text>
      </View>

      {/* 하단 파란색 박스 */}
      <View style={styles.bottomBox}>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('AccountPage')}>
          <Icon name="account" size={24} color="#000" style={styles.icon} />
          <Text style={styles.boxText}>계정</Text>
          <Icon name="chevron-right" size={24} color="#000" style={styles.arrowIcon} />
        </TouchableOpacity>
        {/* 나머지 코드 */}
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // 배경색 검정색
    paddingTop: 20, // 상단 공백
    paddingLeft: 20, // 왼쪽 공백
  },
  title: {
    color: '#79D7FF', // 텍스트 색깔
    fontSize: 30, // 폰트 크기
    fontWeight: 'bold', // 폰트 굵기
    marginBottom: 20, // 하단 공백
  },
  profileSection: {
    flexDirection: 'row', // 이미지와 텍스트를 나란히 배치
    alignItems: 'center', // 중앙 정렬
    marginBottom: 30, // 섹션 간 공백
  },
  profileImage: {
    width: 50, // 프로필 이미지 크기
    height: 50,
    borderRadius: 25, 
    marginRight: 15, // 이미지와 이름 사이의 공백
  },
  profileName: {
    color: '#fff', // 이름 텍스트 색상 흰색
    fontSize: 22, // 폰트 크기
  },
  cardSection: {
    alignItems: 'center', // 중앙 정렬
    marginBottom: 30, // 섹션 간 공백
  },
  cardImage: {
    width: 230, // 카드 이미지 크기
    height: 130,
    marginBottom: 10, // 이미지와 텍스트 사이의 공백
  },
  cardText: {
    color: '#fff', // 텍스트 색상 흰색
    fontSize: 18, // 폰트 크기
  },
  bottomBox: {
    backgroundColor: '#79D7FF', // 파란색 배경
    width: '105%', // 화면 전체 너비로 설정
    position: 'absolute', // 절대 위치 설정
    bottom: 0, // 화면의 하단에 배치
    left: 0, // 왼쪽 경계에 맞추기
    right: 0, // 오른쪽 경계에 맞추기
    borderTopLeftRadius: 20, // 상단 좌측 모서리 둥글게
    borderTopRightRadius: 20, // 상단 우측 모서리 둥글게
    paddingVertical: 20, // 상하 여백
    paddingHorizontal: 15, // 좌우 여백
  },
  menuItem: {
    flexDirection: 'row', // 아이콘과 텍스트가 나란히 있도록 설정
    alignItems: 'center', // 아이템 중앙 정렬
    justifyContent: 'space-between', // 텍스트와 화살표 아이콘 간격 벌리기
    paddingVertical: 15, // 각 항목의 상하 여백
    borderBottomWidth: 1, // 하단 경계선
    borderBottomColor: '#007BA3', // 경계선 색상
  },
  icon: {
    marginRight: 10, // 아이콘과 텍스트 사이의 간격
  },
  arrowIcon: {
    marginLeft: 'auto', // 화살표 아이콘을 오른쪽에 배치
  },
  boxText: {
    color: '#000', // 박스 내 텍스트 색깔 검정색
    fontSize: 22, // 폰트 크기
  },
});

