import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var account = this.modelFor('transactions');
    return Ember.RSVP.hash({
      account: account
    });
  }
});
