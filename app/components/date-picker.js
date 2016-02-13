/* globals $ */

import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    $('.datepicker').pickadate({
      selectYears: 4,
      format: 'mmm d yyyy',
      closeOnSelect: true,
      closeOnClear: true,
    });
    this._super.apply(this, arguments);
  }
});
