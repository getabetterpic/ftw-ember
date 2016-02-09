import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var account = this.modelFor('transactions');
    var queryHash = {account_id: account.get('id')};
    return Ember.RSVP.hash({
      transactions: this.store.find('transaction', queryHash),
      account: account
    });
  }
});
