import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('basic-info');
  this.route('timeline');
  this.route('song-selections');
});

export default Router;
