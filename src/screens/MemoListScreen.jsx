import React, { useEffect } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import firebase from 'firebase';

import MemoList from '../components/MemoList';
import CircleButton from '../components/CircleButton';
import LogOutButton from '../components/LogOutButton';

export default function App(props) {
  const { navigation } = props;

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogOutButton />,
    });
  }, []);

  useEffect(() => {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    let unsubscribe = () => {};
    // ユーザー情報が取得できない場合もあるため、if 文をかます
    // 例えば session の expire がなくなった時などが該当する
    if (currentUser) {
      const ref = db.collection(`users/${currentUser.uid}/memos`).orderBy('updatedAt', 'desc');
      // onSnapshot のメソッドでデータの取得に失敗することがあるのでその処理も記述する
      // ネットワークの問題などにより失敗する可能性がある
      unsubscribe = ref.onSnapshot((snapshot) => {
        snapshot.forEach((doc) => {
          console.log(doc.id, doc.data());
        }, (error) => {
          console.log(error);
          Alert.alert('データの読み込みに失敗しました。');
        });
      });
    }
    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      <MemoList />
      <CircleButton
        name="plus"
        onPress={() => { navigation.navigate('MemoCreate'); }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
});
