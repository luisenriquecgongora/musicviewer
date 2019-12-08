import React from 'react';
import { Provider } from "react-redux";
import Viewer from './Viewer/Viewer';
import store from "./redux-helper/store/index";
import './AppContainer.css';

const AppContainer = () => {
  return (
    <Provider store={store}>
      <Viewer />
    </Provider>
  );
}

export default AppContainer;
