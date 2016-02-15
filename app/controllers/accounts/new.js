/* globals $ */
import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  newAccount: true,
  mfaQuestions: null,
  accessToken: null,

  actions: {
    mfaStep(pendingMfaQuestions, accessToken) {
      this.setProperties({
        newAccount: false,
        mfaQuestions: pendingMfaQuestions,
        accessToken: accessToken
      });
    },
    goToAccounts(data) {
      console.log("goToAccounts called in accounts.new controller");
      this.transitionToRoute('accounts');
    }
  }
});
