import React, { useState } from 'react';
import {
  View, TextInput, StyleSheet, Alert,
} from 'react-native';
import { shape, string } from 'prop-types';
import firebase from 'firebase';

import CircleButton from '../components/CircleButton';
import KeyboardSafeView from '../components/KeyboardSafeView';
import { translateErrors } from '../utils';

export default function MemoEditScreen(props) {
  const { navigation, route } = props;
  const { id, bodyText } = route.params;
  const [body, setBody] = useState(bodyText);

  function handlePress() {
    const { currentUser } = firebase.auth();
    if (currentUser) {
      const db = firebase.firestore();
      const ref = db.collection(`users/${currentUser.uid}/memos`).doc(id);
      /*
          ref.set()
            ref.set() を使用すると引数で設定した Object で更新される
            なので本来持っていた Object の key と Value を指定しないと
            消えてしまうので注意が必要
          ref.set({}, { merge: true })
            ref.set({}, { merge: true })を使用すると既存の値を持ったまま
            更新してくれる。第一引数にすべての値をセットできない状態なら
            { merge: true } をセットしておくとよい
       */
      ref.set({
        bodyText: body,
        updatedAt: new Date(),
      }, { merge: true })
        .then(() => {
          navigation.goBack();
        })
        .catch((error) => {
          // firestore のエラーコードに関してはこちらのページを参考にすること
          // https://firebase.google.com/docs/reference/node/firebase.firestore#firestoreerrorcode
          // 今回は殆どエラーが発生しないため、スキップする
          const errorMsg = translateErrors(error.code);
          Alert.alert(errorMsg.title, errorMsg.description);
        });
    }
  }

  return (
    <KeyboardSafeView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={body}
          multiline
          style={styles.input}
          onChangeText={(text) => { setBody(text); }}
        />
      </View>
      <CircleButton
        name="check"
        onPress={handlePress}
      />
    </KeyboardSafeView>
  );
}

MemoEditScreen.propTypes = {
  route: shape({
    params: shape({ id: string, bodyText: string }),
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flex: 1,
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    lineHeight: 24,
    // paddingTop と Bottom をなぜ Verticalにしないのか？
    // なぜかスタイルが効かないためそれぞれに設定する
    paddingTop: 32,
    paddingBottom: 32,
    paddingHorizontal: 27,
  },
});
