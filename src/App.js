import React from 'react';
import { Provider } from 'react-redux';
import ConfigureStore from './redux/configureStore';
import { Router } from './routing';

import Main from './components/MainComponent';

const store = ConfigureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Main />
      </Router>
    </Provider>
  );
};

export default App;
