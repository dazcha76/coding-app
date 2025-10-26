import { useState } from 'react';
import Compare from './pages/Compare';
import Learn from './pages/Learn';
import Practice from './pages/Practice';

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
          <li onClick={() => onTabClick('learn')}>Learn</li>
          <li onClick={() => onTabClick('compare')}>Compare</li>
          <li onClick={() => onTabClick('practice')}>Practice</li>
        </ul>
      </nav>

      <div>
        {activeTab === 'learn' && <Learn />}
        {activeTab === 'compare' && <Compare />}
        {activeTab === 'practice' && <Practice />}
      </div>
    </>
  );
}

export default App;
