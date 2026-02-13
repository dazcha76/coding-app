import { useState, type ChangeEvent } from 'react';
import { javaScriptSyntax } from '../data/javaScript/javaScriptSyntax';
import { reactSyntax } from '../data/react/reactSyntax';
import type { Languages } from '../types';

export default function Compare() {
  const [language, setLanguage] = useState<Languages>(undefined);
  const [targetLanguage, setTargetLanguage] = useState<Languages>(undefined);

  const handleLanguageSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value as Languages);
  };

  const handleTargetLanguageSelect = (
    event: ChangeEvent<HTMLSelectElement>,
  ) => {
    setTargetLanguage(event.target.value as Languages);
  };

  return (
    <>
      <h2>Compare</h2>

      <div className="two-columns">
        <div>
          <label htmlFor="language">I know:</label>
          <select
            id="language"
            value={language}
            onChange={handleLanguageSelect}
          >
            <option value=""></option>
            <option value="Angular">Angular</option>
            <option value="Flutter">Flutter</option>
            <option value="JavaScript">JavaScript</option>
            <option value="React">React</option>
          </select>
        </div>

        <div>
          <label htmlFor="targetLanguage">I'm using:</label>
          <select
            id="targetLanguage"
            value={targetLanguage}
            onChange={handleTargetLanguageSelect}
          >
            <option value=""></option>
            <option value="Angular">Angular</option>
            <option value="Flutter">Flutter</option>
            <option value="JavaScript">JavaScript</option>
            <option value="React">React</option>
          </select>
        </div>
      </div>

      <h3>Click events in JavaScript vs. React</h3>

      <div className="two-columns">
        <div>
          <h3>JavaScript</h3>
          <p>html</p>
          <code>{javaScriptSyntax.clickEvents.step1}</code>
          <p>js</p>
          <code>{javaScriptSyntax.clickEvents.step2}</code>
          <br />
          <code>{javaScriptSyntax.clickEvents.step3}</code>
        </div>

        <div>
          <h3>React</h3>
          <p>jsx</p>
          <code>{reactSyntax.clickEvents.step1}</code>
        </div>
      </div>
    </>
  );
}
