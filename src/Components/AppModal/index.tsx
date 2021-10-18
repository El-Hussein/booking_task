import React from 'react';
import {View, ViewStyle} from 'react-native';
import OriginalModal from 'react-native-modal';
import {colors} from '../../constants/colors';
import styles from './styles';

export interface AppModalProps {
  isVisible: boolean;
  children?: React.ReactNode;
  closeModal: () => void;
  contentStyle?: ViewStyle;
  modalStyle?: ViewStyle;
  backdropOpacity?: any;
}

const AppModal: React.FC<AppModalProps> = ({
  children,
  isVisible,
  closeModal,
  contentStyle,
  modalStyle,
  backdropOpacity,
  ...rest
}: AppModalProps) => {
  return (
    <OriginalModal
      {...rest}
      style={[styles.modal, modalStyle]}
      isVisible={isVisible}
      animationInTiming={500}
      animationOutTiming={500}
      backdropOpacity={backdropOpacity || 0}
      onBackButtonPress={closeModal}
      onBackdropPress={closeModal}>
      <View
        style={[
          styles.contentModal,
          {backgroundColor: colors.white},
          contentStyle,
        ]}>
        <View style={styles.topBorder} />
        {children}
      </View>
    </OriginalModal>
  );
};

export default React.memo(AppModal);
