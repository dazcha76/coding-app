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
    <>
      <h1>Side By Side Code</h1>

      <nav>
        <ul>
          <li onClick={() => onTabClick('learn')}>How To</li>
          <li onClick={() => onTabClick('compare')}>Compare</li>
          <li onClick={() => onTabClick('practice')}>Practice</li>
        </ul>
      </nav>

      <div>
        {activeTab === 'learn' && <HowTo />}
        {activeTab === 'compare' && <Compare />}
        {activeTab === 'practice' && <Practice />}
      </div>
    </>
  );
}

export default App;
