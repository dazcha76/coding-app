import { useState } from 'react';
import { reactSyntax } from '../data/react/reactSyntax';
import type { Language } from '../types';
import Icon from '../components/Icon';
import Dropdown from 'react-bootstrap/Dropdown';
import { angularSyntax } from '../data/angular/angularSyntax';

export default function Compare() {
  const [language, setLanguage] = useState<Language>();
  const [targetLanguage, setTargetLanguage] = useState<Language>();

  const handleLanguageSelect = (key: string | null) => {
    if (!key) return;
    setLanguage(key as Language);
  };

  const handleTargetLanguageSelect = (key: string | null) => {
    if (!key) return;
    setTargetLanguage(key as Language);
  };

  return (
    <>
      <h2>Compare</h2>

      <div className="two-columns">
        <div>
          <label>From framework:</label>
          <Dropdown
            onSelect={(selectedKey) => handleLanguageSelect(selectedKey)}
          >
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              {language || '\u00A0'}{' '}
              {/* '\u00A0': no break space so button doesn't collapse if no language */}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey="Angular">Angular</Dropdown.Item>
              <Dropdown.Item eventKey="Flutter">Flutter</Dropdown.Item>
              <Dropdown.Item eventKey="JavaScript">JavaScript</Dropdown.Item>
              <Dropdown.Item eventKey="React">React</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div>
          <label>To framework:</label>
          <Dropdown
            onSelect={(selectedKey) => handleTargetLanguageSelect(selectedKey)}
          >
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              {targetLanguage || '\u00A0'}{' '}
              {/* '\u00A0': no break space so button doesn't collapse if no language */}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey="Angular">Angular</Dropdown.Item>
              <Dropdown.Item eventKey="Flutter">Flutter</Dropdown.Item>
              <Dropdown.Item eventKey="JavaScript">JavaScript</Dropdown.Item>
              <Dropdown.Item eventKey="React">React</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      <h3>
        {language} vs. {targetLanguage}
      </h3>

      <div className="two-columns">
        <div>
          <div className="framework">
            {language && <Icon language={language} />}
            <h3>{language}</h3>
          </div>

          <p>html</p>
          <code>{angularSyntax.variables.usage.events.code.html}</code>
        </div>

        <div>
          <div className="framework">
            {targetLanguage && <Icon language={targetLanguage} />}
            <h3>{targetLanguage}</h3>
          </div>

          <p>jsx</p>
          <code>{reactSyntax.clickEvents.step1}</code>
        </div>
      </div>
    </>
  );
}
