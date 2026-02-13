export const angularSyntax = {
  setup: [
    'Install npm and node: visit https://nodejs.org/en/download and download the LTS version',
    'Install the Angular CLI by running npm install -g @angular/cli in your terminal',
  ],
  vsc: [
    "'Angular Language Service' by angular.io",
    "'Angular Essentials' by John Papa",
  ],
  debugging:
    'Angular DevTools (https://chromewebstore.google.com/detail/angular-devtools/ienfalfjdbdpebioblfackkekamfmbnh?hl=en-US&utm_source=ext_sidebar)',
  commands: {
    createApp: 'ng new my-first-app',
    createComponent: {
      full: 'ng generate component user',
      short: 'ng g c user',
      noTest: 'ng g c user –skip-tests',
      path: 'ng g c users/user',
    },
    install: 'npm install',
    run: 'npm start',
  },
  components: {
    naming:
      "App names should be at least 2 words separated by a dash so they don't clash with built-in elements",
    name: 'app-header',
    use: '<app-header />',
    skeleton: {
      module: `
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
  styleUrl: './header.component.css'
})
  
export class HeaderComponent {}
`,
      standAlone: `
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html'
  styleUrl: './header.component.css',
  imports: []
})
  
export class HeaderComponent {}
`,
    },
  },
  templates: {
    inline: "template: '<h1>Hello World!</h1>'",
    external: "templateUrl: './header.component.html'",
  },
  styles: {
    inline: "styles: ['h1 { color: red }']",
    external: {
      single: "styleUrl: './header.component.css'",
      multiple:
        "styleUrls: ['./header.component.css', './header.component.css']",
    },
  },
  variables: {
    declare: {
      let: "let userName = 'Danika'",
      const: "const userName = 'Danika'",
    },
    use: {
      let: 'this.userName',
      const: 'this.userName',
    },
    update: {
      let: "this.userName = 'Bob'",
      const: 'n/a',
    },
    usage: {
      text: {
        name: 'Data Binding',
        code: {
          ts: "userName = ''",
          html: '<div>{{ userName }}<div>',
        },
      },
      attributes: {
        name: 'Property Binding',
        code: {
          ts: "userName = ''",
          html: `<img [src]="'assets/users/' + userName" [alt]="userName"/>`,
        },
      },
      inputs: {
        name: 'Two-Way Binding',
        code: {
          ts: "userName = ''",
          html: `<input type="text" id="name" name="name" [(ngModel)]="userName" />`,
        },
      },
      events: {
        name: 'Event Binding',
        code: {
          ts: `
onSelectUser() {
   console.log('Click!');
}
`,
          html: `<button (click)=”onSelectUser()”>Click me</button>`,
        },
      },
    },
  },
  images: {
    hardCoded: `<img src="assets/my-logo.png" alt="my logo">`,
    dynamic: `<img [src]="'assets/users/' + user.image" [alt]="user.name"/>`,
    path: {
      assets: `<img src="assets/my-logo.png" alt="my logo">`,
      public: `<img src="my-logo.png" alt="my logo">`,
    },
  },
};
