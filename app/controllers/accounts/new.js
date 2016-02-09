import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveAccount() {
      var self = this;
      console.log(this);
      const description = this.get('description');
      const balance = this.get('balance');
      console.log("Description: " + description);
      console.log("Balance: " + balance);
      let account = this.store.createRecord('account', {
        description: description,
        balance: balance
      });
      account.save().then(function(account) {
        console.log(account);
        self.transitionToRoute('transactions', account);
      }).catch(function(error) {
        console.log(error);
      });
    }
  }
});
