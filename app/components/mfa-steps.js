/* globals $ */
import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Component.extend({
  mfaQuestions: null,
  accessToken: null,

  actions: {
    sendMfa() {
      let self = this, account;
      let answer = this.get('answer');
      console.log(answer);
      console.log(this.get('accessToken'));
      const data = {
        mfa: answer,
        access_token: this.get('accessToken')
      };

      this.get('session').authorize('authorizer:devise', function(headerName, headerContent) {
        account = DS.PromiseObject.create({
          promise: $.ajax({
            method: 'POST',
            url: '/accounts/mfa',
            data: data,
            headers: {
              'Authorization': headerContent
            }
          })
        });
      });

      account.then(function(data) {
        if (data.pending_mfa_questions) {
          self.sendAction('mfaStep', data.pending_mfa_questions, data.access_token);
        } else {
          self.sendAction('goToAccounts', data);
        }
      });
    }
  }
});
