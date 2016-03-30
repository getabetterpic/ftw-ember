import DS from 'ember-data';

let Account = DS.Model.extend({
  description: DS.attr('string'),
  availableBalance: DS.attr('number'),
  currentBalance: DS.attr('number'),
  transactions: DS.hasMany('transaction', { async: true }),
  username: DS.attr('string'),
  password: DS.attr('string'),
  bankCode: DS.attr('string'),
  howMuchLeft: DS.attr('number')
});

Account.reopenClass({
  FIXTURES: [
    {
      id: 1,
      description: 'Checking',
      balance: 1000000.00
    },
    {
      id: 2,
      description: 'Savings',
      balance: 1000.00
    }
  ]
});

export default Account;
