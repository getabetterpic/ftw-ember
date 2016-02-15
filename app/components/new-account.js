import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAccount() {
      var self = this, account;
      const bankCode = this.get('bankCode');
      const username = this.get('username');
      const password = this.get('password');
      const data = {
        username: username,
        password: password,
        bankCode: bankCode
      };

      this.get('session').authorize('authorizer:devise', function(headerName, headerContent) {
        account = DS.PromiseObject.create({
          promise: $.ajax({
            method: 'POST',
            url: '/accounts',
            data: data,
            headers: {
              'Authorization': headerContent
            }
          })
        });
      });

      account.then(function(data) {
        if (data.api_res === "Requires further authentication" && data.pending_mfa_questions.mfa) {
          console.log("Sending action...");
          self.sendAction('newAccountFalse', data.pending_mfa_questions);
        }
      });
    },

    bankSelected(bankCode) {
      this.set('bankCode', bankCode);
    }
  }
});
