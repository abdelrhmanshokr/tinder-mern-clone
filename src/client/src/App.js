import './App.css';

import Header from './components/header/Header.js';
import TinderCard from './components/tinderCards/TinderCards.js';

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* TinderCards */}
      <TinderCard />
      {/* SwipeButtons */}
    </div>
  );
}

export default App;
