export type Challenges<T extends string = string> = Record<T, ChallengeDetails>;

export type ChallengeDetails = {
  instruction: string;
  hint?: string;
  exampleArray: string;
};

export type Languages =
  | 'Angular'
  | 'Flutter'
  | 'Javascript'
  | 'React'
  | undefined;

export type Template = 'angular' | 'react' | 'static' | 'vanilla';
