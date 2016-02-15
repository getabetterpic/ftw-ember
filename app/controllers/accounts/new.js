/* globals $ */
import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  newAccount: true,
  mfaQuestions: null,

  actions: {
    newAccountFalse(pending_mfa_questions) {
      console.log("newAccountFalse called");
      this.set('newAccount', false);
      this.set('mfaQuestions', pending_mfa_questions);
    }
  }
});
