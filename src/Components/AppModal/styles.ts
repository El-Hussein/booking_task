import {Platform, StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
const styles = StyleSheet.create({
  modal: {
    flex: 1,
    margin: 0,
    marginHorizontal: 15,
    justifyContent: 'flex-end',
    marginBottom: Platform.OS === 'android' ? 0 : 31,
  },
  topBorder: {
    height: 4,
    backgroundColor: colors.grey,
    width: '25%',
    borderRadius: 4,
    marginTop: 15,
    alignSelf: 'center',
  },
  contentModal: {
    minHeight: 443,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});
export default styles;
