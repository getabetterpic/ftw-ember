/* globals $ */
import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    signup() {
      const self = this;
      const email = this.get('identification');
      if (Ember.empty(email)) {
        $('identification').data('error', 'Email can\'t be blank');
        return;
      }
      const password = this.get('password');
      const passwordConfirmation = this.get('passwordConfirmation');
      if (password !== passwordConfirmation) {
        $('password-confirmation').data('error', 'Confirmation must match password');
        return;
      } else {
        let person = this.store.createRecord('person', {
          email: email,
          password: password,
          passwordConfirmation: password
        });
        person.save().then(function() {
          self.transitionToRoute('accounts');
        });
      }
    }
  }
});
