/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ftw-ember',
    environment: environment,
    firebase: 'https://YOUR-FIREBASE-NAME.firebaseio.com/',
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    contentSecurityPolicy: {
      'script-src': "'self' https://use.typekit.net https://*.firebaseio.com",
      'img-src': "'self' https://p.typekit.net",
      'font-src': "'self' data:",
      'connect-src': "'self' https://localhost:3000 wss://*.firebaseio.com",
      'style-src': "'self' http://10.0.1.21:4200 https://use.typekit.net",
      'default-src': "'self' https://*.firebaseio.com"
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    'ember-simple-auth': {
      routeAfterAuthentication: 'accounts',
      routeIfAlreadyAuthenticated: 'accounts'
    },

    'ember-plaid': {
      clientName: 'FTW',
      product: 'connect',
      key: '53c4532d4f6ae714ba8cc2aaf10769',
      env: 'tartan',
      longTail: true
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.APP.host = 'https://localhost:3000';
    ENV['ember-simple-auth'].baseURL = 'https://localhost:3000';
    ENV['simple-auth-devise'] = {
      serverTokenEndpoint: ENV.APP.host + '/users/sign_in'
    }
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.APP.host = 'https://ftw-rails.fortunetellerwealth.com';
  }

  return ENV;
};
