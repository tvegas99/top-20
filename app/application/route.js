import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    transitionTo(route){
      this.transitionTo(route);
      // alert("you want to go to " + route);
    }
  }
});
