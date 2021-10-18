import React, {FC} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionic from 'react-native-vector-icons/Ionicons';
import AppText from '../AppText';
import styles from './styles';

interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = ({title}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.rowView}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionic name="arrow-back-circle-outline" size={24} />
        </TouchableOpacity>
        <AppText style={styles.title}> {title}</AppText>
      </View>
      <View style={styles.rowView}>
        <AppText style={[styles.title, {fontWeight: 'normal'}]}>
          Credit :{' '}
        </AppText>
        <AppText style={styles.title}>12</AppText>
      </View>
    </View>
  );
};

export default Header;
