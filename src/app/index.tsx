import React from 'react';
import { Provider } from 'react-redux';
import AppNavigator from '../navigation/AppNavigator';
import { ThemeProvider } from '../context/ThemeContext';
import { store } from '../redux/store';

export default function Index() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <AppNavigator />
      </ThemeProvider>
    </Provider>
  );
}