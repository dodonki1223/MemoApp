import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CircleButton() {
  return (
    <View style={styles.circleButton}>
      <Text style={styles.circleButtonLabel}>+</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  circleButton: {
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
  circleButtonLabel: {
    color: '#FFF',
    fontSize: 40,
    lineHeight: 40,
  },
});
