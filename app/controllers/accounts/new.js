import Ember from 'ember';

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
    goToAccounts() {
      this.transitionToRoute('accounts');
    }
  }
});
