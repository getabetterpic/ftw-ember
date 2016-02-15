import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('accounts', function() {
    this.route('show', {path: '/:account_id'}, function() {
      this.route('transactions', { resetNamespace: true }, function() {
        this.route('show', {path: '/:transaction_id'});
        this.route('new');
      });
    });
    this.route('new', function() {
      this.route('verify');
    });
  });
  this.route('login');
  this.route('signup');
});

export default Router;
