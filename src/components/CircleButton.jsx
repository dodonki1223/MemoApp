import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { string, shape, func } from 'prop-types';

import Icon from './Icon';

// NOTE: props の引数部分は { style, name } で分割代入で代わりができる
export default function CircleButton(props) {
  const { style, name, onPress } = props;
  return (
    <TouchableOpacity style={[styles.circleButton, style]} onPress={onPress}>
      <Icon name={name} size={40} color="white" />
    </TouchableOpacity>
  );
}

CircleButton.propTypes = {
  style: shape(), // shape は何でも受け取れる奴
  name: string.isRequired,
  onPress: func,
};

CircleButton.defaultProps = {
  style: null,
  onPress: null,
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
