import React from 'react';
import { createIconSetFromIcoMoon } from '@expo/vector-icons';
import { useFonts } from '@use-expo/font';
import { number, string, oneOf } from 'prop-types';

import icomoon from '../../assets/fonts/icomoon.ttf';
import selection from '../../assets/fonts/selection.json';

export default function Icon(props) {
  const [fontLoaded] = useFonts({ icomoon });
  const { name, size, color } = props;
  const CustomIcon = createIconSetFromIcoMoon(selection);
  // アイコンがすべて読み込まれるまで待つための処理
  // この処理がないと読み込まれていないのでエラーになってしまう
  if (!fontLoaded) {
    return null;
  }
  // style={{ lineHeight: size - 1 }} に関しては Android でボタンの位置がずれてしまう対応
  return <CustomIcon name={name} size={size} color={color} style={{ lineHeight: size - 1 }} />;
}
Icon.propTypes = {
  name: oneOf(['plus', 'delete', 'pencil', 'check']).isRequired,
  size: number,
  color: string,
};

Icon.defaultProps = {
  size: 24,
  color: '#000',
};
