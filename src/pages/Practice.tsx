import { useState, type ChangeEvent } from 'react';
import {
  SandpackProvider,
  SandpackLayout,
  SandpackFileExplorer,
  SandpackCodeEditor,
  SandpackPreview,
  SandpackConsole,
} from '@codesandbox/sandpack-react';
import { aquaBlue } from '@codesandbox/sandpack-themes';
import { javaScriptChallenges } from '../data/javaScript/javaScriptChallenges';
import { angularChallenges } from '../data/angular/angularChallenges';
import { reactChallenges } from '../data/react/reactChallenges';
import { htmlChallenges } from '../data/htmlChallenges';
import type { ChallengeDetails, Challenges, Template } from '../types';

const exerciseMap = {
  angular: angularChallenges,
  react: reactChallenges,
  static: htmlChallenges,
  vanilla: javaScriptChallenges,
};

export default function Practice() {
  const [language, setLanguage] = useState<Template>('vanilla');
  const [challengeSet, setChallengeSet] =
    useState<Challenges>(javaScriptChallenges);
  const [challenge, setChallenge] = useState<ChallengeDetails>();
  const [feature, setFeature] = useState<string>();

  const files = {};

  const handleLanguageSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value as Template);
    setChallengeSet(exerciseMap[event.target.value as Template]);
  };

  const handleChallengeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setFeature(event.target.value);
    setChallenge(challengeSet[event.target.value]);
  };

  const handleGetChallenge = () => {
    const challenges = exerciseMap[language];
    const keys = Object.keys(challenges);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    setFeature(randomKey);
    setChallenge(challenges[randomKey]);
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
        {Object.keys(challengeSet).map((key) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>

      <button onClick={handleGetChallenge}>Surprise me!</button>

      {feature && <h3>{feature}</h3>}

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
        <SandpackConsole />
      </SandpackProvider>
    </>
  );
}
