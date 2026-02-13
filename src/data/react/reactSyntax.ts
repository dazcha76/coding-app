export const reactSyntax = {
  setup: [],
  vsc: [],
  debugging:
    'React Developer Tools (https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en-US&utm_source=ext_sidebar)',
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
  variables: {
    usage: {
      text: {
        name: '',
        code: '<p>{ name }</p>',
      },
      events: {
        name: '',
        code: '<button onClick={onSelectUser}>Click me</button>',
      },
    },
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
