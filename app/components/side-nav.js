/* globals $ */
import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),

  didInsertElement() {
    $('.button-collapse').sideNav({
      closeOnClick: true
    });
    $('.dropdown-button').dropdown();
  },

  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    }
  }
});
