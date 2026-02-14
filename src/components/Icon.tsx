import type { Language } from '../types';

type IconProps = {
  language: Language;
};

export default function Icon({ language }: IconProps) {
  const languageMap: Record<Language, string> = {
    angular: 'angular/angular-original.svg',
    react: 'react/react-original.svg',
    javascript: 'javascript/javascript-original.svg',
    flutter: 'flutter/flutter-original.svg',
  };

  return (
    <img
      src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${languageMap[language.toLowerCase()]}`}
      width="50"
    />
  );
}
