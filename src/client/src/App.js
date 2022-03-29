import './App.css';

import Header from './components/header/Header.js';
import TinderCards from './components/tinderCards/TinderCards.js';

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* TinderCards */}
      <TinderCards />
      {/* SwipeButtons */}
    </div>
  );
}

export default App;
