export const angularSignals = {
  variables: {
    declare: "userName = signal('Danika)",
    // use: {
    //   let: 'this.userName',
    //   const: 'this.userName',
    // },
    update: `this.userName.set('Bob)`,
    displaying: {
      text: {
        name: 'Data Binding',
        code: {
          ts: "userName = signal('Danika')",
          html: `<div>{{ userName }}<div>`,
        },
      },
      attributes: {
        name: 'Property Binding',
        code: {
          ts: "userName = signal('Danika')",
          html: `<img [src]="'assets/users/' + userName()" [alt]="userName()"/>`,
        },
      },
      inputs: {
        name: 'Two-Way Binding',
        code: {
          ts: "userName = signal('Danika')",
          html: `<input type="text" id="name" name="name" [(ngModel)]="userName" />`,
        },
      },
      events: {
        name: 'Event Binding',
        code: {
          ts: ``,
          html: ``,
        },
      },
    },
  },
};
