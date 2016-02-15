/* globals $ */
import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Component.extend({
  financialInstitutions: null,

  didInsertElement() {
    let self = this;

    let fis = DS.PromiseObject.create({
      promise: $.ajax('/institutions')
    });
    fis.then(function() {
      self.set('financialInstitutions', fis.get('content'));
      Ember.run.next(function() {
        $('select').material_select();
      });
    });
  },

  actions: {
    bankSelected(bank) {
      this.sendAction('bankSelected', bank);
    }
  }
});
