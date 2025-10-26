export const reactSyntax = {
  clickEvents: {
    step1: '<button onClick={handleClick}>Click me</button>',
    step2: '',
    step3: '',
  },
  exports: {
    default: {
      title: 'Default Export',
      code: `
export default function Header() {
  return (
    <h1>Hello World!</h1>
  )
}

import Header from 'Header.js';

<Header />
      `,
    },
    named: {
      title: 'Named Export',
      code: `
export function Header() {
  return (
      <h1>Hello World!</h1>
  )
}

import { Header } from 'Header.js';

<Header />
      `,
    },
  },
};
