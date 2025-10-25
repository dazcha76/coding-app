export const reactSyntax = {
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
