import React, { useEffect, useState } from 'react';
import { shape, string } from 'prop-types';
import {
  View, Text, ScrollView, StyleSheet,
} from 'react-native';
import firebase from 'firebase';

import CircleButton from '../components/CircleButton';

export default function MemoDetailScreen(props) {
  const { navigation, route } = props;
  const { id } = route.params;
  console.log(id);
  const [memo, setMemo] = useState(null);

  useEffect(() => {
    const { currentUser } = firebase.auth();
    let unsubscribe = () => {};
    if (currentUser) {
      /*
          db.collection('foo').onSnapshot((snapshot) => {})
            QuerySnapshot を返す、複数の DocumentSnapshot を含む
          db.collection('foo').doc('bar').onSnapshot((doc) => {})
            DocumentSnapshot を返す、単一のドキュメントのデータを持っている
        */
      const db = firebase.firestore();
      const ref = db.collection(`users/${currentUser.uid}/memos`).doc(id);
      unsubscribe = ref.onSnapshot((doc) => {
        console.log(doc.id, doc.data());
        const data = doc.data();
        setMemo({
          id: doc.id,
          bodyText: data.bodyText,
          updatedAt: data.updatedAt.toDate(),
        });
      });
    }
    return unsubscribe;
  }, []);

  /*
      { memo && memo.bodyText }
      { memo && String(memo.updatedAt) }
      { memo && memo.bodyText }
      memo && hoge という書き方に関して
        memo の初期値は null のため、データの存在チェックを書いて
        データが存在する時は表示するようにしている
   */
  return (
    <View style={styles.container}>
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle} numberOfLines={1}>{ memo && memo.bodyText }</Text>
        <Text style={styles.memoDate}>{ memo && String(memo.updatedAt) }</Text>
      </View>
      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoText}>
          { memo && memo.bodyText }
        </Text>
      </ScrollView>
      <CircleButton
        style={{ top: 60, bottom: 'auto' }}
        name="pencil"
        onPress={() => { navigation.navigate('MemoEdit'); }}
      />
    </View>
  );
}

MemoDetailScreen.protoTypes = {
  route: shape({
    params: shape({ id: string }),
  }).isRequired,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  memoHeader: {
    backgroundColor: '#467FD3',
    height: 96,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 19,
  },
  memoTitle: {
    color: '#fff',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
  },
  memoDate: {
    color: '#fff',
    fontSize: 12,
    lineHeight: 16,
  },
  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
  memoText: {
    fontSize: 16,
    lineHeight: 24,
  },
});
