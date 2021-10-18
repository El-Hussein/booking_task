import {Platform, StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

export default StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 15,
    marginRight: 8,
  },
  button: {
    height: 25,
    backgroundColor: colors.white,
    borderRadius: Platform.OS === 'ios' ? 25 : 12.5,
    borderWidth: 1,
    borderColor: colors.border,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 6,
  },
  buttonTitle: {
    fontSize: 12,
    color: colors.secondaryText,
  },
  modalStyle: {
    justifyContent: 'flex-end',
  },
  modalContentStyle: {
    padding: 5,
    minHeight: 220,
  },
  modalTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: colors.secondaryText,
  },

  list: {
    marginTop: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  labelText: {
    fontSize: 14,
    flex: 1,
    marginRight: 20,
  },
  separator: {
    borderBottomWidth: 0.5,
    borderBottomColor: colors.border,
  },
});
