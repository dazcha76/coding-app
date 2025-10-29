import { useState, type ChangeEvent } from 'react';
import {
  SandpackProvider,
  SandpackLayout,
  SandpackFileExplorer,
  SandpackCodeEditor,
  SandpackPreview,
} from '@codesandbox/sandpack-react';
import { aquaBlue } from '@codesandbox/sandpack-themes';
import { javaScriptChallenges } from '../data/javaScriptChallenges';
import { angularChallenges } from '../data/angularChallenges';
import { reactChallenges } from '../data/reactChallenges';
import { htmlChallenges } from '../data/htmlChallenges';
import type { Challenge, Template } from '../types';

const exerciseMap = {
  angular: angularChallenges,
  react: reactChallenges,
  static: htmlChallenges,
  vanilla: javaScriptChallenges,
};

export default function Practice() {
  const [language, setLanguage] = useState<Template>('vanilla');
  const [challenge, setChallenge] = useState<Challenge>();

  const files = {};

  const handleLanguageSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value as Template);
  };

  const handleGetChallenge = () => {
    const challenges = exerciseMap[language];
    const randomIndex = Math.floor(Math.random() * challenges.length);
    setChallenge(challenges[randomIndex]);
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

      <button onClick={handleGetChallenge}>Surprise me!</button>

      {challenge && (
        <>
          <p>{challenge.instruction}</p>
          {challenge.hint && <p>{challenge.hint}</p>}
          <p>let myArray = {challenge.exampleArray}</p>
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
