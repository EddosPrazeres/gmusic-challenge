import React from 'react';
import Routes from './routes';
import { GlobalProvider } from './components'
function App() {
  return (
    <GlobalProvider>
      <Routes />
    </GlobalProvider>
  );
}

export default App;
