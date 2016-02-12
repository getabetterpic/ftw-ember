import Ember from 'ember';
import DS from 'ember-data';

const { inject } = Ember;

export default DS.JSONAPIAdapter.extend({
  shouldReloadAll() {
    return true;
  }
});
