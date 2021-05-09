import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

export default function Loading() {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    // 上下左右に真ん中に表示させたいので justifyContent と alignItems を設定する
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    // アプリの一番上に表示させるため、zIndex を設定する
    zIndex: 5,
  },
  inner: {
    marginBottom: 80,
  },
});