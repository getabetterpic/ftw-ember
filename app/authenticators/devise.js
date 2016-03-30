import Devise from 'ember-simple-auth/authenticators/devise';
import ENV from 'ftw-ember/config/environment';

export default Devise.extend({
  serverTokenEndpoint: ENV['simple-auth-devise'].serverTokenEndpoint
});
