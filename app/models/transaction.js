import DS from 'ember-data';

let Transaction = DS.Model.extend({
  description: DS.attr('string'),
  amount: DS.attr('number'),
  authorizedDate: DS.attr('date'),
  postedDate: DS.attr('date'),
  account: DS.belongsTo('account', { async: true })
});

Transaction.reopenClass({
  FIXTURES: [
    {
      id: 1,
      account_id: 1,
      description: 'Food',
      amount: 12.34,
      postedDate: '2016-02-06'
    },
    {
      id: 2,
      account_id: 1,
      description: 'Gas',
      amount: 56.78,
      postedDate: '2016-02-07'
    },
    {
      id: 3,
      account_id: 2,
      description: 'Electricity',
      amount: 54.32,
      postedDate: '2016-02-06'
    }
  ]
});

export default Transaction;
