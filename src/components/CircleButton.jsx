import React from 'react';
import { View, StyleSheet } from 'react-native';
import { string, shape } from 'prop-types';
import { Feather } from '@expo/vector-icons';

export default function CircleButton(props) {
  const { style, name } = props;
  return (
    <View style={[styles.circleButton, style]}>
      <Feather name={name} size={32} color="white" />
    </View>
  );
}

CircleButton.propTypes = {
  style: shape(), // shape は何でも受け取れる奴
  name: string.isRequired,
};

CircleButton.defaultProps = {
  style: null,
};

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
