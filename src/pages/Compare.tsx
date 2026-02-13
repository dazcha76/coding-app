import { useState, type ChangeEvent } from 'react';
import { javaScriptSyntax } from '../data/javaScript/javaScriptSyntax';
import { reactSyntax } from '../data/react/reactSyntax';
import type { Language } from '../types';
import Icon from '../components/Icon';

export default function Compare() {
  const [language, setLanguage] = useState<Language>();
  const [targetLanguage, setTargetLanguage] = useState<Language>();

  const handleLanguageSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value as Language);
  };

  const handleTargetLanguageSelect = (
    event: ChangeEvent<HTMLSelectElement>,
  ) => {
    setTargetLanguage(event.target.value as Language);
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
            <option value="angular">Angular</option>
            <option value="flutter">Flutter</option>
            <option value="javascript">JavaScript</option>
            <option value="react">React</option>
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
            <option value="angular">Angular</option>
            <option value="flutter">Flutter</option>
            <option value="javascript">JavaScript</option>
            <option value="react">React</option>
          </select>
        </div>
      </div>

      <h3>Click events in JavaScript vs. React</h3>

      <div className="two-columns">
        <div>
          {language && <Icon language={language} />}
          <h3>JavaScript</h3>
          <p>html</p>
          <code>{javaScriptSyntax.clickEvents.step1}</code>
          <p>js</p>
          <code>{javaScriptSyntax.clickEvents.step2}</code>
          <br />
          <code>{javaScriptSyntax.clickEvents.step3}</code>
        </div>

        <div>
          {targetLanguage && <Icon language={targetLanguage} />}
          <h3>React</h3>
          <p>jsx</p>
          <code>{reactSyntax.clickEvents.step1}</code>
        </div>
      </div>
    </>
  );
}
