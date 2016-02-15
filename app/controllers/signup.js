/* globals Materialize */
import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  actions: {
    signup() {
      this.set('hasError', false);
      const self = this;
      const email = this.get('identification');
      if (Ember.isEmpty(email)) {
        Materialize.toast("Email can't be blank", 4000);
        this.set('hasError', true);
      }
      const password = this.get('password');
      const passwordConfirmation = this.get('passwordConfirmation');
      if (password !== passwordConfirmation) {
        Materialize.toast("Passwords do not match", 4000);
        this.set('hasError', true);
      }
      if (!this.get('hasError')) {
        let person = this.store.createRecord('person', {
          email: email,
          password: password,
          password_confirmation: password
        });
        person.save().then(function() {
          self.get('session').authenticate('authenticator:devise', email, password);
          self.store.unloadAll('person');
          self.transitionToRoute('accounts');
        });
      }
    }
  }
});
