import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
  emptyScreen: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 650,
  },
  emptyScreenMessage: {
    fontSize: 16,
    color: colors.black,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export default styles;
