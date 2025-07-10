
import React from 'react';
import Layout from './components/Layout/Layout';
import useCrispChat from './hooks/useCrispChat';
import './styles/global.scss';

function App() {
  useCrispChat();

  return <Layout />;
}

export default App;

