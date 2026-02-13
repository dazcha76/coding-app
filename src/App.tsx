import { useState } from 'react';
import Compare from './pages/Compare';
import HowTo from './pages/HowTo';
import Practice from './pages/Practice';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('');

  function onTabClick(section: string) {
    setActiveTab(section);
  }

  return (
    <div className="container">
      <h1>Side By Side Code</h1>

      <nav>
        <ul>
          <li onClick={() => onTabClick('how-to')}>How To</li>
          <li onClick={() => onTabClick('compare')}>Compare</li>
          <li onClick={() => onTabClick('practice')}>Practice</li>
        </ul>
      </nav>

      <div>
        {activeTab === 'how-to' && <HowTo />}
        {activeTab === 'compare' && <Compare />}
        {activeTab === 'practice' && <Practice />}
      </div>
    </div>
  );
}

export default App;
