import DS from 'ember-data';

let Account = DS.Model.extend({
  description: DS.attr('string'),
  balance: DS.attr('number'),
  transactions: DS.hasMany('transaction', { async: true })
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
