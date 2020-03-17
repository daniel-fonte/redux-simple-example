import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import Counter from './Components/Counter';

function App() {
  return(
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

render(<App />, document.getElementById('root'));
