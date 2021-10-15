import React, { FC } from 'react';
import { TextStyle, TextProps, Text } from 'react-native';
import Style from './styles';

interface Props extends TextProps {
  style?: TextStyle | TextStyle[];
  weight?: 'Regular' | 'Bold' | 'Light';
}

export const AppText: FC<Props> = (props) => {
  const { children, style, weight } = props;

  const styles = Style({ weight });

  return (
    <Text {...props} style={[styles.default, style]}>
      {children}
    </Text>
  );
};

export default AppText;
