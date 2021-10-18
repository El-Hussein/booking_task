import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    width: 420,
    height: 250,
  },
  swiperDotStyle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    margin: 5,
    backgroundColor: colors.grey,
  },
  swiperActiveDotStyle: {
    backgroundColor: colors.white,
  },
  swiperImageStyle: {
    width: 420,
    height: 250,
  },
  swiperPaginationStyle: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingHorizontal: 2,
    borderRadius: 11,
    position: 'absolute',
    bottom: 20,
  },
});

export default styles;
