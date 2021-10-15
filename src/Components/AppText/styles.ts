import { StyleSheet } from 'react-native';
import { defaultFontFamily } from '../../constants/fonts';

interface AppTextStyleProps {
  weight?: 'Regular' | 'Bold' | 'Light';
}

const styles = ({ weight = 'Regular' }: AppTextStyleProps) =>
  StyleSheet.create({
    default: {
      fontFamily: `${defaultFontFamily}-${weight}`,
      textAlign: 'left',
    },
  });

export default styles;
