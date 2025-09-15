import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ConversationsPage from './pages/ConversationsPage';

function App() {
  return (
    <Router basename="/epic">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conversations" element={<ConversationsPage />} />
      </Routes>
    </Router>
  );
}

export default App; 