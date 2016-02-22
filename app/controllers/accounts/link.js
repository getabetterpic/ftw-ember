import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  actions: {
    processPlaidToken(publicToken) {
      var self = this, accounts;
      this.get('session').authorize('authorizer:devise', function(headerName, headerContent) {
        accounts = DS.PromiseObject.create({
          promise: $.ajax({
            method: 'POST',
            url: '/accounts/link',
            data: {public_token: publicToken},
            headers: {
              'Authorization': headerContent
            }
          })
        });
      });

      accounts.then(function() {
        self.transitionToRoute('accounts');
      })
    }
  }
});
