import React, {FC} from 'react';
import {TextStyle, TextProps, Text} from 'react-native';
import styles from './styles';

interface Props extends TextProps {
  style?: TextStyle | TextStyle[];
}

export const AppText: FC<Props> = props => {
  const {children, style} = props;

  return (
    <Text {...props} style={[styles.default, style]}>
      {children}
    </Text>
  );
};

export default AppText;
