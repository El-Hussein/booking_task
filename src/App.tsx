import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import store from './state/store';
import FlashMessage from 'react-native-flash-message';
import {colors} from './constants/colors';
import AppRoutes from './navigation';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.statusBar} />
      <AppRoutes />
      <FlashMessage position="bottom" duration={2000} />
    </Provider>
  );
};

export default App;
