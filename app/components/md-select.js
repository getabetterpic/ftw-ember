/* globals $ */
import Ember from 'ember';

export default Ember.Component.extend({
  financialInstitutions: null,

  didInsertElement() {
    let self = this;

    let institutions = this.get('store').findAll('institution');
    institutions.then(function(data) {
      self.set('financialInstitutions', data);
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
