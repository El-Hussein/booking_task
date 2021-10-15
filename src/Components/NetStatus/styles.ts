import {StyleSheet, Platform} from 'react-native';
import {colors} from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'flex-end',
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.001)',
  },
  connection: {
    backgroundColor: colors.white,
    paddingVertical: 16,
    borderTopColor: colors.grey,
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  errorIcon: {
    backgroundColor: colors.error,
    width: 24,
    height: 24,
    borderRadius: Platform.OS === 'ios' ? 24 : 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.greyText,
    textAlign: 'center',
    marginLeft: 16,
    fontSize: 14,
  },
});

export default styles;
