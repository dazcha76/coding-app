import { debugging } from '../data/debugging';
import {
  SandpackProvider,
  SandpackLayout,
  SandpackFileExplorer,
  SandpackCodeEditor,
  SandpackPreview,
} from '@codesandbox/sandpack-react';
import { aquaBlue } from '@codesandbox/sandpack-themes';
import { useState, type ChangeEvent } from 'react';
import type { Challenge, Template } from '../types';

export default function Practice() {
  const [language, setLanguage] = useState<Template>('vanilla');
  const [challenge, setChallenge] = useState<Challenge>(null);

  const files = {};

  const handleLanguageSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value as Template);
  };

  const handleGetChallenge = () => {
    const randomIndex = Math.floor(Math.random() * (debugging.length - 1));
    setChallenge(debugging[randomIndex]);
  };

  return (
    <>
      <h2>Practice</h2>

      <label htmlFor="language">Choose a language:</label>
      <select id="language" value={language} onChange={handleLanguageSelect}>
        <option value="static">HTML & CSS</option>
        <option value="angular">Angular</option>
        <option value="react">React</option>
        <option value="vanilla">JavaScript</option>
      </select>

      <button onClick={handleGetChallenge}>Get a challenge</button>

      {challenge && (
        <>
          <p>{challenge.instruction}</p>
          {challenge.hint && <p>{challenge.hint}</p>}
        </>
      )}

      <SandpackProvider files={files} theme={aquaBlue} template={language}>
        <SandpackLayout>
          <SandpackFileExplorer />
          <SandpackCodeEditor closableTabs showTabs />
          <SandpackPreview />
        </SandpackLayout>
      </SandpackProvider>
    </>
  );
}
