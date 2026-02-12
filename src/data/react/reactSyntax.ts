export const reactSyntax = {
  commands: {
    // createApp: 'ng new my-first-app',
    // createComponent: {
    //   full: 'ng generate component user',
    //   short: 'ng g c user',
    //   noTest: 'ng g c user –skip-tests',
    //   path: 'ng g c users/user',
    // },
    // install: 'npm install',
    run: 'npm run dev',
  },
  clickEvents: {
    step1: '<button onClick={handleClick}>Click me</button>',
    step2: '',
    step3: '',
  },
  displayingVariables: '<p>{ name }</p>',
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
