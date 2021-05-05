import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import bookingsReducer from "./store/reducers/bookings";
import WaitlistNavigator from "./navigation/WaitlistNavigator";

const rootReducer = combineReducers({
  bookings: bookingsReducer
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <WaitlistNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
