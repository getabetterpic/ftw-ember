import Ember from 'ember';

export default Ember.Controller.extend({
  financialInsitutions: [
    {
      id: '1',
      value: 'Bank of America'
    }
  ],

  actions: {
    saveAccount() {
      var self = this;
      const bank = this.get('bank');
      const username = this.get('username');
      const password = this.get('password');
      // let account = this.store.createRecord('account', {
      //   username: username,
      //   password: password,
      //   bank: bank
      // });
      // account.save().then(function(data) {
      //   console.log(data);
      // }).catch(function(error) {
      //   console.log(error);
      // });
    },
    bankSelected(bank) {
      this.set('bank', bank);
      console.log(this.get('bank'));
    }
  }
});
