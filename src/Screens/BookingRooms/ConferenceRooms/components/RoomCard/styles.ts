import {StyleSheet} from 'react-native';
import {colors} from '../../../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    marginVertical: 10,
    elevation: 3,
  },
  roomHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  maxPeople: {
    fontWeight: 'bold',
    color: colors.black,
    marginHorizontal: 5,
  },
});

export default styles;
