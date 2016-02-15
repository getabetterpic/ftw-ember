import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('mfa-steps', 'Integration | Component | mfa steps', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{mfa-steps}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#mfa-steps}}
      template block text
    {{/mfa-steps}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
