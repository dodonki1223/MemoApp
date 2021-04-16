import React, { useState } from 'react';
import {
  View, Text, TextInput, StyleSheet, TouchableOpacity,
} from 'react-native';

import Button from '../components/Button';

export default function SignUpScreen(props) {
  const { navigation } = props;
  /*
      email           ：保存したい値（状態）
      setEmail        ：値を更新する関数
      useStateの「''」：初期値
   */
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handlePress() {
    navigation.reset({
      index: 0,
      routes: [{ name: 'MemoList' }],
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Sign Up</Text>
        {/*
          autoCapitalize ：none にすることで文字入力時に一番始めの文字が大文字にならない
          keyboardType   ：入力に適したキーボードを表示してくれる
          placeholder    ：未入力時に表示される文字列
          textContentType：ユーザーが入力するコンテンツの内容をシステムに提供する（キーチェーンの設定があると自動でパスワードを入力してくれるようになる）
          secureTextEntry：入力した内容が※で表示される（パスワード入力用の表示）
          「secureTextEntry」これは secureTextEntry={true} と同じ意味を指す
          */}
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => { setEmail(text); }}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="Email Address"
          textContentType="emailAddress"
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(text) => { setPassword(text); }}
          autoCapitalize="none"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <Button
          label="Submit"
          onPress={handlePress}
        />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already registered?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [{ name: 'LogIn' }],
              });
            }}
          >
            <Text style={styles.footerLink}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  inner: {
    paddingHorizontal: 27,
    paddingVertical: 24,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    fontSize: 16,
    height: 48,
    // lineHeight: 32, // lineHeight を指定すると iPhone だと文字がちょっと下よりに表示されるため今回は削除する
    borderColor: '#000',
    borderWidth: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: '#467FD3',
  },
  footer: {
    flexDirection: 'row',
  },
});
