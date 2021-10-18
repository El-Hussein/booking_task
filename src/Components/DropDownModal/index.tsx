import React, {useState} from 'react';
import {View, TouchableOpacity, FlatList} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../constants/colors';
import AppModal from '../AppModal';
import AppText from '../AppText';
import styles from './styles';

export type DropDownItem = {
  id?: number;
  name: string;
  value: any;
};

interface DropDownModalProps {
  data: Array<DropDownItem>;
  placeholder?: string;
  onSelect: (item: DropDownItem) => void;
  selected?: DropDownItem | null;
  disabled?: boolean;
}

const DropDownModal: React.FC<DropDownModalProps> = ({
  data,
  placeholder,
  onSelect,
  selected,
  disabled,
}: DropDownModalProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const openModal = () => {
    console.log('hello');
    setIsVisible(true);
  };
  const closeModal = () => setIsVisible(false);

  const renderItem = ({item}: any) => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          onSelect(item);
          closeModal();
        }}>
        <AppText style={styles.labelText}>{item.name}</AppText>
        <MaterialIcons
          name="check"
          size={15}
          color={
            item.value === selected?.value
              ? colors.activeTabTintColor
              : colors.inactiveTabTintColor
          }
        />
      </TouchableOpacity>
    );
  };

  return (
    <>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          disabled={disabled}
          style={styles.button}
          onPress={openModal}>
          <AppText style={styles.buttonTitle} numberOfLines={1}>
            {selected ? selected.name : placeholder}
          </AppText>
          <MaterialIcons
            name="arrow-drop-down"
            size={18}
            color={colors.border}
          />
        </TouchableOpacity>
      </View>

      <AppModal
        isVisible={isVisible}
        closeModal={closeModal}
        modalStyle={styles.modalStyle}
        contentStyle={styles.modalContentStyle}>
        <AppText style={styles.modalTitle}>{placeholder}</AppText>
        <FlatList
          contentContainerStyle={styles.list}
          data={data}
          renderItem={renderItem}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          keyExtractor={(item, index) => `${index}`}
        />
      </AppModal>
    </>
  );
};

export default React.memo(DropDownModal);
