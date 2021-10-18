import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

const styles = StyleSheet.create({
  bookingBox: {
    backgroundColor: colors.orange,
    width: '100%',
    height: 60,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
    bottom: 0,
  },
  bookingBoxText: {
    fontSize: 16,
    color: colors.white,
  },
});

export default styles;
