import {Platform, I18nManager} from 'react-native';

export const fontWeight = {
  regular: 'Regular',
  bold: 'Bold',
  light: 'Light',
};

export const fonts = {
  android: 'Roboto',
  ios: 'SanFranciscoText',
  arabic: Platform.OS === 'ios' ? 'NotoSansArabicUI' : 'NotoSansArabic',
};

export const defaultFontFamily = I18nManager.isRTL
  ? fonts.arabic
  : Platform.OS === 'ios'
  ? fonts.ios
  : fonts.android;
