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
import type { ChallengeDetails, Template } from '../types';

const exerciseMap = {
  angular: angularChallenges,
  react: reactChallenges,
  static: htmlChallenges,
  vanilla: javaScriptChallenges,
};

export default function Practice() {
  const [language, setLanguage] = useState<Template>('vanilla');
  const [challenge, setChallenge] = useState<ChallengeDetails>();
  const [feature, setFeature] = useState<string>();

  const files = {};

  const handleLanguageSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value as Template);
  };

  const handleChallengeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    const challenges = exerciseMap[language];
    setFeature(event.target.value);
    setChallenge(challenges[0][event.target.value]);
  };

  const handleGetChallenge = () => {
    const challenges = exerciseMap[language];
    const keys = Object.keys(challenges[0]);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    setChallenge(challenges[0][randomKey]);
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

      <label htmlFor="challenge">Choose a challenge:</label>
      <select id="challenge" value={feature} onChange={handleChallengeSelect}>
        <option value=""></option>
        <option value="forEach">forEach()</option>
        <option value="map">map()</option>
        <option value="filter">filter()</option>
        <option value="find">find()</option>
        <option value="every">every()</option>
        <option value="some">some()</option>
        <option value="reduce">reduce()</option>
      </select>

      <button onClick={handleGetChallenge}>Surprise me!</button>

      {challenge && (
        <>
          <p>{challenge.instruction}</p>
          {challenge.hint && <p>{challenge.hint}</p>}
          <p>const myArray = {challenge.exampleArray}</p>
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
