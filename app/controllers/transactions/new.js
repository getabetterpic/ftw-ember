/* globals moment */
import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveTransaction() {
      let self = this;
      let date = this.get('postedDate');
      date = moment(date, 'MMM D YYYY').toDate();
      let account = this.get('model.account');
      let transaction = this.store.createRecord('transaction', {
        description: this.get('description'),
        amount: this.get('amount'),
        postedDate: date,
        account: account
      });
      transaction.save().then(function() {
        self.transitionToRoute('transactions', account);
      });
    }
  }
});
