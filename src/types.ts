export type Challenge = {
  instruction: string;
  hint?: string;
  exampleArray: string;
};

export type Template = 'angular' | 'react' | 'static' | 'vanilla';
