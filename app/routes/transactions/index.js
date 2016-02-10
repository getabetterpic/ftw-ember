import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var account = this.modelFor('transactions');
    var transactions = account.get('transactions');
    return Ember.RSVP.hash({
      transactions: transactions,
      account: account
    });
  }
});
