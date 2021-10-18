import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

const slotWidth = 40;
const slotHeight = 80;
const slotEdge = 5;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeSlot: {
    width: slotWidth,
    height: slotHeight,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.greyText,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: slotWidth / 2 + 10,
    marginBottom: slotEdge + 5,
    zIndex: 2,
  },
  timeSlotText: {
    fontSize: 8,
    color: colors.greyText,
    position: 'absolute',
    width: 40,
    top: 0,
    left: -20,
    textAlign: 'center',
  },
  fullLineSlotButton: {
    width: slotWidth,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    left: -1 * (slotWidth / 2),
    top: -(slotEdge / 2),
    zIndex: 1,
  },
  fullLine: {
    height: slotHeight + slotEdge,
    backgroundColor: colors.greyText,
    width: 1,
  },
  halfLineSlotButton: {
    zIndex: 4,
    width: slotWidth,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    left: -1 * (slotWidth / 2),
    bottom: -1 * (slotHeight / 2) + (slotHeight / 2 + slotEdge) / 2 - slotEdge,
  },
  halfLine: {
    height: slotHeight / 2 + slotEdge,
    backgroundColor: colors.greyText,
    width: 1,
  },
  selectedAria: {
    backgroundColor: colors.lightGreen,
    width: slotWidth,
    height: (2 * slotHeight) / 3,
    position: 'absolute',
    top: slotHeight / 6,
    zIndex: 5,
  },
  periodEdge: {
    width: 4,
    height: (2 * slotHeight) / 3 + 5,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: colors.green,
    left: -2,
    borderRadius: 4,
    top: slotHeight / 6 - 2.5,
    zIndex: 10,
  },
  periodEdgeCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.green,
    backgroundColor: colors.white,
    zIndex: 10,
  },
  changePeriod: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  increment: {
    position: 'absolute',
    marginHorizontal: 10,
    left: 0,
    bottom: slotHeight / 2 + slotEdge + 5,
    zIndex: 25,
  },
  decrement: {
    position: 'absolute',
    marginHorizontal: 10,
    right: 0,
    bottom: slotHeight / 2 + slotEdge + 5,
    zIndex: 25,
  },
});

export default styles;
