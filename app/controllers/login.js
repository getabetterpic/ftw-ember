import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  actions: {
    authenticate: function() {
      var authenticator = 'authenticator:devise';

      this.get('session').authenticate(authenticator, this.get('identification'), this.get('password'));
    }
  }
});
