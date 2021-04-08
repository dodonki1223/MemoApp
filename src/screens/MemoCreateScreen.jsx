import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleButton';
import KeyboardSafeView from '../components/KeyboardSafeView';

export default function MemoCreateScreen() {
  return (
    // <KeyboardAvoidingView style={styles.container} behavior="height" >
    // 本来なら KeyboardAvoidingView を使用すべきだが、バグがありスタンプに切り替えたり
    // すると CircleButton が隠れてしまうため、自作の component を使用する
    <KeyboardSafeView style={styles.container}>
      <AppBar />
      <View style={styles.inputContainer}>
        <TextInput value="" multiline style={styles.input} />
      </View>
      <CircleButton name="check" />
    </KeyboardSafeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    paddingHorizontal: 27,
    paddingVertical: 32,
    flex: 1,
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    lineHeight: 24,
  },
});
