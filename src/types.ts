// A generic Challenge type where keys can be any string (like "map", "reduce", "flatMap", etc.)
export type Challenge<T extends string = string> = Record<T, ChallengeDetails>;

// Each individual challenge
export interface ChallengeDetails {
  instruction: string;
  hint?: string;
  exampleArray: string;
}

export type Template = 'angular' | 'react' | 'static' | 'vanilla';
