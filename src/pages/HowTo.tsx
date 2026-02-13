import { useState, type ChangeEvent } from 'react';
import Card from '../components/Card';
import { reactSyntax } from '../data/react/reactSyntax';
import type { Language } from '../types';

export default function HowTo() {
  const [language, setLanguage] = useState<Language>();

  const handleLanguageSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value as Language);
  };

  return (
    <>
      <h2>How To</h2>

      <label htmlFor="language">Choose a language:</label>
      <select id="language" value={language} onChange={handleLanguageSelect}>
        <option value=""></option>
        <option value="Angular">Angular</option>
        <option value="Flutter">Flutter</option>
        <option value="JavaScript">JavaScript</option>
        <option value="React">React</option>
      </select>

      <h3>Exporting and Importing Files</h3>
      <div className="two-columns">
        <div>
          <Card
            title={reactSyntax.exports.default.title}
            code={reactSyntax.exports.default.code}
          />
        </div>
        <div>
          <Card
            title={reactSyntax.exports.named.title}
            code={reactSyntax.exports.named.code}
          />
        </div>
      </div>
    </>
  );
}
