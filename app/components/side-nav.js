/* globals $ */
import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    $('.button-collapse').sideNav({
      closeOnClick: true
    });
    $('.dropdown-button').dropdown();
    this._super.apply(this, arguments);
  }
});
