import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: colors.white,
  },
  mainDataContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  roomHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 10,
    width: '100%',
  },
  roomImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  moreButton: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    color: colors.greyText,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  roomData: {
    flex: 1,
    paddingHorizontal: 20,
  },
  roomName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black,
  },
  roomSecondaryData: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10,
  },
  maxPeople: {
    fontWeight: 'bold',
    color: colors.black,
    marginHorizontal: 5,
  },
  costText: {
    color: colors.black,
  },
  title: {
    fontSize: 14,
    color: colors.greyText,
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
