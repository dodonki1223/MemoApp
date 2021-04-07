import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AppBar from './src/components/AppBar';
import MemoList from './src/components/MemoList';

export default function App() {
  return (
    <View style={styles.container}>
      <AppBar />
      <MemoList />
      <View style={styles.circleBotton}>
        <Text style={styles.circleBottonLabel}>+</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  circleBotton: {
    backgroundColor: '#467FD3',
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    // shadow 系のCSSは iOS にしか対応できていない
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    textShadowRadius: 8,
    // elevation は android にしか対応していない（Material Design を確認）
    elevation: 8,
  },
  circleBottonLabel: {
    color: '#FFF',
    fontSize: 40,
    lineHeight: 40,
  },
});
